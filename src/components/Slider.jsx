import PropTypes from "prop-types";
import classes from "../styles/Slider.module.css";
import air from "../assets/air.png";
import jordan from "../assets/jordan.png";
import blazer from "../assets/blazer.png";
import crater from "../assets/crater.png";
import hippie from "../assets/hippie.png";

export default function Slider({ currentIndex }) {
  return (
    <>
      <section className={classes["slider"]}>
        <div
          className={classes["slider-Wrapper"]}
          style={{ transform: `translateX(${-100 * currentIndex}vw)` }}
        >
          <div className={classes["slider-Item"]}>
            <img src={air} alt="" className={classes["slider-img"]} />
            <div className={classes["slider-Bg"]}></div>
            <h1 className={classes["slider-Title"]}>
              AIR FORCE
              <br />
              NEW
              <br />
              SEASON
            </h1>
            <h2 className={classes["slider-Price"]}>$119.99</h2>
            <a href="#product">
              <button className={classes["buy-button"]}>BUY NOW</button>
            </a>
          </div>
          <div className={classes["slider-Item"]}>
            <img src={jordan} alt="" className={classes["slider-img"]} />
            <div className={classes["slider-Bg"]}></div>
            <h1 className={classes["slider-Title"]}>
              JORDAN
              <br />
              NEW
              <br />
              SEASON
            </h1>
            <h2 className={classes["slider-Price"]}>$149.99</h2>
            <a href="#product">
              <button className={classes["buy-button"]}>BUY NOW</button>
            </a>
          </div>
          <div className={classes["slider-Item"]}>
            <img src={blazer} alt="" className={classes["slider-img"]} />
            <div className={classes["slider-Bg"]}></div>
            <h1 className={classes["slider-Title"]}>
              BLAZER
              <br />
              NEW
              <br />
              SEASON
            </h1>
            <h2 className={classes["slider-Price"]}>$109.99</h2>
            <a href="#product">
              <button className={classes["buy-button"]}>BUY NOW</button>
            </a>
          </div>
          <div className={classes["slider-Item"]}>
            <img src={crater} alt="" className={classes["slider-img"]} />
            <div className={classes["slider-Bg"]}></div>
            <h1 className={classes["slider-Title"]}>
              CRATER
              <br />
              NEW
              <br />
              SEASON
            </h1>
            <h2 className={classes["slider-Price"]}>$129.99</h2>
            <a href="#product">
              <button className={classes["buy-button"]}>BUY NOW</button>
            </a>
          </div>
          <div className={classes["slider-Item"]}>
            <img src={hippie} alt="" className={classes["slider-img"]} />
            <div className={classes["slider-Bg"]}></div>
            <h1 className={classes["slider-Title"]}>
              HIPPIE
              <br />
              NEW
              <br />
              SEASON
            </h1>
            <h2 className={classes["slider-Price"]}>$99.99</h2>
            <a href="#product">
              <button className={classes["buy-button"]}>BUY NOW</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

Slider.propTypes = {
  currentIndex: PropTypes.number.isRequired,
};
