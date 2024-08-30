import classes from "../styles/Gallery.module.css";
export default function Gallery() {
  return (
    <>
      <section className={classes["gallery"]}>
        <div className={classes["galleryItem"]}>
          <div className={classes["galleryTitle"]}>Be Yourself!</div>
          <img
            src="https://images.pexels.com/photos/18188499/pexels-photo-18188499/free-photo-of-adidas-sneakers-on-feet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className={classes["galleryImg"]}
          />
        </div>
        <div className={classes["galleryItem"]}>
          <img
            src="https://images.pexels.com/photos/1476209/pexels-photo-1476209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className={classes["galleryImg"]}
          />

          <div className={classes["galleryTitle"]}>
            This is the First Day of Your New Life
          </div>
        </div>
        <div className={classes["galleryItem"]}>
          <div className={classes["galleryTitle"]}>Just Do it!</div>
          <img
            src="https://images.pexels.com/photos/4365446/pexels-photo-4365446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className={classes["galleryImg"]}
          />
        </div>
      </section>
    </>
  );
}
