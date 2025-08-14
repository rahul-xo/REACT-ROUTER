import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        {/* Left Side: Name */}
        <div className="text-2xl font-bold">benevolent</div>

        {/* Right Side: Navigation Links */}
        <div className="flex space-x-6">
          <NavLink to="/" className="hover:text-gray-300">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-gray-300">
            About
          </NavLink>
          <NavLink to="/contact" className="hover:text-gray-300">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
