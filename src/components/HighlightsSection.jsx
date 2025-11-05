import { FileText, Sparkles, Layout, Eye } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'Structured Building',
    desc: 'Guided sections for contact, summary, experience, education, and skills.',
    icon: FileText,
  },
  {
    title: 'AI Enhancement',
    desc: 'Polish summaries and bullets with AI. Includes a "5/week free" badge.',
    icon: Sparkles,
    badge: '5/week free',
  },
  {
    title: 'Template Switching',
    desc: 'Swap layouts instantly with a smooth animation.',
    icon: Layout,
  },
  {
    title: 'Real-Time Preview',
    desc: 'Live split-screen preview as you type.',
    icon: Eye,
  },
]

export default function HighlightsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Key features</h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">
          Powerful tools wrapped in a clean, modern interface to help you move fast.
        </p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="relative rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200 hover:shadow-md hover:-translate-y-1 transition"
            >
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
              {item.badge && (
                <span className="absolute top-4 right-4 text-xs text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded">
                  {item.badge}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* AI Showcase */}
        <div className="mt-16 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-600 text-white p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold">AI Feature Showcase</h3>
              <p className="mt-2 text-indigo-100 max-w-md">
                See how AI upgrades your content. Enhance summaries and convert plain bullets into impactful statements.
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl bg-white/10 p-4 ring-1 ring-white/20">
                  <p className="text-sm font-medium opacity-90">Summary Enhancer</p>
                  <div className="mt-2 grid grid-cols-2 gap-4 text-sm">
                    <div className="rounded-lg bg-white/10 p-3">
                      <p className="opacity-90">Before</p>
                      <p className="mt-1 opacity-80">Experienced developer seeking job.</p>
                    </div>
                    <div className="rounded-lg bg-white p-3 text-gray-900">
                      <p className="font-medium">After</p>
                      <p className="mt-1 text-gray-700">Full‑stack engineer with 6+ years crafting scalable web apps, specializing in React and FastAPI.</p>
                    </div>
                  </div>
                  <button className="mt-3 inline-flex items-center rounded-md bg-white text-indigo-700 px-3 py-1.5 text-sm font-medium shadow hover:bg-indigo-50">
                    Enhance with AI
                  </button>
                </div>

                <div className="rounded-xl bg-white/10 p-4 ring-1 ring-white/20">
                  <p className="text-sm font-medium opacity-90">Description Enhancer</p>
                  <div className="mt-2 grid grid-cols-2 gap-4 text-sm">
                    <div className="rounded-lg bg-white/10 p-3">
                      <p className="opacity-90">Before</p>
                      <p className="mt-1 opacity-80">Worked on frontend tasks.</p>
                    </div>
                    <div className="rounded-lg bg-white p-3 text-gray-900">
                      <p className="font-medium">After</p>
                      <p className="mt-1 text-gray-700">Led UI refactor with accessibility in mind, improving conversion by 14% and CLS by 35%.</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="h-2 w-full rounded bg-white/20">
                      <div className="h-2 rounded bg-emerald-400" style={{ width: '60%' }} />
                    </div>
                    <p className="mt-1 text-xs text-indigo-100">5 free per week • 3 remaining</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual mockup */}
            <div className="rounded-xl bg-white/10 p-4 ring-1 ring-white/20">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-white p-4 text-gray-900">
                  <div className="h-4 w-24 rounded bg-gray-200" />
                  <div className="mt-3 space-y-2">
                    <div className="h-3 w-full rounded bg-gray-200" />
                    <div className="h-3 w-5/6 rounded bg-gray-200" />
                    <div className="h-3 w-4/6 rounded bg-gray-200" />
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4 text-gray-900">
                  <div className="h-4 w-24 rounded bg-gray-200" />
                  <div className="mt-3 space-y-2">
                    <div className="h-3 w-full rounded bg-gray-200" />
                    <div className="h-3 w-5/6 rounded bg-gray-200" />
                    <div className="h-3 w-4/6 rounded bg-gray-200" />
                  </div>
                </div>
                <div className="col-span-2 rounded-lg bg-white p-4 text-gray-900">
                  <div className="flex items-center justify-between">
                    <div className="h-4 w-28 rounded bg-gray-200" />
                    <div className="h-6 w-20 rounded bg-indigo-100" />
                  </div>
                  <div className="mt-3 h-32 rounded bg-gray-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
