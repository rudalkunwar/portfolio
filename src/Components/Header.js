import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-900">
      <div className="container mx-auto px-4 xl:px-12">
        <nav className="flex items-center justify-between py-6">
          <div className="flex items-center">
            <a className="text-3xl font-bold text-white" href="#">
              Kuns
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="block text-gray-200 focus:outline-none focus:text-white"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.828 5.758a2 2 0 10-2.828-2.828l-4.242 4.243-4.243-4.243a2 2 0 10-2.828 2.828l4.243 4.243-4.243 4.242a2 2 0 102.828 2.828l4.243-4.242 4.242 4.242a2 2 0 102.828-2.828l-4.242-4.242 4.242-4.243z"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                </svg>
              )}
            </button>
          </div>

          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex md:items-center md:space-x-12`}
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
