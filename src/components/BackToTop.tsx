import { ArrowUp } from 'lucide-react'
import { useScrollPosition } from '@/hooks/useScrollPosition'

export default function BackToTop() {
  const visible = useScrollPosition(800)

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center border border-charcoal/15 bg-paper text-charcoal shadow-lg transition-all duration-400 ease-precise hover:bg-charcoal hover:text-paper sm:bottom-8 sm:right-8 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ArrowUp className="h-4 w-4" strokeWidth={1.75} />
    </button>
  )
}
