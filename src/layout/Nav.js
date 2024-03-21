import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import classes from "./Nav.module.css";
import styles from "../styles/shared.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const hamburgerVariant = {
  closed: { rotate: 0 },
  opened: { rotate: 90 }
}

const hamburgerTopVariant = {
  closed: { rotate: 0, translateY: 0 },
  opened: { rotate: 45, translateY: "1rem" }
}

const hamburgerMiddleVariant = {
  closed: { opacity: 1 },
  opened: { opacity: 0 }
}

const hamburgerBottomVariant = {
  closed: { rotate: 0, translateY: "1rem", translateX: "0" },
  opened: { rotate: -45, translateY: "1rem", translateX: "0" }
}

function Nav() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  console.log(mobileNavOpen);
  const mobileNav = (
    <>
      <div className={classes["mobile-navbar"]}>
        <motion.div
          className={classes["hamburger"]}
          onClick={() => setMobileNavOpen(prevState => !prevState)}
          initial="closed"
          animate={mobileNavOpen ? "opened" : "closed"}
          variants={hamburgerVariant}
        >
          <motion.span
            className={classes["hamburger-top"]}
            initial="closed"
            animate={mobileNavOpen ? "opened" : "closed"}
            variants={hamburgerTopVariant}
          ></motion.span>
          <motion.span
            className={classes["hamburger-middle"]}
            initial="closed"
            animate={mobileNavOpen ? "opened" : "closed"}
            variants={hamburgerMiddleVariant}
          ></motion.span>
          <motion.span
            className={classes["hamburger-bottom"]}
            initial="closed"
            animate={mobileNavOpen ? "opened" : "closed"}
            variants={hamburgerBottomVariant}
          ></motion.span>
        </motion.div>
        {/* <Link to="/">
          <FontAwesomeIcon icon={faHouse} className={classes["navbar-icon"]}/>
        </Link> */}
      </div>
    </>
  )

  const deskNav = (
    <>
    <div className={classes["desk-navbar"]}>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse}  className={classes["desk-navbar-icon"]}/>
      </Link>
      <div className={classes["desk-navbar-list"]}>
        <Link to="/about">
          <div className={classes["desk-navbar-list-item"]}>About</div>
        </Link>
        <Link to="/projects">
          <div className={classes["desk-navbar-list-item"]}>Projects</div>
        </Link>
        <Link to="/stack">
          <div className={classes["desk-navbar-list-item"]}>Stack</div>
        </Link>
        <Link to="/contact">
          <div className={classes["desk-navbar-list-item"]}>Contact</div>
        </Link>
      </div>
    </div>
  </>
  )

  return (
    <>
      {mobileNav}
      {deskNav}
    </>
  )
}

export default Nav;
