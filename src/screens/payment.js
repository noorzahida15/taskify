// Payment.js
import React from "react";
import "./Card.css";

const Card = ({ type, advantages, price }) => {
  return (
    <div className={`card ${type}`}>
      <h2>{type} Plan</h2>
      <ul>
        {advantages.map((advantage, index) => (
          <li key={index}>{advantage}</li>
        ))}
      </ul>
      <p className="price">${price}</p>
      <button>Get Started</button>
    </div>
  );
};

const Payment = () => {
  const premiumAdvantages = [
    "Access to premium content",
    "Priority customer support",
    "Exclusive deals and discounts",
  ];

  const regularAdvantages = [
    "Access to regular content",
    "Standard customer support",
    "Limited deals and discounts",
  ];

  const freeAdvantages = [
    "Basic access to content",
    "Standard customer support",
    "No exclusive deals",
  ];

  return (
    <div className="App">
      <Card type="Premium" advantages={premiumAdvantages} price={99.99} />
      <Card type="Regular" advantages={regularAdvantages} price={49.99} />
      <Card type="Free" advantages={freeAdvantages} price={0.0} />
    </div>
  );
};

export default Payment;
