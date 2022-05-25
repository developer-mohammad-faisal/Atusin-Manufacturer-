import React, { Fragment, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const MyOrder = () => {
  const [users, setUsers] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/orders?email=${user.email}`)
        .then((response) => response.json())
        .then((data) => setUsers(data));
    }
  }, [user]);

  return (
    <Fragment>
      <section>
        <div className="overflow-x-auto my-8">
          <table className="table w-full">
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>phone</th>
                <th>payment</th>
              </tr>
            </thead>
            <tbody>
              {users.map((users, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{users.yourName}</td>
                  <td>{users.email}</td>
                  <td>{users.location}</td>
                  <td>{users.partName}</td>
                  <td>
                    <button className="btn uppercase">payment</button>
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
