import React from "react";
import { Link } from "react-router";

const About = () => {
  const features = [
    {
      icon: "🌱",
      title: "Quality Guarantee",
      description:
        "Plants that arrive fresh and healthy, sourced from the best local growers",
    },
    {
      icon: "🌿",
      title: "Expert Support",
      description:
        "Care guides and personalized support to help your garden thrive",
    },
    {
      icon: "📦",
      title: "Secure Delivery",
      description:
        "Specialized packaging designed to protect your plants during transit",
    },
  ];

  const values = [
    { number: "100%", label: "Sustainable Sourcing" },
    { number: "24/7", label: "Customer Support" },
    { number: "10K+", label: "Happy Gardeners" },
  ];

  return (
    <div className="poppins bg-linear-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="about-bg-1 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-linear-to-b from-green-900/60 via-black/50 to-black/90"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-bebas text-7xl md:text-8xl mb-6 leading-tight">
            Curating Nature,
            <br />
            Delivering Life
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Your premier destination for premium indoor and outdoor plants
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-bebas text-5xl md:text-6xl text-green-900 mb-6">
              Our Mission
            </h2>
            <div className="h-1 w-24 bg-green-600 mx-auto"></div>
          </div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-8">
            At Green Nest, we're dedicated to making plant parenting accessible,
            convenient, and successful for everyone. In a concrete world, we
            bring the green to you.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            We source our inventory from the best local growers and sustainable
            nurseries, ensuring that every leaf is lush and every root system is
            strong before it leaves our care. From air-purifying indoor
            varieties to robust outdoor saplings, our diverse catalog is
            designed to suit every space and lifestyle.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-5xl md:text-6xl text-green-900 mb-6">
              Why Choose Green Nest?
            </h2>
            <div className="h-1 w-24 bg-green-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="font-bebas text-2xl text-green-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <p className="font-bebas text-6xl md:text-7xl text-green-600 mb-4">
                  {value.number}
                </p>
                <p className="text-xl text-gray-700 font-medium">
                  {value.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-16 md:py-24 px-4 bg-linear-to-r from-green-900 to-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-bebas text-5xl md:text-6xl mb-8">
            Our Commitment
          </h2>
          <p className="text-lg md:text-xl font-light mb-6 leading-relaxed">
            We understand that buying plants online requires trust. That's why
            every plant is carefully inspected, properly packaged, and backed by
            our commitment to your satisfaction.
          </p>
          <p className="text-lg md:text-xl font-light">
            Let's grow something beautiful together. Join thousands of happy
            gardeners who've transformed their spaces with Green Nest.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-bebas text-4xl md:text-5xl text-green-900 mb-8">
            Ready to Start Your Garden?
          </h2>
          <Link
            to={"/plants"}
            className="btn-1 px-8 py-4 text-lg font-semibold hover:bg-green-900 transition-all duration-300 rounded-lg"
          >
            Explore Our Plants
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
