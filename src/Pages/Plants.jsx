import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import PlantCard from "../Components/PlantCard";
import Container from "../Components/Container";

const Plants = () => {
  const plantData = useLoaderData();
  const [sortedPlant, setSortedPlant] = useState(plantData);
  const [sort, setSort] = useState("");
  // sorting logic can be added here in the future
  console.log(sort);

  useEffect(() => {
    let copyData = [...plantData];

    if (sort === "") {
      setSortedPlant(plantData);
    } else if (sort === "asc") {
      const sortedAsc = copyData.sort((a, b) => a.price - b.price);
      setSortedPlant(sortedAsc);
    } else if (sort === "desc") {
      const sortedDesc = copyData.sort((a, b) => b.price - a.price);
      setSortedPlant(sortedDesc);
    } else if (sort === "ratingAsc") {
      const sortedAsc = copyData.sort((a, b) => a.rating - b.rating);
      setSortedPlant(sortedAsc);
    } else if (sort === "ratingDesc") {
      const sortedDesc = copyData.sort((a, b) => b.rating - a.rating);
      setSortedPlant(sortedDesc);
    }

    setSortedPlant(copyData);
  }, [plantData, sort]);

  return (
    <>
      <title>GreenNest - Plants</title>

      <div className="p-4 md:p-10 ">
        <Container>
          <h1 className="text-7xl font-bold font-bebas text-green-800 mt-5 mb-10 text-center">
            Choose Your Plant
          </h1>

          <div className="flex flex-col lg:flex-row gap-8 poppins">
            {/* Sort Card - Left Side */}
            <div className="lg:w-64 ">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h2 className="font-bebas text-2xl text-green-900 mb-6">
                  Sort & Filter
                </h2>
                <div className="h-1 w-12 bg-green-600 mb-6"></div>

                {/* Sort by Price */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Sort by Price
                  </h3>
                  <div className="space-y-2">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        className="w-4 h-4 accent-green-600"
                        onChange={() => setSort("asc")}
                      />
                      <span className="ml-2 text-gray-700">Low to High</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        className="w-4 h-4 accent-green-600"
                        onChange={() => setSort("desc")}
                      />
                      <span className="ml-2 text-gray-700">High to Low</span>
                    </label>
                  </div>
                </div>
                {/* Sort by Rating */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Sort by Rating
                  </h3>
                  <div className="space-y-2">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        className="w-4 h-4 accent-green-600"
                        onChange={() => setSort("ratingAsc")}
                      />
                      <span className="ml-2 text-gray-700">Low to High</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        className="w-4 h-4 accent-green-600"
                        onChange={() => setSort("ratingDesc")}
                      />
                      <span className="ml-2 text-gray-700">High to Low</span>
                    </label>
                  </div>
                </div>

                <hr className="my-6" />

                {/* Reset Button */}
                <button
                  onClick={() => setSort("")}
                  className="w-full btn-1 py-2  hover:bg-green-900 transition-all rounded-lg"
                >
                  Reset Filters
                </button>
              </div>
            </div>

            {/* Plants Grid - Right Side */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {sortedPlant.map((data) => (
                  <PlantCard key={data.plantId} data={data}></PlantCard>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Plants;
