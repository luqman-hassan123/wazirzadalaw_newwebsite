import AnimatedSection from './AnimatedSection'

export default function ContentSection({ title, description, index = 0 }) {
  return (
    <AnimatedSection delay={index * 0.08}>
      <div className="group rounded-xl border border-brand-cream-dark bg-brand-white p-8 shadow-card transition-all duration-300 hover:border-brand-gold/30 hover:shadow-card-hover md:p-10">
        <div className="grid gap-6 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-gold/15 text-xs font-bold text-brand-gold-dark">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="h-px flex-1 bg-brand-cream-dark" />
            </div>
            <h3 className="font-serif text-2xl text-brand-navy md:text-3xl">{title}</h3>
          </div>
          <div className="md:col-span-8">
            <p className="text-base leading-relaxed text-brand-slate md:text-lg">{description}</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
