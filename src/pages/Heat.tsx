import { MOCK_WEATHER } from "../data/tools";
import { Badge } from "../components/ui/Badge";
import { Card, CardContent } from "../components/ui/Card";
import { Droplets, Flame, ShieldAlert, Cloud } from "lucide-react";

export function Heat() {
  const getHeatRisk = (tempHigh: number, humidity: number) => {
    // Very simplified heat index proxy
    const heatIndexProxy = tempHigh + (humidity > 50 ? (humidity - 50) * 0.2 : 0);
    
    if (heatIndexProxy > 95) return { level: "Extreme", desc: "Severe stress risk for livestock and labor. Stop strenuous activity.", color: "bg-red-600", textColor: "text-red-50", border: "border-red-600", icon: <ShieldAlert className="h-5 w-5 text-red-200" /> };
    if (heatIndexProxy > 90) return { level: "High", desc: "High stress risk. Ensure shade and water for animals.", color: "bg-orange-500", textColor: "text-orange-50", border: "border-orange-500", icon: <Flame className="h-5 w-5 text-orange-100" /> };
    if (heatIndexProxy > 85) return { level: "Moderate", desc: "Moderate stress possible during peak sun hours.", color: "bg-amber-100", textColor: "text-amber-900", border: "border-amber-300", icon: <Flame className="h-5 w-5 text-amber-500" /> };
    return { level: "Low", desc: "Low heat stress risk.", color: "bg-slate-50", textColor: "text-slate-400", border: "border-slate-200", icon: <Cloud className="h-5 w-5 text-slate-300" /> };
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <Droplets className="h-8 w-8 text-orange-500" />
          <h1 className="text-3xl font-bold tracking-tight text-slate-800">Heat Stress Risk</h1>
        </div>
        <p className="text-slate-500 max-w-2xl">
          Evaluates combined temperature and humidity to alert for livestock stress, crop heat-scorch potential, and safe labor windows.
        </p>
      </div>

      <div className="space-y-4">
        {MOCK_WEATHER.slice(0, 5).map((day) => {
          const dateObj = new Date(day.date);
          const dayName = dateObj.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" });
          const risk = getHeatRisk(day.tempHigh, day.humidity);

          return (
             <Card key={day.date} className={`overflow-hidden border-l-4 ${risk.border}`}>
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row items-stretch">
                  <div className={`p-4 flex flex-col justify-center items-center font-bold text-2xl w-full sm:w-32 ${risk.color} ${risk.textColor}`}>
                     {day.tempHigh}°
                     <span className="text-xs font-normal opacity-80 mt-1 uppercase tracking-wider">High</span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-center bg-white relative">
                    <div className="flex items-center justify-between mb-1 text-sm font-bold text-slate-800">
                      <span>{dayName}</span>
                      <div className="flex items-center gap-1.5">
                        {risk.icon}
                        <span>{risk.level} Risk</span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 mb-2">{risk.desc}</p>
                    <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
                       <span>Humidity: {day.humidity}%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
