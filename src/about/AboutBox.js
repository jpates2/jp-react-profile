import classes from "./AboutBox.module.css";

function AboutBox({ title, text, gridArea }) {
  return (
    <div style={{ gridArea }} className={classes["about-box"]} >
      <h2>{title}</h2>
      <div>{text}</div>
    </div>
  )
}

export default AboutBox;
