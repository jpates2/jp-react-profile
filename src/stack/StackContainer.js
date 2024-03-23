import classes from "./StackContainer.module.css";
import styles from "../styles/shared.module.css";
import Languages from "./Languages";

function StackContainer() {
  return (
    <div className={styles["page-section"]}>
      <div className={styles["page-header-section"]}>
        <h1 className={styles["page-header"]}>Stack</h1>
        <svg className={`${classes["stack-head-underline"]} ${styles["draw-on-load-long-delay"]}`} xmlns="http://www.w3.org/2000/svg" id="e51fXiHKy7A1" viewBox="0 0 100 20" shapeRendering="geometricPrecision" textRendering="geometricPrecision"><path d="M4.201681,10c9.17895-7.64913,23.515843-6.46794,35.534213-5.05402c16.59815,1.95272,39.758933,9.85412,56.182473,0" fill="none" stroke="#fabb3c" strokeWidth="3"/></svg>
      </div>
      <Languages />
    </div>
  )
}

export default StackContainer;
