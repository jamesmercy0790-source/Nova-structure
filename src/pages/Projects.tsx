import { useMemo, useState, useEffect } from 'react'
import SectionHeading from '@/components/SectionHeading'
import ProjectFilter from '@/components/ProjectFilter'
import ProjectGrid from '@/components/ProjectGrid'
import { projects } from '@/data/projects'
import { Project } from '@/types'

export default function Projects() {
  const [category, setCategory] = useState<Project['category'] | 'All'>('All')
  const [query, setQuery] = useState('')

  useEffect(() => {
    document.title = 'Projects — NOVA STRUCTURES'
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return projects.filter((p) => {
      const matchesCategory = category === 'All' || p.category === category
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        String(p.year).includes(q)
      return matchesCategory && matchesQuery
    })
  }, [category, query])

  return (
    <div className="pb-28 pt-36 sm:pt-40">
      <div className="container-nova">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected Work"
          description="A portfolio defined by precision, scale and purpose — spanning residential, commercial, industrial, infrastructure and hospitality developments."
        />

        <div className="mt-12">
          <ProjectFilter
            active={category}
            onChange={setCategory}
            query={query}
            onQueryChange={setQuery}
            resultCount={filtered.length}
          />
        </div>

        <div className="mt-12">
          <ProjectGrid projects={filtered} />
        </div>
      </div>
    </div>
  )
}
