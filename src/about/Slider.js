import IconImage from "./IconImage";
import Line from "./Line";
import classes from "./Slider.module.css";

function Slider() {
  return (
    <div className={classes["slider-section"]}>
      <Line />
      <IconImage />
    </div>
  )
}

export default Slider;
