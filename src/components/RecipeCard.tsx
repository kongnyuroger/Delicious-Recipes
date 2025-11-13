import { Link } from "react-router-dom";

export default function RecipeCard({ recipe, onFavorite, isFavorite }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg p-4">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="rounded-lg w-full h-48 object-cover"
      />
      <h3 className="mt-2 font-semibold text-lg">{recipe.strMeal}</h3>
      <div className="flex justify-between items-center mt-2">
        <Link
          to={`/recipe/${recipe.idMeal}`}
          className="text-orange-500 font-medium hover:underline"
        >
          View Recipe
        </Link>
        <button onClick={() => onFavorite(recipe)}>
          {isFavorite ? "💔" : "❤️"}
        </button>
      </div>
    </div>
  );
}
