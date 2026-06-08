import * as React from "react"
import { cn } from "../../lib/utils"

export interface BadgeProps {
  key?: React.Key;
  className?: string;
  children?: React.ReactNode;
  variant?: "default" | "secondary" | "destructive" | "outline" | "success" | "warning";
  onClick?: () => void;
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      onClick={props.onClick}
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2",
        {
          "border-transparent bg-slate-900 text-white hover:bg-slate-800": variant === "default",
          "border-transparent bg-sky-100 text-[#0369a1] hover:bg-sky-200": variant === "secondary",
          "border-transparent bg-red-100 text-red-700 hover:bg-red-200": variant === "destructive",
          "text-slate-900 border-slate-200": variant === "outline",
          "border-transparent bg-emerald-100 text-emerald-700": variant === "success",
          "border-transparent bg-amber-100 text-amber-700": variant === "warning",
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
