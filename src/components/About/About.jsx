import { forwardRef, useState, useRef, useEffect } from 'react';

import { TbBrandCpp, TbCircleLetterC, TbBrandJavascript, TbBrandHtml5, TbBrandCss3, TbBrandVscode, TbBinaryTree2, TbAirBalloon, TbBrandMatrix } from "react-icons/tb";
import { FaPython, FaJava, FaGithub, FaDocker, FaLinux, FaCheck, FaLinkedin, FaDiscord, FaSteam } from "react-icons/fa";
import { SiUnrealengine, SiBlueprint, SiThealgorithms } from "react-icons/si";
import { GiArtificialHive } from "react-icons/gi";
import { MdAnimation, MdEmail } from "react-icons/md";
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
    {category: "Concepts", name: "Debugging", icon: VscDebug}]

  const shownSkills = skills.filter((skill) => filters.find(f => f.name === skill.category && f.active))

  const me = [{img: "cross.png", desc:"I am a Christian and do all my work for the glory of God.", x: 40, y: 20, vx: 0.4, vy: 1.0},
    {img: "spikeball.png", desc:"I love spikeball, one of my favorite outdoor summer games to play.", x: 620, y: 55, vx: -1.3, vy: 0.3},
    {img: "basketball.png", desc:"I've played basketball since I was in elementary school, holds a special place in my life.", x: 310, y: 130, vx: 0.7, vy: -1.1},
    {img: "volleyball.png", desc:"Volleyball is one my recent interests, at the end of high school I started playing and loved it.", x: 780, y: 30, vx: -0.4, vy: 1.4},
    {img: "videogames.png", desc:"Video games is a hobby and passion of mine, I've played them all my life and loved building my own.", x: 150, y: 110, vx: 1.4, vy: -0.5},
    {img: "marriage.png", desc:"My wife is the most important person in my life and we've been married since August 2026.", x: 500, y: 90, vx: -1.0, vy: -0.7}]

  const meItemMove = useRef(me); 
  const itemRefs = useRef([]);
  const frameRef = useRef(null);
  const containerRef = useRef(null);
  const dragRef = useRef(null)
  

  const [meItem, setMeItem] = useState(null);

  useEffect(() => {
    const loop = () => {
      const bounds = containerRef.current.getBoundingClientRect();
      meItemMove.current.forEach((item, index) => {  
        if (dragRef.current?.index === index) return;
        item.x = item.x + item.vx;
        item.y = item.y + item.vy;
        if (item.x <= 0) { item.x = 0; item.vx *= -1; };
        if (item.x >= bounds.width - 150) { item.x = bounds.width - 150; item.vx *= -1; };
        if (item.y <= 0) { item.y = 0; item.vy *= -1; };
        if (item.y >= bounds.height - 150) { item.y = bounds.height - 150; item.vy *= -1; };
        itemRefs.current[index].style.left = `${item.x}px`;
        itemRefs.current[index].style.top = `${item.y}px`;
      }); 

      frameRef.current = requestAnimationFrame(loop);
    }

    frameRef.current = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const onMouseDown = (e, index) => {
    const el = itemRefs.current[index];
    el.classList.add(styles.dragging);
    el.querySelector('img').style.opacity = '1';
    el.querySelector('p').style.opacity = '0';
    dragRef.current = { index, offsetX: e.clientX - meItemMove.current[index].x, offsetY: e.clientY - meItemMove.current[index].y };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    itemRefs.current[index]
  };

  const onMouseMove = (e) => {
    if (!dragRef.current) return;
    const { index, offsetX, offsetY } = dragRef.current;
    const item = meItemMove.current[index];
    const bounds = containerRef.current.getBoundingClientRect();
    item.x = Math.max(0, Math.min(e.clientX - offsetX, bounds.width - 100));
    item.y = Math.max(0, Math.min(e.clientY - offsetY, bounds.height - 100));
    itemRefs.current[index].style.left = `${item.x}px`;
    itemRefs.current[index].style.top = `${item.y}px`;
  };

  const onMouseUp = () => {
    const el = itemRefs.current[dragRef.current.index];
    el.classList.remove(styles.dragging);
    el.querySelector('img').style.opacity = '';
    el.querySelector('p').style.opacity = '';
    dragRef.current = null;
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };

  return (
    <section className={styles.about} id="about" ref={ref}>
        <div className={styles.filter}>
          {filters.map((filter) => (
            <div key={filter.name} className={styles.filterItem}>
              <input id={filter.name} onChange={() => {
                  setFilter((prev) => prev.map((f) => 
                    f.name === filter.name ? {...f, active: !f.active} : f
                  ));
                }} type="checkbox" checked={filter.active}/>
                {<FaCheck className={filter.active ? styles.checkedIcon : styles.uncheckedIcon}/>}
                <label htmlFor={filter.name}>{filter.name}</label>
            </div>
          ))}
        </div>
        <img src="/me.jpg" className={styles.me}/>
        <div className={styles.bio}>
          <h1>Education</h1>
          <img src="/umnCampus.jpeg" className={styles.school}/>
          <div className={styles.bioContent}>
            <h2>University of Minnesota, College of Science and Engineering</h2>
            <h3>Bachelor of Science, Computer Science, GPA 3.86, Dean's List</h3>
            <p>Relevant Coursework: 
              C/C++, Algorithms & Program Development, 
              Discrete Structures, Computational Linear Algebra, 
              Machine Architecture, Advanced Programming Principles, 
              Probability & Statistics</p>
          </div>
        </div>
        <div className={styles.skills}>
          <h1 className={styles.skillsName}>Skills</h1>
          <div className={styles.skillItems}>
            {shownSkills.map((skill) =>
              <div key={skill.name} className={styles.skillPill}>
                <skill.icon className={styles.skillIcon}/>
                <h1>{skill.name}</h1>
              </div>  
            )}
          </div>
        </div>
        <div className={styles.fun} ref={containerRef}>
          <h1>Me</h1>
          {me.map((item, index) =>
            <div key={item.img} className={styles.funItem} ref={el => itemRefs.current[index] = el}
            onMouseEnter={() => setMeItem(index)} 
            onMouseLeave={() => setMeItem(null)} 
            onMouseDown={(e) => onMouseDown(e,index)}
            style={{ zIndex: meItem === index ? 10 : 1 }}>
              <img src={item.img} className={`${styles.funImg} ${meItem === index ? styles.hidden : ''}`}/>
              <p className={`${styles.funDesc} ${meItem === index ? '' : styles.hidden}`}>{item.desc}</p>
            </div>
          )}
        </div>
    </section>
  );
});

export default About;