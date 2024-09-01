import classes from "../styles/Product.module.css";
import airPng from "../assets/air.png";
import Cart from "./Cart";

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119.99,
    colors: [
      {
        code: "black",
        img: "../assets/air.png",
      },
      {
        code: "darkblue",
        img: "../assets/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149.99,
    colors: [
      {
        code: "lightgray",
        img: "../assets/jordan.png",
      },
      {
        code: "green",
        img: "../assets/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109.99,
    colors: [
      {
        code: "lightgray",
        img: "../assets/blazer.png",
      },
      {
        code: "green",
        img: "../assets/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129.99,
    colors: [
      {
        code: "black",
        img: "../assets/crater.png",
      },
      {
        code: "lightgray",
        img: "../assets/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99.99,
    colors: [
      {
        code: "gray",
        img: "../assets/hippie.png",
      },
      {
        code: "black",
        img: "../assets/hippie2.png",
      },
    ],
  },
];

export default function Product() {
  return (
    <>
      <section className={classes["product"]} id="product">
        <div className={classes["cartIcon"]}>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
        <div className={classes["cartItemCounter"]}></div>
        <Cart />
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
