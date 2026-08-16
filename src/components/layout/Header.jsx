import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Scale } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '../../data/siteConfig'
import { mainNav } from '../../data/navigation'
import Container from '../ui/Container'

const navLinkClass = ({ isActive }) =>
  `relative text-xs font-bold uppercase tracking-[0.15em] transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand-gold after:transition-all hover:after:w-full`

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const onDarkHero = isHome && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-brand-cream-dark/80 bg-brand-cream/95 shadow-card backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="group flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-navy text-brand-gold shadow-card transition-all duration-300 group-hover:bg-brand-gold group-hover:text-brand-navy-dark group-hover:shadow-gold">
              <Scale className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <span
                className={`block font-serif text-lg transition-colors ${onDarkHero ? 'text-brand-white' : 'text-brand-navy'}`}
              >
                {siteConfig.shortName}
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">
                Law Firm
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {mainNav.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    type="button"
                    className={`flex items-center gap-1 text-xs font-bold uppercase tracking-[0.15em] transition-colors ${
                      onDarkHero
                        ? 'text-neutral-300 hover:text-brand-white'
                        : 'text-brand-slate hover:text-brand-navy'
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3 w-3 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full pt-4"
                      >
                        <div className="min-w-72 overflow-hidden rounded-xl border border-brand-cream-dark bg-brand-white py-2 shadow-card-hover">
                          {item.children.map((child, i) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className="block px-5 py-3.5 text-sm text-brand-slate transition-colors hover:bg-brand-muted hover:text-brand-navy"
                            >
                              <span className="mr-2 text-brand-gold-dark">
                                {String(i + 1).padStart(2, '0')}
                              </span>
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `${navLinkClass({ isActive })} ${
                      isActive
                        ? onDarkHero
                          ? 'text-brand-white after:w-full'
                          : 'text-brand-navy after:w-full'
                        : onDarkHero
                          ? 'text-neutral-300 hover:text-brand-white'
                          : 'text-brand-slate hover:text-brand-navy'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <Link
            to="/contact"
            className="hidden rounded-sm gradient-gold px-6 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-brand-navy-dark shadow-gold transition-all hover:brightness-110 lg:inline-block"
          >
            Contact Us
          </Link>

          <button
            type="button"
            className={`inline-flex items-center justify-center rounded-lg p-2 transition-colors lg:hidden ${
              onDarkHero
                ? 'text-brand-white hover:bg-white/10'
                : 'text-brand-navy hover:bg-brand-muted'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-brand-cream-dark bg-brand-cream lg:hidden"
          >
            <Container className="py-6">
              <nav className="flex flex-col gap-1">
                {mainNav.map((item) =>
                  item.children ? (
                    <div key={item.label} className="py-2">
                      <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-brand-gold-dark">
                        {item.label}
                      </p>
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-lg py-2.5 pl-3 text-sm text-brand-navy transition-colors hover:bg-brand-muted"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-lg py-3 text-sm font-bold uppercase tracking-wider text-brand-navy transition-colors hover:bg-brand-muted"
                    >
                      {item.label}
                    </Link>
                  ),
                )}
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 rounded-sm gradient-gold px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.15em] text-brand-navy-dark"
                >
                  Contact Us
                </Link>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
