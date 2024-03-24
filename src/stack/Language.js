import classes from "./Language.module.css";
import { motion } from "framer-motion";

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

function Language({ language }) {
  return (
    <motion.div variants={listItemVariant} className={`${classes["languages-list-item"]} ${classes["languages-list-" + language.toLowerCase()]}`}>{language}</motion.div>
  )
}

export default Language;
