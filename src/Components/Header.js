import React from "react";
import { Link } from "react-router-dom";

function Header() {


  return (
    <div className="bg-gray-900">
      <div className="container mx-auto px-4 xl:px-12">
        <nav className="flex items-center justify-center py-6">
          <ul
            className="md:flex md:space-x-12"
          >
            <li>
              <Link className="text-gray-200 hover:text-blue-600" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-gray-200 hover:text-blue-600" to="/Service">
                Service
              </Link>
            </li>
            <li>
              <Link className="text-gray-200 hover:text-blue-600" to="/About">
                About
              </Link>
            </li>
            <li>
              <Link className="text-gray-200 hover:text-blue-600" to="/Portfolio">
              Portfolio
              </Link>
            </li>
            <li>
              <Link className="text-gray-200 hover:text-blue-600" to="/Contact">
                Hire Me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
