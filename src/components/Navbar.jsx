import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/flame-icon.svg" alt="Logo" className="h-7 w-7" />
          <span className="text-xl font-semibold tracking-tight">ModaSuite</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <button onClick={() => scrollTo('features')} className="hover:text-slate-900">Features</button>
          <button onClick={() => scrollTo('showcase')} className="hover:text-slate-900">Showcase</button>
          <button onClick={() => scrollTo('pricing')} className="hover:text-slate-900">Pricing</button>
          <a href="/test" className="hover:text-slate-900">System Check</a>
        </div>
        <div className="hidden md:block">
          <button onClick={() => scrollTo('pricing')} className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition">Start free</button>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/90">
          <div className="px-4 py-3 space-y-2 text-slate-700">
            <button className="block w-full text-left py-2" onClick={() => scrollTo('features')}>Features</button>
            <button className="block w-full text-left py-2" onClick={() => scrollTo('showcase')}>Showcase</button>
            <button className="block w-full text-left py-2" onClick={() => scrollTo('pricing')}>Pricing</button>
            <a className="block w-full py-2" href="/test">System Check</a>
            <button onClick={() => scrollTo('pricing')} className="w-full bg-slate-900 text-white px-4 py-2 rounded-lg">Start free</button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
