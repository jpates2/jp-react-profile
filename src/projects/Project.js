import classes from "./Project.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

function Project({ id, title, text, languages, link, github, image }) {
  const langs = languages.join(" | ");

  const projectClass = Number(id[id.length - 1]) % 2 === 0 ? classes["project-right"] : classes["project-left"];

  const textClass = Number(id[id.length - 1]) % 2 === 0 ? classes["project-right-text"] : classes["project-left-text"];

  const imageClass = Number(id[id.length - 1]) % 2 === 0 ? classes["project-right-image"] : classes["project-left-image"];

  return (
    <div className={`${classes["project-container"]} ${projectClass}`}>
      <div className={`${classes["project-text"]} ${textClass}`}>
        <h3>{title}</h3>
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
    </div>
  )
}

export default Project;
