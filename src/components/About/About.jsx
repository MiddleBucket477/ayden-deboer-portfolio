import { forwardRef, useState } from 'react';
import styles from './About.module.css'

const About = forwardRef(function About(props, ref) {

  const baseFilters = [{name: "Code Languages", active: true},
                    {name: "Software Tools", active: true},
                    {name: "Game Developement", active: true},
                    {name: "AI", active: true},
                    {name: "Robotics", active: true},
                    {name: "Concepts", active: true}]

  const [filters, setFilter] = useState([baseFilters]);

  return (
    <section className={styles.about} id="about" ref={ref}>
        <div className={styles.filter}>
          {filters.map((filter) => <input type="checkbox"/>)}
        </div>
        <img src="" className={styles.me}/>
        <div className={styles.bio}></div>
        <div className={styles.skills}></div>
        <div className={styles.fun}></div>
    </section>
  );
});

export default About;