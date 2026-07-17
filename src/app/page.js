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

  const scrollTo = (ref) => ref.current.scrollIntoView({ behavior: 'smooth' });

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
        if (active) setActiveSection(active);
        else if (window.scrollY < 100) setActiveSection('home');
      }, { threshold: 0.1}
    );

    scrollObserver.observe(projExperRef.current);
    scrollObserver.observe(aboutRef.current);
    scrollObserver.observe(contactRef.current);

    const onScroll = () => {
      if (window.scrollY < 100) setActiveSection('home');
    };
    window.addEventListener('scroll', onScroll);

    return () => { scrollObserver.disconnect(); window.removeEventListener('scroll', onScroll); };

  }, []);
  
  return (
    <>
      <Navbar 
        activeSection={activeSection}
        onProjExper={() => scrollTo(projExperRef)}
        onAbout={() => {
          const top = aboutRef.current.getBoundingClientRect().top + window.scrollY - 150;
          window.scrollTo({ top, behavior: 'smooth' });
        }}
        onContact={() => scrollTo(contactRef)}
      />
      <Hero/>
      <ProjExper ref={projExperRef}/>
      <About ref={aboutRef}/>
      <Contact ref={contactRef}/>
    </>
  );
}
