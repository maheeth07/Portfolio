import React from "react";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name:
    | "javascript"
    | "typescript"
    | "react"
    | "nextjs"
    | "nodejs"
    | "express"
    | "mongodb"
    | "postgresql"
    | "python"
    | "docker"
    | "redis"
    | "langchain"
    | "langgraph"
    | "fastapi"
    | "threejs";
  label?: string;
  className?: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ name, label, className }) => {
  const getBadgeConfig = () => {
    switch (name) {
      case "nodejs":
        return {
          text: label || "Node.js",
          icon: (
            <svg className="w-4 h-4 text-[#539E43]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2zm0 2.3L5 8.3v7.4l7 4 7-4V8.3l-7-4z" />
            </svg>
          ),
          accent: "hover:border-[#539E43]/60",
        };
      case "express":
        return {
          text: label || "Express",
          icon: (
            <span className="w-4 h-4 rounded-sm bg-zinc-800 text-white font-mono font-bold text-[8px] flex items-center justify-center border border-zinc-700">
              ex
            </span>
          ),
          accent: "hover:border-zinc-500",
        };
      case "fastapi":
        return {
          text: label || "FastAPI",
          icon: (
            <span className="w-4 h-4 rounded-sm bg-[#059669] text-white font-bold text-[8px] flex items-center justify-center">
              ⚡
            </span>
          ),
          accent: "hover:border-[#059669]/60",
        };
      case "python":
        return {
          text: label || "Python",
          icon: (
            <span className="w-4 h-4 rounded-sm bg-[#3776AB] text-white font-bold text-[8px] flex items-center justify-center">
              Py
            </span>
          ),
          accent: "hover:border-[#3776AB]/60",
        };
      case "docker":
        return {
          text: label || "Docker",
          icon: (
            <span className="w-4 h-4 rounded-sm bg-[#2496ED] text-white font-bold text-[8px] flex items-center justify-center">
              🐳
            </span>
          ),
          accent: "hover:border-[#2496ED]/60",
        };
      case "redis":
        return {
          text: label || "Redis",
          icon: (
            <span className="w-4 h-4 rounded-sm bg-[#DC382D] text-white font-bold text-[8px] flex items-center justify-center">
              Rd
            </span>
          ),
          accent: "hover:border-[#DC382D]/60",
        };
      case "postgresql":
        return {
          text: label || "PostgreSQL",
          icon: (
            <span className="w-4 h-4 rounded-sm bg-[#336791] text-white font-bold text-[8px] flex items-center justify-center">
              PG
            </span>
          ),
          accent: "hover:border-[#336791]/60",
        };
      case "mongodb":
        return {
          text: label || "MongoDB",
          icon: (
            <svg className="w-3.5 h-4 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1.5C11.5 3 6 8.5 6 14.5c0 3.5 2.5 7 6 8 3.5-1 6-4.5 6-8 0-6-5.5-11.5-6-13zm0 18.5c-2.3-.8-4-3.2-4-5.5 0-3.8 3-7.5 4-9.2 1 1.7 4 5.4 4 9.2 0 2.3-1.7 4.7-4 5.5z" />
            </svg>
          ),
          accent: "hover:border-[#47A248]/60",
        };
      case "langchain":
        return {
          text: label || "LangChain",
          icon: (
            <span className="w-4 h-4 rounded-sm bg-emerald-600 text-white font-bold text-[8px] flex items-center justify-center">
              🦜
            </span>
          ),
          accent: "hover:border-emerald-500/60",
        };
      case "langgraph":
        return {
          text: label || "LangGraph",
          icon: (
            <span className="w-4 h-4 rounded-sm bg-blue-600 text-white font-bold text-[8px] flex items-center justify-center">
              🕸️
            </span>
          ),
          accent: "hover:border-blue-500/60",
        };
      case "javascript":
        return {
          text: label || "Javascript",
          icon: (
            <span className="w-4 h-4 rounded-sm bg-[#F7DF1E] text-black font-extrabold text-[9px] flex items-center justify-center tracking-tighter leading-none shadow-sm">
              JS
            </span>
          ),
          accent: "hover:border-[#F7DF1E]/60",
        };
      case "typescript":
        return {
          text: label || "Typescript",
          icon: (
            <span className="w-4 h-4 rounded-sm bg-[#3178C6] text-white font-extrabold text-[9px] flex items-center justify-center tracking-tighter leading-none shadow-sm">
              TS
            </span>
          ),
          accent: "hover:border-[#3178C6]/60",
        };
      case "react":
        return {
          text: label || "React",
          icon: (
            <svg className="w-4 h-4 text-[#61DAFB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <ellipse cx="12" cy="12" rx="10" ry="4.5" />
              <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
              <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
              <circle cx="12" cy="12" r="1.8" fill="currentColor" />
            </svg>
          ),
          accent: "hover:border-[#61DAFB]/60",
        };
      case "nextjs":
        return {
          text: label || "Next.js",
          icon: (
            <span className="w-4 h-4 rounded-full bg-black text-white dark:bg-white dark:text-black font-black text-[9px] flex items-center justify-center leading-none">
              N
            </span>
          ),
          accent: "hover:border-zinc-400",
        };
      case "threejs":
        return {
          text: label || "Three.js",
          icon: (
            <svg className="w-4 h-4 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 3l9 16H3l9-16z" />
              <path d="M12 3v16" strokeDasharray="2 2" />
            </svg>
          ),
          accent: "hover:border-foreground/50",
        };
      default:
        return {
          text: label || name,
          icon: null,
          accent: "hover:border-border",
        };
    }
  };

  const config = getBadgeConfig();

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs sm:text-[13px] font-medium align-middle transition-all duration-200 cursor-pointer select-none",
        "bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border-zinc-300 dark:bg-zinc-900/90 dark:hover:bg-zinc-800/90 dark:text-zinc-100 dark:border-zinc-800/90 border hover:scale-105 active:scale-95 shadow-sm",
        config.accent,
        className
      )}
    >
      {config.icon}
      <span>{config.text}</span>
    </span>
  );
};
