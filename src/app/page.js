'use client'

import Image from "next/image";
import Hero from "@/components/Hero/Hero.jsx"
import Navbar from "@/components/NavBar/Navbar.jsx"
import ProjExper from "@/components/ProjExper/ProjExper.jsx"
import About from "@/components/About/About.jsx"
import Contact from "@/components/Contact/Contact.jsx"
import { useState, useRef, useEffect } from 'react'

export default function Home() {
  
  const projExperRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const intersecting = new Set();

    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
          intersecting.add(entry.target.id);
          } 
          else {
          intersecting.delete(entry.target.id);
          }
        });

        const order = ['projExper', 'about', 'contact'];
        const active = order.find(id => intersecting.has(id));
        setActiveSection(active ?? 'home');
      }, { threshold: 0.5}
    );

    scrollObserver.observe(projExperRef.current);
    scrollObserver.observe(aboutRef.current);
    scrollObserver.observe(contactRef.current);

    return () => scrollObserver.disconnect();

  }, []);
  
  return (
    <>
      <Navbar activeSection={activeSection}/>
      <Hero/>
      <ProjExper ref={projExperRef}/>
      <About ref={aboutRef}/>
      <Contact ref={contactRef}/>
    </>
  );
}
