import React, { Fragment, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);

  const [user] = useAuthState(auth);

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
  }, []);

  const makeAdmin = () => {
    fetch(`http://localhost:5000/all-orders/admin/${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        // if (res.status === 403) {
        //   toast.error("Failed to Make an admin");
        // }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        // if (data.modifiedCount > 0) {
        //   toast.success("Successfully make an Admin");
        // }
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
                    <button onClick={makeAdmin} class="btn btn-sm uppercase">
                      Pending
                    </button>
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
