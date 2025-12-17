import React from "react";
import Hero from "../Components/Hero";
import { Link, useLoaderData } from "react-router";
import PlantCard from "../Components/PlantCard";
import Container from "../Components/Container";
import PlantCareTips from "../Components/PlantCareTips";
import GreenExperts from "../Components/GreenExperts";
import EcoDecorIdeas from "../Components/EcoDecor";

const Home = () => {
  const plantData = useLoaderData();
  const plantDataSliced = plantData.slice(0, 4);
  //   console.log(plantDataSliced);
  return (
    <>
      <title>Leaf Store - Home</title>
      <div className="min-h-screen poppins">
        <div>
          <Hero></Hero>
        </div>
        <div className="my-5 md:my-10 ">
          <div className="font-bebas">
            <h1 className="text-5xl font-bebas text-center mb-12 text-green-800">
              Top Rated Indoor Plants
            </h1>
          </div>
          <Container className={"px-4"}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-6 ">
              {plantDataSliced.map((data) => (
                <PlantCard key={data.plantId} data={data}></PlantCard>
              ))}
            </div>
            <div className="my-10 flex justify-center">
              <Link
                to={"/plants"}
                className="btn text-white bg-green-800 btn-xl rounded-lg btn-wide"
              >
                View All
              </Link>
            </div>
          </Container>
        </div>
        <div>
          <PlantCareTips></PlantCareTips>
        </div>
        <div>
          <GreenExperts></GreenExperts>
        </div>
        <div>
          <EcoDecorIdeas></EcoDecorIdeas>
        </div>
      </div>
    </>
  );
};

export default Home;
