import classes from "./AboutContainer.module.css";
import Slider from "./Slider";

function AboutContainer() {
  return (
    <div className={classes["about-section"]}>
      <Slider />
    </div>
  )
}

export default AboutContainer;
