import React from 'react';
import { NextPage } from 'next';
import About from '@/app/(default)/about';
import Contact from '@/app/(default)/contact';
import Education from '@/app/(default)/education';
import Experience from '@/app/(default)/experience';
import Profile from '@/app/(default)/profile';
import Projects from '@/app/(default)/projects';
import Skills from '@/app/(default)/skills';
import './page.css';
import LoginBar from '@/app/(default)/login-bar';

const Home: NextPage = () => (
    <>
      <div className="side">
        <Profile />
        <Contact />
      </div>
      <div className="main">
        <LoginBar />
        <About />
        <Skills />
        <Education />
        {/*<div className="page-break"></div>*/}
        <Projects />
        {/*<div className="page-break"></div>*/}
        <Experience />
      </div>
    </>
);

export default Home;
