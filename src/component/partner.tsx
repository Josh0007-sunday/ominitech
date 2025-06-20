import partner1 from '../assets/img/partners/1.png';
import partner2 from '../assets/img/partners/2.png';
import partner3 from '../assets/img/partners/3.png';
import partner4 from '../assets/img/partners/4.png';
import partner5 from '../assets/img/partners/5.png';
import partner6 from '../assets/img/partners/6.png';

const Partners = () => {
  const logos = [partner1, partner2, partner3, partner4, partner5, partner6];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-semibold text-gray-600 mb-10">
          Trusted by the world's best companies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="h-25 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
