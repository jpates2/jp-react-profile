import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import classes from "./Languages.module.css";
import styles from "../styles/shared.module.css";
import { LanguagesInfo } from "../info/languages-info";
import Language from "./Language";

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

function Languages() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  const languages = LanguagesInfo.map(lang => (
    <Language
      language={lang.language}
      key={lang.language}
    />
  ))

  return (
    <div className={classes["languages-section"]}>
      <div className={`${classes["languages-top-border"]} ${styles["draw-on-load"]}`}></div>
      <div className={`${classes["languages-bottom-border"]} ${styles["draw-on-load-delay"]}`}></div>
      <motion.div variants={listVariant} initial={pageLoaded ? "opened" : "closed"} animate={pageLoaded ? "opened" : "closed"} className={classes["languages-list"]}>
        {languages}
      </motion.div>
    </div>
  );
}

export default Languages;
