import React from "react";
import { toast } from "react-toastify";
import { FaCertificate, FaLeaf, FaTruck, FaHandsHelping } from "react-icons/fa";

const BeVolunteer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Welcome to the Leaf Store Team! Please fill-up the form.");
    e.target.reset();
    setTimeout(() => {
      window.open("https://forms.gle/2xdpm6ACJHn2q3Yc8");
    }, 3000);
  };

  const benefits = [
    {
      icon: <FaTruck className="text-4xl text-green-600 mb-4" />,
      title: "Delivery Commission",
      desc: "Earn commission on every successful plant delivery you facilitate in your community.",
    },
    {
      icon: <FaCertificate className="text-4xl text-green-600 mb-4" />,
      title: "Certificate of Appreciation",
      desc: "Receive official recognition for your valuable contribution to a greener planet.",
    },
    {
      icon: <FaHandsHelping className="text-4xl text-green-600 mb-4" />,
      title: "Real Life Experience",
      desc: "Gain hands-on experience in environmental stewardship and community leadership.",
    },
    {
      icon: <FaLeaf className="text-4xl text-green-600 mb-4" />,
      title: "Sustainable Warrior",
      desc: "Earn the badge of a Sustainable Warrior and lead the change in your area.",
    },
  ];

  return (
    <>
      <title>Leaf Store - Be a Volunteer</title>
      <div className="min-h-screen poppins bg-white">
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center bg-green-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          {/* You might want to add a background image here with style={{ backgroundImage: ... }} */}
          <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
            <h1 className="font-bebas text-6xl md:text-8xl mb-4 tracking-wide">
              Join the Green Revolution
            </h1>
            <p className="text-xl md:text-2xl font-light text-green-50 max-w-2xl mx-auto">
              Become a changemaker in your community. Help us build a greener,
              more sustainable future, one plant at a time.
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 md:py-24 px-4 text-center max-w-4xl mx-auto">
          <h2 className="font-bebas text-5xl md:text-6xl text-green-900 mb-6">
            Why Volunteer With Us?
          </h2>
          <div className="h-1 w-24 bg-green-600 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Leaf Store, volunteers are the heart of our mission. Whether
            you're passionate about environmental conservation, love gardening,
            or simply want to give back to your society, there's a place for you
            here. Connect with nature, meet like-minded people, and make a
            tangible impact.
          </p>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-green-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-bebas text-5xl md:text-5xl text-green-900 mb-12 text-center">
              Volunteer Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-transparent hover:border-green-600 text-center group"
                >
                  <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-bebas text-2xl text-gray-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-green-100">
            <div className="bg-green-900 py-8 px-8 text-center">
              <h2 className="font-bebas text-4xl text-white tracking-wide">
                Become a Volunteer Today
              </h2>
              <p className="text-green-100 mt-2">
                Fill out the form below to get started
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 ml-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 234 567 890"
                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 ml-1">
                    Area of Interest
                  </label>
                  <select className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100 outline-none transition-all text-gray-600">
                    <option>Tree Planting</option>
                    <option>Delivery Assist</option>
                    <option>Community Education</option>
                    <option>Event Organizing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 ml-1">
                  Why do you want to join?
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Tell us a bit about yourself and your motivation..."
                  className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-1 py-4 text-xl font-bebas tracking-wide rounded-xl shadow-lg hover:shadow-green-500/30 transition-all transform hover:-translate-y-1"
              >
                Submit Application
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default BeVolunteer;
