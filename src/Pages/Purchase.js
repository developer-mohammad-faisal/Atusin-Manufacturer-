import React, { Fragment, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../firebase.init";
import Loading from '../Loading/Loading'
import { useAuthState } from "react-firebase-hooks/auth";

const Purchase = () => {
  const { id } = useParams();
  const [purchase, setPurchase] = useState([]);
  const [user , loading] = useAuthState(auth);
  const {
    img,
    name,
    description,
    orderQuantity,
    availableQuantity,
    perPartsPrice,
  } = purchase;

  useEffect(() => {
    const url = `http://localhost:5000/parts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, [id]);


  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

    
  if(loading) {
    return <Loading/>
  }

  //   console.log(quantity);
  const onSubmit = async (data) => {
    console.log(data);
    reset();
  };

  return (
    <Fragment>
      <section>
        <div className="justify-center items-center flex" >
          <div className=" container pt-10 pb-20 ">
            <h1 className="text-center text-4xl font-koulen font-semibold uppercase pb-16 ">
              Purchase <span className="text-primary">Parts</span>
            </h1>
            <div className="w-full gap-5  flex justify-between items-start ">
              <div className="w-4/6">
                <div className="flex items-center bg-white py-10 px-5 rounded-xl h-full justify-center gap-5">
                  <img src={img} className="w-80 h-80" alt="" />
                  <div className="">
                    <h1 className="font-semibold text-3xl mb-5">
                      <span className="">{name}</span>
                    </h1>
                    <h1 className="  font-semibold mb-1">
                      Availabe Quantiny :{" "}
                      <span className="font-bold text-xl">
                        {availableQuantity}
                      </span>{" "}
                      
                    </h1>
                    <h1 className="  font-semibold mb-1">
                      Min-Order Quantity :{" "}
                      <span className="font-bold  text-xl">
                        {orderQuantity}{" "}
                      </span>{" "}
                      
                    </h1>
                    <h1 className="  font-semibold mb-1">
                      Per Parts Price:{" "}
                      <span className="font-bold  text-xl">
                        ${perPartsPrice}
                      </span>
                    </h1>

                    <p className="">
                      {" "}
                      <span className="font-semibold ">
                        Details: <br />{" "}
                      </span>{" "}
                      <span className="">{description}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-96  px-5 bg-secondary pb-5  rounded-xl ">
                <h1 className="text-center text-4xl font-semibold  py-5  text-white">
                  Fill UP
                </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col ">
                    <input
                      type="text"
                      placeholder="Name"
                      class="input w-full placeholder:text-[15px] py-5 mb-3 "
                      defaultValue={user.displayName}
                      disabled
                      {...register("name", { value: user.displayName })}
                    />

                    <input
                      type="text"
                      placeholder="Email"
                      class="input w-full placeholder:text-[15px] py-5 my-3"
                      defaultValue={user.email}
                      disabled
                      {...register("email", { value: user.email })}
                    />
                    <input
                      type="phone"
                      placeholder="Phone Number"
                      class="input w-full placeholder:text-[15px] py-5 my-3"
                      {...register("phone", {
                        required: {
                          value: true,
                          message: "Phone Number is required!",
                        },
                      })}
                    />
                    {errors.phone?.type === "required" && (
                      <span className="label-text-alt text-red-600  pl-1">
                        {errors.phone.message}
                      </span>
                    )}

                    <input
                      type="text"
                      placeholder="Where to Ship"
                      class="input  placeholder:text-[15px] py-5 my-3"
                      {...register("address", {
                        required: {
                          value: true,
                          message: "Ship Address is required!",
                        },
                      })}
                    />
                    {errors.address?.type === "required" && (
                      <span className="label-text-alt text-red-600  pl-1">
                        {errors.address.message}
                      </span>
                    )}
                    <input
                      type="number"
                      placeholder="Quantity"
                      class="input w-2/6 placeholder:text-[15px] py-5 my-3"
                      {...register("quantity", {
                        required: {
                          value: true,
                          message: "Quantity is required!",
                        },
                      })}
                    />
                    {errors.quantity?.type === "required" && (
                      <span className="label-text-alt text-red-600  pl-1">
                        {errors.quantity.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="px-8 mt-5 text-lg w-full  rounded py-2 font-semibold font-koulen transition duration-300 ease-in-out bg-primary text-gray-900"
                  >
                    Place Order
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Purchase;
