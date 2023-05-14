import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import OrderRow from "../OrderRow/OrderRow";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  // console.log(orders);

  const url = `http://localhost:3300/orders?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [url]);

  // handle Delete
  const handleDelete = (id) => {
    const proceed = confirm("Are sure you want to delete?");
    if (proceed) {
      fetch(`http://localhost:3300/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successful");
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  // handle confirm order
  const handleConfirmOrders = (id) => {
    fetch(`http://localhost:3300/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("modified successful");
          const remaining = orders.filter((order) => order._id !== id);
          const updated = orders.find((order) => order._id === id);
          updated.status = "confirm";
          const newOrders = [updated, ...remaining];
          setOrders(newOrders);
        }
      });
  };

  return (
    <div>
      <h2 className="text-center text-3xl my-4">My Orders: {orders.length}</h2>
      <div className="overflow-x-auto w-full my-8">
        <table className="table w-full">
          {/* head */}
          {/* <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead> */}
          <tbody>
            {orders.map((order) => (
              <OrderRow
                key={order._id}
                order={order}
                handleDelete={handleDelete}
                handleConfirmOrders={handleConfirmOrders}
              ></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
