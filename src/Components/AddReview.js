import React, { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const AddReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [review, setReview] = useState(null);
  console.log(review);
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
      console.log(result.data);
        if (result.success) {
          setReview({
            name: data.name,
            img: result.data.url,
            review: data.reviews,
          });
        }
      });
  };

  useEffect(() => {
    if (review) {
      fetch("http://localhost:5000/reviews", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(review),
      })
        .then((res) => res.json())
        .then((inserted) => {
          console.log(inserted);
          
        });
    }
  }, [review]);

  return (
    <Fragment>
      <section>
        <h2 className="text-2xl text-center">Add a Doctor</h2>
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
                <span className="label-text">Reviews Date</span>
              </label>
              <input
                type="date"
                className="input  input-bordered w-full max-w-xs"
                {...register("date", {
                  required: {
                    value: true,
                    message: "Date is Required",
                  },
                })}
              />

              <label className="label">
                {errors.date?.type === "required" && (
                  <span className="label-text-alt text-red-500 ">
                    {errors?.date?.message}
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
    </Fragment>
  );
};

export default AddReview;
