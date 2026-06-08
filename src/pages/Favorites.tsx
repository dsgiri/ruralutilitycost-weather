import { Link } from "react-router-dom";
import { useFavorites } from "../hooks/useFavorites";
import { TOOLS } from "../data/tools";
import { ToolCard } from "../components/weather/ToolCard";
import { Heart } from "lucide-react";
import { Button } from "../components/ui/Button";

export function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();
  const favoriteTools = TOOLS.filter((t) => favorites.includes(t.id));

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <Heart className="h-8 w-8 text-red-500 fill-red-500" />
          <h1 className="text-3xl font-bold tracking-tight text-slate-800">Your Saved Tools</h1>
        </div>
        <p className="text-slate-500 max-w-2xl">
          Quick access to your most frequently used decision support cards.
        </p>
      </div>

      {favoriteTools.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center border border-dashed border-slate-200 rounded-xl bg-slate-50/50">
          <Heart className="h-12 w-12 text-slate-200 mb-4" />
          <h3 className="text-lg font-medium text-slate-800 mb-2">No favorites yet</h3>
          <p className="text-slate-400 max-w-sm mb-6">
            Click the heart icon on any tool card to save it here for quick access later.
          </p>
          <Link to="/">
            <Button>Browse Tools</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteTools.map((tool) => (
            <ToolCard
              key={tool.id}
              tool={tool}
              isFavorite={true}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}
