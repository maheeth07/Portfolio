import { cn } from "@/lib/utils";

interface TrafficLightsProps {
  className?: string;
  /** Static = no hover icons; useful when used decoratively */
  static?: boolean;
}

/** macOS window traffic-light buttons (close / minimize / maximize) */
export const TrafficLights = ({ className }: TrafficLightsProps) => (
  <div className={cn("flex items-center gap-2", className)}>
    <span className="mac-dot bg-mac-red" aria-label="close" />
    <span className="mac-dot bg-mac-yellow" aria-label="minimize" />
    <span className="mac-dot bg-mac-green" aria-label="maximize" />
  </div>
);
