import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found — NOVA STRUCTURES'
  }, [])

  return (
    <div className="container-nova flex min-h-[70vh] flex-col items-start justify-center py-40">
      <p className="eyebrow mb-6">404</p>
      <h1 className="font-display text-4xl leading-tight tracking-tightest text-charcoal sm:text-5xl">
        This page doesn&rsquo;t exist.
      </h1>
      <p className="mt-4 max-w-md text-base text-concrete">
        The page you&rsquo;re looking for may have been moved or no longer exists.
      </p>
      <Link to="/" className="group mt-8 inline-flex items-center gap-2 btn-primary">
        Back to Home
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.75} />
      </Link>
    </div>
  )
}
