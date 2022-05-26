import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { Fragment, useEffect, useState } from "react";

const CheckoutFrom = ({ payment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionID, setTransactionID] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const { _id, totalPrice, yourName, email } = payment;

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ totalPrice: totalPrice }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.clientSecret) {
          setClientSecret(data?.clientSecret);
        }
      });
  }, [totalPrice]);

  console.log(success);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");
    setProcessing(true);
    // confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: yourName,
            email: email,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    } else {
      setCardError("");
      setSuccess("Congrats! your payment is completed");
      setTransactionID(paymentIntent.id);

      // store payment on database
      const payment = {
        appointment: _id,
        transactionID: paymentIntent.id,
      };

      // fetch(`http://localhost:5000/bookings/${_id}`, {
      //   method: "PATCH",
      //   headers: {
      //     "content-type": "application/json",
      //     authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      //   },
      //   body: JSON.stringify(payment),
      // })
      //   .then((res) => res.json())
      //   .then((data) => {
      //     setProcessing(false);
      //   });
    }
  };

  return (
    <Fragment>
      <section>
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            className="btn btn-success btn-sm mt-5"
            type="submit"
            // disabled={!stripe || !clientSecret || success}
          >
            Pay
          </button>
        </form>
        {cardError && <p className="text-red-500">{cardError}</p>}

        {success && (
          <div className="text-green-500">
            <p>{success}</p>
            <p>
              Your transactionID:{" "}
              <span className="text-bold text-green-700">{transactionID}</span>{" "}
            </p>
          </div>
        )}
      </section>
    </Fragment>
  );
};

export default CheckoutFrom;
