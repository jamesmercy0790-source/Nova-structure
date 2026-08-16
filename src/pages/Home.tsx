import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, FileCheck2, Leaf, HardHat as HardHatIcon } from 'lucide-react'
import Hero from '@/components/Hero'
import FeaturedProject from '@/components/FeaturedProject'
import SectionHeading from '@/components/SectionHeading'
import ProjectGrid from '@/components/ProjectGrid'
import ServiceCard from '@/components/ServiceCard'
import Timeline from '@/components/Timeline'
import StatCounter from '@/components/StatCounter'
import Testimonial from '@/components/Testimonial'
import ClientsStrip from '@/components/ClientsStrip'
import InsightCard from '@/components/InsightCard'
import Image from '@/components/Image'
import { useReveal } from '@/hooks/useReveal'
import { projects, featuredProject } from '@/data/projects'
import { services, processSteps, companyStats, differentiators, testimonials, clientLogos, insights } from '@/data/content'

export default function Home() {
  const aboutRef = useReveal<HTMLDivElement>()
  const safetyItems = [
    { icon: ShieldCheck, title: 'Safety Standards', description: 'Site-wide protocols audited against international best practice.' },
    { icon: FileCheck2, title: 'Quality Assurance', description: 'Structured inspection and sign-off at every stage of the build.' },
    { icon: Leaf, title: 'Environmental Responsibility', description: 'Material selection and waste management held to a low-impact standard.' },
    { icon: HardHatIcon, title: 'Site Management', description: 'Disciplined supervision from mobilisation through to handover.' },
  ]

  return (
    <>
      <Hero />
      <FeaturedProject project={featuredProject} />

      {/* Selected Work */}
      <section className="py-24 sm:py-32">
        <div className="container-nova">
          <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Portfolio"
              title="Selected Work"
              description="A portfolio defined by precision, scale and purpose."
            />
            <Link to="/projects" className="btn-outline shrink-0">
              View All Projects
            </Link>
          </div>
          <ProjectGrid projects={projects.slice(0, 6)} />
        </div>
      </section>

      {/* Services */}
      <section className="bg-stone/20 py-24 sm:py-32">
        <div className="container-nova">
          <SectionHeading
            eyebrow="Services"
            title="What We Deliver"
            description="End-to-end construction and engineering capability, under a single point of accountability."
          />
          <div className="mt-14 grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Expertise / Process */}
      <section id="expertise" className="bg-charcoal py-24 sm:py-32">
        <div className="container-nova">
          <SectionHeading eyebrow="Expertise" title="Precision at Every Stage." light />
          <div className="mt-16">
            <Timeline steps={processSteps} />
          </div>
        </div>
      </section>

      {/* Company Statistics */}
      <section className="border-b border-charcoal/10 py-20 sm:py-24">
        <div className="container-nova">
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
            {companyStats.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} decimals={stat.decimals} />
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="py-24 sm:py-32">
        <div className="container-nova">
          <div ref={aboutRef} className="reveal grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="relative aspect-[4/5] overflow-hidden lg:col-span-5">
              <Image
                src="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=1200&q=80"
                alt="NOVA STRUCTURES engineers reviewing plans on site"
                wrapperClassName="absolute inset-0 h-full w-full"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="lg:col-span-7 lg:pl-8">
              <p className="eyebrow mb-6">About</p>
              <h2 className="max-w-xl font-display text-3xl leading-[1.15] tracking-tight text-charcoal sm:text-4xl lg:text-[2.75rem]">
                We don&rsquo;t simply build. We create the foundations for what comes next.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-concrete">
                NOVA STRUCTURES is a modern construction and engineering company focused on delivering
                high-quality projects through disciplined planning, advanced construction practices,
                skilled teams, and uncompromising quality standards.
              </p>
              <Link to="/about" className="group mt-8 inline-flex w-fit items-center gap-2 border-b border-charcoal/30 pb-1.5 text-sm font-medium text-charcoal transition-colors hover:border-oxide hover:text-oxide">
                Discover NOVA STRUCTURES
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.75} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-stone/20 py-24 sm:py-32">
        <div className="container-nova">
          <SectionHeading eyebrow="Why Choose Us" title="Six Reasons Clients Return." />
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((d) => (
              <div key={d.number} className="flex flex-col gap-3">
                <span className="font-mono text-sm text-oxide">{d.number}</span>
                <h3 className="font-display text-xl text-charcoal">{d.title}</h3>
                <p className="text-sm leading-relaxed text-concrete">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Quality */}
      <section className="py-24 sm:py-32">
        <div className="container-nova">
          <SectionHeading eyebrow="Standards" title="Safety. Quality. Accountability." />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {safetyItems.map((item) => (
              <div key={item.title} className="flex flex-col gap-4 border-l border-charcoal/15 pl-5">
                <item.icon className="h-6 w-6 text-oxide" strokeWidth={1.25} />
                <h3 className="font-display text-lg text-charcoal">{item.title}</h3>
                <p className="text-sm leading-relaxed text-concrete">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-charcoal/[0.03] py-24 sm:py-32">
        <div className="container-nova">
          <p className="eyebrow mb-10">Client Voices</p>
          <Testimonial testimonials={testimonials} />
        </div>
      </section>

      <ClientsStrip clients={clientLogos} />

      {/* Insights */}
      <section className="py-24 sm:py-32">
        <div className="container-nova">
          <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="Insights" title="Perspectives from the Field" />
            <Link to="/insights" className="btn-outline shrink-0">
              View All Insights
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {insights.slice(0, 3).map((article, i) => (
              <InsightCard key={article.id} article={article} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-ink py-28 sm:py-36">
        <div className="container-nova flex flex-col items-start gap-8">
          <h2 className="max-w-2xl font-display text-4xl leading-[1.05] tracking-tightest text-paper sm:text-5xl lg:text-6xl">
            Have a project in mind?
          </h2>
          <p className="max-w-md text-base leading-relaxed text-stone/80">
            Tell us what you&rsquo;re building. We&rsquo;ll help you determine what&rsquo;s possible.
          </p>
          <Link to="/contact" className="btn-ghost-light">
            Start a Project
          </Link>
        </div>
      </section>
    </>
  )
}
