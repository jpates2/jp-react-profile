import classes from "./Nav.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  const mobileNav = (
    <>
      <div className={classes["mobile-navbar"]}>
        <FontAwesomeIcon icon={faHouse}  className={classes["navbar-icon"]}/>
      </div>
    </>
  )

  const deskNav = (
    <>
    <div className={classes["desk-navbar"]}>
      <FontAwesomeIcon icon={faHouse}  className={classes["desk-navbar-icon"]}/>
      <div className={classes["desk-navbar-list"]}>
        <div className={classes["desk-navbar-list-item"]}>About</div>
        <div className={classes["desk-navbar-list-item"]}>Projects</div>
        <div className={classes["desk-navbar-list-item"]}>Stack</div>
        <div className={classes["desk-navbar-list-item"]}>Contact</div>
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
