export function Legal() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="space-y-2 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-800">Legal, Terms, and Disclaimers</h1>
      </div>
      
      <div className="prose prose-zinc max-w-none text-slate-600">
        <h3>Shared Disclaimer</h3>
        <p>
          All weather guidance and decision support information provided by the Rural Utility Cost Weather application is <strong>informational only</strong>.
        </p>
        
        <ul>
           <li><strong>Forecasts Change:</strong> Meteorological patterns are dynamic. The forecasts provided are projections, not guarantees.</li>
           <li><strong>Verify Locally:</strong> Weather-based decisions should always be verified with on-the-ground local conditions and official government forecasts (e.g., NWS) when safety, significant financial exposure, or critical field operations are involved.</li>
           <li><strong>No Substitute for Professional Advice:</strong> This application does not replace professional agronomy, legal, insurance, or safety advice. Any operational actions taken based upon this data are solely at your own risk.</li>
        </ul>

        <p>
          By using this application, you acknowledge that Rural Utility Cost and its partners shall not be liable for any damages or crop loss resulting from the use or interpretation of this weather data. 
        </p>
      </div>
    </div>
  );
}
