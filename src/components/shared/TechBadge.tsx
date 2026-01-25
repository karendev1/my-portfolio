import { cn } from "@/lib/utils";
import type { ComponentType } from "react";

interface TechBadgeProps {
  name: string;
  icon?: ComponentType<{ className?: string }>;
  className?: string;
}

export function TechBadge({ name, icon: Icon, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium rounded-full",
        "bg-primary/10 text-primary border border-primary/20",
        "transition-all hover:bg-primary/20",
        className
      )}
    >
      {Icon && <Icon className="h-3 w-3" />}
      {name}
    </span>
  );
}
