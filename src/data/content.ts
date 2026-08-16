import { Service, ProcessStep, Testimonial, Differentiator, InsightArticle } from '@/types'

export const services: Service[] = [
  {
    id: 's01',
    number: '01',
    title: 'General Contracting',
    description: 'Complete construction management and execution, from mobilisation to final handover.',
    details: ['Single point of accountability', 'Trade coordination & sequencing', 'Site management & safety'],
    icon: 'HardHat',
  },
  {
    id: 's02',
    number: '02',
    title: 'Civil Engineering',
    description: 'Infrastructure, structural, and civil engineering solutions built on rigorous analysis.',
    details: ['Structural design & review', 'Earthworks & drainage', 'Roads & site infrastructure'],
    icon: 'Compass',
  },
  {
    id: 's03',
    number: '03',
    title: 'Commercial Construction',
    description: 'Office buildings, retail spaces, mixed-use developments, and commercial facilities.',
    details: ['Core & shell delivery', 'Landlord & tenant fit-out', 'Façade engineering'],
    icon: 'Building2',
  },
  {
    id: 's04',
    number: '04',
    title: 'Residential Construction',
    description: 'Luxury residential developments and private projects, built to enduring standards.',
    details: ['Masterplanned communities', 'Private residences', 'Multi-family developments'],
    icon: 'Home',
  },
  {
    id: 's05',
    number: '05',
    title: 'Project Management',
    description: 'Planning, procurement, coordination, cost control, and execution from day one.',
    details: ['Programme & cost control', 'Procurement strategy', 'Risk & quality management'],
    icon: 'ClipboardList',
  },
  {
    id: 's06',
    number: '06',
    title: 'Renovation & Restoration',
    description: 'Modernisation and transformation of existing structures with structural care.',
    details: ['Structural assessment', 'Adaptive reuse', 'Heritage-sensitive upgrades'],
    icon: 'Hammer',
  },
]

export const processSteps: ProcessStep[] = [
  { number: '01', title: 'Planning', description: 'Feasibility, site analysis and programme strategy before ground is broken.' },
  { number: '02', title: 'Design Coordination', description: 'Working alongside architects and engineers to resolve buildability early.' },
  { number: '03', title: 'Procurement', description: 'Sourcing materials and specialist trades on cost, quality and lead time.' },
  { number: '04', title: 'Construction', description: 'Disciplined site execution under a single point of accountability.' },
  { number: '05', title: 'Quality Control', description: 'Structured inspection and sign-off at every stage of the build.' },
  { number: '06', title: 'Handover', description: 'Commissioning, documentation and a clean transition to occupancy.' },
]

export const differentiators: Differentiator[] = [
  { number: '01', title: 'Engineering Excellence', description: 'Technical expertise across complex structural and civil environments.' },
  { number: '02', title: 'Quality Control', description: 'Structured quality systems enforced at every stage of construction.' },
  { number: '03', title: 'Safety First', description: 'A disciplined safety culture backed by rigorous site management.' },
  { number: '04', title: 'Transparent Delivery', description: 'Clear communication, reporting, and accountability throughout.' },
  { number: '05', title: 'Cost Discipline', description: 'Careful planning and cost control from estimate to final account.' },
  { number: '06', title: 'Built to Last', description: 'Long-term thinking in materials, engineering and execution.' },
]

export const testimonials: Testimonial[] = [
  {
    id: 't01',
    quote: 'NOVA STRUCTURES transformed a complex project into a controlled, predictable and successful delivery. Their site discipline is unlike anything we\'ve worked with before.',
    name: 'Adaeze Nwosu',
    role: 'Development Director',
    company: 'Meridian Capital Partners',
    project: 'The Meridian Tower',
  },
  {
    id: 't02',
    quote: 'From the first site visit to final handover, communication was constant and precise. We always knew exactly where the programme stood.',
    name: 'Kwame Asante',
    role: 'Managing Partner',
    company: 'Vertex Freight Group',
    project: 'Vertex Logistics Hub',
  },
  {
    id: 't03',
    quote: 'The quality of finish across 48 individual residences was consistent to the last unit. That level of discipline is rare at this scale.',
    name: 'Chioma Eze',
    role: 'Principal',
    company: 'Atlas Development Group',
    project: 'Atlas Residences',
  },
  {
    id: 't04',
    quote: 'Their engineering team solved a structural challenge we thought would delay us by months. Instead, we finished ahead of schedule.',
    name: 'James Odhiambo',
    role: 'Asset Manager',
    company: 'Summit Urban Partners',
    project: 'Summit Mixed-Use Development',
  },
]

export const clientLogos: string[] = ['MERIDIAN', 'AXIS', 'TERRAFORM', 'VANTAGE', 'ORBIT', 'HORIZON']

export const insights: InsightArticle[] = [
  {
    id: 'i01',
    category: 'Sustainability',
    date: 'Jul 2026',
    readingTime: '6 min read',
    title: 'The Future of Sustainable Construction',
    excerpt: 'How embodied carbon, material reuse and passive design are reshaping specification decisions across our active sites.',
    image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'i02',
    category: 'Technology',
    date: 'Jun 2026',
    readingTime: '5 min read',
    title: 'How Technology Is Changing Project Management',
    excerpt: 'Digital twins, real-time cost tracking and BIM coordination are compressing decision cycles on complex builds.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'i03',
    category: 'Engineering',
    date: 'Apr 2026',
    readingTime: '7 min read',
    title: 'Designing for Long-Term Performance',
    excerpt: 'Why we weigh lifecycle maintenance as heavily as upfront cost when specifying structural and envelope systems.',
    image: 'https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'i04',
    category: 'Cost Planning',
    date: 'Feb 2026',
    readingTime: '4 min read',
    title: 'Construction Cost Planning in 2026',
    excerpt: 'A practical look at how material volatility and labour markets are shaping estimates across our current portfolio.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'i05',
    category: 'Infrastructure',
    date: 'Dec 2025',
    readingTime: '6 min read',
    title: 'Building Resilient Infrastructure',
    excerpt: 'Lessons from the Coastal Infrastructure Project on designing for climate resilience without inflating cost.',
    image: 'https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&w=1200&q=80',
  },
]

export const companyStats = [
  { value: 25, suffix: '+', label: 'Years of Experience' },
  { value: 120, suffix: '+', label: 'Projects Completed' },
  { value: 2.4, suffix: 'M+', label: 'Square Metres Built', decimals: 1 },
  { value: 98, suffix: '%', label: 'On-Time Delivery' },
  { value: 14, suffix: '', label: 'Markets Served' },
]
