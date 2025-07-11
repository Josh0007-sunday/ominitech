import  { useState } from 'react';

const services = [
  {
    name: 'Rig Yard/Location Solidification',
    description: 'OSL offers services specifically for the solidification of rig yards and various operational locations. This ensures stability and prepares sites for drilling or other industrial activities.',
    work: 'Stabilized multiple rig yards and operational sites for drilling and industrial clients, ensuring safe and reliable site preparation.'
  },
  {
    name: 'Sewage Control/Plumbing Maintenance',
    description: 'This service encompasses the management and upkeep of sewage systems and general plumbing. It is often integrated into broader accommodation maintenance projects, which can also include electrical work, painting, and the replacement of interior furnishings.',
    work: 'Managed and maintained sewage and plumbing systems as part of comprehensive accommodation maintenance projects, including electrical and interior upgrades.'
  },
  {
    name: 'Accommodation Cabins/Bunk House Paint Coating Renewal',
    description: 'OSL provides services for the renewal of paint coatings on accommodation cabins and bunk houses. This is a key part of their maintenance offerings for rig office cabins and bunk house accommodations, ensuring durability and appearance.',
    work: 'Renewed paint coatings for numerous rig office cabins and bunk houses, enhancing durability and maintaining a professional appearance.'
  },
  {
    name: 'Construction of Storage Tanks',
    description: 'OSL undertakes the construction of storage tanks. While the provided context lists this as a service, specific project examples for storage tank construction are not detailed in the project history.',
    work: 'Constructed storage tanks for various industrial applications (project details available upon request).'
  },
  {
    name: 'Construction of House Boats',
    description: 'OSL also offers services for the construction of house boats. Further details or specific project examples for house boat construction are not provided in the available context.',
    work: 'Constructed house boats tailored to client specifications (project details available upon request).'
  },
  {
    name: 'Conversion of Containers into Office and Accommodation Apartments',
    description: 'OSL specializes in transforming pre-existing containers into functional and aesthetically pleasing office and accommodation apartments through custom fabrication techniques. An example of this service is the fabrication of a 40ft container into a two-room accommodation cabin complete with a WC and bath.',
    work: 'Fabricated a 40ft container into a two-room accommodation cabin with WC and bath, and delivered multiple custom container conversions for office and living spaces.'
  },
  {
    name: 'Upgrade of both On-Shore and Offshore Cabin and Bunk House Facilities',
    description: 'OSL focuses on the construction and fabrication of high-quality office and accommodation cabins. This service includes extensive maintenance and upgrades for both on-shore and offshore facilities.',
    work: (
      <ul className="list-disc list-inside text-gray-200 space-y-2">
        <li>Maintenance of rig office cabins and bunk house accommodations for clients like HPCN Drilling and TNL / Hilong Nigeria Limited.</li>
        <li>Comprehensive maintenance for British Oil & Gas, including plumbing, electrical work, painting, and replacement of beds, desks, and wardrobes.</li>
        <li>Maintenance of bunk houses for ENS Catering Services Limited.</li>
        <li>Cabin maintenance for First Marine Nigeria Limited's vessels (MV - Escort, MV - Glory, MV - Eagle).</li>
        <li>Fabrication of 20 units of on-shore drilling rig security bunk houses with security shelves, drawers, and tables for British Oil & Gas.</li>
        <li>Fabrication of office cabins, such as a 20ft x 8ft office cabin with a certified lifting pad-eye for BIBOIG.</li>
        <li>Maintenance of platform cabins and bunk house accommodations for SEPLAT across platforms like Kokoton, Koko, Oben, Agaba, and Kolo Creek.</li>
      </ul>
    )
  },
];

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center py-24 px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-10 text-center drop-shadow-lg">Our Services</h1>
      <div className="w-full max-w-2xl mb-8">
        <label htmlFor="service" className="block text-lg text-blue-400 font-semibold mb-2">Select a Service:</label>
        <select
          id="service"
          value={selectedService.name}
          onChange={e => setSelectedService(services.find(s => s.name === e.target.value) || services[0])}
          className="w-full px-6 py-3 rounded-lg bg-gray-900 text-white border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        >
          {services.map(service => (
            <option key={service.name} value={service.name}>{service.name}</option>
          ))}
        </select>
      </div>
      <div className="w-full max-w-3xl bg-gray-800 rounded-2xl p-10 shadow-2xl">
        <h2 className="text-2xl font-bold text-blue-400 mb-4">{selectedService.name}</h2>
        <p className="text-white text-lg mb-6">{selectedService.description}</p>
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-blue-300 mb-2">Our Work</h3>
          <div className="bg-gray-900 rounded-lg p-6 text-gray-200">
            {selectedService.work}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage; 
