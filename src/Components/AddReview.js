import React, { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const IMAGE_API_KEY = "146b5e8059de1e2fd396014ad251f3f0";

  const onSubmit = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${IMAGE_API_KEY}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const review = {
            name: data.name,
            profile: result.data.url,
            review: data.reviews,
          };
          fetch("http://localhost:5000/reviews", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(review),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted) {
                toast.success("Successfully Added Review");
                reset();
              } else {
                toast.error("Failed to Review Added");
              }
            });
        }
      });
  };

  return (
    <Fragment>
      <section>
        <section className="bg-base-100 mx-auto w-5/6 md:w-2/3 lg:w-1/2 rounded-md shadow-md py-8 mt-7">
          <h2 className="text-2xl font-bold text-primary uppercase text-center">
            Add a Review
          </h2>
          <div className="flex justify-center items-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                  })}
                />

                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500 ">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Choose Image</span>
                </label>
                <input
                  type="file"
                  className="input input-bordered w-full max-w-xs"
                  {...register("image", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                  })}
                />

                <label className="label">
                  {errors.image?.type === "required" && (
                    <span className="label-text-alt text-red-500 ">
                      {errors.image.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Your Reviews</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Your Reviews"
                  className="input textarea  input-bordered w-full h-28 max-w-xs"
                  {...register("reviews", {
                    required: {
                      value: true,
                      message: "Reviews is Required",
                    },
                  })}
                />

                <label className="label">
                  {errors.reviews?.type === "required" && (
                    <span className="label-text-alt text-red-500 ">
                      {errors?.reviews?.message}
                    </span>
                  )}
                </label>
              </div>

              <input
                className="btn btn-primary w-full"
                type="submit"
                value="Add Review"
              />
            </form>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

export default AddReview;
