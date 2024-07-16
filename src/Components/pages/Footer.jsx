import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <h4 className="text-lg font-bold mb-4">FoodSpciy</h4>
            <p className="mb-4">
              Delicious food delivered to your doorstep.
            </p>
            <div className="flex space-x-4">
              <FaFacebook size={24} className="text-gray-400 hover:text-white" />
              <FaTwitter size={24} className="text-gray-400 hover:text-white" />
              <FaInstagram size={24} className="text-gray-400 hover:text-white" />
              <FaLinkedin size={24} className="text-gray-400 hover:text-white" />
            </div>
          </div>
          <div className="mb-8 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="text-sm md:text-base">
              <li className="mb-2 text-gray-400">About Us</li>
              <li className="mb-2 text-gray-400">Careers</li>
              <li className="mb-2 text-gray-400">Blog</li>
              <li className="mb-2 text-gray-400">Contact Us</li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul className="text-sm md:text-base">
              <li className="mb-2 text-gray-400">Help & Support</li>
              <li className="mb-2 text-gray-400">Partner with Us</li>
              <li className="mb-2 text-gray-400">Ride with Us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="text-sm md:text-base">
              <li className="mb-2 text-gray-400">Terms & Conditions</li>
              <li className="mb-2 text-gray-400">Privacy Policy</li>
              <li className="mb-2 text-gray-400">Cookie Policy</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-xs md:text-sm text-gray-500">&copy; {new Date().getFullYear()} FoodSpciy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
