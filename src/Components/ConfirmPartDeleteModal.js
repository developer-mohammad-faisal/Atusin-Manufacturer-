import React, { Fragment } from "react";
import { toast } from "react-toastify";

const ConfirmPartDeleteModal = ({
  deletingParts,
  refetch,
  setDeletingParts,
}) => {
  const { name, _id } = deletingParts;

  const handleDelete = () => {
    fetch(`https://gentle-ridge-79225.herokuapp.com/parts/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
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
            If you want to delete it permanently then yes then click Confirm
            delete! <br /> If you do not want to delete, click Cancel
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
