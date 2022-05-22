import React, { Fragment } from "react";

const ReviewsCard = ({ review }) => {
  const { profile, name, reviews, date } = review;

  return (
    <Fragment>
      <div className="card shadow-lg bg-base-100">
        <div className="card-body hover:bg-slate-100  ">
          <div className="avatar flex items-center gap-x-2">
            <div className="w-10 rounded-full ring-offset-2">
              <img src={profile} alt="" />
            </div>
            <div>
              <h1 className="text-xl"> {name} </h1>
            </div>
          </div>
          <h2 className="">{date}</h2>
          <div className="rating w-20">
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
          </div>
          <p>{reviews.slice(0, 220)}...</p>
        </div>
      </div>
    </Fragment>
  );
};

export default ReviewsCard;
