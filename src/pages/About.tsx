export function About() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="space-y-2 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-800">About</h1>
      </div>
      
      <div className="prose prose-zinc max-w-none text-slate-600">
        <p className="text-lg font-medium text-emerald-800">
          Weather is a dedicated decision support module within the broader Rural Utility Cost ecosystem.
        </p>
        
        <p>
          Our mission is to help users interpret forecasts, evaluate environmental risk, and plan farm operations using clear, weather-based decision support. We know that raw meteorological data is not always enough. Farm operators, field managers, and rural users need practical translation: knowing what a temperature and wind projection actually means for their workday operations.
        </p>

        <h3>Our Goal</h3>
        <p>
          The primary goal of this application is to help users make practical timing decisions with clear, focused tools, without the clutter of generic consumer weather apps.
        </p>
        
        <ul>
           <li>Provide actionable spray, planting, and harvest windows.</li>
           <li>Alert operators to potential frost or heat stress.</li>
           <li>Track growing degree days (GDD) for improved crop management.</li>
        </ul>
      </div>
    </div>
  );
}
