import React, { Fragment, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import ConfirmPartDeleteModal from "./ConfirmPartDeleteModal";

const MangeProduct = () => {
  const [deletingParts, setDeletingParts] = useState(null);
  const navigate = useNavigate();

  const {
    data: parts,
    isLoading,
    refetch,
  } = useQuery("partsCollection", () =>
    fetch(` http://localhost:5000/parts`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        localStorage.removeItem("accessToken");
        navigate("/");
      }
      return res.json();
    })
  );

  console.log(parts);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Fragment>
      <section>
        <div className="overflow-x-auto px-8 py-8 ">
          <table className="table text-center bp w-full">
            <thead>
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Parts Name</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {parts?.map((p, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>
                    <div class="flex items-center space-x-3">
                      <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                          <img
                            src={p.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>{p.name}</td>
                  <td>{p.perPartsPrice}</td>
                  <td>
                    <label
                      onClick={() => setDeletingParts(p)}
                      for="deleting-modal"
                      class="btn btn-sm btn-danger modal-button"
                    >
                     Delete
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {deletingParts && (
          <ConfirmPartDeleteModal
            refetch={refetch}
            deletingParts={deletingParts}
            setDeletingParts={setDeletingParts}
          />
        )}
      </section>
    </Fragment>
  );
};

export default MangeProduct;
