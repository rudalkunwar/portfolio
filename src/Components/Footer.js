import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-500 py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <h3 className="font-bold text-xl mb-4">Contact Us</h3>
          <p className="mb-4"><i className="fas fa-map-marker-alt mr-2"></i>Bharatpur-15 Chitwan, Nepal</p>
          <p className="mb-4"><i className="fas fa-phone mr-2"></i>98xxxxxxxxx</p>
          <p className="mb-4"><i className="fas fa-envelope mr-2"></i>info@gcs.com</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
          <h3 className="font-bold text-xl mb-4">Links</h3>
          <ul className="list-reset leading-normal">
            <li className="hover:text-blue-600  mb-2"><Link to="/About">About Us</Link ></li>
            <li className="hover:text-blue-600  mb-2"><Link  to="/Service">Services</Link ></li>
            <li className="hover:text-blue-600  mb-2"><Link  to="#">FAQ</Link ></li>
            <li className="hover:text-blue-600  mb-2"><Link  to="Contact">Contact Us</Link ></li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
          <h3 className="font-bold text-xl mb-4">Follow Us</h3>
          <ul className="list-reset flex justify-start">
            <li><a href="https://www.facebook.com/" className="text-gray-500 hover:text-blue-600 px-3"><i className="fab fa-facebook-f text-2xl"></i></a></li>
            <li><a href="https://www.x.com/" className="text-gray-500 hover:text-blue-600 px-3"><i className="fa-brands fa-x-twitter text-2xl"></i></a></li>
            <li><a href="https://www.instagram.com/" className="text-gray-500 hover:text-blue-600 px-3"><i className="fab fa-instagram text-2xl"></i></a></li>
            <li><a href="https://www.linkedin.com/" className="text-gray-500 hover:text-blue-600 px-3"><i className="fab fa-linkedin-in text-2xl"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8">
        <p className="text-center text-gray-600">&copy; 2023 ruzalkunwar@gmail.com, All rights reserved.</p>
      </div>
    </footer>
  );
}
