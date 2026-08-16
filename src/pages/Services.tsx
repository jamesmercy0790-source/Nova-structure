import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import ServiceCard from '@/components/ServiceCard'
import Timeline from '@/components/Timeline'
import { services, processSteps } from '@/data/content'

export default function Services() {
  useEffect(() => {
    document.title = 'Services — NOVA STRUCTURES'
  }, [])

  return (
    <div className="pb-28 pt-36 sm:pt-40">
      <div className="container-nova">
        <SectionHeading
          eyebrow="Services"
          title="Capability Built for Complexity."
          description="From first feasibility study to final handover, NOVA STRUCTURES delivers under a single point of accountability."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>

      <div className="mt-28 bg-charcoal py-24 sm:py-32">
        <div className="container-nova">
          <SectionHeading eyebrow="Process" title="How We Deliver." light />
          <div className="mt-16">
            <Timeline steps={processSteps} />
          </div>
        </div>
      </div>

      <div className="container-nova mt-24 flex flex-col items-start gap-6 sm:mt-32">
        <h2 className="max-w-xl font-display text-3xl leading-tight tracking-tight text-charcoal sm:text-4xl">
          Ready to scope your next project?
        </h2>
        <Link to="/contact" className="group inline-flex items-center gap-2 btn-primary">
          Start a Project
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.75} />
        </Link>
      </div>
    </div>
  )
}
