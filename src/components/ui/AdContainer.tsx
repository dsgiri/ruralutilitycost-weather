import * as React from "react";
import { cn } from "../../lib/utils";

export interface AdContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  slotId?: string;
  format?: string;
  className?: string;
}

export function AdContainer({ slotId = "DEFAULT_SLOT", format = "auto", className, ...props }: AdContainerProps) {
  React.useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error("AdSense error", err);
    }
  }, []);

  return (
    <div 
      className={cn("my-6 mx-auto min-h-[250px] flex items-center justify-center bg-slate-50 border border-slate-200 rounded overflow-hidden p-2 text-center text-slate-400 text-sm", className)}
      data-ad-status="unfilled"
      {...props}
    >
      <div className="w-full h-full relative">
        <span className="absolute inset-0 flex items-center justify-center opacity-50 uppercase tracking-widest font-bold">Advertisement</span>
        <ins className="adsbygoogle"
             style={{ display: "block", position: "relative", zIndex: 10 }}
             data-ad-client="ca-PUB-YOUR_CLIENT_ID"
             data-ad-slot={slotId}
             data-ad-format={format}
             data-full-width-responsive="true"></ins>
      </div>
    </div>
  );
}
