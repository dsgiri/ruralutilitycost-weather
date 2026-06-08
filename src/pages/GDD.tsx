import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart 
} from "recharts";

// Mock GDD Data generator
const generateGDDData = (baseTemp: number) => {
  let accumulated = 0;
  return Array.from({ length: 14 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - 7 + i); // 7 days past, 7 days future
    
    // Simulate daily average temp
    const dailyAvg = 65 + Math.sin(i) * 15; 
    let dailyGDD = Math.max(0, dailyAvg - baseTemp);
    
    // Simple cap at 86F (30C) commonly used for corn, keeping it simple here
    if (baseTemp === 50 && dailyAvg > 86) {
       dailyGDD = 86 - baseTemp;
    }

    accumulated += dailyGDD;
    
    return {
      date: d.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      dailyGDD: parseFloat(dailyGDD.toFixed(1)),
      accumulated: parseFloat(accumulated.toFixed(1)),
      isFuture: i >= 7
    };
  });
};

const CROP_BASES = [
  { name: "Corn (50°F)", value: 50 },
  { name: "Wheat (32°F)", value: 32 },
  { name: "Alfalfa (41°F)", value: 41 },
];

export function GDD() {
  const [baseTemp, setBaseTemp] = useState(50);
  const data = generateGDDData(baseTemp);
  const currentAccumulated = data[6].accumulated; // Today is index 6

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-800">Growing Degree Day Calculator</h1>
        <p className="text-slate-500 max-w-2xl">
          Track accumulated heat units to estimate crop development stages and pest lifecycles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1 border-emerald-100 bg-emerald-50/20">
          <CardHeader>
            <CardTitle>Configuration</CardTitle>
            <CardDescription>Select crop or set a custom base temperature.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <label className="text-sm font-medium text-slate-800">Quick Select</label>
              <div className="flex flex-wrap gap-2">
                {CROP_BASES.map(crop => (
                  <Badge 
                    key={crop.name}
                    variant={baseTemp === crop.value ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setBaseTemp(crop.value)}
                  >
                    {crop.name}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium text-slate-800">Base Temperature (°F)</label>
              <Input 
                type="number" 
                value={baseTemp} 
                onChange={(e) => setBaseTemp(Number(e.target.value))} 
                className="max-w-[200px]"
              />
            </div>

             <div className="pt-4 border-t border-emerald-100/50">
              <p className="text-sm font-medium text-slate-400 mb-1">Accumulated GDD (Past 7 Days)</p>
              <p className="text-4xl font-bold text-emerald-700">{currentAccumulated.toFixed(0)}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Accumulated GDD Trend</CardTitle>
            <CardDescription>Past 7 days and 7-day forecast projection.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-[100%]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorGdd" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e4e4e7" />
                  <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#71717a' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#71717a' }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: '1px solid #e4e4e7', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="accumulated" 
                    stroke="#10b981" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorGdd)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
