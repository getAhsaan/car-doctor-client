import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3300/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
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
