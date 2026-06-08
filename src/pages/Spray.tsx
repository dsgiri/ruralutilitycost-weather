import { MOCK_WEATHER } from "../data/tools";
import { Badge } from "../components/ui/Badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/Card";
import { Wind, ThumbsUp, ThumbsDown, AlertTriangle } from "lucide-react";
import { cn } from "../lib/utils";

export function Spray() {
  const getSpraySuitability = (wind: number, rainProb: number, temp: number) => {
    if (wind > 15 || rainProb > 30 || temp > 85) {
      return { status: "poor", label: "Avoid Spraying", color: "text-red-600", bg: "bg-red-50/50", border: "border-red-200", icon: <ThumbsDown className="h-5 w-5 text-red-600" /> };
    }
    if (wind > 10 || rainProb > 15 || temp > 80) {
      return { status: "marginal", label: "Caution", color: "text-amber-600", bg: "bg-amber-50/50", border: "border-amber-200", icon: <AlertTriangle className="h-5 w-5 text-amber-600" /> };
    }
    return { status: "good", label: "Ideal", color: "text-emerald-600", bg: "bg-emerald-50/50", border: "border-emerald-200", icon: <ThumbsUp className="h-5 w-5 text-emerald-600" /> };
  };

  return (
    <div className="space-y-8">
       <div className="space-y-2">
        <div className="flex items-center gap-3">
          <Wind className="h-8 w-8 text-sky-600" />
          <h1 className="text-3xl font-bold tracking-tight text-slate-800">Spray Timing Checker</h1>
        </div>
        <p className="text-slate-500 max-w-2xl">
          Evaluates wind, rain probability, and temperature to identify safe application windows.
          <strong className="block mt-1 text-sm">Caution: Always consult product labels and local regulations.</strong>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {MOCK_WEATHER.map((day) => {
          const dateObj = new Date(day.date);
          const dayName = dateObj.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
          const suitability = getSpraySuitability(day.windSpeed, day.precipProb, day.tempHigh);

          return (
            <Card key={day.date} className={cn("overflow-hidden", suitability.border)}>
              <div className={cn("px-4 py-2 flex items-center justify-between border-b border-slate-100", suitability.bg)}>
                <span className="font-bold text-slate-800">{dayName}</span>
                <div className="flex items-center gap-1">
                  {suitability.icon}
                  <span className={cn("font-medium text-sm text-slate-800")}>{suitability.label}</span>
                </div>
              </div>
              <CardContent className="p-4 space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Wind</span>
                  <span className={cn("font-bold", day.windSpeed > 10 ? "text-amber-600" : "text-slate-800")}>
                    {day.windSpeed} mph
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Rain Prob.</span>
                  <span className={cn("font-bold", day.precipProb > 20 ? "text-amber-600" : "text-slate-800")}>
                    {day.precipProb}%
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Max Temp</span>
                  <span className={cn("font-bold", day.tempHigh > 85 ? "text-amber-600" : "text-slate-800")}>
                    {day.tempHigh}°
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
