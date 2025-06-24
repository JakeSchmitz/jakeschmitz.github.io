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
    name: 'Promptionary',
    description: 'Promptionary is an innovative social game that combines creativity with AI image generation. Players compete by creating prompts that generate the most engaging and creative AI-generated images, fostering a community of digital artists and prompt engineers.',
    image: '/promptionary.png',
    link: 'https://promptionary.ai',
    role: 'Founder & Creator'
  },
  {
    name: 'Happy Returns',
    description: 'Happy Returns is transforming the returns process for retailers and customers with a network of Return Bars and advanced warehouse automation, making returns faster, easier, and more sustainable.',
    image: '/robots.png',
    link: 'https://happyreturns.com/',
    role: 'Staff Software Engineer'
  },
  {
    name: 'Vantiq',
    description: 'Vantiq is a leading platform for creating and operating real-time intelligent systems. Their platform enables organizations to quickly build, deploy, and scale AI-powered systems that run anywhere, connect to anything, and take action in real-time.',
    image: 'https://vantiq.com/wp-content/themes/vantiq/assets/vantiq2019/site2024/vtqlogo-blue.svg',
    link: 'https://vantiq.com/',
    role: 'Early Employee'
  },
  {
    name: 'Thriftly',
    description: 'Thriftly is revolutionizing the thrift store industry with their innovative 1-Click Production system. Their platform helps thrift stores price secondhand items in seconds, protect against tag switching, and automatically reprice by brand.',
    image: 'https://images.squarespace-cdn.com/content/v1/65276e73b97df56f17fdd216/b65f2b99-9ba3-40c1-8bec-a4c9fc654452/Logo_hi-res.png?format=1500w',
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