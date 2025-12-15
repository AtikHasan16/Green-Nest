import React, { useState } from "react";

const contactInfo = [
  {
    icon: "📍",
    title: "Visit Us",
    content: "123 Green Street, Garden City, GC 12345",
  },
  {
    icon: "📞",
    title: "Call Us",
    content: "+1 (555) 123-4567",
  },
  {
    icon: "✉️",
    title: "Email Us",
    content: "support@greennest.com",
  },
  {
    icon: "🕐",
    title: "Hours",
    content: "Mon - Fri: 9AM - 6PM\nSat: 10AM - 4PM",
  },
];
const faqs = [
  {
    q: "How long does delivery take?",
    a: "Standard delivery takes 3-5 business days. We offer express delivery options at checkout.",
  },
  {
    q: "What's your return policy?",
    a: "We offer a 30-day satisfaction guarantee. If your plant isn't thriving, we'll replace it free of charge.",
  },
  {
    q: "How do I care for my new plant?",
    a: "Each plant comes with a detailed care guide. You can also access our comprehensive care tips on our website or contact our experts.",
  },
  {
    q: "Do you ship internationally?",
    a: "Currently, we ship within the continental US. We're expanding internationally soon!",
  },
];

import Map from "../Components/Map";

const Contact = () => {
  const [gritted, setGritted] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    setGritted(true);
  };

  return (
    <div className="poppins bg-white">
      {/* Hero Section */}
      <section className="about-bg-1 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-linear-to-b from-green-900/60 via-black/50 to-black/90"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-bebas text-7xl md:text-8xl mb-6 leading-tight">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Have questions about our plants? We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className=" md:pt-10  pb-14 px-4 bg-gray-50">
        <h2 className="font-bebas text-5xl md:text-6xl text-green-900 mb-6 text-center">
          Get In touch
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{info.icon}</div>
                <h3 className="font-bebas text-2xl text-green-900 mb-3">
                  {info.title}
                </h3>
                <p className="text-gray-600 whitespace-pre-line">
                  {info.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-5xl md:text-6xl text-green-900 mb-6">
              Send us a Message
            </h2>
            <div className="h-1 w-24 bg-green-600 mx-auto"></div>
          </div>

          {gritted && (
            <div className="mb-8 p-6 bg-green-50 border-2 border-green-500 rounded-lg text-center">
              <p className="text-green-700 font-semibold text-lg">
                ✓ Thank you! We'll get back to you soon.
              </p>
            </div>
          )}

          <form onSubmit={handleForm} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600 transition-colors placeholder-gray-300"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600 transition-colors placeholder-gray-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600 transition-colors placeholder-gray-300"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600 transition-colors placeholder-gray-300"
                  placeholder="How can we help?"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                rows="6"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600 transition-colors resize-none placeholder-gray-300"
                placeholder="Tell us more about your inquiry..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full btn-1 py-4 text-lg font-semibold hover:bg-green-900 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="py-16 md:py-24 px-4 bg-linear-to-r from-green-900 to-green-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center text-white mb-12">
            <h2 className="font-bebas text-5xl md:text-6xl mb-6">
              Visit Our Collection Center
            </h2>
            <p className="text-lg md:text-xl font-light">
              Stop by and explore our plant collection in person
            </p>
          </div>
          <div className="bg-gray-300 rounded-xl overflow-hidden h-[600px] z-0 relative">
            <Map />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-5xl md:text-6xl text-green-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-24 bg-green-600 mx-auto"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-green-50 rounded-lg p-6 cursor-pointer hover:bg-green-100 transition-colors"
              >
                <summary className="font-bebas text-lg text-green-900 flex items-center justify-between">
                  {faq.q}
                  <span className="text-2xl">+</span>
                </summary>
                <p className="text-gray-700 mt-4 pt-4 border-t border-green-200">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
