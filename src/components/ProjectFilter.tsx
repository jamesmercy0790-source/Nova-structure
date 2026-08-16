import { Search, X } from 'lucide-react'
import { Project } from '@/types'
import { projectCategories } from '@/data/projects'

interface ProjectFilterProps {
  active: Project['category'] | 'All'
  onChange: (category: Project['category'] | 'All') => void
  query: string
  onQueryChange: (value: string) => void
  resultCount: number
}

export default function ProjectFilter({ active, onChange, query, onQueryChange, resultCount }: ProjectFilterProps) {
  return (
    <div className="flex flex-col gap-6 border-b border-charcoal/10 pb-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="scrollbar-hide -mx-6 flex gap-2 overflow-x-auto px-6 md:mx-0 md:flex-wrap md:px-0">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => onChange(category)}
              className={`shrink-0 whitespace-nowrap border px-4 py-2 font-mono text-[11px] uppercase tracking-widest2 transition-all duration-300 ${
                active === category
                  ? 'border-charcoal bg-charcoal text-paper'
                  : 'border-charcoal/20 text-charcoal/70 hover:border-charcoal/60 hover:text-charcoal'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="pointer-events-none absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-concrete" strokeWidth={1.5} />
          <input
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search by name, location, year…"
            aria-label="Search projects"
            className="w-full border-b border-charcoal/20 bg-transparent py-2 pl-7 pr-7 text-sm text-charcoal placeholder:text-concrete focus:border-oxide focus:outline-none"
          />
          {query && (
            <button
              onClick={() => onQueryChange('')}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-concrete hover:text-charcoal"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" strokeWidth={1.5} />
            </button>
          )}
        </div>
      </div>

      <p className="font-mono text-[11px] uppercase tracking-widest2 text-concrete">
        {resultCount} {resultCount === 1 ? 'Project' : 'Projects'}
      </p>
    </div>
  )
}
