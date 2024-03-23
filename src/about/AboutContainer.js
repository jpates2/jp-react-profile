import classes from "./AboutContainer.module.css";
import styles from "../styles/shared.module.css";
import { motion } from "framer-motion";
import Slider from "./Slider";
import AboutBox from "./AboutBox";
import FunFacts from "./FunFacts";
import { AboutInfo } from "../info/about-info";

function AboutContainer() {
  const boxes = AboutInfo.map((box) => (
    <AboutBox
      title={box.title}
      text={box.text}
      key={box.id}
    />
  ));

  const leftBoxes = AboutInfo.filter((_, index) => index % 2 === 0).map((box, index) => (
    <AboutBox
      title={box.title}
      text={box.text}
      key={box.id}
      className={classes["about-grid-item"]}
      gridArea={`item-${index * 2 + 1}`}
    />
  ));

  const rightBoxes = AboutInfo.filter((_, index) => index % 2 !== 0).map((box, index) => (
    <AboutBox
      title={box.title}
      text={box.text}
      key={box.id}
      className={classes["about-grid-item"]}
      gridArea={`item-${index * 2 + 2}`}
    />
  ));

  const mobileBoxesView = (
    <div className={classes["about-content-mobile"]}>
      <Slider />
      <div className={classes["about-grid-mobile"]}>
        {boxes}
      </div>
    </div>
  )

  const desktopBoxesView = (
    <div className={classes["about-content-desktop"]}>
      <div className={classes["about-grid-left"]}>
        {leftBoxes}
      </div>
      <Slider />
      <div className={classes["about-grid-right"]}>
      {rightBoxes}
      </div>
    </div>
  )

  return (
    <>
      <motion.div
        className={styles["page-section"]}
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.9,
          ease: [0.17, 0.55, 0.55, 1],
        }}
      >
        <div className={styles["page-header-section"]}>
          <h1 className={styles["page-header"]}>About</h1>
          <svg className={`${classes["about-head-underline"]} ${styles["draw-on-load-delay"]}`} xmlns="http://www.w3.org/2000/svg" id="e51fXiHKy7A1" viewBox="0 0 100 20" shapeRendering="geometricPrecision" textRendering="geometricPrecision"><path d="M4.201681,10c9.17895-7.64913,23.515843-6.46794,35.534213-5.05402c16.59815,1.95272,39.758933,9.85412,56.182473,0" fill="none" stroke="#fabb3c" strokeWidth="3"/></svg>
        </div>
        {desktopBoxesView}
        {mobileBoxesView}
      </motion.div>
      <FunFacts />
    </>
  )
}

export default AboutContainer;
