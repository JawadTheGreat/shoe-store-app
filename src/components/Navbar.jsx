import classes from "../styles/Navbar.module.css";
import shopLogo from "../assets/sneakers.png";
import searchIcon from "../assets/search.png";

export default function Navbar() {
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
            />
            <img src={searchIcon} alt="" className={classes["search-icon"]} />
          </div>
          <h1 className={classes["nav-offer"]}>Limited Offer!</h1>
        </div>
        <div className={classes["bottom-nav"]}>
          <h3 className={classes["nav-item"]}>AIR FORCE</h3>
          <h3 className={classes["nav-item"]}>JORDAN</h3>
          <h3 className={classes["nav-item"]}>BLAZER</h3>
          <h3 className={classes["nav-item"]}>CRATER</h3>
          <h3 className={classes["nav-item"]}>HIPPIE</h3>
        </div>
      </nav>
    </>
  );
}
