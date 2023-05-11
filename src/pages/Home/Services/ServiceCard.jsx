import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, title, price } = service;
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
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-circle btn-outline btn-secondary"><FaArrowRight className="text-white"></FaArrowRight></button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
