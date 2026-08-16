import AnimatedSection from './AnimatedSection'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
  light = false,
}) {
  const alignClass =
    align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-3xl'

  const eyebrowColor = dark
    ? 'text-brand-gold'
    : light
      ? 'text-brand-gold-light'
      : 'text-brand-gold-dark'

  const titleColor = dark || light ? 'text-brand-white' : 'text-brand-navy'
  const descColor = dark
    ? 'text-neutral-300'
    : light
      ? 'text-neutral-300'
      : 'text-brand-slate'

  return (
    <AnimatedSection className={`mb-12 lg:mb-16 ${alignClass}`}>
      {eyebrow && (
        <p className={`mb-4 text-xs font-bold uppercase tracking-[0.25em] ${eyebrowColor}`}>
          {eyebrow}
        </p>
      )}
      <div className={`gold-line mb-6 ${align === 'center' ? 'mx-auto' : ''}`} />
      <h2 className={`font-serif text-3xl leading-tight md:text-4xl lg:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-relaxed md:text-lg ${descColor}`}>{description}</p>
      )}
    </AnimatedSection>
  )
}
