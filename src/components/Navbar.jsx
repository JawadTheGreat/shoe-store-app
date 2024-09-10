import classes from "../styles/Navbar.module.css";
import shopLogo from "../assets/sneakers.png";
import searchIcon from "../assets/search.png";
import PropTypes from "prop-types";

const productNames = ["AIR FORCE", "JORDAN", "BLAZER", "CRATER", "HIPPIE"];

export default function Navbar({ setCurrentIndex }) {
  return (
    <>
      <nav className={classes["main-nav"]} id="nav">
        <div className={classes["top-nav"]}>
          <a href="#">
            <img src={shopLogo} alt="logo" className={classes["nav-logo"]} />
          </a>
          <div className={classes["search"]}>
            <input
              type="text"
              placeholder="Search..."
              className={classes["search-input"]}
              id="searchInput"
            />
            <img src={searchIcon} alt="" className={classes["search-icon"]} />
          </div>
          <h1 className={classes["nav-offer"]}>Limited Offer!</h1>
        </div>
        <div className={classes["bottom-nav"]}>
          {productNames.map((name, index) => (
            <h3
              className={classes["nav-item"]}
              onClick={() => setCurrentIndex(index)}
              key={index}
            >
              {name}
            </h3>
          ))}
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  setCurrentIndex: PropTypes.func.isRequired,
};
