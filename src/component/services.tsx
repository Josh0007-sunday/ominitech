import vid from '../assets/vid.mp4';

const Services = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center py-24 px-4">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10 text-center drop-shadow-lg">Our Services in Action</h2>
      <div className="w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-800">
        <video
          controls
          className="w-full h-[400px] md:h-[600px] object-cover bg-black"
          poster="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
        >
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Services;
