import React from "react";

const OrderRow = ({ order, handleDelete, handleConfirmOrders }) => {
  const { _id, img, title, price, phoneNumber, service, id, status } = order;

  return (
    <tr className="flex justify-between items-center text-center text-xl">
      <td>
        <img
          src={img}
          className="w-24 h-24 rounded-xl"
          alt=""
        />
      </td>
      <td>
        <div className="flex flex-col">
          {title}{" "}
          <span className="text-sm">
            Service : {service} <br /> ID: {id}
          </span>
        </div>
      </td>
      <td>{price}</td>
      <td>{phoneNumber}</td>
      <th>
        {status === "confirm" ? (
          <span className="font-bold text-success">Confirmed</span>
        ) : (
          <button
            onClick={() => handleConfirmOrders(_id)}
            className="btn btn-warning btn-sm"
          >
            Pending
          </button>
        )}
      </th>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-secondary btn-sm"
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default OrderRow;
