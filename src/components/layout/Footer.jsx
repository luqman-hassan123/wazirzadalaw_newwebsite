import { Link } from 'react-router-dom'
import { Phone, MapPin, Scale } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig'
import { footerNav } from '../../data/navigation'
import Container from '../ui/Container'
import DecorativeBg from '../ui/DecorativeBg'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden gradient-hero text-brand-white">
      <DecorativeBg variant="hero" />

      <Container className="relative py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gold text-brand-navy-dark">
                <Scale className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-2xl">{siteConfig.name}</h3>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-400">
              Trusted legal guidance for individuals, families, businesses and clients living abroad.
            </p>
            <div className="mt-6 space-y-4">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-3 text-sm text-neutral-300 transition-colors hover:text-brand-gold"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-navy-light/80">
                  <Phone className="h-4 w-4 text-brand-gold" />
                </span>
                {siteConfig.phone}
              </a>
              <div className="flex items-start gap-3 text-sm text-neutral-300">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-navy-light/80">
                  <MapPin className="h-4 w-4 text-brand-gold" />
                </span>
                <span>
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                </span>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
              Quick Links
            </p>
            <nav className="flex flex-col gap-3">
              {footerNav.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm text-neutral-300 transition-colors hover:text-brand-gold"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
              WhatsApp
            </p>
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-sm gradient-gold px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-brand-navy-dark shadow-gold transition-all hover:brightness-110"
            >
              Message Us
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-brand-gold/20 pt-8 text-center text-xs text-neutral-500">
          {siteConfig.footerLine}
        </div>
      </Container>
    </footer>
  )
}
