import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { Fragment } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import CheckOutForm from "../Components/CheckOutForm";

import Loading from "../Loading/Loading";

const stripePromise = loadStripe(
  "pk_test_51L0X5rAxjpWoJGYr5aHyhZ5eHJvFOH0KlGPmI4mTEO7yaAztI54eQ4xxw4XQvEe9VNQBLHYRSSwQs3eMpJumKwXR00jTk9BSrY"
);

const Payment = () => {
  const { id } = useParams();

  const url = `https://gentle-ridge-79225.herokuapp.com/orders/${id}`;
  const { data: payment, isLoading } = useQuery(["orderCollection", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Fragment>
      <section className=" bg-base-100 mx-auto w-5/6 md:w-2/3 lg:w-1/2 rounded-lg shadow-md py-8 mt-7">
        <div class="card  flex items-center my-5">
          <div class="card-body">
            <p className="text-success text-3xl font-bold">
              Hello, {payment?.yourName}
            </p>
            <h2 class="text-xl font-bold">
              Please Pay for: {payment?.partsName}
            </h2>

            <p>Please pay: ${payment?.totalPrice}</p>
          </div>
        </div>
        <div class="card flex-shrink-0 mx-12">
          <div class="card-body">
            <Elements stripe={stripePromise}>
              <CheckOutForm payment={payment} />
            </Elements>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Payment;
