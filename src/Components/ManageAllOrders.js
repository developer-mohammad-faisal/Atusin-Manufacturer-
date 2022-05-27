import React, { Fragment, useEffect, useState } from "react";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allOrders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [orders]);

  const handleUpdatePending = (_id) => {
    fetch(`http://localhost:5000/pending/${_id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleOrderDelete = (_id) => {
    fetch(`http://localhost:5000/orderDelete/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <Fragment>
      <section>
        <div className="overflow-x-auto px-14 py-8 ">
          <table className="table text-center border w-full">
            <thead>
              <tr>
                <th>id</th>
                <th>Your Name</th>
                <th>Email</th>
                <th>Location</th>
                <th>Parts Name</th>
                <th>Admin</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((orders, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{orders.yourName}</td>
                  <td>{orders.email}</td>
                  <td>{orders.location}</td>
                  <td>{orders.partsName}</td>
                  <td>
                    {!orders.paid ? (
                      <>
                        {" "}
                        <button className="btn btn-sm btn-primary">
                          Unpaid
                        </button>{" "}
                        <button onClick={() => handleOrderDelete(orders._id)} className="btn btn-sm btn-primary">
                          Delete
                        </button>
                      </>
                    ) : orders.pending ? (
                      <button
                        onClick={() => handleUpdatePending(orders._id)}
                        className="btn btn-primary btn-sm"
                      >
                        Pending..
                      </button>
                    ) : (
                      <p className="text-green-500 text-xl uppercase">
                        Shipped
                      </p>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Fragment>
  );
};

export default ManageAllOrders;
