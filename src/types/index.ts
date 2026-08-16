export type ProjectCategory =
  | 'Residential'
  | 'Commercial'
  | 'Industrial'
  | 'Infrastructure'
  | 'Hospitality'
  | 'Renovation'

export type ProjectStatus = 'Completed' | 'In Progress' | 'Planning'

export interface ProjectStat {
  label: string
  value: string
}

export interface Project {
  id: string
  slug: string
  name: string
  location: string
  category: ProjectCategory
  year: number
  status: ProjectStatus
  description: string
  overview: string
  challenge: string
  solution: string
  scope: string[]
  materials: string[]
  timeline: { phase: string; period: string }[]
  stats: ProjectStat[]
  value: string
  area: string
  duration: string
  client: string
  architect: string
  projectManager: string
  services: string[]
  image: string
  gallery: string[]
  featured?: boolean
}

export interface Service {
  id: string
  number: string
  title: string
  description: string
  details: string[]
  icon: string
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  company: string
  project: string
}

export interface Differentiator {
  number: string
  title: string
  description: string
}

export interface InsightArticle {
  id: string
  category: string
  date: string
  readingTime: string
  title: string
  excerpt: string
  image: string
}
