import { SimpleGrid, Box, Text, Icon, VStack, useColorModeValue } from '@chakra-ui/react'
import { FaReact, FaDatabase, FaJava, FaProjectDiagram } from 'react-icons/fa'
import { SiTypescript, SiGo, SiProducthunt } from 'react-icons/si'
import { MdEngineering } from 'react-icons/md'

interface Skill {
  name: string
  icon: any
  level: string
}

const skills: Skill[] = [
  {
    name: 'React',
    icon: FaReact,
    level: 'Expert'
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    level: 'Expert'
  },
  {
    name: 'Java',
    icon: FaJava,
    level: 'Expert'
  },
  {
    name: 'Go',
    icon: SiGo,
    level: 'Advanced'
  },
  {
    name: 'Databases',
    icon: FaDatabase,
    level: 'Expert'
  },
  {
    name: 'Product Management',
    icon: SiProducthunt,
    level: 'Expert'
  },
  {
    name: 'Engineering Leadership',
    icon: MdEngineering,
    level: 'Expert'
  },
  {
    name: 'System Design',
    icon: FaProjectDiagram,
    level: 'Expert'
  }
]

const Skills = () => {
  const tileBg = useColorModeValue('white', 'gray.100')
  const tileText = useColorModeValue('gray.800', 'gray.900')

  return (
    <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} gap={8}>
      {skills.map((skill) => (
        <Box
          key={skill.name}
          bg={tileBg}
          color={tileText}
          p={6}
          borderWidth="1px"
          borderRadius="lg"
          textAlign="center"
          boxShadow="lg"
          _hover={{
            transform: 'translateY(-5px) rotate(2deg)',
            transition: 'all 0.3s ease-in-out',
            boxShadow: '2xl',
            bg: 'blue.50'
          }}
        >
          <VStack gap={3}>
            <Icon 
              as={skill.icon} 
              w={10} 
              h={10} 
              color="blue.500"
              transition="all 0.3s ease-in-out"
              _groupHover={{ transform: 'scale(1.2)' }}
            />
            <Text fontSize="xl" fontWeight="bold">
              {skill.name}
            </Text>
            <Text color="gray.500">{skill.level}</Text>
          </VStack>
        </Box>
      ))}
    </SimpleGrid>
  )
}

export default Skills 