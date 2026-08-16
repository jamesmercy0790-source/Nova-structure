import { useCountUp } from '@/hooks/useCountUp'

interface StatCounterProps {
  value: number
  suffix?: string
  label: string
  decimals?: number
  light?: boolean
}

export default function StatCounter({ value, suffix = '', label, decimals = 0, light = false }: StatCounterProps) {
  const { ref, value: animated } = useCountUp(value, 1800, decimals)

  return (
    <div className="flex flex-col gap-2">
      <span
        ref={ref}
        className={`tabular font-display text-4xl tracking-tightest sm:text-5xl lg:text-6xl ${
          light ? 'text-paper' : 'text-charcoal'
        }`}
      >
        {decimals ? animated.toFixed(decimals) : Math.round(animated)}
        <span className="text-oxide">{suffix}</span>
      </span>
      <span className={`font-mono text-xs uppercase tracking-widest2 ${light ? 'text-stone/70' : 'text-concrete'}`}>
        {label}
      </span>
    </div>
  )
}
