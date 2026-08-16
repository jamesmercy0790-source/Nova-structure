import { useEffect, useRef, useState } from 'react'

export function useCountUp(target: number, duration = 1600, decimals = 0) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement | null>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setValue(target)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const startTime = performance.now()

            const step = (now: number) => {
              const progress = Math.min((now - startTime) / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setValue(Number((eased * target).toFixed(decimals)))
              if (progress < 1) requestAnimationFrame(step)
            }

            requestAnimationFrame(step)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration, decimals])

  return { ref, value }
}
