import { useState } from 'react';
import classes from './Skills.module.scss';
import skillsJson from '../../assets/skills.json';
import type { SkillsData, SkillCategory } from '../../types/skills';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');
  const skillsData = skillsJson as SkillsData;
  const filteredSkills =
    activeCategory === 'all'
      ? skillsData.skills
      : skillsData.skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className={classes.skills}>
      <h1>Skills</h1>
      <div className={classes.filter_container}>
        <button
          className={`${classes.filter_btn} ${
            activeCategory === 'all' ? classes.active : ''
          }`}
          onClick={() => setActiveCategory('all')}
        >
          All
        </button>
        <button
          className={`${classes.filter_btn} ${
            activeCategory === 'languages' ? classes.active : ''
          }`}
          onClick={() => setActiveCategory('languages')}
        >
          Languages
        </button>
        <button
          className={`${classes.filter_btn} ${
            activeCategory === 'frameworks' ? classes.active : ''
          }`}
          onClick={() => setActiveCategory('frameworks')}
        >
          Frameworks
        </button>
        <button
          className={`${classes.filter_btn} ${
            activeCategory === 'tools' ? classes.active : ''
          }`}
          onClick={() => setActiveCategory('tools')}
        >
          Tools & Technologies
        </button>
      </div>
      <div className={classes.skill_container}>
        {filteredSkills.map((skill) => (
          <i
            key={skill.name}
            className={skill.icon}
            data-tooltip={skill.name}
          ></i>
        ))}
      </div>
      {/* {getFilteredSkills()} */}
    </section>
  );
};

export default Skills;
