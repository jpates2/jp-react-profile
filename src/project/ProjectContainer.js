import classes from "./ProjectContainer.module.css";
import styles from "../styles/shared.module.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import ProjectImages from "./ProjectImages";

function ProjectContainer({ project }) {
  const langs = project.languages.join(" | ");
  const text = project.text.map((txt, idx) => (
    <p key={`${project.id}-${idx}`}>{txt}</p>
  ))

  return (
    <>
    <motion.div className={styles["page-section"]}>
        <h1 className={classes["project-header"]}>{project.title}</h1>
        <div className={classes["project-details"]}>
          <div className={classes[`project-images-container-${project.orientation}`]}>
            <ProjectImages images={project.images} orientation={project.orientation} />
          </div>
          <div className={classes["project-info"]}>
            <div className={classes["project-info-text"]}>
              {text}
            </div>
            <div className={classes["project-languages"]}>
              <h5>Languages</h5>
              <p>{langs}</p>
            </div>
            <div className={classes["project-links"]}>
              <a href={project.link} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLink} className={classes["project-link"]}/>
              </a>
              <a href={project.github} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithubSquare} className={classes["project-link"]}/>
              </a>
            </div>
          </div>
        </div>
    </motion.div>
  </>
  )
}

export default ProjectContainer;
