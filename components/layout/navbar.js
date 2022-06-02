import { Flex, Text, Box, useColorMode, Button, IconButton, Link as ChakraLink } from "@chakra-ui/react";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import { HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { useState } from "react";

const Navbar = () => {
  const {colorMode, toggleColorMode} = useColorMode()
  const [display, changeDisplay] = useState("none")

  return (
    <Flex
      as="nav"
      w="100%"
      justifyContent="flex-end"
      p={7}
      zIndex={10}
      position="sticky"
    >
      <NextLink href="/" passHref>
        <Text
          fontWeight="bold"
          fontSize={20}
          position="absolute"
          left="15px"
          cursor="pointer"
        >
          Bekim Sinanovic
        </Text>
      </NextLink>
      <Box display={['none', 'none', 'flex', 'flex']}>
        <Text mr={5} cursor="pointer">
          About
        </Text>
        <NextLink href="/work" passHref>
          <Text mr={5} cursor="pointer">
            Work
          </Text>
        </NextLink>
        <NextLink href="/contact" passHref>
          <Text mr={5} cursor="pointer">
            Contact
          </Text>
        </NextLink>
      </Box>
      <IconButton
        aria-label="Open Menu"
        size='lg'
        mr={5}
        icon={<HamburgerIcon />}
        display={["flex", "flex", "none", "none"]}
        onClick={() => changeDisplay("flex")}
      />
      <Button onClick={toggleColorMode} variant='ghost'>
        {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
      </Button>
    </Flex>
  );
};

export default Navbar;
