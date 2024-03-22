import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={classes["footer-links"]}>
        <a href="https://www.linkedin.com/in/jess-pates/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className={classes["desk-navbar-icon"]}/>
        </a>
        <a href="https://github.com/jpates2/jp-react-profile/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithubSquare} className={classes["desk-navbar-icon"]}/>
        </a>
      </div>
    </footer>
  )
}

export default Footer;
