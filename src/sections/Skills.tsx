import { SimpleGrid, Box, Text, Icon, VStack } from '@chakra-ui/react'
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
  return (
    <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} gap={8}>
      {skills.map((skill) => (
        <Box
          key={skill.name}
          p={6}
          borderWidth="1px"
          borderRadius="lg"
          textAlign="center"
          _hover={{ transform: 'scale(1.05)', transition: 'all 0.3s' }}
        >
          <VStack gap={3}>
            <Icon as={skill.icon} w={10} h={10} color="blue.500" />
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