import { ReactNode } from "react";
import { motion } from "framer-motion";
import { TrafficLights } from "./TrafficLights";
import { cn } from "@/lib/utils";

interface MacWindowProps {
  title?: string;
  /** Optional browser-style tabs */
  tabs?: { label: string; active?: boolean }[];
  /** URL bar text — turns the window into a Safari-like browser */
  url?: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  /** Animate the window opening on mount (scale + fade) */
  animateOpen?: boolean;
}

/**
 * Reusable macOS-style window card.
 * Used as the wrapper for Hero, Projects, Contact, etc.
 */
export const MacWindow = ({
  title,
  tabs,
  url,
  children,
  className,
  bodyClassName,
  animateOpen = false,
}: MacWindowProps) => {
  const content = (
    <div className={cn("mac-window", className)}>
      {/* Header */}
      <div className="mac-header flex-col gap-0 p-0">
        <div className="flex items-center w-full px-4 py-3 gap-4">
          <TrafficLights />
          {title && (
            <span className="flex-1 text-center text-xs font-medium text-muted-foreground truncate">
              {title}
            </span>
          )}
          {/* Spacer to keep title centered */}
          <div className="w-[52px]" aria-hidden />
        </div>

        {/* Browser tabs row (optional) */}
        {tabs && tabs.length > 0 && (
          <div className="flex items-center gap-1 px-3 pb-2 -mt-1 overflow-x-auto">
            {tabs.map((t) => (
              <div
                key={t.label}
                className={cn(
                  "px-3 py-1.5 text-xs rounded-t-md transition-colors",
                  t.active
                    ? "bg-window text-foreground border-t border-x border-window-border"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {t.label}
              </div>
            ))}
          </div>
        )}

        {/* URL bar (optional) */}
        {url && (
          <div className="px-4 pb-3">
            <div className="mono text-xs px-3 py-1.5 rounded-md bg-background/60 border border-border text-muted-foreground">
              {url}
            </div>
          </div>
        )}
      </div>

      {/* Body */}
      <div className={cn("p-6 md:p-8", bodyClassName)}>{children}</div>
    </div>
  );

  if (!animateOpen) return content;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {content}
    </motion.div>
  );
};
