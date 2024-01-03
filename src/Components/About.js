import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
      <div className="container w-full py-5 px-4 bg-gray-500">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div className="bg-blue-400 px-8 py-10 rounded-md transition duration-300 ease-in-out hover:bg-blue-500">
    <div className="w-20 py-3 flex justify-center bg-gray-100 rounded-md mb-4">
    <i className="ri-bar-chart-box-fill text-3xl"></i>
    </div>
    <h4 className="font-medium text-gray-700 text-lg mb-4">
      My Experience
    </h4>
    <p className="font-normal text-white text-md">
      With years of dedicated work across various industries and technologies, I bring a wealth of experience to the table. Tackling diverse challenges has honed my skills, and I'm ready to apply this expertise to your projects.
    </p>
  </div>

  <div className="bg-blue-400 px-8 py-10 rounded-md transition duration-300 ease-in-out hover:bg-blue-500">
    <div className="w-20 py-3 flex justify-center bg-gray-100 rounded-md mb-4">
    <i className="ri-edit-box-fill text-3xl"></i>
    </div>
    <h4 className="font-medium text-gray-700 text-lg mb-4">
      Practical Sandboxes
    </h4>
    <p className="font-normal text-gray-500 text-md">
      My collection of practical sandboxes serves as invaluable resources for development and testing. These environments facilitate experimentation and enable me to create robust, scalable solutions tailored to your needs.
    </p>
  </div>

  <div className="bg-blue-400 px-8 py-10 rounded-md transition duration-300 ease-in-out hover:bg-blue-500">
    <div className="w-20 py-3 flex justify-center bg-gray-100 rounded-md mb-4">
    <i className="ri-terminal-box-fill text-3xl"></i>
    </div>
    <h4 className="font-medium text-gray-700 text-lg mb-4">
      Successful Side Projects
    </h4>
    <p className="font-normal text-gray-500 text-md">
      <Link to="/about/team">
      Click me
      </Link>
    </p>
  </div>
</div>
</div>
  );
}
