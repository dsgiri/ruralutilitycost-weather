import * as React from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Tool } from "../../types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

interface ToolCardProps {
  key?: React.Key;
  tool: Tool;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export function ToolCard({ tool, isFavorite, onToggleFavorite }: ToolCardProps) {
  return (
    <Card className="flex flex-col flex-1 h-full hover:border-[#0369a1] transition-colors">
      <CardHeader className="pb-3 flex flex-row items-start justify-between space-y-0">
        <div className="space-y-1.5 flex-1">
          <Badge variant="secondary" className="mb-2">
            {tool.category}
          </Badge>
          <CardTitle className="text-xl leading-tight">{tool.title}</CardTitle>
        </div>
        <button
          onClick={() => onToggleFavorite(tool.id)}
          className="text-slate-300 hover:text-red-500 transition-colors focus:outline-none ml-2"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart className={`h-6 w-6 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
        </button>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription className="line-clamp-2 mb-4 text-slate-500">
          {tool.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-auto">
        <span className="text-xs font-bold text-slate-500 flex items-center">
            <span className="w-2 h-2 rounded-full bg-slate-300 mr-2"></span>
            {tool.primaryOutcome}
        </span>
        <Link to={tool.path}>
          <Button variant="default">
            Open Tool
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
