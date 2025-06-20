import { useState } from 'react';
import ominitech1 from '../../assets/img/ominitech1.png';
import ominitech2 from '../../assets/img/ominitech2.png';
import ominitech3 from '../../assets/img/ominitech3.png';
import ominitech4 from '../../assets/img/ominitech4.png';
import ominitech5 from '../../assets/img/ominitech5.png';
import ominitech6 from '../../assets/img/ominitech6.png';
import ominitech7 from '../../assets/img/ominitech7.png';
import ominitech8 from '../../assets/img/ominitech8.png';

const images = [ominitech1, ominitech2, ominitech3, ominitech4, ominitech5, ominitech6, ominitech7, ominitech8];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="w-full  py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="relative w-full h-[30rem] rounded-xl overflow-hidden shadow-2xl mb-6">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          />
          <button onClick={goToPrevious} className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/75 transition z-10">
            &#10094;
          </button>
          <button onClick={goToNext} className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/75 transition z-10">
            &#10095;
          </button>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-full h-24 rounded-lg overflow-hidden cursor-pointer border-4 ${
                currentIndex === index ? 'border-orange-500' : 'border-transparent'
              } transition-all duration-300`}
              onClick={() => setCurrentIndex(index)}
            >
              <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slideshow;