import { Box, Button, Input, Textarea, VStack, HStack, Icon, Link, useToast, useColorModeValue } from '@chakra-ui/react'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const toast = useToast()

  const inputBg = useColorModeValue('white', 'gray.100')
  const inputText = useColorModeValue('gray.800', 'gray.900')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const subject = `Portfolio Contact from ${name}`
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    const mailtoLink = `mailto:jake.schmitz101@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    // Open email client
    window.location.href = mailtoLink
    
    // Show success toast
    toast({
      title: 'Email client opened',
      description: 'Please send the email from your email client',
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
    
    // Reset form
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <Box maxW="600px" mx="auto">
      <VStack gap={8}>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <VStack gap={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input 
                type="text" 
                placeholder="Your name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                bg={inputBg}
                color={inputText}
                _hover={{ borderColor: 'blue.400' }}
                _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px var(--chakra-colors-blue-500)' }}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input 
                type="email" 
                placeholder="Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                bg={inputBg}
                color={inputText}
                _hover={{ borderColor: 'blue.400' }}
                _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px var(--chakra-colors-blue-500)' }}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea 
                placeholder="Your message" 
                rows={6} 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                bg={inputBg}
                color={inputText}
                _hover={{ borderColor: 'blue.400' }}
                _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px var(--chakra-colors-blue-500)' }}
              />
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
        </HStack>
      </VStack>
    </Box>
  )
}

export default Contact 