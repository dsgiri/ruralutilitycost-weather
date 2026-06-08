import * as React from "react";
import { WeatherDay } from "../../types";
import { Card, CardContent } from "../ui/Card";
import { CloudRain, Sun, ThermometerSnowflake, Wind, Cloud } from "lucide-react";
import { cn } from "../../lib/utils";

interface ForecastCardProps {
  key?: React.Key;
  day: WeatherDay;
  isToday?: boolean;
}

const getIcon = (icon: string) => {
  switch (icon) {
    case "Sun": return <Sun className="h-8 w-8 text-amber-500" />;
    case "CloudRain": return <CloudRain className="h-8 w-8 text-sky-500" />;
    case "ThermometerSnowflake": return <ThermometerSnowflake className="h-8 w-8 text-indigo-500" />;
    case "Wind": return <Wind className="h-8 w-8 text-slate-500" />;
    default: return <Cloud className="h-8 w-8 text-slate-400" />;
  }
};

export function ForecastCard({ day, isToday }: ForecastCardProps) {
  const dateObj = new Date(day.date);
  const dayName = isToday ? "Today" : dateObj.toLocaleDateString("en-US", { weekday: "short" });
  const dateStr = dateObj.toLocaleDateString("en-US", { month: "short", day: "numeric" });

  return (
    <Card className={cn(
      "flex flex-col h-full overflow-hidden transition-all",
      isToday ? "border-[#0369a1] shadow-md ring-1 ring-[#0369a1]/20" : ""
    )}>
      {isToday && (
        <div className="bg-[#0369a1] text-white text-[10px] font-bold uppercase tracking-widest text-center py-1">
          Current
        </div>
      )}
      <CardContent className="p-5 flex flex-col items-center flex-1">
        <p className="font-bold text-slate-800">{dayName}</p>
        <p className="text-xs text-slate-500 mb-4 font-medium">{dateStr}</p>
        
        <div className="mb-4">
          {getIcon(day.icon)}
        </div>
        
        <div className="text-center mb-4">
          <p className="text-sm font-bold text-slate-800">{day.conditions}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 w-full text-sm mt-auto border-t border-slate-100 pt-4">
          <div className="flex flex-col items-center">
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">High</span>
            <span className="font-bold text-slate-800">{day.tempHigh}°</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Low</span>
            <span className="font-bold text-slate-800">{day.tempLow}°</span>
          </div>
          <div className="flex flex-col items-center col-span-2 pt-2">
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider flex items-center gap-1">
               Rain
            </span>
            <span className="font-bold">{day.precipProb}%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
