import React, { Fragment } from "react";

const ReviewsCard = ({ review }) => {
  const { profile, name, reviews, date } = review;

  return (
    <Fragment>
      <div class="card shadow-lg bg-base-100">
        <div class="card-body hover:bg-slate-100  ">
          <div class="avatar flex items-center gap-x-2">
            <div class="w-10 rounded-full ring-offset-2">
              <img src={profile} alt="" />
            </div>
            <div>
              <h1 className="text-xl"> {name} </h1>
            </div>
          </div>
          <h2 class="">{date}</h2>
          <div class="rating w-20">
            <input
              type="radio"
              name="rating-1"
              class="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-1"
              class="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-1"
              class="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-1"
              class="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-1"
              class="mask mask-star-2 bg-orange-400"
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
