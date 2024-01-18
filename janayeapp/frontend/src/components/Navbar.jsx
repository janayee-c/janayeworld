import React, { useState, useRef, useEffect } from 'react';
import '../styles/Navbar.css';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import { Sling as Hamburger} from 'hamburger-react';
import { COLORS } from '../constants/export';
import { Heading } from '../components/export'
import {
  IconButton,
  Box,
  Img,
  Drawer,
  DrawerBody,
  DrawerContent,
  Stack,
  useDisclosure,
  useMediaQuery,
  DrawerOverlay,
} from '@chakra-ui/react';


const Navbar = () => {
  const [isTopDrawer] = useMediaQuery('(min-width: 990px)');
  const [activeLink, setActiveLink] = useState(null);

  const handleHover = (link) => {
    setActiveLink(link);
  };
  const sections = [
    { id: 'projects', label: 'PROJECTS' },
    { id: 'currents', label: 'CURRENTS'},
    { id: 'contact', label: 'CONTACT' }
  ];

  const [isHamburgerToggled, setIsHamburgerToggled] = useState(false);
  return (
    <section id="navbar-section">
      <Box className="my-navbar" 
        as="nav" width="100%" 
        p="1rem" 
        bg="primary" 
        color="white"
        flexDirection="row-reverse"
        position="relative"
        alignItems="center"
        fontSize="0.1 rem"
        marginTop="0"
        marginLeft="1.2 rem">

{/* below are the clickable links */}

      <Stack
        direction="row"
        spacing = {1.0}
        textAlign="center"
        justifyContent="right"
        marginRight="3.25rem"
        marginTop="0">

  
            {sections.map((section) => (
            <ScrollLink
                
                key={section.id}
                onMouseEnter={() => handleHover(section.id)}
                onMouseLeave={() => handleHover(null)}
                className={`corner-link ${
                  activeLink === section.id
                    ? 'color-navy pointer'
                    : 'slink'
                      }`}
                to={`${section.id}-section`}
                smooth={true}
                offset={-50}
                >
                {section.label}
                
                    </ScrollLink>
                  ))}         
        
      </Stack>
 
      </Box>
    </section>
  );
};

export default Navbar;
