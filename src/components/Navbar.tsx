import { FaRegUserCircle } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/shop"}>Shop</NavLink>
      </li>
    </>
  );
  return (
    <nav className="navbar bg-base-100 max-w-7xl mx-auto" id="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <div>
          <img src="https://i.ibb.co.com/ZfXmxGf/Logo.png" alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex text-2xl font-medium">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-2">
        <a className="text-2xl">
          <FaRegUserCircle></FaRegUserCircle>
        </a>
        <a className="text-2xl">
          <TiShoppingCart></TiShoppingCart>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
