import React, {Fragment as Fr} from 'react'
import { Text, Image, Box, Container } from '@chakra-ui/react'
import BioHome from './BioHome'
import Projects from './Projects'
import Contact from './Contact'

// home page

export default function HomePage() {
  return (
    <Fr>
      <Image src='coolTree.jpeg' alt='cover' w='100%' h='100%' />
      <BioHome />
      <Projects />
      <Contact />
      <Text fontSize={12} m={5} textAlign='center'>
        © 2022 Bekim Sinanovic. All Rights Reserved.
      </Text>
    </Fr>
  )
}
