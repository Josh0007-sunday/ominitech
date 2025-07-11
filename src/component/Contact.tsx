import React, { useState } from 'react';

const companyInfo = {
  address: [
    'Along New Airport Rd. Beside Dunamis Church',
    'Port Harcourt',
    'Rivers State'
  ],
  phones: ['+234 803 342 9347', '+234 915 224 9875'],
  email: 'info@ominitechsynergy.com',
  website: 'www.ominitechsynergy.com'
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center py-24 px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-10 text-center drop-shadow-lg">Contact Us</h1>
      <div className="w-full max-w-4xl bg-gray-800 rounded-2xl p-10 shadow-2xl flex flex-col md:flex-row gap-10">
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="px-6 py-4 rounded-lg bg-gray-900 text-white border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="px-6 py-4 rounded-lg bg-gray-900 text-white border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="px-6 py-4 rounded-lg bg-gray-900 text-white border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="px-6 py-4 rounded-lg bg-gray-900 text-white border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-400 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-blue-800 hover:to-blue-500 transition shadow-lg mt-2"
          >
            {submitted ? 'Message Sent!' : 'Send Message'}
          </button>
        </form>
        <div className="flex-1 flex flex-col gap-6 justify-center text-white">
          <div>
            <h2 className="text-xl font-bold text-blue-400 mb-2">Contact Information</h2>
            <div className="mb-4">
              <div className="font-semibold">Address:</div>
              {companyInfo.address.map((line, idx) => (
                <div key={idx} className="text-gray-300">{line}</div>
              ))}
            </div>
            <div className="mb-4">
              <div className="font-semibold">Phone:</div>
              {companyInfo.phones.map((phone, idx) => (
                <div key={idx} className="text-gray-300">
                  <a href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-blue-400 transition">{phone}</a>
                </div>
              ))}
            </div>
            <div className="mb-4">
              <div className="font-semibold">Email:</div>
              <a href={`mailto:${companyInfo.email}`} className="text-gray-300 hover:text-blue-400 transition">{companyInfo.email}</a>
            </div>
            <div>
              <div className="font-semibold">Website:</div>
              <a href={`https://${companyInfo.website}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition">{companyInfo.website}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 