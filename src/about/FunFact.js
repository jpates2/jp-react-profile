import classes from "./FunFact.module.css";

function FunFact({ text }) {
  return (
    <div className={classes["fun-fact-container"]}>
      <p className={classes["fun-fact-text"]}>{text}</p>
    </div>
  )
}

export default FunFact;
