import { Container, useMediaQuery, Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';
import { Heading, ProfileCard } from '../components/export.js'
import { Me, Blur} from '../images/export.js';

const Hero = () => {
  const [isMinimizedMode] = useState(useMediaQuery('max-width:900px'));
  const [scrollDirection, setScrollDirection] = useState('down');
  const [prevScrollY, setPrevScrollY] = useState(0);

  const scrollAnimate = () => {
    const scrollY = window.scrollY;
    const meElement = document.getElementById('me');

    if (isMinimizedMode) {
      if (scrollY > prevScrollY) {
        // Scrolling down, translate the image up by 30px
        
        meElement.style.transform = 'translateY(-30px)';

        setScrollDirection('down');
      } else {
        // Scrolling up, reset the image to its normal position
        meElement.style.transform = 'translateY(0)';
        setScrollDirection('up');
      }
    } else {
      // In non-minimized mode, apply your original transformation
      meElement.style.transform = 'translateY(' + (-scrollY / 4) + 'px)';
    }

    // Update the previous scroll position
    setPrevScrollY(scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollAnimate);

    return () => {
      window.removeEventListener('scroll', scrollAnimate);
    };
  }, []);

  return (
    <section id="hero-section">
      <Flex 
      className="me-container"
      flexDirection={'row'}
      >
      
        <div className="overlay-text"> hello <br></br>&nbsp;&nbsp;hello</div>
        <Flex className="circle-container fade">
        <img id="me" src={Me} alt="a picture of me" />
        </Flex>
      </Flex>

      <Flex 
      className="about-me-container"
      flexDirection={'vertical'}
      >
        
        <ProfileCard></ProfileCard>

      </Flex> 
    </section>
  );
};

export default Hero;
