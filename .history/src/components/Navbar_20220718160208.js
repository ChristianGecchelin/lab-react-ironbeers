import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/all-beers"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          All beers
        </NavLink>
        <NavLink
          to="/random-beer"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          Random Beer
        </NavLink>
        <NavLink
          to="/new-beer"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          New beer
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
