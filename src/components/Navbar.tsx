import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-orange-500 text-white px-6 py-4 shadow-md">
      <Link to="/" className="text-2xl font-bold">🍽️ Delicious Recipes</Link>
      <div className="space-x-6">
        <Link to="/" className="hover:text-yellow-100">Home</Link>
        <Link to="/favorites" className="hover:text-yellow-100">Favorites</Link>
        <Link to="/contact" className="hover:text-yellow-100">Contact</Link>
        <Link to="/about" className="hover:text-yellow-100">About</Link>
      </div>
    </nav>
  );
}
