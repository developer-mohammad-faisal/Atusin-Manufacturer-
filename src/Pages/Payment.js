import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckOut from "../Components/CheckOut";

const stripePromise = loadStripe(
  "pk_test_51L0X5rAxjpWoJGYr5aHyhZ5eHJvFOH0KlGPmI4mTEO7yaAztI54eQ4xxw4XQvEe9VNQBLHYRSSwQs3eMpJumKwXR00jTk9BSrY"
);

const Payment = () => {
  const { id } = useParams();

  const [payment, setPayment] = useState([]);
  const url = `http://localhost:5000/orders/${id}`;
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setPayment(data));
  }, [payment]);

  return (
    <Fragment>
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
            <CheckOut payment={payment} />
          </Elements>
        </div>
      </div>
    </Fragment>
  );
};

export default Payment;
