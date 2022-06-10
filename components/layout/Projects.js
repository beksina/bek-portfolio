import React, {useState, Fragment as Fr} from "react";
import { Flex, Box, Heading, Text, Image, Button, IconButton, Stack } from "@chakra-ui/react";
import Head from "next/head";
import projects from "../../data/projects";
import Slider from "react-slick";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// prob will map project comp in list
export default function Projects() {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    // dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <Fr>
      <Box textAlign='center'>
      <Heading fontSize={30} mb={5}>
        My Projects
      </Heading>
      <Slider ref={setSliderRef} {...settings}>
      {projects.map((proj) => {
          const {id, name, imageUrl, description, link} = proj;
          return (
            <Box
              key={id}
              border="2px"
              borderColor="yellow"
              borderRadius={10}
              maxW={450}
              h={550}
              m={5}
              display='flex'
              flexDirection='column'
              textAlign='center'
            >
              <Image src={imageUrl} alt={name} maxH={350}/>
              <Text fontSize={20} fontWeight='bold' mt={4}>
                {name}
              </Text>
              <Text>
                {description}
              </Text>
            </Box>
          );
        })}
      </Slider>
      <Box textAlign='center'>
      <IconButton
        onClick={sliderRef?.slickPrev}
        m={5}
        icon={<FaChevronLeft/>}
      />
      <IconButton
        onClick={sliderRef?.slickNext}
        icon={<FaChevronRight />}
        m={5}
      />
      </Box>
      </Box>
    </Fr>
  );
}

{/* <Flex id="projects" alignItems="center" direction="column" minH="100vh">
       <Heading fontSize={30} mb={5}>
         My Projects
       </Heading>
       <Flex wrap="wrap" justifyContent="center" direction='column'>
         {projects.map((proj) => {
           const {id, name, imageUrl, description, link} = proj;
           return (
             <Box
               key={id}
               border="2px"
               borderColor="yellow"
               borderRadius={10}
               maxW={450}
               h={550}
               m={5}
               display='flex'
               flexDirection='column'
               textAlign='center'
             >
               <Image src={imageUrl} alt={name} maxH={350}/>
               <Text fontSize={20} fontWeight='bold' mt={4}>
                 {name}
               </Text>
               <Text>
                 {description}
               </Text>
             </Box>
           );
         })}
       </Flex>
     </Flex> */}
