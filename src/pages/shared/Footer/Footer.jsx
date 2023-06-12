import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Company Name</h3>
            <p className="text-sm">123 Street, City</p>
            <p className="text-sm">Country</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p className="text-sm">Email: info@example.com</p>
            <p className="text-sm">Phone: +1234567890</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex">
              <a
                href="#"
                className="text-white mr-2 hover:text-gray-400 transition-colors duration-300"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-white mr-2 hover:text-gray-400 transition-colors duration-300"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-400 transition-colors duration-300"
              >
                Instagram
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <h3 className="text-lg font-bold mb-2">Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r-lg transition-colors duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
