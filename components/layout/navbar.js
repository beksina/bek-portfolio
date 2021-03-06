import { Fragment as Fr } from "react";
import {
  Flex,
  Text,
  Box,
  useColorMode,
  Button,
  IconButton,
  Link as ChakraLink,
  Divider,
} from "@chakra-ui/react";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { useState } from "react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [display, changeDisplay] = useState("none");

  // const background = colorMode === 'light' ? 'white' : 'black'
  const scrollClick = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Fr>
      <Flex
        as="nav"
        w="100%"
        justifyContent="flex-end"
        p={5}
        zIndex={10}
        position="sticky"
        top={0}
        backdropFilter="saturate(150%) blur(15px)"
        ms='auto'
        scrollBehavior='smooth'
      >
        <NextLink href="/" passHref>
          <Text
          transform="rotate(-4deg)"
            fontWeight="bold"
            fontSize={20}
            position="absolute"
            left="15px"
            cursor="pointer"
            _hover={{fontSize: 23}}
          >
            {"< Bekim Sinanovic  />"}
          </Text>
        </NextLink>
        <Box
          display={["none", "none", "flex", "flex"]}
          justifyContent="space-between"
        >
          <NextLink href="/#about" passHref  _hover={{boxShadow: '10px'}}>
            <Text
              fontSize={20}
              mr={8}
              cursor="pointer"
              onClick={() => scrollClick("about")}
            >
              About
            </Text>
          </NextLink>
          <NextLink href="/#projects" passHref>
            <Text fontSize={20} mr={8} cursor="pointer" onClick={() => scrollClick("projects")}>
              Work
            </Text>
          </NextLink>
          <NextLink href="/#contact" passHref>
            <Text fontSize={20} mr={6} cursor="pointer" onClick={() => scrollClick("contact")}>
              Contact
            </Text>
          </NextLink>
        </Box>
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={5}
          variant="ghost"
          icon={<HamburgerIcon />}
          display={["flex", "flex", "none", "none"]}
          onClick={() => changeDisplay("flex")}
        />
        {/* <Button onClick={toggleColorMode} variant="ghost">
          {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
        </Button> */}
      </Flex>
      <Flex
        w="100vw"
        bgColor={colorMode === "light" ? "gray.50" : "gray.900"}
        zIndex={20}
        h="45vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
        alignItems={"center"}
        display={display}
      >
        <Flex position="absolute" right={5} top={5}>
          <IconButton
            mt={2}
            mb={8}
            mr={2}
            aria-label="Close Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>
        <Flex flexDirection="column" align="center">
          <NextLink href="/#about" passHref>
            <Button
              as={ChakraLink}
              variant="ghost"
              aria-label="about"
              w="100%"
              mt={20}
            >
              About
            </Button>
          </NextLink>
          <Divider />
          <NextLink href="/#projects" passHref>
            <Button
              as={ChakraLink}
              variant="ghost"
              aria-label="work"
              w="100%"
              mt={5}
            >
              Work
            </Button>
          </NextLink>
          <Divider />
          <NextLink href="/#contact" passHref>
            <Button
              as={ChakraLink}
              variant="ghost"
              aria-label="contact"
              w="100%"
              mt={5}
            >
              Contact
            </Button>
          </NextLink>
        </Flex>
      </Flex>
    </Fr>
  );
};

export default Navbar;
