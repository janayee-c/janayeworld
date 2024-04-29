import React, { useState, useRef, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import '../styles/ProfileCard.css';

const ProfileCard = () => {
  return (
    <Box id="profile-card"
    alignItems="flex-start">
<div className="greeting-text"> i'm janaye, a 
<div className="identity-text"> </div>
<div className="intro-text">  
in my 3rd year of Cognitive Systems at UBC.
My passion is ignited by the development and design of intelligent systems that are crafted from diverse perspectives
with the goal of worldbuilding with a nuanced lens. 
</div>
 </div>


      
    </Box>
  )
}

export default ProfileCard
