import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  const { _id, title } = service;
  return (
    <div>
      <h2 className="text-4xl text-center">Check Out Title: {title}</h2>

      <div className="card-body">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="form-control">
            <input
              type="text"
              placeholder="First Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Last Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Your Phone"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Your Email"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control">
          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered textarea-lg w-full mt-4"
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-secondary"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
