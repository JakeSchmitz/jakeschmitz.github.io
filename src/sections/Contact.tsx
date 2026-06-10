import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const links = [
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/JakeSchmitz' },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jacob-schmitz-17564763/',
  },
  { icon: FaEnvelope, label: 'Email', href: 'mailto:jake.schmitz101@gmail.com' },
]

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-20">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="font-display text-4xl font-medium tracking-tight">Say hi</h2>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-ink-2">
          Talking shop about engineering leadership, on-device ML, or where the warblers
          are this week.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-edge bg-surface text-xl text-ink-2 transition-colors hover:border-moss hover:text-moss"
            >
              <link.icon aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
