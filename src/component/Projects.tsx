import React from 'react';

const projects = [
  'High-rise Office Complex',
  'Luxury Residential Towers',
  'Industrial Warehouses',
  'Shopping Malls',
  'Infrastructure Development',
];

const services = [
  'General Contracting',
  'Design & Build',
  'Project Management',
  'Renovation & Remodeling',
  'Sustainable Construction',
  'Consulting Services',
];

const Projects = () => (
  <section className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center py-24 px-4">
    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-10 text-center drop-shadow-lg">Our Projects & Services</h1>
    <div className="w-full max-w-4xl grid md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-2xl font-bold text-blue-400 mb-4">Projects</h2>
        <ul className="list-disc list-inside text-white text-lg space-y-2">
          {projects.map((project, idx) => (
            <li key={idx}>{project}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-blue-400 mb-4">Services</h2>
        <ul className="list-disc list-inside text-white text-lg space-y-2">
          {services.map((service, idx) => (
            <li key={idx}>{service}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Projects; 