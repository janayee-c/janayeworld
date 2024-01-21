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
  Flex,
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const drawerRef = useRef();
  const [isDesktop] = useMediaQuery('(min-width: 990px)');
  const [activeLink, setActiveLink] = useState(null);

  const handleHover = (link) => {
    setActiveLink(link);
  };

  const sections = [
    { id: 'projects', label: 'projects' },
    { id: 'background', label: 'background'},
    { id: 'currents', label: 'currents' },
    { id: 'contact', label: 'contact' }
  ];

  const [isHamburgerToggled, setIsHamburgerToggled] = useState(false);

  return (
    <section id="navbar-section">
      { (isDesktop) ? (
      <Flex
        className="my-navbar"
        as="nav"
        width="100%"
        bg="primary"
        color="white"
        justifyContent="space-between"
        position="relative"
        alignItems="center"
        marginTop="0"
        marginLeft="1.0rem"
        marginRight="1.0rem"
      >
        <Heading title="janaye cheong"></Heading>
        
        {/* Links */}
        <Stack
          direction="row"
          spacing={1}
          justifyContent="flex-end"
          marginRight="3.25rem"
          marginTop="0"
          marginright="10px"
        >

          {sections.map((section) => (
            <ScrollLink
              key={section.id}
              onMouseEnter={() => handleHover(section.id)}
              onMouseLeave={() => handleHover(null)}
              className="slink"
              to={`${section.id}-section`}
              smooth={true}
              offset={-50}
            >
              {section.label}
            </ScrollLink>
          ))}
        </Stack>
      </Flex>

      //end of desktop mode 
      
  )

      :
      (
        <Flex
        className="my-navbar"
        as="nav"
        width="100%"
        bg="primary"
        color="white"
        justifyContent="space-between" //to the end of the navbar
        position="relative"
        alignItems="center"
        marginTop="0"
        marginLeft="1.0rem"
        marginRight="1.0rem">
          <Heading title="janaye cheong"></Heading>
          <IconButton

          ref={btnRef}
          icon={<Hamburger

            onToggle={(toggled) => {
              setIsHamburgerToggled(toggled);
              if (toggled) {
                onOpen();
              } else {
                onClose();
              }
            }}

            toggled={isHamburgerToggled} 
          />}
          edge="end"
          zIndex={isDesktop ? 1 : 9999}
          onClick={isOpen ? onClose : onOpen}
          right="25px"
          variant="unstyled"
          color={COLORS.primary}
          top="-0.5rem"
          size="sm"
          aria-label="Open Dropdown"
          className="centered-icon">
          
          </IconButton>

          <Drawer
            isOpen={isOpen}
            onOverlayClick={onClose}
            placement='right'
            finalFocusRef={btnRef}
            width="100%"
            size="xs"
            ref={drawerRef}>
            
               <DrawerOverlay/>

          <DrawerContent>
            <DrawerBody>
              <Box 
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  height="100%">
                <Stack
                  direction="column"
                  spacing="3rem"
                  align="center"
                  paddingBottom="20rem"
                >
                  {sections.map((section) => (
                    <ScrollLink
                      key={section.id}
                      onMouseEnter={() => handleHover(section.id)}
                      onMouseLeave={() => handleHover(null)}
                      className={`${
                        activeLink === section.id
                          ? 'selected'
                          : 'idle'
                      }`}
                      to={`${section.id}-section`}
                      smooth={true}
                      offset={-50}
                      onClick={onClose}
                    >
                      {section.label}
                    </ScrollLink>
                  ))}
                </Stack>
              </Box>
            </DrawerBody>
          </DrawerContent>

          </Drawer>
      
        </Flex>
      )}

        {/* end of mobile mode  */}

      
    </section>
  );
};

export default Navbar;
