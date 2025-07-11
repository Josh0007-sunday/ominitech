import offshoreContainer from '../assets/img/offshore-container.png';
import ominitech1 from '../assets/img/ominitech1.png';
import ominitech2 from '../assets/img/ominitech2.png';
import ominitech3 from '../assets/img/ominitech3.png';
import ominitech4 from '../assets/img/ominitech4.png';
import { useEffect, useState } from 'react';

const slides = [
  {
    image: offshoreContainer,
    h1: 'Leading Construction & Fabrication Experts',
    p: 'Ominitech Synergy Limited (OSL) specializes in high-quality office and accommodation cabins, focusing on innovation and durability.'
  },
  {
    image: ominitech1,
    h1: 'Versatile, Functional, and Aesthetic Spaces',
    p: 'We create spaces tailored to meet client needs, blending functionality with modern design.'
  },
  {
    image: ominitech2,
    h1: 'Integrity, Transparency, and Accountability',
    p: 'Our company culture is built on trust, continuous improvement, and operational efficiency.'
  },
  {
    image: ominitech3,
    h1: 'Commitment to Safety and Quality',
    p: 'We deliver products and services that meet or exceed client expectations, prioritizing safety and quality in every project.'
  },
  {
    image: ominitech4,
    h1: 'Strong Client Relationships & Community Focus',
    p: 'We foster strong client relationships and act as a responsible corporate citizen in every community we serve.'
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(current);
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prevIdx) => (prevIdx + 1) % slides.length);
        setAnimating(false);
      }, 600); // Animation duration
    }, 12000);
    return () => clearInterval(interval);
  }, [current]);

  const { image, h1, p } = slides[current];
  const { image: prevImage, h1: prevH1, p: prevP } = slides[prev];

  return (
    <section className="relative w-full min-h-[700px] md:min-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Sliding Images */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={prevImage}
          alt="Prev Slide"
          className={`absolute inset-0 w-full h-full object-cover object-center brightness-70 transition-transform duration-700 will-change-transform ${animating ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'}`}
          style={{ zIndex: 1 }}
        />
        <img
          src={image}
          alt="Current Slide"
          className={`absolute inset-0 w-full h-full object-cover object-center brightness-70 transition-transform duration-700 will-change-transform ${animating ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
          style={{ zIndex: 2 }}
        />
      </div>
      {/* Overlay for extra darkening */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10" />
      {/* Sliding Text */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full px-6 text-center min-h-[350px] md:min-h-[420px]" style={{top: 0, bottom: 0, margin: 'auto'}}>
        <div className="relative h-40 md:h-56 w-full max-w-4xl mx-auto overflow-visible flex flex-col justify-center">
          <div className={`absolute inset-0 transition-transform duration-700 will-change-transform flex flex-col items-center justify-center ${animating ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'}`} style={{ zIndex: 1 }}>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 text-white drop-shadow-lg leading-tight">
              {prevH1}
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-gray-200 mb-6 md:mb-8 drop-shadow">
              {prevP}
            </p>
          </div>
          <div className={`absolute inset-0 transition-transform duration-700 will-change-transform flex flex-col items-center justify-center ${animating ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`} style={{ zIndex: 2 }}>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 text-white drop-shadow-lg leading-tight">
              {h1}
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-gray-200 mb-6 md:mb-8 drop-shadow">
              {p}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-2 md:mt-6">
          <a href="#contact" className="px-14 py-6 rounded-full font-bold text-2xl border-2 border-blue-400 text-blue-400 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-400 hover:from-blue-800 hover:to-blue-500 hover:text-white transition shadow-lg flex items-center justify-center">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
