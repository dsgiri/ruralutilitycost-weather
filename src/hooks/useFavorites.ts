import { useState, useEffect } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("ruc_weather_favorites");
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load favorites", e);
    }
  }, []);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const isFav = prev.includes(id);
      const newFavs = isFav ? prev.filter((fav) => fav !== id) : [...prev, id];
      try {
        localStorage.setItem("ruc_weather_favorites", JSON.stringify(newFavs));
      } catch (e) {
        console.error("Failed to save favorites", e);
      }
      return newFavs;
    });
  };

  return { favorites, toggleFavorite };
}
