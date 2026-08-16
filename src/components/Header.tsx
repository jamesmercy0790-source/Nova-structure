import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Phone } from 'lucide-react'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import MobileMenu from './MobileMenu'

const navItems = [
  { label: 'Projects', to: '/projects' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Expertise', to: '/#expertise' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const scrolled = useScrollPosition(24)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const solid = scrolled || !isHome || menuOpen

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-precise ${
          solid ? 'bg-paper/95 shadow-[0_1px_0_0_rgba(28,29,27,0.08)] backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="container-nova">
          <div
            className={`flex items-center justify-between transition-all duration-500 ease-precise ${
              solid ? 'py-4' : 'py-7'
            }`}
          >
            <Link to="/" className="group flex items-center gap-2.5" aria-label="NOVA STRUCTURES home">
              <span
                className={`h-2.5 w-2.5 rounded-none bg-oxide transition-transform duration-500 group-hover:rotate-45`}
              />
              <span
                className={`font-display text-lg tracking-tight sm:text-xl ${
                  solid ? 'text-charcoal' : 'text-paper'
                }`}
              >
                NOVA <span className="font-light">STRUCTURES</span>
              </span>
            </Link>

            <nav className="hidden items-center gap-9 lg:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    `link-underline font-mono text-[11px] uppercase tracking-widest2 transition-colors duration-300 ${
                      solid ? 'text-charcoal/80 hover:text-oxide' : 'text-paper/85 hover:text-paper'
                    } ${isActive ? (solid ? 'text-oxide' : 'text-paper') : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden items-center gap-6 lg:flex">
              <a
                href="tel:+18005550142"
                className={`flex items-center gap-2 font-mono text-xs tracking-wide transition-colors ${
                  solid ? 'text-charcoal/70 hover:text-oxide' : 'text-paper/80 hover:text-paper'
                }`}
              >
                <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
                +1 (800) 555-0142
              </a>
              <Link
                to="/contact"
                className={solid ? 'btn-primary' : 'btn-ghost-light'}
              >
                Start a Project
              </Link>
            </div>

            <button
              onClick={() => setMenuOpen(true)}
              className={`flex items-center gap-2 lg:hidden ${solid ? 'text-charcoal' : 'text-paper'}`}
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <span className="font-mono text-[11px] uppercase tracking-widest2">Menu</span>
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} items={navItems} />
    </>
  )
}
