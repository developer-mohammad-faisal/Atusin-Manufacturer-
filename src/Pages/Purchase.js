import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "../Loading/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const Purchase = () => {
  const { id } = useParams();
  const [purchase, setPurchase] = useState([]);
  const [btnDisable, setBtnDisable] = useState(false);
  const [user, loading] = useAuthState(auth);

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

  if (loading) {
    return <Loading />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const partOrder = {
      yourName: e.target.yourName.value,
      email: e.target.email.value,
      location: e.target.location.value,
      partName: name,
    };
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(partOrder),
    })
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data);
        toast.success("Data Successful Submit");
        e.target.reset();
      });
  };

  const handleInput = (e) => {
    let quantity = parseInt(e.target.value);
    let partsQuantity = parseInt(availableQuantity);
    if (quantity > partsQuantity || quantity <= 100) {
      setBtnDisable(true);
    } else {
      setBtnDisable(false);
    }
  };

  return (
    <Fragment>
      <section>
        <div className="">
          <h1 className="text-center text-2xl lg:text-4xl font-koulen font-semibold uppercase ">
            {" "}
            Purchase <span className="text-primary">Parts</span>
          </h1>
          <div className=" flex flex-col px-8 lg:px-16 py-14 lg:flex-row justify-between ">
            <div className=" w-3/3 shadow-md rounded-lg lg:w-3/5 bg-base-100">
              <div className="flex flex-col lg:flex-row items-center py-10 px-5">
                <img
                  src={img}
                  className="w-60 h-48 lg:h-80 lg:w-80 rounded-md"
                  alt=""
                />

                <div className=" card-body">
                  <h1 className="font-semibold text-3xl ">{name}</h1>
                  <h1 className="font-semibold">
                    Availabe Quantiny :{" "}
                    <span className="font-bold text-xl">
                      {" "}
                      {availableQuantity}{" "}
                    </span>{" "}
                  </h1>
                  <h1 className="font-semibold">
                    Min-Order Quantity :{" "}
                    <span className="font-bold text-xl"> {orderQuantity}</span>
                  </h1>
                  <h1 className="font-semibold">
                    Per Parts Price:{" "}
                    <span className="font-bold text-xl"> ${perPartsPrice}</span>
                  </h1>
                  <p>
                    <span className="font-semibold ">Details:</span>
                    {description}
                  </p>
                </div>
              </div>
            </div>

            <div className=" w-full lg:w-96 mt-8 lg:mt-0 shadow-md px-5 bg-base-100 pb-5  rounded-xl ">
              <h1 className="text-center text-4xl font-semibold  py-5  text-primary">
                Purchase Order
              </h1>

              <form onSubmit={handleSubmit}>
                <div className="flex flex-col ">
                  <input
                    type="text"
                    placeholder="Name"
                    name="yourName"
                    className="input w-full placeholder:text-[15px] py-5 mb-3 "
                    defaultValue={user?.displayName}
                    disabled
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="input w-full placeholder:text-[15px] py-5 my-3"
                    defaultValue={user?.email}
                    disabled
                  />
                  <input
                    type="phone"
                    placeholder="Phone Number"
                    className="input input-bordered w-full placeholder:text-[15px] py-5 my-3"
                  />
                  <input
                    type="text"
                    placeholder="Where to Ship"
                    name="location"
                    className="input input-bordered  placeholder:text-[15px] py-5 my-3"
                  />
                  <input
                    type="number"
                    onChange={handleInput}
                    placeholder="Quantity"
                    className="input w-2/6 input-bordered placeholder:text-[15px] py-5 my-3"
                  />{" "}
                </div>

                <button
                  disabled={btnDisable}
                  type="submit"
                  className="px-8 mt-5 btn btn-primary w-full"
                >
                  Place Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Purchase;
