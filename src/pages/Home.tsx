import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || []);

  const fetchRecipes = async () => {
    try {
      const url = searchTerm
        ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
        : category
        ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        : "https://www.themealdb.com/api/json/v1/1/search.php?s=";
      const res = await fetch(url);
      const data = await res.json();
      setRecipes(data.meals || []);
    } catch {
      console.error("Error fetching recipes");
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleFavorite = (recipe) => {
    const updated = favorites.some(fav => fav.idMeal === recipe.idMeal)
      ? favorites.filter(fav => fav.idMeal !== recipe.idMeal)
      : [...favorites, recipe];
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        category={category}
        setCategory={setCategory}
        onSearch={fetchRecipes}
      />
      <h2 className="text-2xl font-bold mt-10 mb-4">Featured Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            recipe={recipe}
            onFavorite={handleFavorite}
            isFavorite={favorites.some(f => f.idMeal === recipe.idMeal)}
          />
        ))}
      </div>
    </div>
  );
}
