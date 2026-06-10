import { motion } from 'framer-motion'

const strip = [
  { src: '/Sparrow.jpg', alt: 'Sparrow in the brush' },
  { src: '/CheetahYawn.jpg', alt: 'Cheetah mid-yawn' },
  { src: '/Butterfly.jpg', alt: 'Butterfly close-up' },
  { src: '/sleepyseal.jpg', alt: 'Sleepy seal on the rocks' },
]

const Hero = () => {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-16 pt-16 sm:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-display text-5xl font-medium leading-[1.1] tracking-tight sm:text-6xl">
          Engineer. Birder.
          <br />
          Builder of quiet software.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2">
          I spent a decade leading engineering teams across logistics, platform, and
          infrastructure. Now I'm building{' '}
          <a href="#godwit" className="font-medium text-moss underline-offset-4 hover:underline">
            Godwit
          </a>
          , a hands-free birding companion that runs entirely on your device.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#godwit"
            className="rounded-full bg-moss px-6 py-2.5 font-medium text-white transition-colors hover:bg-moss-deep"
          >
            About Godwit
          </a>
          <a
            href="#photography"
            className="rounded-full border border-edge bg-surface px-6 py-2.5 font-medium text-ink transition-colors hover:border-moss hover:text-moss"
          >
            Photography
          </a>
        </div>
      </motion.div>
      <motion.div
        className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        {strip.map((photo, i) => (
          <img
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            loading="eager"
            className={`h-40 w-full rounded-xl object-cover transition-transform duration-300 hover:scale-[1.03] sm:h-48 ${
              i % 2 === 1 ? 'sm:translate-y-4' : ''
            }`}
          />
        ))}
      </motion.div>
    </section>
  )
}

export default Hero
