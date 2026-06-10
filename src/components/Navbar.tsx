const links = [
  { label: 'Godwit', href: '#godwit' },
  { label: 'Field notes', href: '#field-notes' },
  { label: 'Photography', href: '#photography' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-canvas/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          Jake Schmitz <span className="text-moss">●</span>
        </a>
        <div className="flex items-center gap-5 text-sm text-ink-2 sm:gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden transition-colors hover:text-moss sm:inline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-moss px-4 py-1.5 font-medium text-white transition-colors hover:bg-moss-deep sm:hidden"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
