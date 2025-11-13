import { useState } from "react";
import RecipeCard from "../components/RecipeCard";

export default function Favorites() {
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || []);

  const removeFavorite = (recipe) => {
    const updated = favorites.filter(f => f.idMeal !== recipe.idMeal);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Favorite Recipes</h2>
      {favorites.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {favorites.map(recipe => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
              onFavorite={removeFavorite}
              isFavorite={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}
