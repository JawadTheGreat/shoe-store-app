import classes from "../styles/Cart.module.css";

export default function Cart() {
  return (
    <div className={classes["cartSection"]}>
      <div className={classes["closeCartBtn"]}>&times;</div>
      <h1 className={classes["cartSectionHeader"]}>Your Cart</h1>
      <div className={classes["cartItems"]}>
        <div className={classes["cartRow"]}>
          <div className={classes["cartColumn cartItem cartHeader"]}>Item</div>
          <div className={classes["cartColumn cartPrice cartHeader"]}>
            Price
          </div>
          <div className={classes["cartColumn cartQuantity cartHeader"]}>
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
