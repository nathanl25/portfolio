import classes from './Introduction.module.scss';
import portraitImage from '../../assets/portrait.jpg';

const Introduction = () => {
  return (
    <section id="home" className={classes.introduction}>
      <div className={classes.text_section}>
        <h1>Nathan Ly</h1>
        <h2>Full Stack Developer</h2>
        <p>
          I'm Nathan. In my free time, if I'm not coding, you'll probably find
          me baking, playing volleyball or playing mahjong.
        </p>
      </div>
      <div className={classes.image_section}>
        <img src={portraitImage} alt="Nathan" />
      </div>
    </section>
  );
};

export default Introduction;
