import offshoreContainer from '../assets/img/offshore-container.png';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[700px] md:min-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Backdrop Image */}
      <img
        src={offshoreContainer}
        alt="Offshore Container"
        className="absolute inset-0 w-full h-full object-cover object-center z-0  brightness-70"
      />
      {/* Overlay for extra darkening */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10" />
      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg leading-tight max-w-4xl mx-auto">
          We Are A Leading Global Construction Group
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow">
          Make your dream project come true with Emporium. We deliver quality construction services for your vision.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-orange-400 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-orange-500 transition">
            Get Started
          </button>
          <a href="#contact" className="px-10 py-4 rounded-full font-bold text-lg border-2 border-orange-400 text-orange-400 bg-transparent hover:bg-orange-400 hover:text-white transition shadow-lg flex items-center justify-center">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
