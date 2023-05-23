import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [asc, setAsc] = useState(true);

  useEffect(() => {
    fetch(`https://car-doctor-server-psi-three.vercel.app/services?sort=${asc ? "asc" : "desc"}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [asc]);

  return (
    <div>
      <div className="space-y-4 text-center my-8">
        <h3 className="text-xl font-bold text-orange-700">Service</h3>
        <h2 className="text-4xl font-bold">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="text-center my-4">
        <button
          className="btn btn-primary"
          onClick={() => setAsc(!asc)}
        >
          Price : {asc ? "low to high" : "high to low"}
        </button>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service._id}
            service={service}
          ></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
