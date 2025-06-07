import { SimpleGrid, Box, Text, Icon, VStack } from '@chakra-ui/react'
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaAws } from 'react-icons/fa'
import { SiTypescript, SiJavascript, SiRubyonrails } from 'react-icons/si'

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
    name: 'JavaScript',
    icon: SiJavascript,
    level: 'Expert'
  },
  {
    name: 'Ruby on Rails',
    icon: SiRubyonrails,
    level: 'Expert'
  },
  {
    name: 'Node.js',
    icon: FaNodeJs,
    level: 'Advanced'
  },
  {
    name: 'AWS',
    icon: FaAws,
    level: 'Advanced'
  },
  {
    name: 'Python',
    icon: FaPython,
    level: 'Intermediate'
  },
  {
    name: 'Databases',
    icon: FaDatabase,
    level: 'Advanced'
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