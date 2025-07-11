import React from 'react';

const policyDetails = {
  quality: {
    title: 'Quality Policy',
    description: `Quality is at the core of everything we do at Ominitech Synergy Limited. We are committed to delivering products and services that meet or exceed our clients' expectations. Our quality policy is based on the principles of continuous improvement, customer focus, and compliance with industry standards. We implement rigorous`
  },
  safety: {
    title: 'Safety Policy',
    description: `The safety of our employees, clients, and the communities in which we operate is our highest priority. Ominitech Synergy Limited is dedicated to maintaining a safe and healthy work environment. We comply with all relevant health and safety regulations and continually assess and improve our safety protocols. Our safety measures include regular training, risk assessments, and the provision of appropriate personal protective equipment. We are committed to preventing accidents and incidents through proactive safety management and fostering a culture of safety awareness.`
  },
  management: {
    title: 'Management Policy',
    description: `Ominitech Synergy Limited's management policy is centered on integrity, transparency, and accountability. We are committed to fostering a culture of continuous improvement and innovation. Our management practices are designed to ensure operational efficiency, enhance employee engagement, and drive sustainable growth. We believe in empowering our team through professional development, promoting a collaborative work environment, and adhering to ethical business practices.`
  },
  community: {
    title: 'Community Relationship',
    description: `Ominitech values strong relationships with the communities in which we operate. We engage in open dialogue, support local initiatives, and strive to make a positive impact through responsible business practices and community involvement.`
  },
  training: {
    title: 'Training Policy',
    description: `We believe that ongoing training is essential for maintaining excellence. Ominitech invests in the professional development of our team, offering regular training programs to keep our staff updated on the latest industry standards, technologies, and safety practices.`
  }
};

const Policies = () => (
  <section className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center py-24 px-4">
    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-10 text-center drop-shadow-lg">Our Company Policies</h1>
    <div className="w-full max-w-3xl space-y-16">
      {Object.entries(policyDetails).map(([key, { title, description }]) => (
        <div key={key} id={key} className="bg-gray-800 rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">{title}</h2>
          <p className="text-white text-lg">{description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Policies; 