import React, { useState, Fragment as Fr } from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Button,
  IconButton,
} from "@chakra-ui/react";
import Head from "next/head";
import projects from "../data/projects";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// prob will map project comp in list
export default function Projects() {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    // dots: true,
    infinite: false,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Fr>
      <Box id="projects" textAlign="center">
        <Heading fontSize={30} mb={5}>
          My Projects
        </Heading>
        <Slider ref={setSliderRef} {...settings}>
          {projects.map((proj) => {
            const { id, name, imageUrl, description, link } = proj;
            return (
              <Box
                key={id}
                border="2px"
                borderColor="black"
                borderRadius={10}
                maxW={450}
                minW={350}
                h={550}
                m={5}
                display="flex"
                flexDirection="column"
                textAlign="center"
              >
                <Image
                  src={imageUrl}
                  alt={name}
                  maxH={350}
                  borderBottom="2px"
                  borderTopRadius={5}
                />
                <Text fontSize={20} fontWeight="bold" mt={12}>
                  {name}
                </Text>
                <Text m={2}>{description}</Text>
              </Box>
            );
          })}
        </Slider>
        <Box textAlign="center">
          <IconButton
            onClick={sliderRef?.slickPrev}
            m={5}
            icon={<FaChevronLeft />}
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
