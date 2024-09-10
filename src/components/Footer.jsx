import classes from "../styles/Footer.module.css";
import facebookPng from "../assets/facebook.png";
import twitterPng from "../assets/twitter.png";
import instagramPng from "../assets/instagram.png";
import whatsappPng from "../assets/whatsapp.png";

export default function Footer() {
  return (
    <>
      <footer className={classes["footer"]}>
        <div className={classes["leftFooter"]}>
          <div className={classes["footerMenu"]}>
            <h1 className={classes["fMenuTitle"]}>About Us</h1>
            <ul className={classes["fList"]}>
              <li className={classes["fListItem"]}>Company</li>
              <li className={classes["fListItem"]}>Contact</li>
              <li className={classes["fListItem"]}>Careers</li>
              <li className={classes["fListItem"]}>Affiliates</li>
              <li className={classes["fListItem"]}>Stores</li>
            </ul>
          </div>
          <div className={classes["footerMenu"]}>
            <h1 className={classes["fMenuTitle"]}>Useful Links</h1>
            <ul className={classes["fList"]}>
              <li className={classes["fListItem"]}>Support</li>
              <li className={classes["fListItem"]}>Refund</li>
              <li className={classes["fListItem"]}>FAQ</li>
              <li className={classes["fListItem"]}>Feedback</li>
              <li className={classes["fListItem"]}>Stories</li>
            </ul>
          </div>
          <div className={classes["footerMenu"]}>
            <h1 className={classes["fMenuTitle"]}>Products</h1>
            <ul className={classes["fList"]}>
              <li className={classes["fListItem"]}>Air Force</li>
              <li className={classes["fListItem"]}>Air Jordan</li>
              <li className={classes["fListItem"]}>Blazer</li>
              <li className={classes["fListItem"]}>Crater</li>
              <li className={classes["fListItem"]}>Hippie</li>
            </ul>
          </div>
        </div>

        <div className={classes["rightFooter"]}>
          <h2 className={classes["newsletterTitle"]}>
            Subscribe to our newsletter
          </h2>
          <div className={classes["newsletterMail"]}>
            <input
              type="email"
              placeholder="your@email.com"
              className={classes["newsletterMailInput"]}
              id="newsletterMailInput"
            />
            <button className={classes["newsletterMailBtn"]}>Join!</button>
          </div>
          <h2 className={classes["followusTitle"]}>Follow Us</h2>
          <div className={classes["socialLinks"]}>
            <img
              src={facebookPng}
              alt=""
              className={classes["socialLinkIcon"]}
            />
            <img
              src={twitterPng}
              alt=""
              className={classes["socialLinkIcon"]}
            />
            <img
              src={instagramPng}
              alt=""
              className={classes["socialLinkIcon"]}
            />
            <img
              src={whatsappPng}
              alt=""
              className={classes["socialLinkIcon"]}
            />
          </div>
          <span className={classes["copyright"]}>
            @Abu Jawad. All rights reserved. 2024
          </span>
        </div>
      </footer>
    </>
  );
}
