import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900  py-24 flex flex-col items-center justify-center px-5">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white text-center drop-shadow-lg">Subscribe to our Newsletter</h2>
      <p className="text-lg md:text-xl text-white mb-10 text-center max-w-2xl">Get the latest updates, news, and special offers delivered straight to your inbox.</p>
      {submitted ? (
        <div className="text-green-600 font-semibold text-2xl">Thank you for subscribing!</div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl flex flex-col md:flex-row gap-4 items-center justify-center">
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="flex-1 px-6 py-4 rounded-full border-2 border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg bg-white shadow-md"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition shadow-lg"
          >
            Subscribe
          </button>
        </form>
      )}
    </section>
  );
};

export default Subscribe;
