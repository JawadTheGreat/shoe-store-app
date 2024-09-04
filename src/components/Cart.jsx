import PropTypes from "prop-types";
import classes from "../styles/Cart.module.css";
import { useState } from "react";

export default function Cart({ cartButtonActive, setCartButtonActive, cart }) {
  const [cartQuantityInput, setCartQuantityInput] = useState(1);
  return (
    <>
      <div
        className={classes["cartSection"]}
        style={cartButtonActive ? { display: "flex" } : { display: "none" }}
      >
        <div
          className={classes["closeCartBtn"]}
          onClick={() => setCartButtonActive(false)}
        >
          &times;
        </div>
        <h1 className={classes["cartSectionHeader"]}>Your Cart</h1>
        <div className={classes["cartItems"]}>
          <div className={classes["cartRow"]}>
            <div
              className={`${classes.cartColumn} ${classes.cartItem} ${classes.cartHeader}`}
            >
              Item
            </div>
            <div
              className={`${classes.cartColumn} ${classes.cartPrice} ${classes.cartHeader}`}
            >
              Price
            </div>
            <div
              className={`${classes.cartColumn} ${classes.cartQuantity} ${classes.cartHeader}`}
            >
              Quantity
            </div>
          </div>
        </div>
        {/* cart items */}
        {cart.map((cartItem) => (
          <div className={classes["cartRow"]} key={cartItem.id}>
            <div className={`${classes.cartColumn} ${classes.cartItem}`}>
              <img
                src={cartItem.img}
                alt=""
                className={classes["cartItemImg"]}
              />
              <span className={classes["cartItemTitle"]}>{cartItem.title}</span>
            </div>
            <div className={`${classes.cartColumn} ${classes.cartPrice}`}>
              {cartItem.price}
            </div>
            <div className={`${classes.cartColumn} ${classes.cartQuantity}`}>
              <input
                value={cartQuantityInput}
                type="number"
                className={classes["cartQuantityInput"]}
                onChange={(e) =>
                  setCartQuantityInput(e.target.value <= 0 ? 1 : e.target.value)
                }
              />
              <button type="button" className={classes["removeBtn"]}>
                REMOVE
              </button>
            </div>
          </div>
        ))}

        <div className={classes["cartTotal"]}>
          <span className={classes["cartTotalTitle"]}>Total</span>
          <span className={classes["cartTotalPrice"]}>$0</span>
        </div>
        <button type="button" className={classes["purchaseBtn"]}>
          PURCHASE
        </button>
      </div>
    </>
  );
}

Cart.propTypes = {
  cartButtonActive: PropTypes.bool.isRequired,
  setCartButtonActive: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
};
