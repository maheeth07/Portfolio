import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const CHAR_SET = " ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:'\",.<>/?";

interface TextFlippingBoardProps {
  text: string;
  className?: string;
  rows?: number;
  cols?: number;
  sound?: boolean;
}

// Gentle Web Audio Solari split-flap click
function playSolariClick() {
  try {
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = (window as any).__solariAudioCtx || new AudioCtx();
    (window as any).__solariAudioCtx = ctx;

    if (ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(140 + Math.random() * 30, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(35, ctx.currentTime + 0.025);

    gain.gain.setValueAtTime(0.015, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.025);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.03);
  } catch (e) {
    // Ignore audio permission/context errors
  }
}

interface SplitFlapTileProps {
  char: string;
  delayMs: number;
  sound?: boolean;
}

const SplitFlapTile: React.FC<SplitFlapTileProps> = ({ char, delayMs, sound = false }) => {
  const [displayedChar, setDisplayedChar] = useState<string>(" ");
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const targetRef = useRef<string>(char);
  targetRef.current = char;

  useEffect(() => {
    if (displayedChar === char) return;

    const timeout = setTimeout(() => {
      // Perform 2-3 mechanical flips before landing on target
      const steps = 3;
      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        setIsFlipping(true);

        if (sound) {
          playSolariClick();
        }

        if (currentStep >= steps) {
          clearInterval(interval);
          setDisplayedChar(targetRef.current);
          setTimeout(() => setIsFlipping(false), 80);
        } else {
          // intermediate random character
          const randIdx = Math.floor(Math.random() * CHAR_SET.length);
          setDisplayedChar(CHAR_SET[randIdx]);
          setTimeout(() => setIsFlipping(false), 50);
        }
      }, 70);

      return () => clearInterval(interval);
    }, delayMs);

    return () => clearTimeout(timeout);
  }, [char, delayMs, sound]);

  // Sanitize character
  const safeChar = displayedChar === " " ? "\u00A0" : displayedChar.toUpperCase();

  return (
    <div
      className={cn(
        "relative select-none flex flex-col items-center justify-center rounded-[3px] overflow-hidden",
        "w-3.5 h-6 min-w-[14px] min-h-[24px]",
        "sm:w-5 sm:h-8 sm:min-w-[20px] sm:min-h-[32px]",
        "md:w-6 md:h-10 md:min-w-[24px] md:min-h-[40px]",
        "lg:w-7 lg:h-11 lg:min-w-[28px] lg:min-h-[44px]",
        "bg-[#131418] border border-zinc-800/90 shadow-md",
        "perspective-[500px]"
      )}
      style={{ perspective: "400px" }}
    >
      {/* Top Flap Half */}
      <div
        className={cn(
          "w-full h-1/2 overflow-hidden flex items-end justify-center",
          "bg-gradient-to-b from-[#22242b] via-[#1a1b21] to-[#14151a]",
          "border-b border-black/90 relative transition-transform duration-75",
          isFlipping && "origin-bottom -rotate-x-45 brightness-125"
        )}
      >
        <span
          className="font-mono font-bold leading-[2] tracking-wider text-zinc-100 text-[11px] sm:text-sm md:text-base lg:text-lg"
          style={{ transform: "translateY(50%)" }}
        >
          {safeChar}
        </span>
        {/* Specular glare shine */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-white/20 pointer-events-none" />
      </div>

      {/* Bottom Flap Half */}
      <div
        className={cn(
          "w-full h-1/2 overflow-hidden flex items-start justify-center",
          "bg-gradient-to-b from-[#111216] via-[#131418] to-[#0e0f12]",
          "relative transition-transform duration-75",
          isFlipping && "origin-top rotate-x-45 brightness-90"
        )}
      >
        <span
          className="font-mono font-bold leading-[0] tracking-wider text-zinc-200 text-[11px] sm:text-sm md:text-base lg:text-lg"
          style={{ transform: "translateY(-50%)" }}
        >
          {safeChar}
        </span>
        {/* Split shadow */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-black/60 pointer-events-none" />
      </div>

      {/* Center split seam & mechanical side pins */}
      <div className="absolute inset-x-0 top-1/2 h-[1px] -translate-y-1/2 bg-black z-10 flex items-center justify-between px-[1px] pointer-events-none">
        <div className="w-[1.5px] h-[3px] bg-zinc-600 rounded-sm -translate-y-[1px]" />
        <div className="w-[1.5px] h-[3px] bg-zinc-600 rounded-sm -translate-y-[1px]" />
      </div>
    </div>
  );
};

export const TextFlippingBoard: React.FC<TextFlippingBoardProps> = ({
  text,
  className,
  rows: explicitRows,
  cols = 24,
  sound = false,
}) => {
  // Format and word wrap lines
  const rawLines = text.split("\n");
  const wrappedLines: string[] = [];

  for (const raw of rawLines) {
    if (raw.length <= cols) {
      wrappedLines.push(raw);
    } else {
      const words = raw.split(" ");
      let current = "";
      for (const word of words) {
        if ((current ? current + " " + word : word).length <= cols) {
          current = current ? current + " " + word : word;
        } else {
          if (current) wrappedLines.push(current);
          current = word;
        }
      }
      if (current) wrappedLines.push(current);
    }
  }

  const rowCount = explicitRows || Math.max(wrappedLines.length, 4);
  const startRow = Math.max(0, Math.floor((rowCount - wrappedLines.length) / 2));

  // Build grid matrix of characters
  const grid: string[][] = [];

  for (let r = 0; r < rowCount; r++) {
    const rowChars: string[] = [];
    if (r >= startRow && r < startRow + wrappedLines.length) {
      const lineText = wrappedLines[r - startRow];
      const padTotal = Math.max(0, cols - lineText.length);
      const padLeft = Math.floor(padTotal / 2);
      const padRight = padTotal - padLeft;
      const centered = " ".repeat(padLeft) + lineText + " ".repeat(padRight);

      for (let c = 0; c < cols; c++) {
        rowChars.push(centered[c] || " ");
      }
    } else {
      for (let c = 0; c < cols; c++) {
        rowChars.push(" ");
      }
    }
    grid.push(rowChars);
  }

  return (
    <div
      className={cn(
        "p-3 sm:p-5 md:p-6 rounded-2xl bg-[#090a0d] border border-zinc-800/90 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center gap-1 sm:gap-1.5 md:gap-2",
        "relative overflow-hidden group",
        className
      )}
    >
      {/* Board housing top indicator plate */}
      <div className="w-full flex items-center justify-between pb-2 mb-1 border-b border-zinc-800/60 text-[10px] font-mono tracking-widest text-zinc-500 uppercase px-1">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Solari Display Unit</span>
        </div>
        <div className="flex items-center gap-1 text-blue-400 font-semibold">
          <span>VESTA-SPLIT // 24x4</span>
        </div>
      </div>

      {/* Grid rows */}
      <div className="flex flex-col gap-1 sm:gap-1.5 md:gap-2 w-full items-center justify-center">
        {grid.map((row, rIdx) => (
          <div key={`row-${rIdx}`} className="flex items-center justify-center gap-0.5 sm:gap-1 md:gap-1.5">
            {row.map((char, cIdx) => (
              <SplitFlapTile
                key={`tile-${rIdx}-${cIdx}`}
                char={char}
                delayMs={(rIdx * 70 + cIdx * 20) % 600}
                sound={sound}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

