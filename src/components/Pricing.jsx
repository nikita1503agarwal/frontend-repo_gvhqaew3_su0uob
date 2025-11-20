function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: '29',
      features: ['Up to 100 products', '1 storefront theme', 'Email support'],
      cta: 'Start free',
      highlight: false,
    },
    {
      name: 'Growth',
      price: '79',
      features: ['Unlimited products', '3 premium themes', 'Abandoned cart recovery', 'Priority support'],
      cta: 'Upgrade',
      highlight: true,
    },
    {
      name: 'Scale',
      price: '199',
      features: ['Headless storefront API', 'Advanced analytics', 'Dedicated manager'],
      cta: 'Contact sales',
      highlight: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Choose a plan that scales with your brand.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border ${t.highlight ? 'border-rose-200 ring-2 ring-rose-200' : 'border-slate-200'} p-6 bg-white`}>
              <div className="flex items-baseline gap-2">
                <h3 className="text-xl font-semibold text-slate-900">{t.name}</h3>
                {t.highlight && <span className="text-xs text-rose-700 bg-rose-100 px-2 py-1 rounded-full">Best value</span>}
              </div>
              <p className="mt-4 text-4xl font-semibold text-slate-900">${t.price}<span className="text-base text-slate-500 font-normal">/mo</span></p>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-lg px-4 py-2 font-medium transition ${t.highlight ? 'bg-slate-900 text-white hover:bg-slate-800' : 'border border-slate-200 hover:bg-slate-50'}`}>{t.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
