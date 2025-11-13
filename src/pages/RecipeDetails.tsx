import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RecipeDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals?.[0]));
  }, [id]);

  if (!meal) return <div className="text-center py-20">Loading recipe...</div>;

  const ingredients = Object.keys(meal)
    .filter((key) => key.startsWith("strIngredient") && meal[key])
    .map((key, i) => ({
      name: meal[key],
      measure: meal[`strMeasure${i + 1}`],
    }));

  return (
    <div className="bg-[#FFF8EE] min-h-screen px-6 py-10">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="rounded-xl w-full h-96 object-cover mb-6"
        />
        <h1 className="text-3xl font-bold mb-2">{meal.strMeal}</h1>
        <p className="text-gray-600 mb-4">
          {meal.strCategory} • {meal.strArea}
        </p>

        <h2 className="text-xl font-semibold mb-3">Ingredients</h2>
        <ul className="mb-6 grid grid-cols-2 gap-2">
          {ingredients.map((ing, i) => (
            <li key={i}>
              {ing.name} - <span className="text-gray-500">{ing.measure}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mb-3">Instructions</h2>
        <p className="text-gray-700 leading-relaxed">{meal.strInstructions}</p>

        {meal.strYoutube && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">Watch Tutorial:</h3>
            <a
              href={meal.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 underline"
            >
              {meal.strYoutube}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
