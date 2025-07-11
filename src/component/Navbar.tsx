import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] w-full fixed top-0 left-0 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-blue-400">Ominitech</span>
        </div>
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
          <li><a href="#about" className="hover:text-blue-400 transition">About Us</a></li>
          <li><Link to="/services" className="hover:text-blue-400 transition">Services</Link></li>
          <li><Link to="/projects" className="hover:text-blue-400 transition">Project</Link></li>
        </ul>
        <div className="hidden md:block">
          <Link to="/contact" className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-400 text-white px-5 py-2 rounded-full font-semibold shadow hover:from-blue-800 hover:to-blue-500 transition">Contact Us</Link>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#1a1a1a] w-full px-6 pb-6 pt-2 shadow-lg absolute top-full left-0 z-50 animate-fade-in">
          <ul className="flex flex-col space-y-4 text-white font-medium">
            <li><Link to="/" className="hover:text-blue-400 transition" onClick={() => setMobileOpen(false)}>Home</Link></li>
            <li><a href="#about" className="hover:text-blue-400 transition" onClick={() => setMobileOpen(false)}>About Us</a></li>
            <li><Link to="/services" className="hover:text-blue-400 transition" onClick={() => setMobileOpen(false)}>Services</Link></li>
            <li><Link to="/projects" className="hover:text-blue-400 transition" onClick={() => setMobileOpen(false)}>Project</Link></li>
            <li>
              <Link to="/contact" className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-400 text-white px-5 py-2 rounded-full font-semibold shadow hover:from-blue-800 hover:to-blue-500 transition block text-center" onClick={() => setMobileOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
