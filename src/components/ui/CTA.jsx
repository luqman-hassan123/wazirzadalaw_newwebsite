import Container from './Container'
import Button from './Button'
import AnimatedSection from './AnimatedSection'
import DecorativeBg from './DecorativeBg'

export default function CTA({ label, path, href, variant = 'dark' }) {
  const isDark = variant === 'dark'

  return (
    <section
      className={`relative overflow-hidden py-20 md:py-28 ${
        isDark ? 'gradient-hero' : 'gradient-section'
      }`}
    >
      {isDark && <DecorativeBg variant="hero" />}

      <Container className="relative">
        <AnimatedSection>
          <div
            className={`flex flex-col items-start justify-between gap-8 rounded-2xl border p-10 md:flex-row md:items-center md:p-14 ${
              isDark
                ? 'border-brand-gold/20 bg-brand-navy-light/40 glass-card'
                : 'border-brand-cream-dark bg-brand-white shadow-card'
            }`}
          >
            <h2
              className={`max-w-2xl font-serif text-3xl leading-tight md:text-4xl ${
                isDark ? 'text-brand-white' : 'text-brand-navy'
              }`}
            >
              {label}
            </h2>
            <Button
              to={path}
              href={href}
              variant={isDark ? 'primary' : 'navy'}
            >
              Get in Touch
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  )
}
