import React from "react";
import rudal from "../assets/images/rudalking.png";
import backimg from "../assets/images/download.jpg";

export default function Home() {
  return (
    <div className="flex flex-col h-full justify-between bg-gradient-to-r from-slate-900 to-slate-700 text-white">
      <nav className="p-4 text-right">
        <button className="px-4 md:px-7 py-2 bg-gray-300 font-medium md:font-semibold text-gray-700 text-sm md:text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">
          Get my CV
        </button>
      </nav>

      <div className=" flex flex-col justify-center">
        <div className="flex justify-center ">
          <img
            src={rudal}
            alt="Rudal Kunwar"
            className="filter grayscale h-64 w-64 rounded-full shadow-lg"
          />
        </div>

        <h6 className="text-center pt-4 font-medium text-gray-300 text-lg md:text-2xl uppercase mb-2">
          Rudal Kunwar
        </h6>

        <h1 className="text-center font-normal text-gray-200 text-4xl md:text-7xl leading-none mb-8">
          Junior Fullstack Developer
        </h1>
      </div>
    </div>
  );
}
