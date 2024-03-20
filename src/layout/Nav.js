import { Link } from "react-router-dom";
import classes from "./Nav.module.css";
import styles from "../styles/shared.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  const mobileNav = (
    <>
      <div className={classes["mobile-navbar"]}>
        <Link to="/">
          <FontAwesomeIcon icon={faHouse} className={classes["navbar-icon"]}/>
        </Link>
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
