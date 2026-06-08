import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const SEO_DATA: Record<string, { title: string; desc: string }> = {
  "/": { title: "Dashboard", desc: "Weather-driven decision hub for farm operations." },
  "/forecast": { title: "Forecast Overview", desc: "Farm-friendly daily and weekly agricultural forecast summaries." },
  "/planting": { title: "Planting Window", desc: "Evaluate soil temperature proxies and rain risk for seedbed readiness." },
  "/spray": { title: "Spray Timing", desc: "Check wind speed, inversion risk proxy, and rain fastness." },
  "/frost": { title: "Frost Risk", desc: "Highlights cold overnight lows that may cause crop damage." },
  "/heat": { title: "Heat Stress", desc: "Evaluates high temperatures that cause livestock or plant stress." },
  "/gdd": { title: "Growing Degree Days", desc: "Track accumulated heat units based on crop-specific base temperatures." },
  "/alerts": { title: "Risk Alerts", desc: "Immediate weather hazards for the farm." },
  "/favorites": { title: "Saved Tools", desc: "Your most frequently used decision support cards." },
  "/about": { title: "About", desc: "Learn about the Rural Utility Cost Weather platform." },
  "/legal": { title: "Legal & Terms", desc: "Legal terms, privacy policy, and disclaimers." }
};

export function Layout() {
  const location = useLocation();
  const currentSEO = SEO_DATA[location.pathname] || { 
    title: "Weather Hub", 
    desc: "Actionable weather intelligence for farm operations." 
  };
  const fullTitle = `${currentSEO.title} | Rural Utility Cost Weather`;

  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc] text-[#1e293b] font-sans">
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={currentSEO.desc} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={currentSEO.desc} />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={currentSEO.desc} />
        <link rel="canonical" href={`https://weather.ruralutilitycost.com${location.pathname}`} />
      </Helmet>
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
