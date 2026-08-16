import {
  PageHero,
  Container,
  ContentSection,
  CTA,
  NoticeBox,
  ProcessFlow,
} from './index'

export default function ServicePageTemplate({
  title,
  intro,
  sections,
  cta,
  notice,
  processSteps,
}) {
  return (
    <>
      <PageHero title={title} subtitle={intro} />
      <section className="relative py-16 md:py-24">
        <Container narrow>
          <div className="space-y-6">
            {processSteps && <ProcessFlow steps={processSteps} />}
            {sections.map((section, index) => (
              <ContentSection
                key={section.title}
                title={section.title}
                description={section.description}
                index={index}
              />
            ))}
            {notice && <NoticeBox>{notice}</NoticeBox>}
          </div>
        </Container>
      </section>
      <CTA label={cta.label} path={cta.path} />
    </>
  )
}
