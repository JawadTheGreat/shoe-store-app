import PropTypes from "prop-types";
import classes from "../styles/Product.module.css";
import air from "../assets/air.png";
import air2 from "../assets/air2.png";
import jordan from "../assets/jordan.png";
import jordan2 from "../assets/jordan2.png";
import blazer from "../assets/blazer.png";
import blazer2 from "../assets/blazer2.png";
import crater from "../assets/crater.png";
import crater2 from "../assets/crater2.png";
import hippie from "../assets/hippie.png";
import hippie2 from "../assets/hippie2.png";
import Cart from "./Cart";
import { useState } from "react";

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119.99,
    colors: [
      {
        id: 101,
        code: "black",
        img: air,
      },
      {
        id: 102,
        code: "darkblue",
        img: air2,
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149.99,
    colors: [
      {
        id: 201,
        code: "lightgray",
        img: jordan,
      },
      {
        id: 202,
        code: "green",
        img: jordan2,
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109.99,
    colors: [
      {
        id: 301,
        code: "lightgray",
        img: blazer,
      },
      {
        id: 302,
        code: "green",
        img: blazer2,
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129.99,
    colors: [
      {
        id: 401,
        code: "black",
        img: crater,
      },
      {
        id: 402,
        code: "lightgray",
        img: crater2,
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99.99,
    colors: [
      {
        id: 501,
        code: "gray",
        img: hippie,
      },
      {
        id: 502,
        code: "black",
        img: hippie2,
      },
    ],
  },
];

export default function Product({ currentIndex }) {
  const [colorIndex, setColorIndex] = useState(0); // State to track which color button is active (clicked)
  const [activeSizeButton, setActiveSizeButton] = useState(null); // State to track which size button is active (clicked)
  const [cartButtonActive, setCartButtonActive] = useState(false);
  const [cart, setCart] = useState([]);
  //change the choosen product
  let choosenProduct = products[currentIndex];

  //change the choosen product details
  let currentProductId = choosenProduct.colors[colorIndex].id;
  let currentProductImg = choosenProduct.colors[colorIndex].img;
  let currentProductTitle = choosenProduct.title;
  let currentProductPrice = choosenProduct.price;
  let currentProductColors = choosenProduct.colors;

  // Function to determine the size button color
  const getSizeButtonStyle = (sizeButtonIndex) => {
    return {
      backgroundColor: activeSizeButton === sizeButtonIndex ? "black" : "white",
      color: activeSizeButton === sizeButtonIndex ? "white" : "black",
    };
  };

  // Function to handle size button click
  const handleSizeButtonClick = (sizeButtonIndex) => {
    setActiveSizeButton(sizeButtonIndex);
  };

  // function for maintaining cart data
  function addToCart(img, title, price, id) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        alert("This item is already added.");
        return;
      }
    }
    let cartItem = {
      id: id,
      img: img,
      title: title,
      price: price,
    };

    setCart([...cart, cartItem]);
  }

  return (
    <>
      <section className={classes["product"]} id="product">
        <div
          className={classes["cartIcon"]}
          onClick={() => setCartButtonActive(true)}
        >
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
        <div className={classes["cartItemCounter"]}></div>
        <Cart
          cartButtonActive={cartButtonActive}
          setCartButtonActive={setCartButtonActive}
          cart={cart}
        />
        <img src={currentProductImg} alt="" className={classes["productImg"]} />
        <div className={classes["productDetails"]}>
          <div className={classes["productTitle"]}>{currentProductTitle}</div>
          <div className={classes["productPrice"]}>${currentProductPrice}</div>
          <div className={classes["productDescription"]}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo cum
            ducimus nobis quibusdam consequuntur nam eligendi aspernatur nihil
            maxime. Earum ullam dolor id numquam sed, nobis architecto quasi.
            Quos, in.
          </div>
          <div className={classes["productColor"]}>
            {currentProductColors.map((color, index) => (
              <div
                className={classes["color"]}
                style={{ backgroundColor: color.code }}
                onClick={() => setColorIndex(index)}
                key={index}
              ></div>
            ))}
          </div>
          <div className={classes["productSizes"]}>
            <div
              className={classes["size"]}
              style={getSizeButtonStyle(0)}
              onClick={() => handleSizeButtonClick(0)}
            >
              42
            </div>
            <div
              className={classes["size"]}
              style={getSizeButtonStyle(1)}
              onClick={() => handleSizeButtonClick(1)}
            >
              43
            </div>
            <div
              className={classes["size"]}
              style={getSizeButtonStyle(2)}
              onClick={() => handleSizeButtonClick(2)}
            >
              44
            </div>
          </div>
          <button
            className={classes["productButton"]}
            onClick={() =>
              addToCart(
                currentProductImg,
                currentProductTitle,
                currentProductPrice,
                currentProductId
              )
            }
          >
            Add To Cart
          </button>
          {console.log(cart)}
        </div>
      </section>
    </>
  );
}

Product.propTypes = {
  currentIndex: PropTypes.number.isRequired,
};
