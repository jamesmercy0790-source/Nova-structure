import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Project } from '@/types'
import Image from './Image'

interface ProjectCardProps {
  project: Project
  size?: 'large' | 'medium' | 'small'
  index?: number
}

export default function ProjectCard({ project, size = 'medium', index = 0 }: ProjectCardProps) {
  const aspect = size === 'large' ? 'aspect-[4/5] sm:aspect-[16/11]' : size === 'small' ? 'aspect-[4/5]' : 'aspect-[4/5] sm:aspect-[3/4]'

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group reveal block"
      style={{ transitionDelay: `${Math.min(index * 90, 360)}ms` }}
    >
      <div className={`relative overflow-hidden bg-graphite ${aspect}`}>
        <Image
          src={project.image}
          alt={`${project.name} in ${project.location}`}
          wrapperClassName="absolute inset-0 h-full w-full"
          className="img-zoom absolute inset-0 h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

        <div className="absolute left-5 top-5 flex items-center gap-2">
          <span className="bg-paper/95 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest2 text-charcoal">
            {project.category}
          </span>
        </div>

        <div className="absolute right-5 top-5 flex h-9 w-9 -translate-y-2 items-center justify-center rounded-full bg-paper/0 text-paper opacity-0 ring-1 ring-paper/40 transition-all duration-400 ease-precise group-hover:translate-y-0 group-hover:bg-paper group-hover:text-charcoal group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <p className="font-mono text-[11px] uppercase tracking-widest2 text-stone/80">
            {project.location} — {project.year}
          </p>
          <h3 className="mt-1.5 font-display text-2xl leading-tight text-paper transition-transform duration-500 ease-precise group-hover:-translate-y-0.5 sm:text-[1.7rem]">
            {project.name}
          </h3>
          <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-stone/85 opacity-0 transition-all duration-500 ease-precise group-hover:mt-2 group-hover:max-h-20 group-hover:opacity-100">
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  )
}
