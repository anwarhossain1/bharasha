import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/header-image._CB1567543150_.png"
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
        </div>
      </div>
      <div className="checkout__right">
        <h2>Subtotal will go here</h2>
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
