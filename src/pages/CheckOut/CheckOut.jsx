import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const { _id, title, price } = service;
  const { user } = useContext(AuthContext);

  const handleOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const phoneNumber = form.phoneNumber.value;
    const email = user?.email || form.email.value;
    const message = form.message.value;

    const order = {
      customerName: firstName + " " + lastName,
      email,
      phoneNumber,
      service: _id,
      price: price,
      message,
    };
    console.log(order);
  };
  return (
    <div>
      <h2 className="text-4xl text-center">Check Out Title: {title}</h2>

      <div className="card-body">
        <form onSubmit={handleOrder}>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="form-control">
              <input
                type="text"
                defaultValue={user?.displayName}
                name="firstName"
                placeholder="First Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                defaultValue={user?.displayName}
                name="lastName"
                placeholder="Last Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                name="phoneNumber"
                placeholder="Your Phone"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                placeholder="Your Email"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control">
            <textarea
              placeholder="Your Message"
              name="message"
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
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
