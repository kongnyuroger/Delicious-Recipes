import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function RecipeCard({ recipe }) {
  const [isFav, setIsFav] = useState(false);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFav(favs.some((f) => f.idMeal === recipe.idMeal));

    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe.idMeal}`)
      .then((res) => res.json())
      .then((data) => setDetails(data.meals?.[0]));
  }, [recipe.idMeal]);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    e.preventDefault();

    let favs = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isFav) {
      favs = favs.filter((f) => f.idMeal !== recipe.idMeal);
    } else {
      favs.push(recipe);
    }
    localStorage.setItem("favorites", JSON.stringify(favs));
    setIsFav(!isFav);
  };

  return (
    <Link to={`/recipe/${recipe.idMeal}`}>
      <div className="bg-white rounded-2xl shadow hover:shadow-md transition p-3 cursor-pointer">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="rounded-xl mb-3 w-full h-48 object-cover"
        />
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{recipe.strMeal}</h3>
            <p className="text-sm text-gray-500">
              {details?.strCategory || "Category"} • {details?.strArea || "Area"}
            </p>
          </div>
          <button onClick={toggleFavorite}>
            <span className={`${isFav ? "text-red-500" : "text-gray-300"} text-2xl`}>
              ♥
            </span>
          </button>
        </div>
      </div>
    </Link>
  );
}
