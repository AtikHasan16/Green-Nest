import React from "react";

import idea1Img from "../assets/images/eco_decor_idea1.jpg";
import idea2Img from "../assets/images/eco_decor_idea2.jpg";
import idea3Img from "../assets/images/eco_decor_idea3.jpg";

const ecoDecorIdeasData = [
  {
    image: idea1Img,
    title: "Living Walls & Vertical Gardens",
    description:
      "Maximize your green space without sacrificing floor area. Create stunning focal points with vertical planters, moss art, or a full-fledged living wall that purifies air and adds natural beauty.",
    alt: "Vertical garden on a wall",
  },
  {
    image: idea2Img,
    title: "Terrariums & Miniature Worlds",
    description:
      "Craft enchanting self-contained ecosystems in glass. Perfect for small spaces, terrariums bring a touch of the forest indoors and require minimal maintenance once established.",
    alt: "Closed terrarium with small plants",
  },
  {
    image: idea3Img,
    title: "Botanical Bookshelves & Plant Stands",
    description:
      "Integrate plants seamlessly into your existing decor. Use stylish plant stands, suspend hanging planters from shelves, or arrange a collection of pots to add vibrancy to your literary corner.",
    alt: "Bookshelf with various potted plants",
  },
];

const EcoDecorIdeas = () => {
  return (
    <section className="py-5 md:py-20 bg-gray-100 poppins">
      {" "}
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bebas text-center mb-6 text-green-800">
          Eco Decor Ideas: Style Your Space with Greenery
        </h2>
        <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-16">
          Transform your home into a verdant sanctuary. Discover innovative ways
          to incorporate plants into your interior design, boosting aesthetics
          and well-being.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {ecoDecorIdeasData.map((idea, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-xl border-t-4 border-green-700 text-center transition-shadow duration-300 hover:shadow-2xl"
            >
              <div className="w-full h-48 bg-green-200 rounded-md overflow-hidden mb-6 flex items-center justify-center">
                <img
                  src={idea.image}
                  alt={idea.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {idea.title}
              </h3>
              <p className="text-gray-600">{idea.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcoDecorIdeas;
