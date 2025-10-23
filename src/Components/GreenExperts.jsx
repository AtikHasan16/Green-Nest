import React from "react";

// 🟢 NEW: Import your expert images
import expert01Img from "../assets/images/experts01.jpg"; // Assuming experts01.jpg, experts02.jpg etc.
import expert02Img from "../assets/images/experts02.jpg";
import expert03Img from "../assets/images/experts03.jpg";
import expert04Img from "../assets/images/experts04.jpg";

const expertData = [
  {
    // 🟢 UPDATED: Use the imported image path instead of initial
    image: expert01Img,
    name: "Dr. Evelyn Reed",
    specialization: "Horticultural Scientist",
    description:
      "Specializing in plant pathology and nutrient management for various indoor and outdoor species.",
  },
  {
    // 🟢 UPDATED: Use the imported image path
    image: expert02Img,
    name: "Marcus Chen",
    specialization: "Arborist & Tree Care Specialist",
    description:
      "Expert in urban forestry, tree health, pruning techniques, and sustainable tree management.",
  },
  {
    // 🟢 UPDATED: Use the imported image path
    image: expert03Img,
    name: "Sarah Davies",
    specialization: "Indoor Plant Stylist & Care Coach",
    description:
      "Focuses on interior plant design, personalized care routines, and humidity control for houseplants.",
  },
  {
    // 🟢 UPDATED: Use the imported image path
    image: expert04Img,
    name: "David Kim",
    specialization: "Organic Gardening Consultant",
    description:
      "Provides expertise in soil health, natural pest control, and sustainable gardening practices.",
  },
];

const GreenExperts = () => {
  return (
    <section className="py-5 md:py-20 bg-white poppins">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bebas text-center mb-16 text-green-800">
          Meet Our Green Experts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {expertData.map((expert, index) => (
            <div
              key={index}
              className="text-center bg-gray-50 p-6 rounded-lg shadow-xl border-t-4 border-green-800 transition-shadow duration-300 hover:shadow-2xl"
            >
              {/* 🟢 UPDATED: Using a proper <img> tag */}
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 flex items-center justify-center">
                <img
                  src={expert.image} // Use the image path from expertData
                  alt={expert.name} // Good for accessibility
                  className="w-full h-full object-cover" // Ensures image fills the circle and crops nicely
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {expert.name}
              </h3>
              <p className="text-green-700 font-semibold mb-3">
                {expert.specialization}
              </p>
              <p className="text-gray-600 text-sm">{expert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GreenExperts;
