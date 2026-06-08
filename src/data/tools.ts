import { Tool, WeatherDay } from "../types";

export const TOOLS: Tool[] = [
  {
    id: "forecast-overview",
    title: "Weather Overview",
    description: "Farm-friendly daily and weekly agricultural forecast summaries.",
    category: "forecast",
    primaryOutcome: "Understand general operational conditions",
    path: "/forecast",
  },
  {
    id: "planting-window",
    title: "Planting Window Finder",
    description: "Evaluates soil temperature proxies and rain risk for seedbed readiness.",
    category: "planting",
    primaryOutcome: "Identify safe planting days",
    path: "/planting",
  },
  {
    id: "spray-timing",
    title: "Spray Timing Checker",
    description: "Checks wind speed, inversion risk proxy, and rain fastness.",
    category: "spraying",
    primaryOutcome: "Find safe spray application windows",
    path: "/spray",
  },
  {
    id: "frost-risk",
    title: "Frost Risk Alert",
    description: "Highlights cold overnight lows that may cause crop damage.",
    category: "frost",
    primaryOutcome: "Prepare for frost protection",
    path: "/frost",
  },
  {
    id: "heat-risk",
    title: "Heat Stress Risk Card",
    description: "Evaluates high temperatures that cause livestock or plant stress.",
    category: "heat",
    primaryOutcome: "Mitigate extreme heat exposure",
    path: "/heat",
  },
  {
    id: "gdd-calc",
    title: "Growing Degree Day Calculator",
    description: "Tracks accumulated heat units based on crop-specific base temperatures.",
    category: "GDD",
    primaryOutcome: "Estimate crop development stage",
    path: "/gdd",
  },
  {
    id: "risk-alerts",
    title: "Risk Alerts",
    description: "Aggregated view of immediate weather hazards for the farm.",
    category: "forecast",
    primaryOutcome: "Acknowledge and react to severe risk",
    path: "/alerts",
  },
];

// Generate consistent mock weather for the next 7 days
const today = new Date();
export const MOCK_WEATHER: WeatherDay[] = Array.from({ length: 7 }).map((_, i) => {
  const d = new Date(today);
  d.setDate(today.getDate() + i);
  
  // Create some varied weather for testing different conditions
  let tempHigh = 75 + Math.sin(i) * 15;
  let tempLow = 50 + Math.cos(i) * 10;
  let windSpeed = 5 + Math.abs(Math.sin(i * 2)) * 12;
  let precipProb = i === 2 ? 80 : (i === 5 ? 60 : 10);
  
  // Make day 3 a frost risk day
  if (i === 3) {
    tempLow = 28;
    tempHigh = 45;
  }
  
  // Make day 4 a heat risk day
  if (i === 4) {
    tempHigh = 98;
    tempLow = 72;
  }

  let conditions = "Clear";
  let icon = "Sun";
  if (precipProb > 50) {
    conditions = "Rain";
    icon = "CloudRain";
  } else if (tempHigh > 90) {
    conditions = "Hot / Sun";
    icon = "Sun";
  } else if (tempLow < 32) {
    conditions = "Frost Risk";
    icon = "ThermometerSnowflake";
  } else if (windSpeed > 15) {
    conditions = "Windy";
    icon = "Wind";
  }

  return {
    date: d.toISOString().split("T")[0],
    tempHigh: Math.round(tempHigh),
    tempLow: Math.round(tempLow),
    precipProb,
    windSpeed: Math.round(windSpeed),
    humidity: Math.round(40 + Math.random() * 40),
    conditions,
    icon,
  };
});
