import React from "react";
import { BiStar } from "react-icons/bi";
import { Link } from "react-router";

const PlantCard = ({ data }) => {
  const { plantName, price, rating, image, plantId } = data;
  return (
    <div>
      <div className="card bg-base-100 shadow-lg shadow-gray-300 h-fit transition duration-300 hover:scale-105 poppins">
        <figure className="h-60">
          <img
            src={image}
            className="object-cover w-full h-full"
            alt="plants"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{plantName}</h2>
          <p className="flex items-center font-semibold"> Price : ${price}</p>
          <p className="flex items-center font-semibold gap-1">
            {" "}
            Ratings : {rating}
            <BiStar size={16}></BiStar>
          </p>
          <div className="card-actions justify-end">
            <Link to={`/details/${plantId}`} className="btn btn-1">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
