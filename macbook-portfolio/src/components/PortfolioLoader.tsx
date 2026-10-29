import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, ArrowRight, Sparkles, RefreshCw } from "lucide-react";
import { TextFlippingBoard } from "./ui/text-flipping-board";

const MESSAGES: string[] = [
  "WELCOME TO MY PORTFOLIO \nMY NAME IS \nG.R. MAHEETH VARMA \nFULL STACK DEVELOPER",
  "WELCOME TO \nMY PORTFOLIO",
  "MY NAME IS \nG.R. MAHEETH VARMA",
  "FULL STACK \nDEVELOPER",
];

interface PortfolioLoaderProps {
  onComplete: () => void;
  autoDismissMs?: number;
}

export const PortfolioLoader: React.FC<PortfolioLoaderProps> = ({
  onComplete,
  autoDismissMs = 5200,
}) => {
  const [msgIdx, setMsgIdx] = useState(0);
  const [sound, setSound] = useState(false);
  const [progress, setProgress] = useState(0);

  // Auto-next message timer
  useEffect(() => {
    const id = setInterval(() => {
      setMsgIdx((prev) => (prev + 1) % MESSAGES.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  // Progress bar countdown
  useEffect(() => {
    const intervalTime = 50;
    const step = (intervalTime / autoDismissMs) * 100;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onComplete();
          return 100;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [autoDismissMs, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[9999] bg-[#070709] flex flex-col items-center justify-between py-8 px-4 select-none overflow-hidden"
    >
      {/* Background ambient blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-cyan-500/[0.07] blur-[120px] pointer-events-none rounded-full" />

      {/* Top Header Badge */}
      <div className="relative z-10 w-full max-w-2xl flex items-center justify-between text-xs font-mono text-zinc-400">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
          <span className="text-zinc-300 font-semibold uppercase tracking-wider">
            Maheeth Varma // Portfolio
          </span>
        </div>
        <button
          onClick={() => setSound(!sound)}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
          title={sound ? "Mute flip click" : "Enable mechanical click sound"}
        >
          {sound ? <Volume2 size={13} className="text-blue-400" /> : <VolumeX size={13} />}
          <span>{sound ? "Sound On" : "Sound Muted"}</span>
        </button>
      </div>

      {/* Center Split-Flap Board */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center justify-center my-auto">
        <TextFlippingBoard text={MESSAGES[msgIdx]} sound={sound} />

        {/* Message cycle controls */}
        <div className="flex items-center gap-2 mt-5">
          <button
            onClick={() => setMsgIdx((prev) => (prev + 1) % MESSAGES.length)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-xs font-mono text-zinc-400 hover:text-blue-400 border border-zinc-800/80 hover:border-blue-500/30 transition-all shadow-sm"
          >
            <RefreshCw size={12} className="animate-spin-slow" />
            <span>Cycle Phrase ({msgIdx + 1}/{MESSAGES.length})</span>
          </button>
        </div>
      </div>

      {/* Bottom Progress & Skip CTA */}
      <div className="relative z-10 w-full max-w-md flex flex-col items-center gap-3">
        {/* Progress bar */}
        <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden border border-zinc-800/80">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_12px_rgba(59,130,246,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="w-full flex items-center justify-between text-xs font-mono text-zinc-500">
          <span>Loading Experience...</span>
          <button
            onClick={onComplete}
            className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-blue-400 font-medium hover:underline transition-colors"
          >
            <span>Skip to Portfolio</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
export default PortfolioLoader;

