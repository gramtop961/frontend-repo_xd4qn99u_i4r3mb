import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-3 py-1 text-xs text-indigo-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              5 Free AI Enhancements Weekly
            </div>
            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Create Professional Resumes with AI-Powered Assistance
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Build polished resumes in minutes. Switch templates instantly, enhance sections with AI, and download beautiful PDFs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-white font-medium shadow-sm hover:bg-indigo-700 transition">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#templates" className="inline-flex items-center justify-center rounded-md border border-indigo-300 px-6 py-3 text-indigo-700 bg-white hover:bg-indigo-50 transition">
                Browse Templates
              </a>
            </div>
          </div>

          {/* Right visual - Spline animation */}
          <div className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden ring-1 ring-indigo-100 shadow-xl">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            {/* soft gradient edge */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/0 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
