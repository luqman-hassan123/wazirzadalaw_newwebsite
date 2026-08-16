import { motion } from 'framer-motion'
import { Shield, Users, FileText, Globe } from 'lucide-react'
import {
  Container,
  Button,
  SectionHeading,
  ServiceCard,
  AnimatedSection,
  DecorativeBg,
} from '../components/ui'
import { siteConfig } from '../data/siteConfig'
import { homeServices, homeContent } from '../data/content'

const stats = [
  { value: '6+', label: 'Practice Areas' },
  { value: 'F-6/1', label: 'Islamabad Office' },
  { value: '24/7', label: 'WhatsApp Support' },
  { value: 'Global', label: 'Overseas Clients' },
]

const features = [
  {
    icon: Shield,
    title: 'Trusted Representation',
    text: 'Strong legal guidance with careful preparation for every matter.',
  },
  {
    icon: FileText,
    title: 'Documentation Focus',
    text: 'Precise paperwork, attestation and filing handled with attention to detail.',
  },
  {
    icon: Users,
    title: 'Client-First Approach',
    text: 'Clear communication so you always know the next step in your case.',
  },
  {
    icon: Globe,
    title: 'Overseas Assistance',
    text: 'Legal support for Pakistanis abroad through SPOA and remote coordination.',
  },
]

export default function HomePage() {
  const { hero, about, overseas } = homeContent

  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden gradient-hero pt-20 text-brand-white">
        <DecorativeBg variant="hero" />

        <Container className="relative py-20 md:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                {siteConfig.name}
              </motion.p>

              <div className="max-w-xl">
                {hero.lines.map((line, index) => (
                  <motion.h1
                    key={line}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.1 + index * 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`font-serif leading-tight ${
                      index === 0
                        ? 'text-4xl md:text-5xl lg:text-6xl text-brand-white'
                        : 'text-3xl text-neutral-300 md:text-4xl lg:text-5xl'
                    }`}
                  >
                    {line}
                  </motion.h1>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 max-w-lg text-lg leading-relaxed text-neutral-300"
              >
                {hero.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Button to={hero.cta.path} variant="primary">
                  {hero.cta.label}
                </Button>
                <Button to="/services/family-law" variant="ghost">
                  Our Services
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl bg-brand-gold/10 blur-2xl" />
                <div className="relative rounded-2xl border border-brand-gold/20 bg-brand-navy-light/60 p-10 glass-card">
                  <div className="gold-line mb-8" />
                  <p className="font-serif text-2xl leading-snug text-brand-white">
                    &ldquo;A law firm that understands the matter behind the paperwork.&rdquo;
                  </p>
                  <p className="mt-6 text-sm leading-relaxed text-neutral-400">
                    Practical legal assistance with careful documentation and clear communication.
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {stats.slice(0, 2).map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-lg border border-brand-gold/15 bg-brand-navy/40 p-4"
                      >
                        <p className="font-serif text-2xl text-brand-gold">{stat.value}</p>
                        <p className="mt-1 text-xs text-neutral-400">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>

        <div className="absolute inset-x-0 bottom-0 border-t border-brand-gold/10 bg-brand-navy-dark/80 backdrop-blur-sm">
          <Container className="py-6">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="text-center md:text-left"
                >
                  <p className="font-serif text-2xl text-brand-gold md:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-neutral-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </Container>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <DecorativeBg variant="light" />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <SectionHeading title={about.heading} description={about.text} />
            <AnimatedSection className="grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border border-brand-cream-dark bg-brand-white p-6 shadow-card transition-all hover:border-brand-gold/30 hover:shadow-card-hover"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-navy text-brand-gold">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg text-brand-navy">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-slate">{feature.text}</p>
                </div>
              ))}
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="relative gradient-section py-20 md:py-28">
        <DecorativeBg variant="light" />
        <Container className="relative">
          <SectionHeading
            eyebrow="Our Services"
            title="Legal expertise across key practice areas"
            description="Comprehensive legal support tailored to your unique situation — from family matters to corporate compliance."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((service, index) => (
              <ServiceCard key={service.path} {...service} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-2xl gradient-hero p-10 md:p-16">
              <DecorativeBg variant="hero" />
              <div className="relative grid items-center gap-10 md:grid-cols-2">
                <div>
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
                    For Overseas Pakistanis
                  </p>
                  <div className="gold-line mb-6" />
                  <p className="text-lg leading-relaxed text-neutral-300">{overseas.text}</p>
                </div>
                <div className="md:text-right">
                  <Button to={overseas.cta.path} variant="primary">
                    {overseas.cta.label}
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  )
}
