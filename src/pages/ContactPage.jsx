import { Phone, MapPin, MessageCircle, Clock } from 'lucide-react'
import {
  PageHero,
  Container,
  ContactForm,
  AnimatedSection,
} from '../components/ui'
import { siteConfig } from '../data/siteConfig'
import { contactContent } from '../data/content'

const contactCards = [
  {
    icon: MapPin,
    title: 'Office',
    content: (
      <>
        {siteConfig.address.line1}
        <br />
        {siteConfig.address.line2}
      </>
    ),
  },
  {
    icon: Phone,
    title: 'Call / WhatsApp',
    content: (
      <a
        href={siteConfig.phoneHref}
        className="text-lg font-medium text-brand-navy transition-colors hover:text-brand-gold-dark"
      >
        {siteConfig.phone}
      </a>
    ),
  },
  {
    icon: Clock,
    title: 'Response Time',
    content: 'We respond to enquiries promptly via phone and WhatsApp.',
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" subtitle={contactContent.intro} />
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <AnimatedSection>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold-dark">
                  Get in Touch
                </p>
                <div className="gold-line mb-8" />
              </AnimatedSection>

              <div className="space-y-5">
                {contactCards.map((card, index) => (
                  <AnimatedSection key={card.title} delay={index * 0.1}>
                    <div className="flex gap-5 rounded-xl border border-brand-cream-dark bg-brand-white p-6 shadow-card transition-all hover:border-brand-gold/30 hover:shadow-card-hover">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-navy text-brand-gold">
                        <card.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-brand-slate">
                          {card.title}
                        </h3>
                        <div className="mt-2 text-brand-navy">{card.content}</div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}

                <AnimatedSection delay={0.4}>
                  <a
                    href={siteConfig.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-sm gradient-gold px-7 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-brand-navy-dark shadow-gold transition-all hover:brightness-110"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Us
                  </a>
                </AnimatedSection>
              </div>
            </div>

            <div>
              <AnimatedSection>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold-dark">
                  Online Enquiry
                </p>
                <div className="gold-line mb-8" />
              </AnimatedSection>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
