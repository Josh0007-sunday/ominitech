import service1 from '../assets/img/services/service1.png';
import service2 from '../assets/img/services/service2.png';
import service3 from '../assets/img/services/service3.png';

const Mission = () => {
  return (
    <section className="w-full py-24 bg-white" id="about">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 px-4 md:px-16">
        {/* Modern Staggered Service Images */}
        <div className="flex-1 flex justify-center md:justify-start w-full">
          <div className="relative w-full max-w-sm md:max-w-[38rem] h-96 md:h-[44rem]">
            <img src={service1} alt="Service 1" className="absolute top-0 left-0 w-48 h-48 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl z-30 border-4 border-white" style={{boxShadow: '0 20px 60px rgba(0,0,0,0.18)'}} />
            <img src={service2} alt="Service 2" className="absolute top-20 right-0 md:top-40 md:left-40 w-48 h-48 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl z-20 border-4 border-white" style={{boxShadow: '0 20px 60px rgba(0,0,0,0.16)'}} />
            <img src={service3} alt="Service 3" className="absolute bottom-0 left-10 md:top-80 md:left-20 w-48 h-48 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl z-10 border-4 border-white" style={{boxShadow: '0 20px 60px rgba(0,0,0,0.14)'}} />
          </div>
        </div>
        {/* Mission Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-900">Our Mission</h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Since 1990, our mission has been to deliver top-quality construction services, ensuring safety, innovation, and client satisfaction in every project.
          </p>
          <button className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-400 text-white px-8 py-4 md:px-10 md:py-5 rounded-lg font-semibold hover:from-blue-800 hover:to-blue-500 transition text-lg md:text-xl">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default Mission;

