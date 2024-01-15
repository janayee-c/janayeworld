import { Container, useMediaQuery } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';
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
        // Scrolling down, translate the cube by 20px
        meElement.style.transform = 'translateY(-80px)';
        setScrollDirection('down');
      } else {
        // Scrolling up, reset the cube to its normal position
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
    <section id="hero-section" className="hero-section">
      <div className="me-container">
        <img id="me" src={Me} alt="a picture of me" />
      </div>
      <div className="hero-diag"></div>
    </section>
  );
};

export default Hero;
