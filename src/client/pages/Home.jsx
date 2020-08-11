import React, { lazy } from 'react';

// Sections
import Aboutme from './section/Aboutme';
import Projects from './section/Projects';
import Contact from './section/Contact';

const Home = () => {
  return (
    <>
      <Aboutme />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
