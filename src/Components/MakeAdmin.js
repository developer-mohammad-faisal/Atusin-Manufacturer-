import React, { Fragment } from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import MakeAdminRow from "./MakeAdminRow";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("userCollection", () =>
    fetch("http://localhost:5000/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Fragment>
      <h2 className="text-2xl text-center ">All User {users.length}</h2>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Admin</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <MakeAdminRow key={user._id} index={index} user={user} refetch={refetch} />
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default MakeAdmin;
