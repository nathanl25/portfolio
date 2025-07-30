import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import classes from './Contact.module.scss';
const Contact = () => {
  return (
    <section id="contact" className={classes.contact}>
      <h1>Contact Me</h1>

      <div className={classes.contact_links}>
        <a href="mailto:nathan.ly.study@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://www.linkedin.com/in/nathan-ly-b4173732b/">
          <i className="devicon-linkedin-plain" />
        </a>
        <a href="https://github.com/nathanl25">
          <i className="devicon-github-original" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
