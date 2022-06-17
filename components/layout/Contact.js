import React from 'react'
import { Flex, Heading, Text, ButtonGroup, IconButton } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaEnvelopeSquare } from 'react-icons/fa'

export default function Contact() {
  return (
    <Flex id='contact' direction='column' align='center' minH='30vh' mt={20}>
      <Heading mb={5}>
        Contact Me
      </Heading>
      <ButtonGroup spacing={7} mt={5}>
        <IconButton
          as="a"
          href="https://github.com/beksina"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          icon={<FaGithub fontSize={20} />}
        />
        <IconButton
          as="a"
          href="https://www.linkedin.com/in/bekimsin/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          icon={<FaLinkedin fontSize={20} />}
        />
        <IconButton
          as="a"
          href="mailto:bekimsina98@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          icon={<FaEnvelopeSquare fontSize={20} />}
        />
      </ButtonGroup>
    </Flex>
  )
}
