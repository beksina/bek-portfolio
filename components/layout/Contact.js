import React from 'react'
import { Flex, Heading, Text, ButtonGroup, IconButton } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaEnvelopeSquare } from 'react-icons/fa'

export default function Contact() {
  return (
    <Flex id='contact' direction='column' align='center' minH='30vh' mt={20}>
      <Heading>
        Contact Me :)
      </Heading>
      <ButtonGroup spacing={7} mt={5}>
        <IconButton
          aria-label='Github'
          href='https://github.com/beksina'
          fontSize={20}
          icon={<FaGithub />}
        />
        <IconButton
          aria-label='LinkedIn'
          href='https://www.linkedin.com/in/bekimsin/'
          fontSize={20}
          icon={<FaLinkedin />}
        />
        <IconButton
          aria-label='Mail'
          fontSize={20}
          icon={<FaEnvelopeSquare />}
        />
      </ButtonGroup>
    </Flex>
  )
}
