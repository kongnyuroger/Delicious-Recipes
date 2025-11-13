import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [featured, setFeatured] = useState([]);

  // Fetch recipes by search
  const fetchRecipes = async (query = "chicken") => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await res.json();
    setRecipes(data.meals || []);
  };

  // Fetch recipes by category
  const fetchByCategory = async (cat) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`);
    const data = await res.json();
    setRecipes(data.meals || []);
  };

  // Fetch featured recipes
  const fetchFeatured = async () => {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=breakfast");
    const data = await res.json();
    setFeatured(data.meals?.slice(0, 3) || []);
  };

  // Initial load
  useEffect(() => {
    fetchRecipes();
    fetchFeatured();
  }, []);

  // Watch for category changes
  useEffect(() => {
    if (category) {
      fetchByCategory(category);
    }
  }, [category]);

  const handleSearch = (query) => {
    setSearch(query);
    fetchRecipes(query);
  };

  return (
    <div className="bg-[#FFF8EE] min-h-screen text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Hero */}
        <section className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#3E2C20]">Delicious Recipes</h1>
          <SearchBar onSearch={handleSearch} />
        </section>

        {/* Featured */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Featured Recipes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {featured.map((meal) => (
              <RecipeCard key={meal.idMeal} recipe={meal} />
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-6">Categories</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Beef", "Chicken", "Dessert", "Seafood", "Vegetarian"].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-5 py-2 rounded-full font-medium transition ${
                  category === cat ? "bg-[#EFD8A3]" : "bg-[#FBEBD2] hover:bg-[#EFD8A3]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Latest Recipes */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-center">
            {category ? `${category} Recipes` : "Latest Recipes"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {recipes.slice(0, 6).map((meal) => (
              <RecipeCard key={meal.idMeal} recipe={meal} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
