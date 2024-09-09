import PropTypes from "prop-types";
import classes from "../styles/Cart.module.css";
import { useState } from "react";

export default function Cart({
  cartButtonActive,
  setCartButtonActive,
  cart,
  setCart,
}) {
  const [cartQuantities, setCartQuantities] = useState({});

  function handleQuantityChange(id, value) {
    setCartQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: value <= 0 ? 1 : value,
    }));
  }

  let allPrices = cart.map(
    (item) => item.price * (cartQuantities[item.id] || 1)
  );

  let total = allPrices.reduce((acc, num) => (acc += num), 0).toFixed(2);

  function purchaseButtonClicked() {
    !cart.length
      ? alert("Your cart is empty")
      : (setCart([]), alert("Thank you for your purchase"));
  }

  function removeButtonClicked(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

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
          {/* cart items */}
          {cart.map((cartItem) => (
            <div className={classes["cartRow"]} key={cartItem.id}>
              <div className={`${classes.cartColumn} ${classes.cartItem}`}>
                <img
                  src={cartItem.img}
                  alt=""
                  className={classes["cartItemImg"]}
                />
                <span className={classes["cartItemTitle"]}>
                  {cartItem.title}
                </span>
              </div>
              <div className={`${classes.cartColumn} ${classes.cartPrice}`}>
                ${cartItem.price}
              </div>
              <div className={`${classes.cartColumn} ${classes.cartQuantity}`}>
                <input
                  value={cartQuantities[cartItem.id] || 1}
                  type="number"
                  className={classes["cartQuantityInput"]}
                  onChange={(e) =>
                    handleQuantityChange(cartItem.id, e.target.value)
                  }
                />
                <button
                  type="button"
                  className={classes["removeBtn"]}
                  onClick={() => removeButtonClicked(cartItem.id)}
                >
                  REMOVE
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={classes["cartTotal"]}>
          <span className={classes["cartTotalTitle"]}>Total</span>
          <span className={classes["cartTotalPrice"]}>${total}</span>
        </div>
        <button
          type="button"
          className={classes["purchaseBtn"]}
          onClick={() => purchaseButtonClicked()}
        >
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
  setCart: PropTypes.func.isRequired,
};
