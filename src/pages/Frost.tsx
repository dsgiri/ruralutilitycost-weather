import { MOCK_WEATHER } from "../data/tools";
import { Badge } from "../components/ui/Badge";
import { Card, CardContent } from "../components/ui/Card";
import { ThermometerSnowflake, AlertTriangle, ShieldCheck } from "lucide-react";

export function Frost() {
  const getFrostRisk = (tempLow: number) => {
    if (tempLow <= 28) return { level: "Critical", desc: "Hard freeze expected. Damage likely to unprotected crops.", color: "bg-indigo-900", textColor: "text-indigo-50", border: "border-indigo-900", icon: <AlertTriangle className="h-5 w-5 text-indigo-200" /> };
    if (tempLow <= 32) return { level: "High", desc: "Frost likely. Protect sensitive plants.", color: "bg-indigo-600", textColor: "text-indigo-50", border: "border-indigo-600", icon: <ThermometerSnowflake className="h-5 w-5 text-indigo-200" /> };
    if (tempLow <= 36) return { level: "Elevated", desc: "Patchy frost possible in low-lying areas.", color: "bg-sky-100", textColor: "text-sky-900", border: "border-sky-300", icon: <ThermometerSnowflake className="h-5 w-5 text-sky-600" /> };
    return { level: "None", desc: "No frost risk.", color: "bg-slate-50", textColor: "text-slate-400", border: "border-slate-200", icon: <ShieldCheck className="h-5 w-5 text-emerald-500" /> };
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <ThermometerSnowflake className="h-8 w-8 text-indigo-600" />
          <h1 className="text-3xl font-bold tracking-tight text-slate-800">Frost Risk Alert</h1>
        </div>
        <p className="text-slate-500 max-w-2xl">
          Highlights nightly lows threatening sensitive crops. Monitor low-lying field microclimates.
        </p>
      </div>

      <div className="space-y-4">
        {MOCK_WEATHER.slice(0, 5).map((day) => {
          const dateObj = new Date(day.date);
          const dayName = dateObj.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
          const risk = getFrostRisk(day.tempLow);

          return (
            <Card key={day.date} className={`overflow-hidden border-l-4 ${risk.border}`}>
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row items-stretch">
                  <div className={`p-4 flex flex-col justify-center items-center font-bold text-2xl w-full sm:w-32 ${risk.color} ${risk.textColor}`}>
                     {day.tempLow}°
                     <span className="text-xs font-normal opacity-80 mt-1 uppercase tracking-wider">Low</span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-center bg-white">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-slate-800">{dayName}</span>
                      <div className="flex items-center gap-1.5">
                        {risk.icon}
                        <span className="font-medium text-sm">{risk.level} Risk</span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500">{risk.desc}</p>
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
