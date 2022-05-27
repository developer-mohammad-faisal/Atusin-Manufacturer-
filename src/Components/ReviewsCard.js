import React, { Fragment } from "react";

const ReviewsCard = ({ r }) => {
  const { profile, name, review } = r;

  return (
    <Fragment>
      <div className="card shadow-lg bg-base-100">
        <div className="card-body hover:bg-slate-100  ">
          <div className="" >
            <div className=" flex  items-center gap-x-3">
              <div className="w-10 rounded-full ring-offset-2">
                <img className="rounded-full" src={profile} alt="" />
              </div>

              <div>
                <h1 className="text-xl"> {name} </h1>
              </div>
            </div>
          </div>
          <div className="rating w-20">
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <p>{review?.slice(0, 180)}...</p>
        </div>
      </div>
    </Fragment>
  );
};

export default ReviewsCard;
