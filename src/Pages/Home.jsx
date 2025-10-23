import React from "react";
import Hero from "../Components/Hero";
import { useLoaderData } from "react-router";
import PlantCard from "../Components/PlantCard";
import Container from "../Components/Container";
import PlantCareTips from "../Components/PlantCareTips";
import GreenExperts from "../Components/GreenExperts";
import EcoDecorIdeas from "../Components/EcoDecor";

const Home = () => {
  const plantData = useLoaderData();
  const plantDataSliced = plantData.slice(0, 6);
  //   console.log(plantDataSliced);
  return (
    <>
      <title>GreenNest - Home</title>
      <div className="min-h-screen poppins">
        <div>
          <Hero></Hero>
        </div>
        <div className="my-5 md:my-20">
          <h1 className="text-4xl font-bold text-center">
            Top Rated Indoor Plants
          </h1>
          <Container className={"px-4"}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-10 my-10">
              {plantDataSliced.map((data) => (
                <PlantCard key={data.plantId} data={data}></PlantCard>
              ))}
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
