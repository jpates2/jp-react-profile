import classes from "./Certificates.module.css";
import { CertsInfo } from "../info/certs-info";
import Certificate from "./Certificate";

function Certificates() {
  const certificates = CertsInfo.map(cert => (
    <Certificate
      key={cert.id}
      id={cert.id}
      name={cert.name}
      provider={cert.provider}
      date={cert.date}
      certificate={cert.certificate}
      link={cert.link}
    />
  ))

  return (
    <div className={classes["certs-section"]}>
      <h2>Certificates</h2>
      <div className={classes["certs-grid"]}>
        {certificates}
      </div>
    </div>
  )
}

export default Certificates;
