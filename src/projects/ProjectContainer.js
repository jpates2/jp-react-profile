import classes from "./ProjectContainer.module.css";
import styles from "../styles/shared.module.css";
import { motion } from "framer-motion";
import { ProjectInfo } from "../info/project-info";
import Project from "./Project";

function ProjectContainer() {
  const projects = ProjectInfo.map((project) => (
    <Project
      id={project.id}
      title={project.title}
      text={project.text}
      languages={project.languages}
      link={project.link}
      github={project.github}
      image={project.img}
      key={project.id}
    />
  ))

  return (
    <>
      <motion.div className={classes["project-section"]}>
        <div className={classes["project-head"]}>
          <h1>Portfolio</h1>
          <svg className={`${classes["project-head-underline"]} ${styles["draw-on-load"]}`} xmlns="http://www.w3.org/2000/svg" id="e51fXiHKy7A1" viewBox="0 0 100 20" shapeRendering="geometricPrecision" textRendering="geometricPrecision"><path d="M4.201681,10c9.17895-7.64913,23.515843-6.46794,35.534213-5.05402c16.59815,1.95272,39.758933,9.85412,56.182473,0" fill="none" stroke="#fabb3c" strokeWidth="3"/></svg>
        </div>
        <div className={classes["project-grid"]}>
          {projects}
        </div>
      </motion.div>
    </>
  )
}

export default ProjectContainer;
