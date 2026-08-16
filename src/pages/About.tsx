import { useEffect } from 'react'
import SectionHeading from '@/components/SectionHeading'
import StatCounter from '@/components/StatCounter'
import Image from '@/components/Image'
import { useReveal } from '@/hooks/useReveal'
import { companyStats, differentiators } from '@/data/content'

export default function About() {
  useEffect(() => {
    document.title = 'About — NOVA STRUCTURES'
  }, [])

  const storyRef = useReveal<HTMLDivElement>()

  return (
    <div className="pb-28 pt-36 sm:pt-40">
      <div className="container-nova">
        <SectionHeading
          eyebrow="About"
          title="We don't simply build. We create the foundations for what comes next."
        />
      </div>

      <div className="container-nova mt-16">
        <div ref={storyRef} className="reveal grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="relative aspect-[4/5] overflow-hidden lg:col-span-6">
            <Image
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80"
              alt="NOVA STRUCTURES site team reviewing structural drawings"
              wrapperClassName="absolute inset-0 h-full w-full"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="lg:col-span-6 lg:pl-8">
            <p className="text-base leading-relaxed text-concrete">
              NOVA STRUCTURES is a modern construction and engineering company focused on delivering
              high-quality projects through disciplined planning, advanced construction practices,
              skilled teams, and uncompromising quality standards.
            </p>
            <p className="mt-5 text-base leading-relaxed text-concrete">
              Founded on the principle that a building&rsquo;s value is measured in decades, not
              months, we bring the same rigour to a private residence as we do to a 200,000
              square-metre logistics park. Our teams work across residential, commercial,
              industrial, infrastructure and hospitality sectors, carrying engineering discipline
              through every stage from feasibility to handover.
            </p>
            <p className="mt-5 text-base leading-relaxed text-concrete">
              Today, that approach has carried us across 14 markets and more than 120 completed
              projects &mdash; each one built on the same foundation of precision, transparency and
              long-term thinking.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-24 border-y border-charcoal/10 py-20 sm:mt-32">
        <div className="container-nova grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
          {companyStats.map((stat) => (
            <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} decimals={stat.decimals} />
          ))}
        </div>
      </div>

      <div className="container-nova mt-24 sm:mt-32">
        <SectionHeading eyebrow="Why Choose Us" title="Six Reasons Clients Return." />
        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((d) => (
            <div key={d.number} className="flex flex-col gap-3 border-t border-charcoal/10 pt-6">
              <span className="font-mono text-sm text-oxide">{d.number}</span>
              <h3 className="font-display text-xl text-charcoal">{d.title}</h3>
              <p className="text-sm leading-relaxed text-concrete">{d.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
