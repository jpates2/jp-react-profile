import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import classes from "./Languages.module.css";
import styles from "../styles/shared.module.css";

const listVariant = {
  opened: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.15
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
}

const listItemVariant = {
  opened: {
    opacity: 1,
    transition: {
      duration: 0.65,
      ease: "easeOut"
    }
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: "easeInOut"
    }
  }
}

function Languages() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <div className={classes["languages-section"]}>
      <div className={`${classes["languages-top-border"]} ${styles["draw-on-load"]}`}></div>
      <div className={`${classes["languages-bottom-border"]} ${styles["draw-on-load-delay"]}`}></div>
      <motion.div variants={listVariant} initial={pageLoaded ? "opened" : "closed"} animate={pageLoaded ? "opened" : "closed"} className={classes["languages-list"]}>
        <motion.div variants={listItemVariant} className={`${classes["languages-list-item"]} ${classes["languages-list-js"]}`}>JavaScript</motion.div>
        <motion.div variants={listItemVariant} className={`${classes["languages-list-item"]} ${classes["languages-list-html"]}`}>HTML</motion.div>
        <motion.div variants={listItemVariant} className={`${classes["languages-list-item"]} ${classes["languages-list-css"]}`}>CSS</motion.div>
        <motion.div variants={listItemVariant} className={`${classes["languages-list-item"]} ${classes["languages-list-react"]}`}>React</motion.div>
        <motion.div variants={listItemVariant} className={`${classes["languages-list-item"]} ${classes["languages-list-ruby"]}`}>Ruby</motion.div>
        <motion.div variants={listItemVariant} className={`${classes["languages-list-item"]} ${classes["languages-list-sql"]}`}>SQL</motion.div>
        <motion.div variants={listItemVariant} className={`${classes["languages-list-item"]} ${classes["languages-list-tail"]}`}>Tailwind</motion.div>
        <motion.div variants={listItemVariant} className={`${classes["languages-list-item"]} ${classes["languages-list-boot"]}`}>Bootstrap</motion.div>
        <motion.div variants={listItemVariant} className={`${classes["languages-list-item"]} ${classes["languages-list-ts"]}`}>TypeScript</motion.div>
        <motion.div variants={listItemVariant} className={`${classes["languages-list-item"]} ${classes["languages-list-heroku"]}`}>Heroku</motion.div>
        <motion.div variants={listItemVariant} className={`${classes["languages-list-item"]} ${classes["languages-list-github"]}`}>Github</motion.div>
      </motion.div>
    </div>
  );
}

export default Languages;
