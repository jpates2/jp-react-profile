import ReactDOM from "react-dom";
import { Backdrop } from "../layout/Modal";
import classes from "./Certificate.module.css";

function Certificate({ id, name, provider, date, link, certificate, isOpenCert, isActiveCert, onClose, onOpen }) {
  const portalElement = document.querySelector("#overlays");

  const certModal = (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(<img src={certificate} alt="certificate for course" className={classes["certificate-image"]}/>, portalElement)}
    </>
  )

  return (
    <>
      <div className={classes["certificate-container"]}>
        <h3 className={classes["certificate-header"]}>{name}</h3>
        <div className={classes["certificate-info"]}>
          <div className={classes["certificate-info-type"]}>Provider:</div>
          <div className={classes["certificate-provider"]}>{provider}</div>
          <div className={classes["certificate-info-type"]}>Completed:</div>
          <div>{date}</div>
        </div>
        <div className={classes["certificate-image-container"]}>
          <div className={classes["certificate-link"]} onClick={onOpen}>View Certificate</div>
        </div>
        <div className={classes["certificate-bottom-border"]}></div>
      </div>
      {isActiveCert && isOpenCert && certModal}
    </>
  )
}

export default Certificate;
