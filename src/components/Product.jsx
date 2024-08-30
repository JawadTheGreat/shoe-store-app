import classes from "../styles/Product.module.css";
import airPng from "../assets/air.png";

export default function Product() {
  return (
    <>
      <section className={classes["product"]} id="product">
        <div className={classes["cartIcon"]}>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
        <div className={classes["cartItemCounter"]}></div>
        <div className={classes["cartSection"]}>
          <div className={classes["closeCartBtn"]}>&times;</div>
          <h1 className={classes["cartSectionHeader"]}>Your Cart</h1>
          <div className={classes["cartItems"]}>
            <div className={classes["cartRow"]}>
              <div className={classes["cartColumn cartItem cartHeader"]}>
                Item
              </div>
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
        <img src={airPng} alt="" className={classes["productImg"]} />
        <div className={classes["productDetails"]}>
          <div className={classes["productTitle"]}>AIR FORCE</div>
          <div className={classes["productPrice"]}>$119.99</div>
          <div className={classes["productDescription"]}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo cum
            ducimus nobis quibusdam consequuntur nam eligendi aspernatur nihil
            maxime. Earum ullam dolor id numquam sed, nobis architecto quasi.
            Quos, in.
          </div>
          <div className={classes["productColor"]}>
            <div className={classes["color"]}></div>
            <div className={classes["color"]}></div>
          </div>
          <div className={classes["productSizes"]}>
            <div className={classes["size"]}>42</div>
            <div className={classes["size"]}>43</div>
            <div className={classes["size"]}>44</div>
          </div>
          <button className={classes["productButton"]}>Add To Cart</button>
        </div>
      </section>
    </>
  );
}
