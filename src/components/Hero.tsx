import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import Image from './Image'

const heroStats = [
  { value: '25+', label: 'Years' },
  { value: '120+', label: 'Projects Delivered' },
  { value: '14', label: 'Markets Served' },
]

export default function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-ink">
      <Image
        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2400&q=80"
        alt="Construction crane against a modern skyline at dusk"
        wrapperClassName="absolute inset-0 h-full w-full"
        className="absolute inset-0 h-full w-full scale-[1.04] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />

      <div className="container-nova relative z-10 flex w-full flex-col gap-12 pb-16 pt-40 sm:pb-20 lg:pb-24">
        <div className="max-w-4xl animate-reveal-up" style={{ animationDelay: '150ms', opacity: 0 }}>
          <p className="eyebrow mb-6 text-paper/70">Construction · Civil Engineering · Development</p>
          <h1 className="font-display text-[3.1rem] leading-[0.98] tracking-tightest text-paper xs:text-6xl sm:text-7xl lg:text-8xl">
            Building What
            <br />
            Lasts.
          </h1>
          <p className="mt-7 max-w-lg text-base leading-relaxed text-stone/90 sm:text-lg">
            NOVA STRUCTURES delivers high-quality construction, engineering, and development
            solutions with precision from concept to completion.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/projects" className="btn-primary">
              Explore Our Projects
            </Link>
            <Link to="/contact" className="btn-ghost-light">
              Start a Project
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-8 border-t border-paper/15 pt-8 animate-reveal-up" style={{ animationDelay: '450ms', opacity: 0 }}>
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl text-paper sm:text-4xl">{stat.value}</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-widest2 text-stone/70">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="hidden items-center gap-2 text-paper/60 sm:flex">
            <span className="font-mono text-[11px] uppercase tracking-widest2">Scroll</span>
            <ChevronDown className="h-4 w-4 animate-scroll-hint" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </section>
  )
}
