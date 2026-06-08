import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CookieBanner } from "../ui/CookieBanner";
import { useEffect } from "react";

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
  "/contact": { title: "Contact", desc: "Contact support for the Rural Utility Cost Weather platform." },
  "/legal": { title: "Legal & Terms", desc: "Legal terms, privacy policy, and disclaimers." }
};

export function Layout() {
  const location = useLocation();
  const currentSEO = SEO_DATA[location.pathname] || { 
    title: "Weather Hub", 
    desc: "Actionable weather intelligence for farm operations." 
  };
  const fullTitle = `${currentSEO.title} | Rural Utility Cost Weather`;
  const canonicalUrl = `https://weather.ruralutilitycost.com${location.pathname}`;

  useEffect(() => {
    // Scroll tracking
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = scrollPos / docHeight;
      if (scrollPercent > 0.5 && !window.hasScrolled50) {
        window.hasScrolled50 = true;
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag('event', 'scroll', { percent: 50 });
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": fullTitle,
    "description": currentSEO.desc,
    "url": canonicalUrl,
    "publisher": {
      "@type": "Organization",
      "name": "Rural Utility Cost"
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc] text-[#1e293b] font-sans">
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={currentSEO.desc} />
        <meta name="keywords" content="agriculture weather, farm weather, planting conditions, spray window, frost risk, heat stress, GDD, utility costs" />
        <meta name="author" content="Rural Utility Cost" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={currentSEO.desc} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://weather.ruralutilitycost.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={currentSEO.desc} />
        <meta name="twitter:image" content="https://weather.ruralutilitycost.com/og-image.jpg" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Helmet>
      
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-white focus:text-slate-900 focus:font-bold">
        Skip to main content
      </a>

      <Navbar />
      <main id="main-content" className="flex-1 container mx-auto px-4 py-8 max-w-6xl w-full" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
