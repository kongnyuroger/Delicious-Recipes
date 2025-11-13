import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  if (favorites.length === 0)
    return <p className="text-center py-20 text-gray-500">No favorite recipes yet.</p>;

  return (
    <div className="bg-[#FFF8EE] min-h-screen px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Favorites ❤️</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {favorites.map((meal) => (
          <RecipeCard key={meal.idMeal} recipe={meal} />
        ))}
      </div>
    </div>
  );
}
