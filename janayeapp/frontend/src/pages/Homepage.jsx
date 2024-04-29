import React, { useState } from 'react';
import '../styles/Homepage.css';
import { Contact, Hero, Navbar, Projects, Skills, SplashScreen, Intro } from '../components/export';
import { useMediaQuery } from '@chakra-ui/react';

function Homepage() {
  const [isMobileMode] = useMediaQuery('(max-width: 768px)');
  const [splashScreenEnded, setSplashScreenEnded] = useState(false);

  const handleSplashScreenEnd = () => {
    setSplashScreenEnded(true);
  };

  return (
    <>
      <div className="homePage-container">
          <>
            <Navbar />
            <Hero />
            <Intro/>
            <Projects />
            <Skills />
            <Contact />
          </>
      </div>
    </>
  );
}

export default Homepage;
