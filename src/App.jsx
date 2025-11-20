import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Pricing />
        <footer className="py-12 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} ModaSuite — All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#features" className="hover:text-slate-700">Features</a>
              <a href="#pricing" className="hover:text-slate-700">Pricing</a>
              <a href="/test" className="hover:text-slate-700">System Check</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
