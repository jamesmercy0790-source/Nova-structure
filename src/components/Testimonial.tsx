import { useState } from 'react'
import { ChevronLeft, ChevronRight, BadgeCheck } from 'lucide-react'
import { Testimonial as TestimonialType } from '@/types'

interface TestimonialProps {
  testimonials: TestimonialType[]
}

export default function Testimonial({ testimonials }: TestimonialProps) {
  const [index, setIndex] = useState(0)
  const current = testimonials[index]

  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  return (
    <div className="flex flex-col gap-10">
      <blockquote key={current.id} className="animate-fade-in max-w-3xl">
        <p className="font-display text-2xl leading-snug tracking-tight text-charcoal sm:text-3xl lg:text-4xl">
          &ldquo;{current.quote}&rdquo;
        </p>
        <footer className="mt-8 flex items-center gap-3">
          <BadgeCheck className="h-5 w-5 text-oxide" strokeWidth={1.5} />
          <div>
            <p className="text-sm font-medium text-charcoal">{current.name}</p>
            <p className="font-mono text-xs uppercase tracking-widest text-concrete">
              {current.role}, {current.company} — {current.project}
            </p>
          </div>
        </footer>
      </blockquote>

      <div className="flex items-center gap-4">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="flex h-10 w-10 items-center justify-center border border-charcoal/20 text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal hover:text-paper"
        >
          <ChevronLeft className="h-4 w-4" strokeWidth={1.75} />
        </button>
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="flex h-10 w-10 items-center justify-center border border-charcoal/20 text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal hover:text-paper"
        >
          <ChevronRight className="h-4 w-4" strokeWidth={1.75} />
        </button>
        <div className="ml-2 flex gap-1.5">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1 transition-all duration-300 ${i === index ? 'w-8 bg-oxide' : 'w-3 bg-charcoal/20'}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
