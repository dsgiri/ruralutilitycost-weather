import { NavLink } from "react-router-dom";
import { CloudRain, Leaf, Wind, ThermometerSnowflake, Droplets, Heart, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/Button";

const NAV_ITEMS = [
  { label: "Forecast", href: "/forecast", icon: CloudRain },
  { label: "Planting", href: "/planting", icon: Leaf },
  { label: "Spray", href: "/spray", icon: Wind },
  { label: "Frost", href: "/frost", icon: ThermometerSnowflake },
  { label: "Heat", href: "/heat", icon: Droplets },
  { label: "GDD", href: "/gdd" },
  { label: "Alerts", href: "/alerts" },
  { label: "Favorites", href: "/favorites", icon: Heart },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4 flex flex-col md:flex-row items-start md:items-center justify-between shadow-sm z-10 sticky top-0" role="banner">
      <div className="flex items-center justify-between w-full md:w-auto">
        <NavLink to="/" className="flex items-center space-x-3 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400">
          <div className="w-10 h-10 bg-[#0369a1] rounded flex items-center justify-center text-white font-bold text-xl" aria-hidden="true">R</div>
          <div>
            <span className="text-lg font-bold leading-none tracking-tight uppercase text-slate-900 block">Rural Utility Cost</span>
            <span className="text-xs text-[#0369a1] font-semibold tracking-widest uppercase">Weather Support</span>
          </div>
        </NavLink>
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            className="min-h-[48px] min-w-[48px]"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
      </div>
      
      <div className={`w-full md:w-auto mt-4 md:mt-0 ${isOpen ? 'block' : 'hidden md:flex'}`}>
        <nav className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 text-sm font-medium text-slate-600" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 rounded-sm pt-1 ${
                  isActive 
                    ? "text-[#0369a1] border-b-2 border-[#0369a1] pb-1" 
                    : "hover:text-[#0369a1] pb-1 border-b-2 border-transparent"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="hidden md:flex items-center bg-slate-100 rounded-full px-4 py-2 space-x-2 border border-slate-200 mt-4 md:mt-0">
        <span className="text-sm font-semibold">Beta Station</span>
        <span className="text-xs text-slate-400" aria-hidden="true">| Online</span>
      </div>
    </header>
  );
}
