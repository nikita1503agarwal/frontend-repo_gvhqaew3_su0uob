function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-rose-50 via-white to-white" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-rose-200/30 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-rose-700 bg-rose-100 px-3 py-1 rounded-full text-sm font-medium">New • AI Styling</span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
              Launch your fashion shop in minutes
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-7">
              ModaSuite is the all‑in‑one platform to run a modern fashion store: beautiful storefront, AI product descriptions, inventory, payments, and analytics.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition">
                Start free
              </a>
              <a href="#showcase" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-slate-900 border border-slate-200 hover:bg-slate-50">
                See a demo
              </a>
            </div>
            <div className="mt-6 text-sm text-slate-500">No credit card required • 14‑day free trial</div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <img src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=1400&auto=format&fit=crop" alt="Fashion dashboard" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -left-6 bg-white border border-slate-200 rounded-xl shadow p-4 w-56">
              <p className="text-sm font-medium">Real‑time Sales</p>
              <p className="text-2xl font-semibold mt-1">$12,430</p>
              <p className="text-xs text-slate-500 mt-1">Last 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
