import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const PartsCard = ({ part }) => {
  const {
    _id,
    img,
    name,
    description,
    orderQuantity,
    availableQuantity,
    perPartsPrice,
    parts,
  } = part;

  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/purchase/${id}`);
  };

  return (
    <Fragment>
      <div className="card card-hover card-compact bg-base-100 shadow-xl">
        <figure>
          <img width={300} className="rounded-lg" src={img} alt="Shoes" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{name}</h2>
          <p>{description?.slice(0, 150)}...</p>
          <h2 className="text-1xl">
            {" "}
            <span className="font-bold">Min-Order Quantity</span>{" "}
            {orderQuantity}
          </h2>
          <h2 className="text-1xl">
            {" "}
            <span className="font-bold">Available Quantity</span>{" "}
            {availableQuantity}
          </h2>
          <h2 className="text-1xl">
            {" "}
            <span className="font-bold">Per Parts Price</span> $
            {perPartsPrice ? perPartsPrice : parts}
          </h2>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleNavigate(_id)}
              className="btn btn-primary"
            >
              Purchase Now
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PartsCard;
