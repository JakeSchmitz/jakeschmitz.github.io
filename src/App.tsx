import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Godwit from './sections/Godwit'
import FieldNotes from './sections/FieldNotes'
import Photography from './sections/Photography'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-canvas font-sans text-ink">
      <Navbar />
      <main>
        <Hero />
        <Godwit />
        <FieldNotes />
        <Photography />
        <Contact />
      </main>
      <footer className="border-t border-edge py-8 text-center text-sm text-ink-2">
        © 2026 Jake Schmitz ·{' '}
        <a href="/godwit/privacy.html" className="underline-offset-4 hover:text-moss hover:underline">
          Godwit privacy policy
        </a>
      </footer>
    </div>
  )
}

export default App
