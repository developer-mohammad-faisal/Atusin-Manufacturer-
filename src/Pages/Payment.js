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

  const url = `http://localhost:5000/orders/${id}`;
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
      <section className="flex justify-center items-center " >
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-success font-bold">Hello, {payment?.yourName}</p>
          <h2 class="text-xl font-bold">
            Please Pay for: {payment?.partsName}
          </h2>

          <p>Please pay: ${payment?.totalPrice}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
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
