import React from "react";
import FlipMove from "react-flip-move";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/header-image._CB1567543150_.png"
        />
        <div>
          <h2>Hello, {user?.email}</h2>

          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/* //<FlipMove> */}
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          {/* </FlipMove> */}
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
