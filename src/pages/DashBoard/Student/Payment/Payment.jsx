import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
import { useParams } from "react-router-dom";
// todo: provide publishable key
const Payment = () => {
  const [price, setPrice] = useState(0);
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  // const location = useLocation();

  const { id } = useParams();
  console.log("payment", id);
  // const { item } = location.state || {};
  // console.log("item price", item);

  // now again fetch myclass retrive money of this id and send to checkout
  useEffect(() => {
    fetch("http://localhost:5000/myclass")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        const selectedItem = data.find((item) => item._id === id);
        // setItem(selectedItem);
        const price = selectedItem ? selectedItem.price : 0;
        // const price = parseFloat(priced.toFixed(2));
        const priced = parseFloat(price);
        setPrice(priced);
        console.log("price", priced);
      });
  }, []);
  console.log(item);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="uppercase text-center">payment here</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm itemId={id} price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
