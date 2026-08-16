import { Link } from 'react-router-dom'
import { Linkedin, Instagram, Facebook, Youtube } from 'lucide-react'

const navColumns = [
  {
    title: 'Company',
    links: [
      { label: 'Projects', to: '/projects' },
      { label: 'Services', to: '/services' },
      { label: 'About', to: '/about' },
      { label: 'Expertise', to: '/#expertise' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Insights', to: '/insights' },
      { label: 'Contact', to: '/contact' },
    ],
  },
]

const social = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com' },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="container-nova py-20">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="font-display text-2xl text-paper">
              NOVA <span className="font-light">STRUCTURES</span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone/60">Building What Lasts.</p>

            <div className="mt-8 flex gap-3">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center border border-paper/15 text-paper/70 transition-colors hover:border-oxide hover:text-oxide"
                >
                  <s.icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-4">
            {navColumns.map((col) => (
              <div key={col.title}>
                <p className="font-mono text-[11px] uppercase tracking-widest2 text-stone/40">{col.title}</p>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className="link-underline text-sm text-stone/80 hover:text-paper">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-widest2 text-stone/40">Office</p>
            <address className="mt-4 flex flex-col gap-1.5 text-sm not-italic text-stone/80">
              <span>14 Ironworks Way</span>
              <span>Lagos, Nigeria</span>
              <a href="tel:+18005550142" className="mt-2 hover:text-paper">+1 (800) 555-0142</a>
              <a href="mailto:projects@novastructures.com" className="hover:text-paper">projects@novastructures.com</a>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-paper/10 pt-8 text-xs text-stone/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} NOVA STRUCTURES. All rights reserved. Demo content for portfolio purposes.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-stone/80">Privacy Policy</a>
            <a href="#" className="hover:text-stone/80">Terms</a>
            <a href="#" className="hover:text-stone/80">Cookies</a>
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-t border-paper/10 py-4">
        <p className="select-none whitespace-nowrap text-center font-display text-[22vw] leading-none text-paper/[0.04] sm:text-[14vw]">
          NOVA STRUCTURES
        </p>
      </div>
    </footer>
  )
}
