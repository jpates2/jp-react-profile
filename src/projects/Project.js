import classes from "./Project.module.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { useRef } from "react";
import { useInView } from 'framer-motion';

const leftProjectVariant = {
  in: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.17, 0.55, 0.55, 1],
      delay: 0.3
    } },
  out: { x: "-100%", opacity: 0 }
}

const rightProjectVariant = {
  in: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.17, 0.55, 0.55, 1],
      delay: 0.3
    }
  },
  out: { x: "100%", opacity: 0 }
}

function Project({ id, title, text, languages, link, github, image }) {
  const projectRef = useRef(null);
  const isInView = useInView(projectRef, { once: true });
  const langs = languages.join(" | ");

  const projectClass = Number(id[id.length - 1]) % 2 === 0 ? classes["project-right"] : classes["project-left"];

  const textClass = Number(id[id.length - 1]) % 2 === 0 ? classes["project-right-text"] : classes["project-left-text"];

  const imageClass = Number(id[id.length - 1]) % 2 === 0 ? classes["project-right-image"] : classes["project-left-image"];

  return (
    <motion.div
      className={`${classes["project-container"]} ${projectClass}`}
      // initial={{ x: projectClass === classes["project-right"] ? '100%' : '-100%' }}

      // animate={{ x: 0 }}
      // style={{
      //   // opacity: isInView ? 1 : 0,
      //   transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
      // }}
      initial="out"
      animate={isInView ? "in" : "out"}
      variants={projectClass === classes["project-right"] ? rightProjectVariant : leftProjectVariant}
    >
      <div className={`${classes["project-text"]} ${textClass}`}>
        <h3 ref={projectRef}>{title}</h3>
        <p>{langs}</p>
        <div className={classes["project-links"]}>
          <a href={link} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLink} className={classes["project-link"]}/>
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithubSquare} className={classes["project-link"]}/>
          </a>
        </div>
      </div>
      <div className={`${classes["project-img-container"]} ${imageClass}`}>
        {image && <img src={image} alt="project main screenshot" />}
      </div>
    </motion.div>
  )
}

export default Project;
