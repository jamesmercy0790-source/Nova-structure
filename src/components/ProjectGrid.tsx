import { Project } from '@/types'
import ProjectCard from './ProjectCard'

interface ProjectGridProps {
  projects: Project[]
}

// Repeating pattern that keeps the grid editorial rather than uniform:
// large / small-small / medium-medium-medium / small-large ...
const sizeForIndex = (i: number): 'large' | 'medium' | 'small' => {
  const cycle = i % 5
  if (cycle === 0) return 'large'
  if (cycle === 3) return 'large'
  return 'medium'
}

const spanForIndex = (i: number): string => {
  const cycle = i % 5
  if (cycle === 0 || cycle === 3) return 'md:col-span-7'
  return 'md:col-span-5'
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="reveal is-visible flex flex-col items-center gap-3 border border-dashed border-concrete/30 py-24 text-center">
        <p className="font-display text-2xl text-charcoal">No projects match your search.</p>
        <p className="text-sm text-concrete">Try a different category or search term.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-12 md:gap-y-14">
      {projects.map((project, i) => (
        <div key={project.id} className={`sm:col-span-1 ${spanForIndex(i)}`}>
          <ProjectCard project={project} size={sizeForIndex(i)} index={i} />
        </div>
      ))}
    </div>
  )
}
