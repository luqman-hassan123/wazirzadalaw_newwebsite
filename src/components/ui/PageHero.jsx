import { motion } from 'framer-motion'
import Container from './Container'
import DecorativeBg from './DecorativeBg'

export default function PageHero({ title, subtitle, dark = true }) {
  return (
    <section
      className={`relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 ${
        dark ? 'gradient-hero text-brand-white' : 'gradient-section text-brand-navy'
      }`}
    >
      {dark && <DecorativeBg variant="hero" />}

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="gold-line mb-8" />
          <h1 className="font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p
              className={`mt-6 max-w-3xl text-lg leading-relaxed md:text-xl ${
                dark ? 'text-neutral-300' : 'text-brand-slate'
              }`}
            >
              {subtitle}
            </p>
          )}
        </motion.div>
      </Container>
    </section>
  )
}
