import classes from "../styles/Features.module.css";
import shippingPng from "../assets/shipping.png";
import returnPng from "../assets/return.png";
import giftPng from "../assets/gift.png";
import contactPng from "../assets/contact.png";

export default function Features() {
  return (
    <>
      <section className={classes["features"]}>
        <div className={classes["feature"]}>
          <img src={shippingPng} alt="" className={classes["featureImg"]} />
          <span className={classes["featureTitle"]}>FREE SHIPPING</span>
          <span className={classes["featureDescription"]}>
            Free worldwide shipping on all orders.
          </span>
        </div>
        <div className={classes["feature"]}>
          <img src={returnPng} alt="" className={classes["featureImg"]} />
          <span className={classes["featureTitle"]}>30 DAYS RETURN</span>
          <span className={classes["featureDescription"]}>
            No question return and easy refund in 14 days.
          </span>
        </div>
        <div className={classes["feature"]}>
          <img src={giftPng} alt="" className={classes["featureImg"]} />
          <span className={classes["featureTitle"]}>GIFT CARDS</span>
          <span className={classes["featureDescription"]}>
            Buy gift cards and use coupon codes easily.
          </span>
        </div>
        <div className={classes["feature"]}>
          <img src={contactPng} alt="" className={classes["featureImg"]} />
          <span className={classes["featureTitle"]}>CONTACT US!</span>
          <span className={classes["featureDescription"]}>
            Keep in touch via email and support system.
          </span>
        </div>
      </section>
    </>
  );
}
