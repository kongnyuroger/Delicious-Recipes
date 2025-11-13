import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <input
        type="text"
        placeholder="Search by ingredient or name..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="w-full px-6 py-3 rounded-2xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-amber-400 outline-none"
      />
    </form>
  );
}
