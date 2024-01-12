import React from 'react';
import About from '@/app/(default)/components/about';
import Contact from '@/app/(default)/components/contact';
import Education from '@/app/(default)/components/education';
import Experience from '@/app/(default)/components/experience';
import Profile from '@/app/(default)/components/profile';
import Projects from '@/app/(default)/components/projects';
import Skills from '@/app/(default)/components/skills';
import './page.css';

const Home: React.FC = () => (
    <>
      <div className="side">
        <Profile />
        <Contact />
      </div>
      <div className="main">
        <About />
        <Skills />
        <Education />
        <div className="page-break"></div>
        <Projects />
        <div className="page-break"></div>
        <Experience />
      </div>
    </>
);

export default Home;
