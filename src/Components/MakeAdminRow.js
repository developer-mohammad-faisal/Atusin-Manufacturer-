import React, { Fragment } from "react";
import { toast } from "react-toastify";

const MakeAdminRow = ({ user, index, refetch }) => {
  const { email, role } = user;

  const handleMakeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if(res.status === 403){
          toast.error('Failed to Make an Admin')
        }
        return res.json()
      })
      .then((data) => {
        if(data.modifiedCount > 0) {
          console.log(data);
          refetch();
          toast.success("Successfully Make an Admin");
        }
      });
  };

  return (
    <Fragment>
      <tr>
        <th>{index + 1}</th>
        <td>{email}</td>
        <td>
          {role !== "admin" ? (
            <button onClick={handleMakeAdmin} class="btn btn-sm btn-primary">
              Make Admin
            </button>
          ) : (
            <p class="text-success">
              Already Admin
            </p>
          )}
        </td>
        <td>
          <button class="btn btn-xs">Delete User</button>
        </td>
      </tr>
    </Fragment>
  );
};

export default MakeAdminRow;
