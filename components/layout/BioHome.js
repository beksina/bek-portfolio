import React, { useEffect } from "react";
import { Text, Image, Box, Container, Flex } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, scale: 1, x: 0,transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0, x: 200 },
};

export default function BioHome() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
    // to make it pop up every time you scroll
    // else {
    //   control.start("hidden");
    // }
  }, [control, inView]);

  return (
    <motion.div
      id="about"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <Flex justifyContent="center"  wrap="wrap" minH="100vh" alignContent="center">
        <Image
          src="codingCartoon.jpeg"
          alt="me"
          borderRadius={100}
          h={250}
          w={250}
        />
        <Flex direction="column" ml={10}>
          <Text fontWeight="bold" fontSize={30}>
            Who I Am
          </Text>
          <Text fontSize={16} maxW={500}>
            A Software Engineer from New York City who loves to solve problems
            through code! I first started coding in early 2021 with Pythom and
            managed to move my way into full-stack development
          </Text>
        </Flex>
      </Flex>
    </motion.div>
  );
}
