import { Box, Button, Input, Textarea, VStack, HStack, Icon, Link } from '@chakra-ui/react'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  return (
    <Box maxW="600px" mx="auto">
      <VStack gap={8}>
        <form style={{ width: '100%' }}>
          <VStack gap={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="Your name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Your email" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Your message" rows={6} />
            </FormControl>
            <Button type="submit" colorScheme="blue" size="lg" width="full">
              Send Message
            </Button>
          </VStack>
        </form>

        <HStack gap={6} pt={8}>
          <Link href="https://github.com/JakeSchmitz" target="_blank" rel="noopener noreferrer">
            <Icon as={FaGithub} w={8} h={8} />
          </Link>
          <Link href="https://www.linkedin.com/in/jacob-schmitz-17564763/" target="_blank" rel="noopener noreferrer">
            <Icon as={FaLinkedin} w={8} h={8} />
          </Link>
          <Link href="https://twitter.com/jakeschmitz" target="_blank" rel="noopener noreferrer">
            <Icon as={FaTwitter} w={8} h={8} />
          </Link>
        </HStack>
      </VStack>
    </Box>
  )
}

export default Contact 