import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { img, title, price } = service;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt="Shoes"
          className="w-[314px] h-[208px] rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-between items-center">
          <p className="text-secondary font-bold">Price: ${price}</p>
          <FaArrowRight className="text-secondary"></FaArrowRight>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
