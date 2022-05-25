import React, { Fragment, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const MyOrder = () => {
  const [users, setUsers] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/orders?email=${user?.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setUsers(data);
        });
    }
  }, [user, navigate]);

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
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((users, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{users.yourName}</td>
                  <td>{users.email}</td>
                  <td>{users.location}</td>
                  <td>{users.partsName}</td>
                  <td>
                    <button className="btn btn-sm uppercase">Pay First</button>
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

export default MyOrder;
