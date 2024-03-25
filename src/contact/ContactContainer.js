import classes from "./ContactContainer.module.css";
import styles from "../styles/shared.module.css";
import { useRef } from "react";
import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function ContactContainer() {
  const contactRef = useRef(null);
  const isInView = useInView(contactRef, { once: true });

  return (
    <>
    <div className={styles["page-section"]}>
      <div className={styles["page-header-section"]}>
        <h1 className={styles["page-header"]}>Contact</h1>
        <svg className={`${classes["contact-head-underline"]} ${styles["draw-on-load-mid-delay"]}`} xmlns="http://www.w3.org/2000/svg" id="e51fXiHKy7A1" viewBox="0 0 100 20" shapeRendering="geometricPrecision" textRendering="geometricPrecision"><path d="M4.201681,10c9.17895-7.64913,23.515843-6.46794,35.534213-5.05402c16.59815,1.95272,39.758933,9.85412,56.182473,0" fill="none" stroke="#fabb3c" strokeWidth="3"/></svg>
      </div>
      <div className={classes["contact-img-container"]}>
        <div className={classes["contact-phone-container"]}>
          <FontAwesomeIcon icon={faPhone} className={`${classes["contact-phone-img"]} ${classes["contact-phone-img-left"]}`} />
          <FontAwesomeIcon icon={faPhoneFlip} className={`${classes["contact-phone-img"]} ${classes["contact-phone-img-right"]}`} />
        </div>
        <svg className={`${classes["contact-line"]} ${styles["draw-on-load"]}`} xmlns="http://www.w3.org/2000/svg" id="eNjE7PQ5Wqv1" viewBox="0 0 300 100" shapeRendering="geometricPrecision" textRendering="geometricPrecision"><path d="M4.155125,35.87258C15.945786,61.579561,108.8669,89.322059,157.06371,62.04987c53.21072-30.109313-27.493858-63.642253-37.39612-26.17729-7.371122,27.888459,31.485226,31.672856,49.86149,34.07202c45.415733,5.929377,93.797133-8.201591,125.900283-40.304711" fill="none" stroke="#fabb3c" strokeWidth="4"/></svg>
      </div>
    </div>
    <motion.div
      ref={contactRef}
      className={classes["contact-details-container"]}
      initial={{ y: '400%' }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.9,
        ease: [0.17, 0.55, 0.55, 1],
      }}
    >
      <div className={classes["contact-details"]}>
        <a href="https://github.com/jpates2" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithubSquare} className={classes["contact-details-icon"]} />
        </a>
      </div>
      <div className={classes["contact-details"]}>
        <a href="https://www.linkedin.com/in/jess-pates/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className={classes["contact-details-icon"]} />
        </a>
      </div>
      <div className={classes["contact-details"]}>
        <a href="mailto:jesspates1@gmail.com?">
          <FontAwesomeIcon icon={faEnvelope} className={classes["contact-details-icon"]} />
        </a>
      </div>
      <div className={classes["contact-details"]}>
        <FontAwesomeIcon icon={faFile} className={classes["contact-details-icon"]} />
      </div>
    </motion.div>
  </>
  )
}

export default ContactContainer;
