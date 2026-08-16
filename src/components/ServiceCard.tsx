import { Link } from 'react-router-dom'
import { ArrowRight, HardHat, Compass, Building2, Home, ClipboardList, Hammer, LucideIcon } from 'lucide-react'
import { Service } from '@/types'
import { useReveal } from '@/hooks/useReveal'

const icons: Record<string, LucideIcon> = { HardHat, Compass, Building2, Home, ClipboardList, Hammer }

interface ServiceCardProps {
  service: Service
  index?: number
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const ref = useReveal<HTMLDivElement>()
  const Icon = icons[service.icon] ?? Building2

  return (
    <div
      ref={ref}
      className="reveal group flex flex-col border-t border-charcoal/15 py-9 transition-colors duration-500 hover:bg-charcoal/[0.03] sm:px-2"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-xs text-concrete">{service.number}</span>
        <Icon className="h-6 w-6 text-oxide transition-transform duration-500 ease-precise group-hover:-translate-y-1" strokeWidth={1.25} />
      </div>

      <h3 className="mt-8 font-display text-2xl text-charcoal sm:text-[1.65rem]">{service.title}</h3>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-concrete">{service.description}</p>

      <ul className="mt-5 flex flex-col gap-1.5">
        {service.details.map((d) => (
          <li key={d} className="text-xs text-concrete/80">— {d}</li>
        ))}
      </ul>

      <Link
        to="/services"
        className="group/link mt-7 inline-flex w-fit items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest2 text-charcoal transition-colors hover:text-oxide"
      >
        Learn More
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" strokeWidth={1.75} />
      </Link>
    </div>
  )
}
