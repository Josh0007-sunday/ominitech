const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#181818] to-[#232323] text-white pt-16 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Address */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-bold text-blue-400">Ominitech Synergy Limited</span>
          </div>
          <p className="text-gray-400 text-sm mb-2">Along New Airport Rd. Beside Dunamis Church<br />Port Harcourt<br />Rivers State</p>
          <p className="text-gray-400 text-sm mb-2">Phone: <a href="tel:+2348033429347" className="hover:text-blue-400 transition">+234 803 342 9347</a>, <a href="tel:+2349152249875" className="hover:text-blue-400 transition">+234 915 224 9875</a></p>
          <p className="text-gray-400 text-sm mb-2">Email: <a href="mailto:info@ominitechsynergy.com" className="hover:text-blue-400 transition">info@ominitechsynergy.com</a></p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="text-blue-400 hover:text-white transition"><i className="fab fa-facebook-f"></i>FB</a>
            <a href="#" className="text-blue-400 hover:text-white transition"><i className="fab fa-twitter"></i>TW</a>
            <a href="#" className="text-blue-400 hover:text-white transition"><i className="fab fa-linkedin-in"></i>LI</a>
          </div>
        </div>
        {/* Links */}
        <div>
          <h4 className="font-bold mb-3">Links</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Careers</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Features</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Demo the product</a></li>
          </ul>
        </div>
        {/* Policies */}
        <div>
          <h4 className="font-bold mb-3">Policies</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><a href="/policies#quality" className="hover:text-blue-400 transition">Quality Policy</a></li>
            <li><a href="/policies#safety" className="hover:text-blue-400 transition">Safety Policy</a></li>
            <li><a href="/policies#management" className="hover:text-blue-400 transition">Management Policy</a></li>
            <li><a href="/policies#community" className="hover:text-blue-400 transition">Community Relationship</a></li>
            <li><a href="/policies#training" className="hover:text-blue-400 transition">Training Policy</a></li>
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