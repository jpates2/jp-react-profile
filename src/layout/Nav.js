import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { rgb } from "polished";
import classes from "./Nav.module.css";
import styles from "../styles/shared.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const hamburgerVariant = {
  closed: { rotate: 0, position: "absolute" },
  opened: { rotate: 90, position: "fixed" }
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

const mobileMenu = {
  opened: {
    y: "0%",
    x: "0%",
    height: "100vh",
    transition: {
      duration: 1,
      ease: [0.75, 0, 0.2, 1]
    }
  },
  closed: {
    y: "-100%",
    x: "100%",
    height: 0,
    transition: {
      duration: 0.5,
      ease: [0.75, 0, 0.5, 1]
    }
  }
}

const linkVariant = {
  opened: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.65,
      ease: "easeOut"
    }
  },
  closed: {
    opacity: 0,
    y: "100%",
    transition: {
      duration: 0.25,
      ease: "easeInOut"
    }
  }
}

function Nav() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  console.log(mobileNavOpen);

  const mobileNav = (
    <div className={classes["mobile-nav"]}>
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
            style={{ backgroundColor: mobileNavOpen ? "white" : "rgb(250, 187, 60)" }}
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
            style={{ backgroundColor: mobileNavOpen ? "white" : "rgb(250, 187, 60)" }}
          ></motion.span>
        </motion.div>
      </div>

      <motion.div
        className={classes["mobile-menu-container"]}
        initial="closed"
        animate={mobileNavOpen ? "opened" : "closed"}
        variants={mobileMenu}
      >
        <AnimatePresence>
          <motion.div className={classes["mobile-menu"]}>
            <Link to="/" onClick={() => setMobileNavOpen(prevState => !prevState)}>
              <div>Home</div>
            </Link>
            <Link to="/about" onClick={() => setMobileNavOpen(prevState => !prevState)}>
              <div>About</div>
            </Link>
            <Link to="/projects" onClick={() => setMobileNavOpen(prevState => !prevState)}>
              <div>Projects</div>
            </Link>
            <Link to="/stack" onClick={() => setMobileNavOpen(prevState => !prevState)}>
              <div>Stack</div>
            </Link>
            <Link to="/contact" onClick={() => setMobileNavOpen(prevState => !prevState)}>
              <div>Contact</div>
            </Link>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
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
