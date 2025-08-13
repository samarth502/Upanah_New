import React from 'react';
// Assuming you have an SVG or image for your brand logo
// import BrandLogo from './path/to/your/logo.svg';

const FooterOne = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 px-6 relative overflow-hidden">
      {/* Background Gradient & Blob Effect for visual interest */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-95"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-1500"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 border-b border-gray-700 pb-12">
          
          {/* Brand Info & Newsletter Section */}
          <div className="col-span-1 lg:col-span-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2">
                {/* Replace with your brand logo */}
                <h2 className="text-3xl font-extrabold text-white">Shoe<span className="text-green-400">Sphere</span></h2>
              </div>
              <p className="mt-4 text-sm max-w-sm">
                Step into style and comfort. We are dedicated to providing the perfect fit for every journey.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-bold text-white mb-4">Join Our Community</h4>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 rounded-l-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition-colors duration-200"
                />
                <button 
                  type="submit" 
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-r-lg transition-all duration-300 transform hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Navigation Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 col-span-2">
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Shop</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-green-400 transition-colors duration-200">Men's</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors duration-200">Women's</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors duration-200">Kids'</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors duration-200">Sale</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors duration-200">New Arrivals</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Help</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-green-400 transition-colors duration-200">Contact Us</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors duration-200">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors duration-200">FAQs</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors duration-200">Order Tracking</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-green-400 transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors duration-200">Careers</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors duration-200">Press</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors duration-200">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-8">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-white transition-colors duration-200">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors duration-200">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors duration-200">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors duration-200">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
          
          <div className="mt-4 md:mt-0 text-gray-500 text-sm">
            © {new Date().getFullYear()} ShoeSphere. All rights reserved.
          </div>

          <div className="mt-4 md:mt-0 flex space-x-2">
            {/* Payment Method Icons - replace with actual svgs or images */}
            <img src="https://via.placeholder.com/40x25?text=Visa" alt="Visa" className="h-6" />
            <img src="https://via.placeholder.com/40x25?text=Mastercard" alt="Mastercard" className="h-6" />
            <img src="https://via.placeholder.com/40x25?text=PayPal" alt="PayPal" className="h-6" />
            <img src="https://via.placeholder.com/40x25?text=Amex" alt="American Express" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;