import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Section from './components/Section'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Gallery from './sections/Gallery'

const MotionBox = motion(Box)

function App() {
  return (
    <Box minH="100vh">
      <Navbar />
      <Gallery />
      <Box bg="gray.800" color="white">
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Section id="about" title="About Me">
            <About />
          </Section>

          <Section id="projects" title="Projects">
            <Projects />
          </Section>

          <Section id="skills" title="Skills">
            <Skills />
          </Section>

          <Section id="contact" title="Contact">
            <Contact />
          </Section>
        </MotionBox>
      </Box>
    </Box>
  )
}

export default App
