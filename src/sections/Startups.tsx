import { SimpleGrid, Box, Text, Image, Link, VStack, useColorModeValue } from '@chakra-ui/react'

interface Startup {
  name: string
  description: string
  image: string
  link: string
  role: string
}

const startups: Startup[] = [
  {
    name: 'Vantiq',
    description: 'Vantiq is a leading platform for creating and operating real-time intelligent systems. Their platform enables organizations to quickly build, deploy, and scale AI-powered systems that run anywhere, connect to anything, and take action in real-time.',
    image: 'https://vantiq.com/wp-content/uploads/2023/03/vantiq-logo.svg',
    link: 'https://vantiq.com/',
    role: 'Advisor'
  },
  {
    name: 'Thriftly',
    description: 'Thriftly is revolutionizing the thrift store industry with their innovative 1-Click Production system. Their platform helps thrift stores price secondhand items in seconds, protect against tag switching, and automatically reprice by brand.',
    image: 'https://www.thriftly.com/wp-content/uploads/2023/03/thriftly-logo.svg',
    link: 'https://www.thriftly.com/',
    role: 'Investor'
  }
]

const Startups = () => {
  const tileBg = useColorModeValue('white', 'gray.100')
  const tileText = useColorModeValue('gray.800', 'gray.900')

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
      {startups.map((startup) => (
        <Box
          key={startup.name}
          bg={tileBg}
          color={tileText}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="lg"
          _hover={{ transform: 'translateY(-5px)', transition: 'all 0.3s', boxShadow: '2xl' }}
        >
          <VStack p={6} align="start" gap={3}>
            <Box w="100%" h="60px" position="relative">
              <Image
                src={startup.image}
                alt={`${startup.name} logo`}
                maxH="60px"
                objectFit="contain"
                mx="auto"
              />
            </Box>
            <Text fontSize="xl" fontWeight="bold">
              {startup.name}
            </Text>
            <Text fontSize="sm" color="blue.500" fontWeight="bold">
              {startup.role}
            </Text>
            <Text>{startup.description}</Text>
            <Link href={startup.link} color="blue.500" target="_blank" rel="noopener noreferrer">
              Visit Website →
            </Link>
          </VStack>
        </Box>
      ))}
    </SimpleGrid>
  )
}

export default Startups 