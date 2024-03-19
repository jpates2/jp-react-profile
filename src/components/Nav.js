import classes from "./Nav.module.css";

function Nav() {
  return (
    <>
      <div className={classes["navbar"]}>
        <div className={classes["navbar-list"]}>
          <div className={classes["navbar-list-item"]}>Home</div>
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
