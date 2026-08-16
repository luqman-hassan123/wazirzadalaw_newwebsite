import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Heart,
  Scale,
  Building2,
  Globe,
  FileCheck,
  Briefcase,
} from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const iconMap = {
  '/services/family-law': Heart,
  '/services/civil-law': Scale,
  '/services/corporate-commercial': Building2,
  '/services/immigration': Globe,
  '/services/attestation': FileCheck,
}

export default function ServiceCard({ title, description, path, index = 0 }) {
  const Icon = iconMap[path] || Briefcase

  return (
    <AnimatedSection delay={index * 0.1}>
      <Link
        to={path}
        className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-brand-cream-dark bg-brand-white p-8 shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-brand-gold/40 hover:shadow-card-hover"
      >
        <div className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold transition-transform duration-500 group-hover:scale-x-100" />

        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-navy text-brand-gold transition-colors duration-300 group-hover:bg-brand-gold group-hover:text-brand-navy-dark">
            <Icon className="h-5 w-5" />
          </div>
          <span className="rounded-full bg-brand-muted px-3 py-1 text-xs font-bold tracking-wider text-brand-gold-dark">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <h3 className="font-serif text-2xl text-brand-navy transition-colors group-hover:text-brand-gold-dark">
          {title}
        </h3>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-brand-slate">{description}</p>

        <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-brand-navy">
          <span className="transition-colors group-hover:text-brand-gold-dark">View Details</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-gold" />
        </div>
      </Link>
    </AnimatedSection>
  )
}
