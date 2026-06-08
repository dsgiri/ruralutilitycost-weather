import { useState, useEffect } from "react";
import { Button } from "./Button";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie_consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 text-slate-300 p-4 z-50 shadow-lg" role="dialog" aria-labelledby="cookie-banner-title">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div id="cookie-banner-title" className="text-sm">
          We use cookies to improve your experience and track site usage to provide better agricultural decision support.
        </div>
        <div className="flex gap-2 flex-shrink-0 w-full md:w-auto">
          <Button variant="outline" size="sm" onClick={declineCookies} className="flex-1 md:flex-none border-slate-700 bg-transparent text-slate-300 hover:bg-slate-800 hover:text-white min-h-[44px]">Decline</Button>
          <Button variant="default" size="sm" onClick={acceptCookies} className="flex-1 md:flex-none bg-[#0369a1] hover:bg-sky-700 text-white min-h-[44px]">Accept</Button>
        </div>
      </div>
    </div>
  );
}
