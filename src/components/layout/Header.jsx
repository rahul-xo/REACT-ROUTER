import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  const currentLink = (isActive) => {
    return isActive ? "text-green-700" : "";
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        {/* Left Side: Name */}
        <div className="text-2xl font-bold">benevolent</div>

        {/* Right Side: Navigation Links */}
        <div className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-gray-300 ${currentLink(isActive)}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-gray-300 ${currentLink(isActive)}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-gray-300 ${currentLink(isActive)}`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
