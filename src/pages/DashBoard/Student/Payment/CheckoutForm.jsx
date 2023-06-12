import { async } from "@firebase/util";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
const CheckoutForm = ({ price, itemId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [axiosSecure] = useAxiosSecure();
  // const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (parseFloat(price) > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: parseFloat(price) })
        .then((res) => {
          console.log("19", res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe && !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    console.log("card", card);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      console.log("paymnet", paymentMethod);
      setCardError("");
    }

    // setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }
    console.log("paymentI intent", paymentIntent);
    // setProcessing(false);
    if (paymentIntent.status == "succeeded") {
      const transactionId = paymentIntent.id;
      console.log("tasac", transactionId);
      setTransactionId(transactionId);

      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        // this cartItem is the id of the item data for which payment is done.which is common between payment and myclass data which will need to fetch payment item again
        cartItems: itemId,
        status: "service pending",
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (res.data.result && res.data.result.insertedId) {
          alert("Payment is done");
        }
        // if (res.data.result.insertedId) {
        //   alert(" Payment is done");
        // }
      });
    }
  };
  return (
    <>
      <form className="w-2/3 m-8" onSubmit={handleSubmit}>
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
          className="  mt-4 btn btn-success"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-400 ml-8">{cardError}</p>}
      {transactionId && (
        <p className="text-orange-800">Transaction completed</p>
      )}
    </>
  );
};

export default CheckoutForm;
