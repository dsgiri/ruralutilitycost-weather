import { MOCK_WEATHER } from "../data/tools";
import { ForecastCard } from "../components/weather/ForecastCard";
import { Badge } from "../components/ui/Badge";
import { Card, CardContent } from "../components/ui/Card";
import { Search } from "lucide-react";
import { Input } from "../components/ui/Input";

export function Forecast() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight text-slate-800">Weather Overview</h1>
          <Badge variant="outline">7-Day Outlook</Badge>
        </div>
        <p className="text-slate-500 max-w-2xl">
          General agricultural forecast. Use the specific decision tools for operational thresholds.
        </p>
      </div>

      <Card className="bg-white border-slate-200">
        <CardContent className="p-4 flex flex-col sm:flex-row gap-4 items-center">
           <div className="relative w-full sm:max-w-md">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
             <Input placeholder="Search location or ZIP code..." className="pl-9" />
           </div>
           <div className="text-sm text-slate-500 whitespace-nowrap">
             Showing data for: <strong className="text-slate-800 font-bold">Rural Station Beta (Demo)</strong>
           </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {MOCK_WEATHER.map((day, ix) => (
          <ForecastCard key={day.date} day={day} isToday={ix === 0} />
        ))}
      </div>
      
      <section className="pt-8">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Weekly Summary</h3>
        <Card className="border-slate-200">
          <CardContent className="p-6">
            <p className="text-slate-600 leading-relaxed text-sm">
              Expect generally clear conditions early in the week, making it favorable for most fieldwork. 
              A cold front passes through mid-week, bringing a slight frost risk on Thursday morning. 
              Temperatures rebound sharply by the weekend with potential early-season heat stress risks as highs approach the upper 90s.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
