import { FileText, Sparkles, Layout } from 'lucide-react'

const steps = [
  {
    id: 1,
    title: 'Fill Your Information',
    desc: 'Use structured forms for personal info, experience, education, and skills.',
    icon: FileText,
  },
  {
    id: 2,
    title: 'Enhance with AI',
    desc: 'One-click AI buttons to refine summaries and bullet points.',
    icon: Sparkles,
  },
  {
    id: 3,
    title: 'Choose & Download',
    desc: 'Pick from 5 templates and export a pixel-perfect PDF.',
    icon: Layout,
  },
]

export default function ProcessSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">How it works</h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">
          A simple, guided flow that helps you craft a standout resume quickly.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map(({ id, title, desc, icon: Icon }) => (
            <div key={id} className="group relative rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-6 inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 to-violet-500 text-white h-10 w-10 font-semibold shadow-sm">
                {id}
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <Icon className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
