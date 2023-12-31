import React from "react";

export default function About() {
  return (
      <div className="container w-full px-4 bg-gray-500">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 px-8 py-10 rounded-md">
            <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
              <i data-feather="activity"></i>
            </div>
            <h4 className="font-medium text-gray-700 text-lg mb-4">
              High experience
            </h4>
            <p className="font-normal text-gray-500 text-md">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor <br /> incididunt ut labore et dolore magna
              aliqua.
            </p>
          </div>

          <div className="bg-gray-50 px-8 py-10 rounded-md">
            <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
              <i data-feather="codesandbox"></i>
            </div>
            <h4 className="font-medium text-gray-700 text-lg mb-4">
              Useful sandboxes
            </h4>
            <p className="font-normal text-gray-500 text-md">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor <br /> incididunt ut labore et dolore magna
              aliqua.
            </p>
          </div>

          <div className="bg-gray-50 px-8 py-10 rounded-md">
            <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
              <i data-feather="coffee"></i>
            </div>
            <h4 className="font-medium text-gray-700 text-lg mb-4">
              Success side projects
            </h4>
            <p className="font-normal text-gray-500 text-md">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor <br /> incididunt ut labore et dolore magna
              aliqua.
            </p>
          </div>
        </div>
      </div>
  );
}
