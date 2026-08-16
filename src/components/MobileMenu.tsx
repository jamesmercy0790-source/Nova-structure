import { Link } from 'react-router-dom'
import { X, ArrowUpRight } from 'lucide-react'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  items: { label: string; to: string }[]
}

export default function MobileMenu({ open, onClose, items }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-[60] bg-ink transition-opacity duration-500 ease-precise lg:hidden ${
        open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
    >
      <div className="container-nova flex h-full flex-col py-7">
        <div className="flex items-center justify-between">
          <span className="font-display text-lg text-paper">
            NOVA <span className="font-light">STRUCTURES</span>
          </span>
          <button onClick={onClose} aria-label="Close menu" className="text-paper">
            <X className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </div>

        <nav className="mt-16 flex flex-1 flex-col justify-center gap-2">
          {items.map((item, i) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={onClose}
              className={`group flex items-center justify-between border-b border-paper/10 py-5 transition-all duration-500 ease-precise ${
                open ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
              }`}
              style={{ transitionDelay: open ? `${i * 60 + 100}ms` : '0ms' }}
            >
              <span className="font-display text-4xl text-paper transition-colors group-hover:text-oxide xs:text-5xl">
                {item.label}
              </span>
              <ArrowUpRight className="h-6 w-6 text-paper/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-oxide" strokeWidth={1.25} />
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-4 border-t border-paper/10 pt-6 font-mono text-xs uppercase tracking-widest2 text-paper/50">
          <a href="tel:+18005550142" className="hover:text-paper">+1 (800) 555-0142</a>
          <a href="mailto:projects@novastructures.com" className="hover:text-paper">projects@novastructures.com</a>
        </div>
      </div>
    </div>
  )
}
