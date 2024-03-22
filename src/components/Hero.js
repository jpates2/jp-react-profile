import classes from "./Hero.module.css";
import styles from "../styles/shared.module.css";
import profileImg from '../images/bitmoji1.png';

function Hero() {
  return (
    <div className={classes["hero-section"]}>
      <div className={classes["hero-info"]}>
        <div className={classes["hero-name"]}>
          <div className={classes["hero-name-text"]}>Jess Pates</div>
          <svg className={`${classes["hero-name-underline"]} ${styles["draw-on-load"]}`} xmlns="http://www.w3.org/2000/svg" id="e51fXiHKy7A1" viewBox="0 0 100 20" shapeRendering="geometricPrecision" textRendering="geometricPrecision"><path d="M4.201681,10c9.17895-7.64913,23.515843-6.46794,35.534213-5.05402c16.59815,1.95272,39.758933,9.85412,56.182473,0" fill="none" stroke="#fabb3c" strokeWidth="3"/></svg>
        </div>
        <div className={classes["hero-job"]}>Fullstack Developer</div>
        <img src={profileImg} alt="profile bitmoji" className={classes["hero-image"]} />
      </div>
      <div className={classes["hero-image-container"]}>
      </div>
      <svg className={`${classes["hero-swirl"]} ${styles["draw-on-load-delay"]}`} xmlns="http://www.w3.org/2000/svg" id="ex7dOCosLqb1" viewBox="0 0 200 200" shapeRendering="geometricPrecision" textRendering="geometricPrecision"><path d="M28.640077,205.189812C65.094207,176.026502,130.28167,128.04014,145.41086,82.65257C162.30012,31.9848,96.83759,11.38294,60.3556,34.59875c-21.99743,13.99837-11.40054,50.63301,1.44161,67.75589c25.68024,34.24031,106.099334,66.04652,144.161464,83.61365" transform="translate(0 0.000001)" fill="none" stroke="#f58a07" strokeWidth="4"/></svg>
    </div>
  )
}

export default Hero;
