import classes from "./IconImage.module.css";
import profileImg from '../images/bitmoji1.png';

function IconImage() {
  return (
    <div className={classes["icon-container"]}>
      <img src={profileImg} alt="small bitmoji" className={classes["icon-image"]} />
    </div>
  )
}

export default IconImage;
