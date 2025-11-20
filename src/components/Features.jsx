import { Sparkles, ShoppingBag, CreditCard, BarChart3, Truck, Store } from 'lucide-react'

function Features() {
  const items = [
    { icon: <ShoppingBag className="h-5 w-5" />, title: 'Beautiful Storefront', desc: 'Pixel‑perfect storefront themes designed for fashion.' },
    { icon: <CreditCard className="h-5 w-5" />, title: 'Payments Built‑in', desc: 'Accept cards, wallets and BNPL with one click.' },
    { icon: <BarChart3 className="h-5 w-5" />, title: 'Analytics', desc: 'Track sales, returning customers and cohorts.' },
    { icon: <Truck className="h-5 w-5" />, title: 'Shipping & Returns', desc: 'Automated labels and branded return portal.' },
    { icon: <Sparkles className="h-5 w-5" />, title: 'AI Descriptions', desc: 'Generate SEO‑ready product copy in seconds.' },
    { icon: <Store className="h-5 w-5" />, title: 'Inventory', desc: 'Variants, stock alerts, bundles and more.' },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Everything you need to sell fashion online</h2>
          <p className="mt-3 text-slate-600">A complete suite to launch, manage and scale your brand.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((f, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-6 bg-white hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center">
                {f.icon}
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-6">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
