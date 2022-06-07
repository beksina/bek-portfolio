import React from 'react'
import { Flex, Box, Heading } from '@chakra-ui/react'
import Head from 'next/head'

// prob will map project comp in list
export default function Projects() {
  return (
    <Flex alignItems='center' direction='column'>
      <Heading fontSize={30} mb={5}> My Projects</Heading>
      <Flex wrap='wrap' justifyContent='center'>
        <Box border='2px' borderColor='yellow' borderRadius={10} w={400} h={450} m={5}></Box>
        <Box border='2px' borderColor='yellow' borderRadius={10} w={400} h={450} m={5}></Box>
        <Box border='2px' borderColor='yellow' borderRadius={10} w={400} h={450} m={5}></Box>
      </Flex>
    </Flex>
  )
}
