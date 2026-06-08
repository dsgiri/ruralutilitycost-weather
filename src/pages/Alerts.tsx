import { AlertTriangle, BellRing, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "../components/ui/Card";
import { MOCK_WEATHER } from "../data/tools";

export function Alerts() {
  // Find a day with an alert for demo
  const frostDay = MOCK_WEATHER.find(d => d.tempLow <= 32);

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <BellRing className="h-8 w-8 text-red-600" />
          <h1 className="text-3xl font-bold tracking-tight text-slate-800">Risk Alerts</h1>
        </div>
        <p className="text-slate-500 max-w-2xl">
          Aggregated view of critical immediate weather hazards requiring operational attention.
        </p>
      </div>

      {frostDay ? (
        <Card className="border-red-200 shadow-sm overflow-hidden border-l-4 border-l-red-500 bg-red-50/10">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full mt-1">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-red-900 mb-1">
                  Frost Risk Advisory
                </h3>
                <p className="text-red-800/80 mb-2 font-medium">
                  Valid for: {new Date(frostDay.date).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
                </p>
                <div className="prose prose-sm text-slate-600 max-w-none">
                  <p>
                    Overnight low temperatures are forecasted to drop to <strong>{frostDay.tempLow}°F</strong>. 
                    This poses a high risk to sensitive vegetation and early-emerging crops.
                  </p>
                  <ul className="mt-3 space-y-1 ml-4 list-disc text-slate-500">
                    <li>Prepare frost protection measures for vulnerable greenhouses or fields.</li>
                    <li>Ensure livestock water supplies are clear.</li>
                    <li>Monitor microclimates in low-lying areas.</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card>
           <CardContent className="p-8 text-center text-slate-400 flex flex-col items-center">
             <ShieldCheck className="h-12 w-12 mb-2 text-emerald-400" />
             <p className="text-lg font-medium text-slate-800">No Active Alerts</p>
             <p>No critical weather hazards detected in the 7-day outlook.</p>
           </CardContent>
        </Card>
      )}
    </div>
  );
}
