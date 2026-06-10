import { FaEarListen, FaMicrophone, FaMapLocationDot, FaGlasses } from 'react-icons/fa6'

const features = [
  {
    icon: FaEarListen,
    title: 'Birding by ear',
    text: 'Start a session and Godwit identifies the birds around you from their calls — entirely on-device.',
  },
  {
    icon: FaMicrophone,
    title: 'Voice logging',
    text: 'See a bird you didn’t hear? Say "log robin" and it’s on your list, hands-free.',
  },
  {
    icon: FaMapLocationDot,
    title: 'Your walk, your data',
    text: 'Route mapping, tagged sightings, and eBird-format exports. No accounts, no tracking.',
  },
  {
    icon: FaGlasses,
    title: 'Heads-up birding',
    text: 'Optional live bird IDs displayed on AI glasses, so your eyes stay on the trees.',
  },
]

const Godwit = () => {
  return (
    <section id="godwit" className="scroll-mt-20 border-y border-edge bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div>
          <p className="text-sm font-medium text-moss">Now building</p>
          <div className="mt-3 flex items-center gap-5">
            <img
              src="/godwit-icon.png"
              alt="Godwit app icon"
              className="h-20 w-20 rounded-2xl border border-edge"
            />
            <div>
              <h2 className="font-display text-4xl font-medium tracking-tight">Godwit</h2>
              <p className="mt-1 text-lg text-ink-2">Hands-free birding by ear, for iOS.</p>
            </div>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-2xl bg-fern p-6">
                <feature.icon className="text-xl text-moss-deep" aria-hidden="true" />
                <h3 className="mt-3 font-medium text-moss-deep">{feature.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-2">{feature.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <span className="rounded-full border border-edge px-4 py-1.5 text-ink-2">
              App Store — coming soon
            </span>
            <a
              href="/godwit/privacy.html"
              className="font-medium text-moss underline-offset-4 hover:underline"
            >
              Privacy policy →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Godwit
