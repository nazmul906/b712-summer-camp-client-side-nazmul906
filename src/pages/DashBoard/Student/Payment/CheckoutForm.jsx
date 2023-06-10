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
        cartItems: itemId,

        status: "service pending",
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (res.data.result.insertedId) {
          alert(" Payment is done");
        }
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
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
      {transactionId && (
        <p className="text-green-500">
          Transaction complete with transactionId: {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckoutForm;

// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useContext, useEffect } from "react";
// import { useState } from "react";
// import useAxiosSecure from "../../../../hooks/useAxiosSecure";
// import { AuthContext } from "../../../../providers/AuthProvider";

// const CheckoutForm = ({ cart, price }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const { user } = useContext(AuthContext);
//   const [axiosSecure] = useAxiosSecure();
//   const [cardError, setCardError] = useState("");
//   const [clientSecret, setClientSecret] = useState("");
//   const [processing, setProcessing] = useState(false);
//   const [transactionId, setTransactionId] = useState("");

//   useEffect(() => {
//     if (price > 0) {
//       axiosSecure.post("/create-payment-intent", { price }).then((res) => {
//         console.log(res.data.clientSecret);
//         setClientSecret(res.data.clientSecret);
//       });
//     }
//   }, [price, axiosSecure]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const card = elements.getElement(CardElement);
//     if (card === null) {
//       return;
//     }

//     const { error } = await stripe.createPaymentMethod({
//       type: "card",
//       card,
//     });

//     if (error) {
//       console.log("error", error);
//       setCardError(error.message);
//     } else {
//       setCardError("");
//       // console.log('payment method', paymentMethod)
//     }

//     setProcessing(true);

//     const { paymentIntent, error: confirmError } =
//       await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: card,
//           billing_details: {
//             email: user?.email || "unknown",
//             name: user?.displayName || "anonymous",
//           },
//         },
//       });

//     if (confirmError) {
//       console.log(confirmError);
//     }

//     console.log("payment intent", paymentIntent);
//     setProcessing(false);
//     if (paymentIntent.status === "succeeded") {
//       setTransactionId(paymentIntent.id);
//       // save payment information to the server
//       const payment = {
//         email: user?.email,
//         transactionId: paymentIntent.id,
//         price,
//         date: new Date(),
//         quantity: cart.length,
//         cartItems: cart.map((item) => item._id),
//         menuItems: cart.map((item) => item.menuItemId),
//         status: "service pending",
//         itemNames: cart.map((item) => item.name),
//       };
//       axiosSecure.post("/payments", payment).then((res) => {
//         console.log(res.data);
//         if (res.data.result.insertedId) {
//           // display confirm
//         }
//       });
//     }
//   };

//   return (
//     <>
//       <form className="w-2/3 m-8" onSubmit={handleSubmit}>
//         <CardElement
//           options={{
//             style: {
//               base: {
//                 fontSize: "16px",
//                 color: "#424770",
//                 "::placeholder": {
//                   color: "#aab7c4",
//                 },
//               },
//               invalid: {
//                 color: "#9e2146",
//               },
//             },
//           }}
//         />
//         <button
//           className="btn btn-primary btn-sm mt-4"
//           type="submit"
//           disabled={!stripe || !clientSecret || processing}
//         >
//           Pay
//         </button>
//       </form>
//       {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
//       {transactionId && (
//         <p className="text-green-500">
//           Transaction complete with transactionId: {transactionId}
//         </p>
//       )}
//     </>
//   );
// };

// export default CheckoutForm;
