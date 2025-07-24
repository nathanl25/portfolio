import classes from './Card.module.scss';
import type { ProjectData } from '../../types/projects';

const Card = ({
  imageSrc,
  imageAlt,
  title,
  description,
  githubLink,
  deployedLink,
}: ProjectData) => {
  return (
    <div className={classes.card}>
      <div className={classes.hover__container}>
        <img src={imageSrc} alt={imageAlt} />
        <div className={classes.backside}>
          <p>{description}</p>
          {deployedLink && <a href={deployedLink}>Try Me</a>}
        </div>
      </div>
      <div className={classes.caption}>
        <h3>{title}</h3>
        <a href={githubLink}>
          <i className="devicon-github-original" />
        </a>
      </div>
      {/* <h2>Card Title</h2>
      <p>This is a simple card component.</p> */}
      {/* Add more content or components here */}
    </div>
  );
};
export default Card;
