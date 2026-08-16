interface ClientsStripProps {
  clients: string[]
}

export default function ClientsStrip({ clients }: ClientsStripProps) {
  return (
    <div className="border-y border-charcoal/10 py-10">
      <div className="container-nova">
        <p className="mb-8 font-mono text-[11px] uppercase tracking-widest2 text-concrete">
          Trusted by developers and institutions across the region
        </p>
        <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
          {clients.map((name) => (
            <span
              key={name}
              className="font-display text-xl tracking-wide text-charcoal/30 transition-colors duration-300 hover:text-charcoal sm:text-2xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
