import classes from "./Nav.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  return (
    <>
      <div className={classes["navbar"]}>
        <FontAwesomeIcon icon={faHouse}  className={classes["navbar-icon"]}/>
        <div className={classes["navbar-list"]}>
          <div className={classes["navbar-list-item"]}>About</div>
          <div className={classes["navbar-list-item"]}>Projects</div>
          <div className={classes["navbar-list-item"]}>Stack</div>
          <div className={classes["navbar-list-item"]}>Contact</div>
        </div>
      </div>
    </>
  )
}

export default Nav;
