import { Box, Flex, Button } from '@chakra-ui/react'
import { Link as ScrollLink } from 'react-scroll'

const Navbar = () => {
  const navItems = ['About', 'Startups', 'Projects', 'Contact']

  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      w="100%"
      bg="transparent"
      px={4}
      py={4}
      shadow="none"
      zIndex={1000}
    >
      <Flex maxW="container.xl" mx="auto" justify="space-between" align="center">
        <Box fontWeight="bold" fontSize="xl" color="white" textShadow="0 2px 8px rgba(0,0,0,0.7)">Jake Schmitz</Box>
        <Flex gap={4}>
          {navItems.map((item) => (
            <Button
              key={item}
              variant="ghost"
              as={ScrollLink}
              to={item.toLowerCase()}
              spy={true}
              smooth={true}
              duration={500}
              cursor="pointer"
              color="white"
              _hover={{ bg: 'rgba(255,255,255,0.1)' }}
              textShadow="0 2px 8px rgba(0,0,0,0.7)"
              activeClass="active-nav-btn"
            >
              {item}
            </Button>
          ))}
          <Button
            as="a"
            href="https://promptionary.ai"
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            color="white"
            _hover={{ bg: 'rgba(255,255,255,0.1)' }}
            textShadow="0 2px 8px rgba(0,0,0,0.7)"
          >
            Promptionary
          </Button>
          <Button
            as="a"
            href="https://ohschirtz.com/"
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            color="white"
            _hover={{ bg: 'rgba(255,255,255,0.1)' }}
            textShadow="0 2px 8px rgba(0,0,0,0.7)"
          >
            Shop
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar 