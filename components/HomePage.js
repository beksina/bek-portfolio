import React, {Fragment as Fr} from 'react'
import { Text, Image, Box, Container, Divider } from '@chakra-ui/react'
import BioHome from './BioHome'
import Projects from './Projects'
import Contact from './Contact'
// import Particle from './Particle'
// home page

export default function HomePage() {
  return (
    <Fr>
      {/* <Image src='coolTree.jpeg' alt='cover' w='100%' h='100%' /> */}
      <Container scrollBehavior='smooth'>
      <BioHome />
      <Projects />
      <Contact />
      <Divider />
      <Text fontSize={12} m={5} textAlign='center'>
        © 2022 Bekim Sinanovic. All Rights Reserved.
      </Text>
      </Container>
    </Fr>
  )
}
