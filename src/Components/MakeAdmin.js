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
    fetch("https://gentle-ridge-79225.herokuapp.com/users", {
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
      <h2 className="text-3xl pt-5 font-semibold text-center ">
        All User {users.length}
      </h2>

      <div class="overflow-x-auto px-8 py-8 ">
        <table class="table w-full text-center">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <MakeAdminRow
                key={user._id}
                index={index}
                user={user}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default MakeAdmin;
