import { ArrowUpRight } from 'lucide-react'
import { InsightArticle } from '@/types'
import { useReveal } from '@/hooks/useReveal'
import Image from './Image'

interface InsightCardProps {
  article: InsightArticle
  index?: number
}

export default function InsightCard({ article, index = 0 }: InsightCardProps) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <article
      ref={ref}
      className="reveal group flex cursor-pointer flex-col"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-graphite">
        <Image
          src={article.image}
          alt={article.title}
          wrapperClassName="absolute inset-0 h-full w-full"
          className="img-zoom absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="flex items-center gap-3 pt-5">
        <span className="font-mono text-[11px] uppercase tracking-widest2 text-oxide">{article.category}</span>
        <span className="h-1 w-1 rounded-full bg-concrete/50" />
        <span className="font-mono text-[11px] uppercase tracking-widest2 text-concrete">{article.date}</span>
      </div>
      <h3 className="mt-3 flex items-start justify-between gap-3 font-display text-xl leading-tight text-charcoal sm:text-2xl">
        <span className="transition-colors duration-300 group-hover:text-oxide">{article.title}</span>
        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-concrete transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-oxide" strokeWidth={1.5} />
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-concrete">{article.excerpt}</p>
      <p className="mt-3 font-mono text-[11px] uppercase tracking-widest2 text-concrete/70">{article.readingTime}</p>
    </article>
  )
}
