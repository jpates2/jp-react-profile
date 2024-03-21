import classes from "./FunFacts.module.css";
import FunFact from "./FunFact";
import { FactsInfo } from "../info/facts-info";

function FunFacts() {
  const facts = FactsInfo.map((box) => (
    <FunFact
      text={box.text}
      key={box.id}
    />
  ))
  return (
    <div className={classes["fun-facts-section"]}>
      <h2>Fun Facts</h2>
      <div className={classes["fun-facts"]}>
        {facts}
      </div>
      {/* <svg className={classes["fun-facts-wave"]} xmlns="http://www.w3.org/2000/svg" id="e7VyJBzwMoK1" viewBox="0 0 400 100" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><path d="M-1.02564,50.46154c29.47036-39.2938,54.59561,16.01938,79.48718,9.23077c17.31576-4.72248,20.20272-24.22917,41.02564-21.02564c12.57323,1.93434,28.1712,24.01357,42.05128,18.46154c16.5273-6.61092,18.94425-28.44846,40-25.64103c18.06966,2.40929,31.37365,35.41458,51.28205,31.79487c16.46363-2.99339,22.11378-24.89632,38.46154-26.15385c19.04407-1.46493,34.21038,21.94202,54.35897,15.89744C370.68197,45.51335,365.34852,33.270023,400,44.820513" fill="none" stroke="#f58a07" stroke-width="4"/></svg> */}
      <div className={classes["fun-facts-line1"]}></div>
      <div className={classes["fun-facts-line2"]}></div>
    </div>
  )
}

export default FunFacts;
