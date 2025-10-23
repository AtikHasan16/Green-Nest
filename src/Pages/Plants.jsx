import React from "react";
import { useLoaderData } from "react-router";
import PlantCard from "../Components/PlantCard";
import Container from "../Components/Container";

const Plants = () => {
  const plantData = useLoaderData();
  return (
    <>
      <title>GreenNest - Plants</title>
      <div className=" p-4 md:p-10 ">
        <Container>
          <h1 className="text-7xl font-bold font-bebas text-green-800 mt-5 mb-10 text-center">
            Choose Your Plant
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 justify-center gap-10">
            {plantData.map((data) => (
              <PlantCard key={data.plantId} data={data}></PlantCard>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Plants;
