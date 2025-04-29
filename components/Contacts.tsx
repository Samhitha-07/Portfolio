'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: ''});
  const [status, setStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message Sent!');
        setFormData({ name: '', email: '', message: ''});
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (_error) {
      setStatus('Error sending message. Please try again.');
    }
  };

  return (
    <section id="contact">
      <div className="container px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-black/85 text-center">
          Connect With Me <span className="text-6xl sm:text-7xl md:text-8xl text-orange-400 mb-4">.</span>
        </h2>

        <div className="grid grid-cols-1 mt-12 md:grid-cols-2 gap-8">
          {/* Left Column: Image */}
          <div className="relative w-full h-80 sm:h-96 md:h-full">
            <Image
              src="/assets/contact.png"
              alt="Contact Image"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>

          {/* Right Column: Contact Form */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold ">Let&apos;s work together!</h3>
            <p className="text-lg">
              Feel free to reach out for collaborations, inquiries, or just to say hi! I would love to hear from you.
            </p>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-[1rem]">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 mt-2 text-[1.1rem] bg-orange-50 text-orange-400 rounded-lg focus:outline-none"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[1rem]">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 mt-2 text-[1.1rem] bg-orange-50 text-orange-400 rounded-lg focus:outline-none"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[1rem]">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-3 mt-2 text-[1.1rem] bg-orange-50 text-orange-400 rounded-lg focus:outline-none"
                  placeholder="Your Message"
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-3 bg-orange-400 text-white rounded-lg font-semibold hover:bg-orange-500 focus:outline-none transition-all"
                >
                  Ping Me!
                </button>
              </div>

              {status && (
                <div className={`text-center mt-4 ${status === 'Message Sent!' ? 'text-green-600' : 'text-red-600'}`}>
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
