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

  return (
    <Fragment>
      <section>
        <div className="overflow-x-auto px-14 py-8 ">
          <table className="table border w-full">
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
                    <button className="btn btn-sm uppercase">Make Admin</button>
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
