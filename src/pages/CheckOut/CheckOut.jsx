import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
  const service = useLoaderData();
  const { _id, title, price, img, service_id } = service;
  // console.log('service, ', service);
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
      img,
      phoneNumber,
      id: _id,
      service: service_id,
      price: price,
      message,
      title,
    };
    console.log(order);

    fetch("https://car-doctor-server-getahsaan.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your order has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
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
