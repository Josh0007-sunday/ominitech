const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] w-full fixed top-0 left-0 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-orange-400">Ominitech</span>
        </div>
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li><a href="#home" className="hover:text-orange-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-orange-400 transition">About Us</a></li>
          <li><a href="#services" className="hover:text-orange-400 transition">Services</a></li>
          <li><a href="#projects" className="hover:text-orange-400 transition">Project</a></li>
        </ul>
        <div className="hidden md:block">
          <a href="#contact" className="bg-orange-400 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-orange-500 transition">Contact Us</a>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
