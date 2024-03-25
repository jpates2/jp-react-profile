import classes from "./Certificates.module.css";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CertsInfo } from "../info/certs-info";
import Certificate from "./Certificate";

const certsVariant = {
  in: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.17, 0.55, 0.55, 1],
      delay: 0.3
    } },
  out: {
    y: "100%",
    opacity: 0
  }
}

function Certificates() {
  const certsRef = useRef(null);
  const isInView = useInView(certsRef, { once: true });
  const [activeCert, setActiveCert] = useState("");
  const [showCert, setShowCert] = useState(false);

  const openCertHandler = (id) => {
    setShowCert(true);
    setActiveCert((prevId) => {
      if (prevId === id) {
        return null;
      }
      return id;
    })
    console.log(activeCert);
  }

  const closeCertHandler = () => {
    setShowCert(false);
  }

  const certificates = CertsInfo.map(cert => (
    <Certificate
      key={cert.id}
      id={cert.id}
      name={cert.name}
      provider={cert.provider}
      date={cert.date}
      certificate={cert.certificate}
      link={cert.link}
      onOpen={() => openCertHandler(cert.id)}
      onClose={closeCertHandler}
      isOpenCert={showCert}
      isActiveCert={activeCert === cert.id}
      activeCert={activeCert}
    />
  ))

  return (
    <div ref={certsRef} className={classes["certs-section"]}>
      <h2>Certificates</h2>
      <motion.div
        className={classes["certs-grid"]}
        initial="out"
        animate={isInView ? "in" : "out"}
        variants={certsVariant}
      >
        {certificates}
      </motion.div>
    </div>
  )
}

export default Certificates;
