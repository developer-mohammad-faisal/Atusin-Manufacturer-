import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";

const CheckOutForm = ({ payment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const { totalPrice, yourName, _id, email } = payment;

  useEffect(() => {
    fetch("https://gentle-ridge-79225.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ totalPrice }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");
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
    } else {
      setCardError("");

      setSuccess("Congratulations! Your Payment is Completed");
      setTransactionId(paymentIntent.id);

      const payment = {
        product: _id,
        transactionId: paymentIntent.id,
      };

      fetch(`https://gentle-ridge-79225.herokuapp.com/payment/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Successfully Paid");
        });
    }
  };
  return (
    <Fragment>
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
          className="btn btn-sm mt-5 btn-success"
          type="submit"
          disabled={!stripe || !clientSecret || success}
        >
          Pay
        </button>
      </form>

      {cardError && <p className="text-red-500">{cardError}</p>}
      {success && (
        <>
          <p className="text-green-500">{success} </p>
        </>
      )}

      {transactionId && <p className="text-green-500"> {transactionId} </p>}
    </Fragment>
  );
};

export default CheckOutForm;
