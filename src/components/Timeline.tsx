import { ProcessStep } from '@/types'
import { useReveal } from '@/hooks/useReveal'

interface TimelineProps {
  steps: ProcessStep[]
}

function TimelineStep({ step, index }: { step: ProcessStep; index: number }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className="reveal relative flex flex-1 flex-col gap-4 border-t border-paper/15 pt-6 md:border-t-0 md:pt-0"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <span className="font-mono text-sm text-oxide">{step.number}</span>
      <h3 className="font-display text-xl text-paper sm:text-2xl">{step.title}</h3>
      <p className="max-w-[220px] text-sm leading-relaxed text-stone/70">{step.description}</p>
    </div>
  )
}

export default function Timeline({ steps }: TimelineProps) {
  return (
    <>
      {/* Mobile: vertical timeline */}
      <div className="flex flex-col gap-10 border-l border-paper/15 pl-6 md:hidden">
        {steps.map((step, i) => (
          <div key={step.number} className="relative">
            <span className="absolute -left-[27px] top-1 h-2.5 w-2.5 -translate-x-1/2 bg-oxide" />
            <TimelineStep step={step} index={i} />
          </div>
        ))}
      </div>

      {/* Desktop: horizontal process */}
      <div className="hidden md:flex md:gap-8 lg:gap-10">
        {steps.map((step, i) => (
          <TimelineStep key={step.number} step={step} index={i} />
        ))}
      </div>
    </>
  )
}
