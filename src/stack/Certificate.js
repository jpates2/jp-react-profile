import classes from "./Certificate.module.css";

function Certificate({ id, name, provider, date, link, certificate }) {
  return (
    <div className={classes["certificate-container"]}>
      <h3 className={classes["certificate-header"]}>{name}</h3>
      <div className={classes["certificate-info"]}>
        <div className={classes["certificate-info-type"]}>Provider</div>
        <div>{provider}</div>
        <div className={classes["certificate-info-type"]}>Completed</div>
        <div>{date}</div>
      </div>
      <div href={certificate} className={classes["certificate-image-container"]}>
        <a href={certificate} className={classes["certificate-link"]}>View Certificate</a>
      </div>
      <div className={classes["certificate-bottom-border"]}></div>
    </div>
  )
}

export default Certificate;
