interface Entry {
  period: string
  org: string
  role: string
  note: React.ReactNode
}

const entries: Entry[] = [
  {
    period: '2026 — present',
    org: 'Godwit',
    role: 'Founder & creator',
    note: 'Designing and building a privacy-first birding app: on-device audio identification, voice logging, and a heads-up display for AI glasses.',
  },
  {
    period: '2021 — 2026',
    org: 'Happy Returns, a UPS company',
    role: 'Director of Engineering',
    note: (
      <>
        Led the Logistics, Platform, and Infrastructure teams transforming returns for
        retailers and shoppers. Drove the{' '}
        <a
          href="https://www.youtube.com/watch?v=etXGdhpCAK8&ab_channel=HappyReturns%2CaUPSCompany"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-moss underline-offset-4 hover:underline"
        >
          warehouse robotics program
        </a>{' '}
        that automated return processing at scale.
      </>
    ),
  },
  {
    period: '2016 — 2021',
    org: 'Vantiq',
    role: 'Senior Architect',
    note: (
      <>
        Early employee working on{' '}
        <a
          href="https://vantiq.com/platform/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-moss underline-offset-4 hover:underline"
        >
          the platform
        </a>{' '}
        for real-time intelligent systems — event-driven architecture and the low-code
        application builder.
      </>
    ),
  },
  {
    period: '2015',
    org: 'Tufts University',
    role: 'B.S. Engineering, cum laude',
    note: 'Where the distributed-systems habit started.',
  },
]

const FieldNotes = () => {
  return (
    <section id="field-notes" className="scroll-mt-20">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div>
          <h2 className="font-display text-4xl font-medium tracking-tight">Field notes</h2>
          <div className="mt-6 flex items-start gap-5">
            <img
              src="/Selfie.jpg"
              alt="Jake Schmitz"
              className="h-16 w-16 rounded-full border border-edge object-cover"
            />
            <p className="max-w-2xl leading-relaxed text-ink-2">
              A decade of notes from building software: distributed systems, cloud
              infrastructure, event-driven architecture, and high-performing engineering
              teams. Also an angel investor in{' '}
              <a
                href="https://www.thriftly.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-moss underline-offset-4 hover:underline"
              >
                Thriftly
              </a>
              .
            </p>
          </div>
          <ol className="mt-12 space-y-10 border-l-2 border-moss/30 pl-8">
            {entries.map((entry) => (
              <li key={entry.org} className="relative">
                <span className="absolute -left-[39px] top-1.5 h-3 w-3 rounded-full border-2 border-canvas bg-moss" />
                <p className="text-sm font-medium text-moss">{entry.period}</p>
                <h3 className="mt-1 font-display text-xl font-medium">{entry.org}</h3>
                <p className="text-sm font-medium text-ink-2">{entry.role}</p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-2">{entry.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default FieldNotes
