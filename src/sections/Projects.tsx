import { SimpleGrid, Box, Image, Text, Link, VStack, useColorModeValue } from '@chakra-ui/react'

interface Project {
  title: string
  description: string
  image: string
  link: string
  technologies: string[]
}

const projects: Project[] = [
  {
    title: 'Happy Returns Warehouse Robotics Program',
    description: 'Led the engineering team in designing and deploying robotics automation for Happy Returns warehouses, improving efficiency and scalability. Watch a demo of the robotics program in action.',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80', // warehouse/robotics
    link: 'https://www.youtube.com/watch?v=etXGdhpCAK8&ab_channel=HappyReturns%2CaUPSCompany',
    technologies: ['Robotics', 'Automation', 'React', 'AWS']
  },
  {
    title: 'Vantiq App Builder',
    description: 'Contributed to the development of the app builder at Vantiq, a platform for creating and operating real-time intelligent systems. Learn more about the platform.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80', // app builder
    link: 'https://vantiq.com/platform/',
    technologies: ['React', 'Node.js', 'AWS']
  }
]

const Projects = () => {
  // Use a light background for the tiles
  const tileBg = useColorModeValue('white', 'gray.100')
  const tileText = useColorModeValue('gray.800', 'gray.900')

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
      {projects.map((project) => (
        <Box
          key={project.title}
          bg={tileBg}
          color={tileText}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="lg"
          _hover={{ transform: 'translateY(-5px)', transition: 'all 0.3s', boxShadow: '2xl' }}
        >
          <Image src={project.image} alt={project.title} height="200px" width="100%" objectFit="cover" />
          <VStack p={6} align="start" gap={3}>
            <Text fontSize="xl" fontWeight="bold">
              {project.title}
            </Text>
            <Text>{project.description}</Text>
            <Text fontSize="sm" color="gray.500">
              {project.technologies.join(' • ')}
            </Text>
            <Link href={project.link} color="blue.500" target="_blank" rel="noopener noreferrer">
              View Project →
            </Link>
          </VStack>
        </Box>
      ))}
    </SimpleGrid>
  )
}

export default Projects 