import { Box, Container, Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

interface SectionProps {
  id: string
  title: string
  children: React.ReactNode
}

const Section = ({ id, title, children }: SectionProps) => {
  return (
    <Box as="section" id={id} py={20}>
      <Container maxW="container.xl">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Heading
            as="h2"
            size="xl"
            mb={8}
            textAlign="center"
            color="brand.600"
          >
            {title}
          </Heading>
          {children}
        </MotionBox>
      </Container>
    </Box>
  )
}

export default Section 