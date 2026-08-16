import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowRight, ArrowLeft, MapPin, Calendar, Tag } from 'lucide-react'
import { getProjectBySlug, projects } from '@/data/projects'
import Image from '@/components/Image'
import ProjectCard from '@/components/ProjectCard'
import { useReveal } from '@/hooks/useReveal'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  useEffect(() => {
    if (project) document.title = `${project.name} — NOVA STRUCTURES`
  }, [project])

  const overviewRef = useReveal<HTMLDivElement>()
  const statsRef = useReveal<HTMLDivElement>()
  const galleryRef = useReveal<HTMLDivElement>()

  if (!project) return <Navigate to="/projects" replace />

  const related = projects.filter((p) => p.id !== project.id && p.category === project.category).slice(0, 3)
  const relatedFallback = projects.filter((p) => p.id !== project.id).slice(0, 3)
  const relatedProjects = related.length > 0 ? related : relatedFallback

  return (
    <article>
      {/* Hero */}
      <div className="relative h-[70svh] min-h-[480px] w-full overflow-hidden bg-ink">
        <Image
          src={project.image}
          alt={project.name}
          wrapperClassName="absolute inset-0 h-full w-full"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
        <div className="container-nova absolute inset-x-0 bottom-0 pb-14">
          <Link to="/projects" className="mb-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest2 text-paper/70 hover:text-paper">
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.75} />
            All Projects
          </Link>
          <p className="eyebrow mb-4 text-paper/70">{project.category} · {project.status}</p>
          <h1 className="max-w-3xl font-display text-4xl leading-[1.02] tracking-tightest text-paper sm:text-6xl lg:text-7xl">
            {project.name}
          </h1>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs uppercase tracking-widest text-stone/70">
            <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" strokeWidth={1.5} /> {project.location}</span>
            <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" strokeWidth={1.5} /> {project.year}</span>
            <span className="flex items-center gap-1.5"><Tag className="h-3.5 w-3.5" strokeWidth={1.5} /> {project.category}</span>
          </div>
        </div>
      </div>

      {/* Overview + meta panel */}
      <section className="py-20 sm:py-28">
        <div className="container-nova">
          <div ref={overviewRef} className="reveal grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <p className="eyebrow mb-4">Overview</p>
              <p className="font-display text-2xl leading-snug tracking-tight text-charcoal sm:text-3xl">
                {project.overview}
              </p>

              <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2">
                <div>
                  <p className="eyebrow mb-3">Challenge</p>
                  <p className="text-sm leading-relaxed text-concrete">{project.challenge}</p>
                </div>
                <div>
                  <p className="eyebrow mb-3">Solution</p>
                  <p className="text-sm leading-relaxed text-concrete">{project.solution}</p>
                </div>
              </div>

              <div className="mt-14">
                <p className="eyebrow mb-4">Construction Scope</p>
                <ul className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                  {project.scope.map((item) => (
                    <li key={item} className="border-t border-charcoal/10 py-3 text-sm text-charcoal">{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-14">
                <p className="eyebrow mb-4">Materials</p>
                <div className="flex flex-wrap gap-2">
                  {project.materials.map((m) => (
                    <span key={m} className="border border-charcoal/15 px-3 py-1.5 text-xs text-charcoal/80">{m}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Meta panel */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 flex flex-col gap-6 border border-charcoal/10 p-7">
                <MetaRow label="Client" value={project.client} />
                <MetaRow label="Architect" value={project.architect} />
                <MetaRow label="Project Manager" value={project.projectManager} />
                <MetaRow label="Services Provided" value={project.services.join(', ')} />
                <div className="border-t border-charcoal/10 pt-6">
                  <Link to="/contact" className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-charcoal hover:text-oxide">
                    Start a similar project
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.75} />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-charcoal py-20">
        <div className="container-nova">
          <div ref={statsRef} className="reveal grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            {project.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl tracking-tightest text-paper sm:text-4xl">{stat.value}</p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-widest2 text-stone/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-28">
        <div className="container-nova">
          <p className="eyebrow mb-10">Construction Timeline</p>
          <div className="flex flex-col">
            {project.timeline.map((phase, i) => (
              <div key={phase.phase} className="flex items-center justify-between gap-6 border-t border-charcoal/10 py-5 last:border-b">
                <div className="flex items-center gap-5">
                  <span className="font-mono text-xs text-oxide">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-display text-lg text-charcoal sm:text-xl">{phase.phase}</span>
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-concrete">{phase.period}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-20 sm:pb-28">
        <div className="container-nova">
          <p className="eyebrow mb-8">Gallery</p>
          <div ref={galleryRef} className="reveal grid grid-cols-1 gap-4 sm:grid-cols-2">
            {project.gallery.map((src, i) => (
              <div key={i} className={`relative aspect-[4/3] overflow-hidden bg-graphite ${i === 0 ? 'sm:col-span-2 sm:aspect-[16/8]' : ''}`}>
                <Image
                  src={src}
                  alt={`${project.name} gallery image ${i + 1}`}
                  wrapperClassName="absolute inset-0 h-full w-full"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related projects */}
      <section className="border-t border-charcoal/10 py-20 sm:py-28">
        <div className="container-nova">
          <div className="mb-12 flex items-end justify-between">
            <p className="eyebrow">More Projects</p>
            <Link to="/projects" className="link-underline font-mono text-[11px] uppercase tracking-widest2 text-charcoal">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3">
            {relatedProjects.map((p, i) => (
              <ProjectCard key={p.id} project={p} size="small" index={i} />
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-widest2 text-concrete">{label}</p>
      <p className="mt-1.5 text-sm text-charcoal">{value}</p>
    </div>
  )
}
