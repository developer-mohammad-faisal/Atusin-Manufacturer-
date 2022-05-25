import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddAProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const IMAGE_API_KEY = "146b5e8059de1e2fd396014ad251f3f0";

  const onSubmit = (data) => {
    console.log(data);
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
          const part = {
            name: data.name,
            orderQuantity: data.orderQuantity,
            availableQuantity: data.availableQuantity,
            perPartsPrice: data.perPartsPrice,
            img: result.data.url,
            description: data.description,
          };
          fetch("http://localhost:5000/parts", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(part),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted) {
                toast.success("Successfully added Product");
                reset();
              } else {
                toast.error("Failed to Product Added");
              }
            });
        }
      });
  };

  return (
    <Fragment>
      <section className="bg-base-100 mx-auto w-2/3 lg:w-1/2 rounded-md shadow-md py-8 mt-7">
        <h2 className="text-2xl text-center uppercase font-bold text-primary py-3">
          Add a Parts
        </h2>
        <div className="flex justify-center items-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-x-8 grid-cols-1 lg:grid-cols-2">
              {/* Parts Name */}
              <div className="form-control w-full ">
                <label className="mb-1 ml-1">Parts Name</label>
                <input
                  type="text"
                  placeholder="Parts Name"
                  className="input input-bordered w-full "
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Parts Name is Required",
                    },
                  })}
                />

                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500 ">
                      {errors.name?.message}
                    </span>
                  )}
                </label>
              </div>

              {/* Min-Order Quantity  */}
              <div className="form-control w-full ">
                <label className="mb-1 ml-1">Min-Order Quantity</label>
                <input
                  type="number"
                  placeholder="Min-Order Quantity "
                  className="input input-bordered w-full "
                  {...register("orderQuantity", {
                    required: {
                      value: true,
                      message: "Min Order Quantity is Required",
                    },
                  })}
                />

                <label className="label">
                  {errors.orderQuantity?.type === "required" && (
                    <span className="label-text-alt text-red-500 ">
                      {errors.orderQuantity.message}
                    </span>
                  )}
                </label>
              </div>

              {/* Available Quantity */}
              <div className="form-control w-full ">
                <label className="mb-1 ml-1">Available Quantity</label>
                <input
                  type="number"
                  placeholder="Available Quantity"
                  className="input input-bordered w-full "
                  {...register("availableQuantity", {
                    required: {
                      value: true,
                      message: "Available Quantity is Required",
                    },
                  })}
                />

                <label className="label">
                  {errors.availableQuantity?.type === "required" && (
                    <span className="label-text-alt text-red-500 ">
                      {errors.availableQuantity?.message}
                    </span>
                  )}
                </label>
              </div>

              {/* Per Parts Price */}
              <div className="form-control w-full ">
                <label className="mb-1 ml-1">Per Parts Price</label>
                <input
                  type="number"
                  placeholder="Per Parts Price"
                  className="input input-bordered w-full "
                  {...register("parts", {
                    required: {
                      value: true,
                      message: "Per Parts Price is Required",
                    },
                  })}
                />

                <label className="label">
                  {errors.parts?.type === "required" && (
                    <span className="label-text-alt text-red-500 ">
                      {errors.parts?.message}
                    </span>
                  )}
                </label>
              </div>
            </div>

            {/* Upload Image */}
            <div className="form-control w-full ">
              <label className="mb-1 ml-1">Choose Image</label>
              <input
                type="file"
                className="input input-bordered w-full "
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

            {/* Description */}
            <div className="form-control w-full">
              <label className="mb-1 ml-1">Description</label>
              <textarea
                type="text"
                placeholder="Description"
                className="input textarea  input-bordered w-full h-28"
                {...register("description", {
                  required: {
                    value: true,
                    message: "Description is Required",
                  },
                })}
              />

              <label className="label">
                {errors.description?.type === "required" && (
                  <span className="label-text-alt text-red-500 ">
                    {errors?.description?.message}
                  </span>
                )}
              </label>
            </div>

            <input
              className="btn btn-primary w-full"
              type="submit"
              value="Add A Product"
            />
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default AddAProduct;
