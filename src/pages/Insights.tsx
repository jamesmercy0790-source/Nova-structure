import { useEffect } from 'react'
import SectionHeading from '@/components/SectionHeading'
import InsightCard from '@/components/InsightCard'
import { insights } from '@/data/content'

export default function Insights() {
  useEffect(() => {
    document.title = 'Insights — NOVA STRUCTURES'
  }, [])

  return (
    <div className="pb-28 pt-36 sm:pt-40">
      <div className="container-nova">
        <SectionHeading
          eyebrow="Insights"
          title="Perspectives from the Field"
          description="Notes on construction, engineering and delivery from across our active portfolio."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((article, i) => (
            <InsightCard key={article.id} article={article} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
