import { useReveal } from '@/hooks/useReveal'

interface SectionHeadingProps {
  eyebrow?: string
  title: React.ReactNode
  description?: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionHeading({ eyebrow, title, description, align = 'left', light = false }: SectionHeadingProps) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`reveal max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2
        className={`text-4xl leading-[1.08] tracking-tightest sm:text-5xl lg:text-[3.4rem] ${
          light ? 'text-paper' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${light ? 'text-stone' : 'text-concrete'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
