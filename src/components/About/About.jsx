import { forwardRef, useState } from 'react';

import { TbBrandCpp, TbCircleLetterC, TbBrandJavascript, TbBrandHtml5, TbBrandCss3, TbBrandVscode, TbBinaryTree2, TbAirBalloon, TbBrandMatrix } from "react-icons/tb";
import { FaPython, FaJava, FaGithub, FaDocker, FaLinux } from "react-icons/fa";
import { SiUnrealengine, SiBlueprint, SiThealgorithms } from "react-icons/si";
import { GiArtificialHive } from "react-icons/gi";
import { MdAnimation } from "react-icons/md";
import { PiDotsNineBold, PiTreeStructure } from "react-icons/pi";
import { LuAxis3D } from "react-icons/lu";
import { GrInherit } from "react-icons/gr";
import { VscDebug } from "react-icons/vsc";

import styles from './About.module.css'

const About = forwardRef(function About(props, ref) {

  const baseFilters = [{name: "Code Languages", active: true},
                    {name: "Software Tools", active: true},
                    {name: "Game Developement", active: true},
                    {name: "Robotics", active: true},
                    {name: "Concepts", active: true}]

  const [filters, setFilter] = useState(baseFilters);

  const skills = [{category: "Code Languages", name: "C", icon: TbCircleLetterC},
    {category: "Code Languages", name: "C++", icon: TbBrandCpp},
    {category: "Code Languages", name: "Python", icon: FaPython },
    {category: "Code Languages", name: "Java", icon: FaJava },
    {category: "Code Languages", name: "JavaScript", icon: TbBrandJavascript },
    {category: "Code Languages", name: "HTML", icon: TbBrandHtml5 },
    {category: "Code Languages", name: "CSS", icon: TbBrandCss3 },
    {category: "Software Tools", name: "GitHub", icon: FaGithub},
    {category: "Software Tools", name: "Docker", icon: FaDocker },
    {category: "Software Tools", name: "VSCode", icon: TbBrandVscode},
    {category: "Software Tools", name: "Linux", icon: FaLinux},
    {category: "Game Developement", name: "Unreal Engine 5", icon: SiUnrealengine},
    {category: "Game Developement", name: "Blueprints", icon: SiBlueprint},
    {category: "Game Developement", name: "Behavior Trees", icon: TbBinaryTree2},
    {category: "Game Developement", name: "AI Perception", icon: GiArtificialHive},
    {category: "Game Developement", name: "Animation Blueprints", icon: MdAnimation},
    {category: "Robotics", name: "ROS2", icon: PiDotsNineBold},
    {category: "Robotics", name: "Nav2", icon: TbAirBalloon},
    {category: "Robotics", name: "URDF", icon: LuAxis3D},
    {category: "Concepts", name: "OOP", icon: GrInherit},
    {category: "Concepts", name: "Data Structures", icon: PiTreeStructure},
    {category: "Concepts", name: "Algorithms", icon: SiThealgorithms},
    {category: "Concepts", name: "Linear Algebra", icon: TbBrandMatrix},
    {category: "Concepts", name: "Debugging", icon: VscDebug},
  ]

  const me = ["spikeball.jpg", "basketball.avif", "volleyball.png", "videogames.jpg", "marriage.avif", "church.avif"]

  return (
    <section className={styles.about} id="about" ref={ref}>
        <div className={styles.filter}>
          {filters.map((filter) => (
            <div key={filter.name}>
              <label htmlFor={filter.name}>{filter.name}</label>
              <input id={filter.name} onChange={() => {
                  setFilter((prev) => prev.map((f) => 
                    f.name === filter.name ? {...f, active: !f.active} : f
                  ));
                }} type="checkbox" checked={filter.active}/>
            </div>
          ))}
        </div>
        <img src="/me.jpg" className={styles.me}/>
        <div className={styles.bio}>
          <h1>Education</h1>
          <img src="/umnCampus.jpeg" className={styles.school}/>
          <h2>University of Minnesota, College of Science and Engineering</h2>
          <h3>Bachelor of Science, Computer Science, GPA 3.86, Dean's List</h3>
          <p>Relevant Coursework: 
            C/C++, Algorithms & Program Development, 
            Discrete Structures, Computational Linear Algebra, 
            Machine Architecture, Advanced Programming Principles, 
            Probability & Statistics</p>
        </div>
        <div className={styles.skills}>
          <h1>Skills</h1>
          {skills.map((skill) =>
            <div key={skill.name} className={styles.skillPill}>
              <skill.icon className={styles.skillIcon}/>
              <h1>{skill.name}</h1>
            </div>
          )}
        </div>
        <div className={styles.fun}>
          <h1>Me</h1>
          {me.map((item) =>
            <div key={item} className={styles.funItem}>
              <img src={item} className={styles.funImg}/>
            </div>
          )}
        </div>
    </section>
  );
});

export default About;