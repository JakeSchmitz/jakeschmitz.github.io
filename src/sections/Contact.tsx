import { Box, HStack, Icon, Link } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  return (
    <Box maxW="600px" mx="auto">
      <HStack gap={6} justify="center">
        <Link href="https://github.com/JakeSchmitz" target="_blank" rel="noopener noreferrer">
          <Icon as={FaGithub} w={8} h={8} />
        </Link>
        <Link href="https://www.linkedin.com/in/jacob-schmitz-17564763/" target="_blank" rel="noopener noreferrer">
          <Icon as={FaLinkedin} w={8} h={8} />
        </Link>
        <Link href="mailto:jake.schmitz101@gmail.com">
          <Icon as={FaEnvelope} w={8} h={8} />
        </Link>
      </HStack>
    </Box>
  )
}

export default Contact 