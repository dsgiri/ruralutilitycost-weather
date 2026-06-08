import { MOCK_WEATHER } from "../data/tools";
import { Card, CardContent } from "../components/ui/Card";
import { Leaf, Droplet, Thermometer, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "../lib/utils";

export function Planting() {
  const getPlantingSuitability = (tempLow: number, tempHigh: number, rainProb: number) => {
    // Very naive proxy for soil temp: avg of high and low.
    const estSoilTemp = (tempHigh + tempLow) / 2;
    
    if (estSoilTemp < 50 || rainProb > 50) {
      return { status: "avoid", msg: estSoilTemp < 50 ? "Too cold for germination" : "Too wet for fieldwork", color: "text-red-600", bg: "bg-red-50", icon: <XCircle className="h-5 w-5 text-red-500" /> };
    }
    if (estSoilTemp < 55 || rainProb > 30) {
      return { status: "marginal", msg: "Marginal conditions", color: "text-amber-600", bg: "bg-amber-50", icon: <XCircle className="h-5 w-5 text-amber-500" /> };
    }
    return { status: "good", msg: "Favorable conditions", color: "text-emerald-600", bg: "bg-emerald-50", icon: <CheckCircle2 className="h-5 w-5 text-emerald-500" /> };
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <Leaf className="h-8 w-8 text-emerald-600" />
          <h1 className="text-3xl font-bold tracking-tight text-slate-800">Planting Window Finder</h1>
        </div>
        <p className="text-slate-500 max-w-2xl">
          Evaluates estimated soil temperature proxies and precipitation risk to find safe seedbed preparation and planting windows.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {MOCK_WEATHER.map((day) => {
          const dateObj = new Date(day.date);
          const dayName = dateObj.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" });
          const suitability = getPlantingSuitability(day.tempLow, day.tempHigh, day.precipProb);
          const estSoilTemp = Math.round((day.tempHigh + day.tempLow) / 2);

          return (
            <Card key={day.date} className={cn("overflow-hidden border", suitability.status === "good" ? "border-emerald-200" : "border-slate-200")}>
              <div className={cn("px-4 py-3 border-b flex justify-between items-center", suitability.bg, suitability.status === "good" ? "border-emerald-100" : "border-slate-100")}>
                <span className="font-bold text-slate-800">{dayName}</span>
                <div className="flex items-center gap-1.5">
                  {suitability.icon}
                  <span className={cn("font-medium text-sm", suitability.color)}>{suitability.msg}</span>
                </div>
              </div>
              <CardContent className="p-4 grid grid-cols-2 gap-4 bg-white">
                <div className="flex items-center gap-3">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <Thermometer className="h-4 w-4 text-amber-700" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase">Est. Soil Temp</p>
                    <p className="font-bold text-slate-800">{estSoilTemp}° F</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 space-x-2 border-l border-slate-100 pl-4">
                  <div className="bg-sky-100 p-2 rounded-full">
                    <Droplet className="h-4 w-4 text-sky-700" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase">Rain Risk</p>
                    <p className="font-bold text-slate-800">{day.precipProb}%</p>
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
