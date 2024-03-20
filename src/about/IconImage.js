import { motion, useScroll, useTransform } from 'framer-motion';
import classes from "./IconImage.module.css";
import profileImg from '../images/bitmoji1.png';

function IconImage() {
  const { scrollY } = useScroll();

  const yRange = [0, window.innerHeight];
  const rotationRange = [-360, 0];
  const translateYRange = [0, window.innerHeight];

  const rotation = useTransform(scrollY, yRange, rotationRange);
  const translateY = useTransform(scrollY, yRange, translateYRange);

  return (
    <motion.div className={classes["icon-container"]}>
      <motion.img
        src={profileImg}
        alt="small bitmoji"
        className={classes["icon-image"]}
        style={{ rotate: rotation, translateY: translateY }}

      />
    </motion.div>
  )
}

export default IconImage;
