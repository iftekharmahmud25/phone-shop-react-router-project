
import { NavLink } from "react-router-dom";
import Logo from "./Logo/Logo";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center py-6 shadow-lg px-5 ">
        <Logo></Logo>
        <ul  className="flex gap-4 items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-xl text-pink-500 font-bold underline " : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-xl text-pink-500 font-bold underline " : ""
              }
            >
              Favorites
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-xl text-pink-500 font-bold underline " : ""
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
