import React from 'react'
import { Text, Image, Box, Container, Flex } from '@chakra-ui/react'

export default function BioHome() {
  return (
    <Flex justifyContent='center' m={20} wrap='wrap' h='100%'>
      <Image src='codingCartoon.jpeg' alt='me' borderRadius={100} h={250} w={250} />
      <Flex direction='column' ml={10}>
        <Text fontWeight='bold' fontSize={30}>
          Who I Am
        </Text>
        <Text fontSize={16} maxW={500}>
          A Software Engineer from New York City who loves to solve problems through code!
          I first started coding in early 2021 with Pythom and managed to move my way into
          full-stack development
        </Text>
      </Flex>
    </Flex>
  )
}
