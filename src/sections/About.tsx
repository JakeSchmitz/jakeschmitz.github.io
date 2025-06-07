import { Box, Text, Image, Flex, VStack, Link } from '@chakra-ui/react'

const About = () => {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      gap={8}
      align="center"
      justify="center"
    >
      <Box flex="1">
        <Image
          src="/Selfie.jpg"
          alt="Jake Schmitz"
          borderRadius="full"
          boxSize="200px"
          objectFit="cover"
          mx="auto"
        />
      </Box>
      <VStack flex="2" align="start" gap={4}>
        <Text fontSize="lg">
          Jake Schmitz is an engineering leader with deep expertise in distributed systems, cloud infrastructure, event-driven architecture, and building high-performing engineering teams. He studied Engineering at{' '}
          <Link href="https://engineering.tufts.edu/" color="blue.500" target="_blank" rel="noopener noreferrer">Tufts University School of Engineering</Link> and graduated <i>cum laude</i> in 2015.
        </Text>
        <Text fontSize="lg">
          From 2016 to 2021, Jake was a Senior Architect at{' '}
          <Link href="https://vantiq.com/" color="blue.500" target="_blank" rel="noopener noreferrer">Vantiq</Link>, where he worked extensively on event-driven architecture and the company's low-code application builder.
        </Text>
        <Text fontSize="lg">
          Currently, Jake is the Director of Engineering at{' '}
          <Link href="https://happyreturns.com/" color="blue.500" target="_blank" rel="noopener noreferrer">Happy Returns</Link>, where he leads the Logistics, Platform, and Infrastructure engineering teams. Connect with Jake on{' '}
          <Link href="https://www.linkedin.com/in/jacob-schmitz-17564763/" color="blue.500" target="_blank" rel="noopener noreferrer">LinkedIn</Link>.
        </Text>
      </VStack>
    </Flex>
  )
}

export default About 