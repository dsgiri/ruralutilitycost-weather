import { TOOLS } from "../data/tools";
import { ToolCard } from "../components/weather/ToolCard";
import { useFavorites } from "../hooks/useFavorites";
import { CloudSun, Sunrise, Leaf, MapPin } from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { Card, CardContent } from "../components/ui/Card";

export function Home() {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        {/* Operational Summary Bar styled like the design */}
        <div className="bg-[#0369a1] text-white p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between shadow-lg gap-6">
          <div>
            <h2 className="text-2xl font-bold">Operational Summary</h2>
            <p className="text-sky-100 opacity-90">Weather-driven recommendation for: <b>Beta Station</b></p>
          </div>
          <div className="flex space-x-4 md:space-x-8">
            <div className="text-center">
              <div className="bg-green-500/20 px-3 py-1 rounded text-xs font-bold border border-green-400 uppercase tracking-widest mb-1 shadow-sm">Good</div>
              <p className="text-[10px] uppercase opacity-70">Spraying</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-500/20 px-3 py-1 rounded text-xs font-bold border border-yellow-400 uppercase tracking-widest mb-1 shadow-sm text-yellow-100">Caution</div>
              <p className="text-[10px] uppercase opacity-70">Planting</p>
            </div>
            <div className="text-center">
              <div className="bg-red-500/20 px-3 py-1 rounded text-xs font-bold border border-red-400 uppercase tracking-widest mb-1 shadow-sm text-red-100">Alert</div>
              <p className="text-[10px] uppercase opacity-70">Frost Risk</p>
            </div>
          </div>
        </div>
        
        {/* Quick Summary Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
          <Card className="bg-white border-slate-200">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="bg-sky-100 p-2 rounded-full text-sky-600">
                <CloudSun className="h-6 w-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Today</p>
                <p className="text-lg font-bold text-slate-800">72° / Clear</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white border-slate-200">
             <CardContent className="p-4 flex items-center gap-4">
              <div className="bg-amber-100 p-2 rounded-full text-amber-600">
                <Sunrise className="h-6 w-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Soil Temp Proxy</p>
                <p className="text-lg font-bold text-slate-800">54° F</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white border-slate-200">
             <CardContent className="p-4 flex items-center gap-4">
              <div className="bg-emerald-100 p-2 rounded-full text-emerald-600">
                <Leaf className="h-6 w-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">GDD Track</p>
                <p className="text-lg font-bold text-slate-800">+12 Units</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-red-50/50 border-red-200 flex items-center justify-between p-4">
             <div>
                <p className="text-[10px] font-bold text-red-600 uppercase tracking-wider">Active Alerts</p>
                <p className="text-sm font-bold text-slate-900 mt-1">Frost Advisory</p>
             </div>
             <Badge variant="destructive">1</Badge>
          </Card>
        </div>
      </section>

      <section className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-slate-800">Decision Tools</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOOLS.map((tool) => (
            <ToolCard
              key={tool.id}
              tool={tool}
              isFavorite={favorites.includes(tool.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
