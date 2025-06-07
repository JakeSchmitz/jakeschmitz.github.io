import { Box, Image, IconButton, Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const images = [
  { src: '/sleepyseal.jpg', caption: 'Sleepy seal on the rocks' },
  { src: '/Fave.jpg', caption: 'A personal favorite wildlife moment' },
  { src: '/Sparrow.jpg', caption: 'Sparrow in the brush' },
  { src: '/CheetahYawn.jpg', caption: 'Cheetah mid-yawn' },
  { src: '/Butterfly.jpg', caption: 'Butterfly close-up' },
]

const Gallery = () => {
  const [index, setIndex] = useState(0)
  const total = images.length

  const prev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1))
  const next = () => setIndex((i) => (i === total - 1 ? 0 : i + 1))

  return (
    <Box
      position="relative"
      w="100vw"
      h={{ base: '100vh', md: '100vh' }}
      minH="400px"
      maxW="100vw"
      m={0}
      p={0}
      overflow="hidden"
      borderRadius={0}
    >
      <Image
        src={images[index].src}
        alt={images[index].caption}
        objectFit="cover"
        w="100vw"
        h="100vh"
        minH="400px"
        transition="all 0.5s"
        m={0}
        p={0}
      />
      <Flex position="absolute" top="0" left="0" w="100%" h="100%" align="center" justify="space-between" px={4}>
        <IconButton
          aria-label="Previous"
          icon={<FaChevronLeft />}
          onClick={prev}
          variant="ghost"
          size="lg"
          colorScheme="whiteAlpha"
          bg="rgba(0,0,0,0.3)"
          _hover={{ bg: 'rgba(0,0,0,0.5)' }}
        />
        <IconButton
          aria-label="Next"
          icon={<FaChevronRight />}
          onClick={next}
          variant="ghost"
          size="lg"
          colorScheme="whiteAlpha"
          bg="rgba(0,0,0,0.3)"
          _hover={{ bg: 'rgba(0,0,0,0.5)' }}
        />
      </Flex>
      <Box position="absolute" bottom={0} left={0} w="100%" bg="rgba(0,0,0,0.4)" color="white" py={2} px={4} textAlign="center">
        <Text fontSize={{ base: 'md', md: 'lg' }}>{images[index].caption}</Text>
      </Box>
    </Box>
  )
}

export default Gallery 