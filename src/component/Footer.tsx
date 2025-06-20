const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#181818] to-[#232323] text-white pt-16 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Address */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-bold text-orange-400">ConstructEdge</span>
          </div>
          <p className="text-gray-400 text-sm mb-2">921 West 45th Street<br />New York, NY</p>
          <p className="text-gray-400 text-sm mb-2">Phone: (123) 123-4567</p>
          <p className="text-gray-400 text-sm mb-2">Email: info@yoursite.com</p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="text-orange-400 hover:text-white transition"><i className="fab fa-facebook-f"></i>FB</a>
            <a href="#" className="text-orange-400 hover:text-white transition"><i className="fab fa-twitter"></i>TW</a>
            <a href="#" className="text-orange-400 hover:text-white transition"><i className="fab fa-linkedin-in"></i>LI</a>
          </div>
        </div>
        {/* Links */}
        <div>
          <h4 className="font-bold mb-3">Links</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><a href="#" className="hover:text-orange-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">About</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Careers</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Features</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Demo the product</a></li>
          </ul>
        </div>
        {/* Programs */}
        <div>
          <h4 className="font-bold mb-3">Programs</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><a href="#" className="hover:text-orange-400 transition">Private Lessons</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Group Classes</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Online Lessons</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Summer Camps</a></li>
          </ul>
        </div>
        {/* Copyright */}
        <div className="flex flex-col justify-end">
          <div className="text-gray-500 text-xs mt-8 md:mt-0">&copy; {new Date().getFullYear()} ConstructEdge. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 