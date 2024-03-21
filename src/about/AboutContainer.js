import classes from "./AboutContainer.module.css";
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
        className={classes["about-section"]}
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.9,
          ease: [0.17, 0.55, 0.55, 1],
        }}
      >
        <h1>About</h1>
        {desktopBoxesView}
        {mobileBoxesView}
      </motion.div>
      <FunFacts />
    </>
  )
}

export default AboutContainer;
