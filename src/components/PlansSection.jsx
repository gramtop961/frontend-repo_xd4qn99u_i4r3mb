import { useState } from 'react'
import { CheckCircle, Plus, Minus } from 'lucide-react'

const templates = [
  { name: 'Classic', color: 'from-indigo-200 to-indigo-400' },
  { name: 'Modern', color: 'from-rose-200 to-rose-400' },
  { name: 'Elegant', color: 'from-emerald-200 to-emerald-400' },
  { name: 'Compact', color: 'from-amber-200 to-amber-400' },
  { name: 'Minimal', color: 'from-sky-200 to-sky-400' },
]

const faqs = [
  {
    q: 'Can I use it for free?',
    a: 'Yes. You can build unlimited resumes and use AI 5 times per week on the free plan.'
  },
  {
    q: 'Do I keep access to my resumes?',
    a: 'Free users keep drafts forever. Premium includes 7-day edit access after export.'
  },
  {
    q: 'How does the one-time purchase work?',
    a: 'Pay once (₹299) to unlock unlimited AI and PDF downloads for a single account.'
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between text-left">
        <span className="font-medium text-gray-900">{q}</span>
        {open ? <Minus className="h-5 w-5 text-gray-500" /> : <Plus className="h-5 w-5 text-gray-500" />}
      </button>
      {open && <p className="mt-2 text-sm text-gray-600">{a}</p>}
    </div>
  )
}

export default function PlansSection() {
  return (
    <section className="pt-24 pb-0 bg-white" id="templates">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Template gallery</h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">
          Five professionally designed templates. Preview and switch anytime.
        </p>

        <div className="mt-8 overflow-x-auto">
          <div className="flex gap-6 min-w-max">
            {templates.map((t, idx) => (
              <div key={idx} className="group w-56">
                <div className={`aspect-[3/4] rounded-xl bg-gradient-to-br ${t.color} shadow ring-1 ring-black/5 transform transition group-hover:scale-105`} />
                <p className="mt-2 text-center text-sm font-medium text-gray-700">{t.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div id="pricing" className="mt-20 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white p-8 ring-1 ring-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Free</h3>
            <p className="mt-1 text-sm text-gray-600">Unlimited resumes, 5 AI uses/week, all templates</p>
            <p className="mt-6 text-4xl font-extrabold text-gray-900">₹0</p>
            <ul className="mt-6 space-y-2 text-sm">
              {['Unlimited resumes', '5 AI uses/week', 'All templates'].map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-emerald-500" /> {f}
                </li>
              ))}
            </ul>
            <button className="mt-8 w-full rounded-md border border-indigo-300 px-4 py-2 text-indigo-700 hover:bg-indigo-50">Start Free</button>
          </div>

          <div className="rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 p-1 shadow-sm">
            <div className="rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 p-8 text-white">
              <h3 className="text-xl font-semibold">Premium</h3>
              <p className="mt-1 text-sm text-indigo-100">Unlimited AI, PDF download, 7-day edit access</p>
              <p className="mt-6 text-4xl font-extrabold">₹299</p>
              <ul className="mt-6 space-y-2 text-sm">
                {['Unlimited AI uses', 'PDF downloads', '7-day edit access'].map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-300" /> {f}
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full rounded-md bg-white px-4 py-2 text-indigo-700 hover:bg-indigo-50">Upgrade</button>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-gray-900 text-center">Frequently asked questions</h3>
          <div className="mt-8 grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {faqs.map((f, i) => (
              <FAQItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="mt-20 bg-gradient-to-tr from-violet-600 to-indigo-600">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-extrabold">Ready to Build Your Standout Resume?</h3>
          <p className="mt-2 text-indigo-100">Start free and upgrade anytime. No credit card required.</p>
          <a href="#pricing" className="mt-6 inline-block rounded-md bg-white text-indigo-700 px-6 py-3 font-medium shadow hover:bg-indigo-50">Get Started</a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li>Features</li>
              <li>Templates</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Resources</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li>Blog</li>
              <li>Guides</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Security</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li>hello@example.com</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Resume Builder. All rights reserved.
        </div>
      </footer>
    </section>
  )
}
