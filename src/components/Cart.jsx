import PropTypes from "prop-types";
import classes from "../styles/Cart.module.css";

export default function Cart({ cartButtonActive, setCartButtonActive }) {
  return (
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

      <div className={classes["cartTotal"]}>
        <span className={classes["cartTotalTitle"]}>Total</span>
        <span className={classes["cartTotalPrice"]}>$0</span>
      </div>
      <button type="button" className={classes["purchaseBtn"]}>
        PURCHASE
      </button>
    </div>
  );
}

Cart.propTypes = {
  cartButtonActive: PropTypes.bool.isRequired,
  setCartButtonActive: PropTypes.func.isRequired,
};
