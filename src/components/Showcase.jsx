import { useEffect, useState } from 'react'

function Showcase() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/products?limit=8`)
        if (!res.ok) throw new Error('Failed to load products')
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        // Fallback local samples if backend not ready
        setProducts([
          { id: '1', title: 'Ava Rib Knit Dress', price: 79, description: 'Figure-hugging rib knit midi dress in sand.' },
          { id: '2', title: 'Noah Oversized Blazer', price: 119, description: 'Relaxed-fit blazer in charcoal.' },
          { id: '3', title: 'Mila Straight Jeans', price: 89, description: 'High-waist straight denim in light wash.' },
          { id: '4', title: 'Luna Silk Camisole', price: 69, description: 'Bias-cut silk cami in ivory.' },
        ])
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (
    <section id="showcase" className="py-20 bg-rose-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Crafted for conversion</h2>
            <p className="mt-3 text-slate-600">High‑impact product cards ready for your catalog.</p>
          </div>
          <a href="#" className="text-rose-700 hover:text-rose-800 font-medium">Explore templates →</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(loading ? Array.from({ length: 4 }) : products).map((p, i) => (
            <div key={i} className="group rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-md transition">
              <div className="aspect-[4/5] bg-slate-100">
                <img className="h-full w-full object-cover" src={`https://source.unsplash.com/random/800x1000?fashion,${i}`} alt={p?.title || 'Item'} />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-slate-900">{p?.title || 'Loading...'}</h3>
                  <span className="text-slate-900 font-semibold">{p?.price ? `$${p.price}` : '—'}</span>
                </div>
                <p className="mt-1 text-sm text-slate-600 line-clamp-2">{p?.description || ' '}</p>
                <button className="mt-3 w-full rounded-lg border border-slate-200 py-2 text-sm font-medium hover:bg-slate-50">Preview</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Showcase
