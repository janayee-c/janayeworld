import React from 'react';
import '../styles/Contact.css';
import { Heading } from '../components/export';
import { Container, Grid, GridItem, useMediaQuery } from '@chakra-ui/react';
// import { Mail, Twitter, Linkedin, Location, Mantra } from '../images/export';


const Contact = () => {

  const [isMinimizedMode] = useMediaQuery('(max-width: 600px)')


  return (
    <section id="contact-section" className="contact-section">
      </section>

  );
  }
  export default Contact;
  

