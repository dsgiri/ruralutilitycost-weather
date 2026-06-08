import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded font-bold uppercase tracking-widest transition-colors focus-visible:outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 disabled:pointer-events-none disabled:opacity-50 min-h-[48px] md:min-h-[auto] w-full md:w-auto",
          {
            "bg-slate-900 text-white shadow hover:bg-slate-800 active:bg-slate-950": variant === "default",
            "border border-slate-200 bg-white text-slate-800 hover:bg-slate-100 hover:text-slate-900 active:bg-slate-200": variant === "outline",
            "hover:bg-slate-100 text-slate-800 hover:text-slate-900 active:bg-slate-200": variant === "ghost",
            "text-[#0369a1] underline-offset-4 hover:underline focus:underline": variant === "link",
            "h-12 md:h-9 px-4 py-2 text-xs": size === "default",
            "h-12 md:h-8 rounded px-3 text-[10px]": size === "sm",
            "h-12 md:h-10 rounded px-8 text-sm": size === "lg",
            "h-12 w-12 md:h-9 md:w-9": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
