export default function SearchBar({ searchTerm, setSearchTerm, category, setCategory, onSearch }) {
  const categories = ["Beef", "Chicken", "Dessert", "Pasta", "Seafood", "Vegetarian"];

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 mt-8">
      <input
        type="text"
        placeholder="Search by name or ingredient..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-3 w-full md:w-1/2 rounded-lg border shadow-sm focus:ring-2 focus:ring-orange-400"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-3 rounded-lg border shadow-sm focus:ring-2 focus:ring-orange-400"
      >
        <option value="">All Categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <button
        onClick={onSearch}
        className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-600"
      >
        Search
      </button>
    </div>
  );
}
