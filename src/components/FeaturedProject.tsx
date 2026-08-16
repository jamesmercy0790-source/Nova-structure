import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Project } from '@/types'
import { useReveal } from '@/hooks/useReveal'
import Image from './Image'

interface FeaturedProjectProps {
  project: Project
}

export default function FeaturedProject({ project }: FeaturedProjectProps) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="bg-charcoal py-24 sm:py-32">
      <div className="container-nova">
        <div ref={ref} className="reveal grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="relative aspect-[4/3] overflow-hidden lg:col-span-7 lg:aspect-auto">
            <Image
              src={project.image}
              alt={project.name}
              wrapperClassName="absolute inset-0 h-full w-full"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center lg:col-span-5 lg:pl-6">
            <p className="eyebrow mb-6">01 / Flagship Project</p>
            <h2 className="font-display text-4xl leading-[1.05] tracking-tightest text-paper sm:text-5xl">
              {project.name}
            </h2>
            <p className="mt-3 font-mono text-sm uppercase tracking-widest text-stone/60">
              {project.location} · {project.category}
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-stone/85">{project.description}</p>

            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-paper/10 pt-8 sm:grid-cols-4 lg:grid-cols-2">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-widest2 text-stone/50">Value</dt>
                <dd className="mt-1.5 font-display text-xl text-paper">{project.value}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-widest2 text-stone/50">Area</dt>
                <dd className="mt-1.5 font-display text-xl text-paper">{project.area}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-widest2 text-stone/50">Completion</dt>
                <dd className="mt-1.5 font-display text-xl text-paper">{project.year}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-widest2 text-stone/50">Sector</dt>
                <dd className="mt-1.5 font-display text-xl text-paper">{project.category}</dd>
              </div>
            </dl>

            <Link
              to={`/projects/${project.slug}`}
              className="group mt-10 inline-flex w-fit items-center gap-2 border-b border-paper/30 pb-1.5 text-sm font-medium text-paper transition-colors hover:border-oxide hover:text-oxide"
            >
              View Project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
