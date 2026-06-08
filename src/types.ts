export type ToolCategory =
  | "forecast"
  | "planting"
  | "spraying"
  | "frost"
  | "heat"
  | "rain"
  | "wind"
  | "irrigation"
  | "GDD"
  | "pest risk"
  | "disease risk"
  | "fieldwork"
  | "livestock stress"
  | "greenhouse climate";

export interface Tool {
  id: string;
  title: string;
  description: string;
  category: ToolCategory;
  primaryOutcome: string;
  path: string;
}

export interface WeatherDay {
  date: string;
  tempHigh: number;
  tempLow: number;
  precipProb: number;
  windSpeed: number; // mph
  humidity: number; // %
  conditions: string;
  icon: string;
}

export interface GDDRecord {
  date: string;
  dailyGDD: number;
  accumulatedGDD: number;
}
