import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(data => setRecipe(data.meals[0]));
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  const ingredients = Array.from({ length: 20 }, (_, i) => ({
    ingredient: recipe[`strIngredient${i + 1}`],
    measure: recipe[`strMeasure${i + 1}`],
  })).filter(i => i.ingredient);

  return (
    <div className="max-w-3xl mx-auto bg-white shadow rounded-2xl p-6">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="rounded-xl mb-4" />
      <h2 className="text-3xl font-bold mb-2">{recipe.strMeal}</h2>
      <p className="text-gray-600 mb-4">{recipe.strCategory}</p>
      <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
      <ul className="list-disc pl-6 mb-4">
        {ingredients.map((i, idx) => (
          <li key={idx}>{i.measure} {i.ingredient}</li>
        ))}
      </ul>
      <h3 className="text-xl font-semibold mb-2">Instructions</h3>
      <p className="whitespace-pre-line">{recipe.strInstructions}</p>
    </div>
  );
}
