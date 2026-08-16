import {
  PageHero,
  Container,
  ContentSection,
  CTA,
} from '../components/ui'
import { aboutContent } from '../data/content'

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" subtitle={aboutContent.intro} />
      <section className="py-16 md:py-24">
        <Container narrow>
          {aboutContent.sections.map((section, index) => (
            <ContentSection
              key={section.title}
              title={section.title}
              description={section.description}
              index={index}
            />
          ))}
        </Container>
      </section>
      <CTA label={aboutContent.cta.label} path={aboutContent.cta.path} />
    </>
  )
}
