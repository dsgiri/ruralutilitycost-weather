import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 p-6 flex flex-col space-y-4 mt-auto" role="contentinfo">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <nav className="flex flex-wrap items-center justify-center space-x-4 md:space-x-6 text-xs uppercase font-bold tracking-widest" aria-label="Footer Navigation">
          <NavLink to="/about" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400 p-1 rounded">About</NavLink>
          <NavLink to="/contact" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400 p-1 rounded">Contact</NavLink>
          <NavLink to="/legal" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400 p-1 rounded">Legal</NavLink>
          <a href="/sitemap.xml" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400 p-1 rounded">Sitemap</a>
        </nav>
        <div className="text-[10px] text-center md:text-right">
          &copy; {new Date().getFullYear()} Rural Utility Cost. Information for support only. Verify with local instruments.
        </div>
      </div>
      <div className="text-[10px] border-t border-slate-800 pt-3 opacity-60 leading-relaxed text-center md:text-left">
        Weather is part of the Rural Utility Cost ecosystem. Forecast data is informational and provided "as is". This tool does not replace professional agronomy, legal, or safety advice. Users are responsible for all weather-dependent field decisions.
      </div>
    </footer>
  );
}
