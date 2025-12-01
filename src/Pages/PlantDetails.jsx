import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";

const PlantDetailPage = () => {
  const { id } = useParams();
  const data = useLoaderData();
  //   console.log(id, data);

  const [plantData, setPlantData] = useState({});

  useEffect(() => {
    const singleData = data.find((data) => data.plantId == id);
    setPlantData(singleData);
  }, [data, id]);

  // Use your new custom keys
  const { plantName, price, rating, image, availableStock } = plantData;
  // console.log(plantData);

  const showSuccessToast = (name) => {
    toast.success(`Consultation booked for ${name}! Check your email.`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const clientName = e.target.name.value;
    showSuccessToast(clientName);
    e.target.reset();
  };

  return (
    <>
      <title>GreenNest - Plant Details</title>
      <div className="min-h-screen  poppins py-16">
        <div className="container mx-auto px-4">
          <div className="  transition">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              <div className="col-span-2">
                <img
                  src={image}
                  alt={plantName}
                  className="w-full h-194 rounded-xl shadow-lg object-cover"
                />
              </div>

              {/* RIGHT COLUMN: DETAILS AND FORM */}
              <div className="lg:col-span-2 space-y-8">
                {/* PLANT DETAILS */}
                <div className="bg-white p-8 rounded-2xl">
                  <h1 className="text-4xl font-bold text-green-900 mb-4">
                    {plantName}
                  </h1>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-3xl font-bold text-green-800">
                      ${price}
                    </span>
                    <div className=" flex items-center">
                      {/* Display rating stars */}
                      {"⭐".repeat(Math.round(rating))}

                      <span className="ml-2">({rating})</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {plantData.description}
                  </p>

                  {/* STOCK AND STATIC INFO */}
                  <div className="space-y-3 p-4  rounded-lg">
                    <p
                      className={`font-semibold ${
                        !availableStock ? "text-red-600" : "text-green-700"
                      }`}
                    >
                      Stock:{" "}
                      {!availableStock
                        ? "Out of Stock"
                        : `${availableStock} available`}
                    </p>
                    {/* Additional static props from your JSON */}
                    <p className="">
                      <strong>Category:</strong> {plantData.category}
                    </p>
                    <p className="">
                      <strong>Care Level:</strong> {plantData.careLevel}
                    </p>
                    <p className="">
                      <strong>Provider:</strong> {plantData.providerName}
                    </p>
                  </div>
                  <div className="space-y-3 p-4 my-4  rounded-lg">
                    <h1 className="text-xl font-bold text-center text-green-800">
                      Quick Care Guide Essentials
                    </h1>

                    <div className="">
                      <h3 className="font-bold text-yellow-500">
                        💡 Light Needs
                      </h3>{" "}
                      <p className="text-gray-600">
                        Direct sun is reserved only for cacti and succulents, as
                        it will scorch the leaves of most tropical varieties.
                      </p>
                    </div>
                    <div className="">
                      <h3 className="font-bold text-sky-400">
                        💧 Watering Rules
                      </h3>{" "}
                      <p className="text-gray-600">
                        Always ensure the pot has drainage holes to prevent root
                        rot. Never water on a schedule; water when the plant
                        needs it.
                      </p>
                    </div>
                    <div className="">
                      <h3 className="font-bold text-rose-600">
                        🍎 Food & Soil
                      </h3>{" "}
                      <p className="text-gray-600">
                        Use a well-draining potting mix. Fertilize only during
                        the active growing season (Spring/Summer) using a liquid
                        fertilizer at half-strength once per month. Stop feeding
                        completely in the fall and winter.
                      </p>
                    </div>
                  </div>
                </div>

                {/* BOOK CONSULTATION FORM */}
                <div className="p-6 bg-green-50 rounded-lg shadow-inner">
                  <h2 className="text-4xl text-center font-bebas text-green-800 mb-4">
                    Book a Care Consultation
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block  font-medium text-gray-700 mb-1"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Jane Doe"
                        required
                        className="w-full p-3 border-2 border-green-800 rounded-lg placeholder-gray-400"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block  font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="jane@example.com"
                        required
                        className="w-full p-3 border-2 border-green-800 rounded-lg placeholder-gray-400"
                      />
                    </div>

                    <button type="submit" className=" btn btn-block btn-1 py-6">
                      Book Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlantDetailPage;
