import React, { Fragment } from "react";
import { toast } from "react-toastify";

const ConfirmPartDeleteModal = ({
  deletingParts,
  refetch,
  setDeletingParts,
}) => {
  const { name, _id } = deletingParts;

  const handleDelete = () => {
    fetch(`http://localhost:5000/parts/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Order ${name} is Deleted`);
          refetch();
          setDeletingParts(null);
        }
      });
  };

  return (
    <Fragment>
      <input type="checkbox" id="deleting-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-green-600">
            Are you sure you want to delete : {name}
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <button
              onClickCapture={() => handleDelete()}
              className="btn btn-sm bg-red-500  uppercase"
            >
              Confirm Delete
            </button>
            <label
              for="deleting-modal"
              class="btn btn-sm bg-green-500 uppercase"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ConfirmPartDeleteModal;
