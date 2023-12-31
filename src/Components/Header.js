import React, { useState } from "react";

function Header() {


  return (
    <div className="bg-gray-900">
      <div className="container mx-auto px-4 xl:px-12">
        <nav className="flex items-center justify-center py-6">
          <ul
            className="md:flex md:space-x-12"
          >
            <li>
              <a className="text-gray-200 hover:text-blue-600" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="text-gray-200 hover:text-blue-600" href="#">
                Service
              </a>
            </li>
            <li>
              <a className="text-gray-200 hover:text-blue-600" href="#">
                Projects
              </a>
            </li>
            <li>
              <a className="text-gray-200 hover:text-blue-600" href="#">
                Hire Me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
