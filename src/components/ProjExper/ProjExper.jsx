import { forwardRef, useState } from 'react';
import styles from './ProjExper.module.css'
import ProjExperCard from '@/components/ProjExper/ProjExperCard.jsx'

const ProjExper = forwardRef(function ProjExper(props, ref) {

    const cards = [{
                    name: "Unreal Engine Video Game", 
                    group: "Unreal Engine", 
                    date: "May 2025 - September 2025", 
                    desc: [
                        "Built a full FPS horror game in Unreal Engine 5 using Blueprints, C++, and AI behavior trees.",
                        "Designed and integrated 100+ custom assets including meshes, animations, and UI.",
                        "Implemented player stats, enemy state machines, interactions, and movement.",
                        "Packaged builds and managed Git/Git LFS workflow."
                    ],
                    tags: ["Software Development", "Game Development"],
                    img: "/unreal.png"
                    },
                    {
                    name: "Computer Science R&D Intern", 
                    group: "HaFSBX", 
                    date: "May 2026 - August 2026", 
                    desc: [
                        "Developed robotics software using ROS2: URDF modeling, Nav2 navigation, and behavior trees.",
                        "Built full-stack web features with JavaScript, React, and Next.js.",
                        "Worked in Linux/Docker environments and collaborated via GitHub.",
                        "Contributed across both robotics navigation stack and frontend/API layers."
                    ],
                    tags: ["Software Development", "Robotics"],
                    img: "/haf.png"
                    }, 
                    {
                    name: "Linear Algebra Teaching Assistant", 
                    group: "University of Minnesota", 
                    date: "January 2025 - Present", 
                    desc: [
                        "Teach and grade C/C++ and Computational Linear Algebra for 300+ students.",
                        "Lead 13 lab sections and weekly review sessions.",
                        "Provide office hours and debugging support for algorithm implementation.",
                        "Assist professors with course material and exam preparation."
                    ],
                    tags: ["Leadership", "Teaching"],
                    img: "/umn.jpg"
                    }, 
                    {
                    name: "Economic/Financial Reasearch Team Leader", 
                    group: "Business Professionals of America", 
                    date: "October 2022 - April 2024", 
                    desc: [
                        "Led a 4-member team across two competition cycles.",
                        "Produced a market analysis report that earned 2nd place at Nationals.",
                        "Ran strategy meetings and rehearsals that improved competitive scoring.",
                        "Managed team communication and polished final submissions."
                    ],
                    tags: ["Leadership", "Research"],
                    img: "/bpa.jpeg"
                    }, 
                    {
                    name: "Innovation Design & Development Team Leader", 
                    group: "CEMS (Center for Engineering, Mathematics, and Science)", 
                    date: "September 2023 - May 2024", 
                    desc: [
                        "Developed an engineering product solution using structured design principles.",
                        "Conducted research, prototyping, and iterative testing.",
                        "Presented findings and improvements to faculty and student panels."
                    ],
                    tags: ["Leadership", "Research"],
                    img: "/blaine.jpg"
                    },
                     
                    
                    {
                    name: "Community Advisor", 
                    group: "University of Minnesota", 
                    date: "August 2025 - May 2026", 
                    desc: [
                        "Supported 41 residents through community building and conflict resolution.",
                        "Responded to after-hours issues, emergencies, and policy violations.",
                        "Collaborated with hall staff to plan events and manage administrative duties."
                    ],
                    tags: ["Leadership"],
                    img: "/umn.jpg"
                    }]

    const [filter, setFilter] = useState([]);

  return (
    <section className={styles.projExper} id="projExper" ref={ref}>
        {cards.map((card) => <ProjExperCard key={card.name} card={card}/>)}
        
    </section>
  );
});

export default ProjExper;