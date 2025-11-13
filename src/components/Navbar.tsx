import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const activeStyle = "text-amber-600 font-semibold";
  const normalStyle = "hover:text-amber-600 transition";

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="text-2xl font-extrabold text-[#3E2C20]">
          🍳 Delicious Recipes
        </Link>

        <div className="flex gap-6 text-gray-700">
          <NavLink to="/" end className={({ isActive }) => (isActive ? activeStyle : normalStyle)}>
            Home
          </NavLink>
          <NavLink to="/favorites" className={({ isActive }) => (isActive ? activeStyle : normalStyle)}>
            Favorites
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? activeStyle : normalStyle)}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? activeStyle : normalStyle)}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
