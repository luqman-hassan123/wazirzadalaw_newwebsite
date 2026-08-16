import { Container, PageHero, AnimatedSection } from '../components/ui'

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we handle your information when you contact our office."
        dark={false}
      />
      <section className="py-16 md:py-24">
        <Container narrow>
          <AnimatedSection className="prose prose-neutral max-w-none space-y-6 text-brand-gray">
            <p>
              When you submit an enquiry through this website or contact our office, we collect
              the information you provide — such as your name, phone number, email address and
              message — solely for the purpose of responding to your request for legal assistance
              or documentation services.
            </p>
            <p>
              We do not sell or share your personal information with third parties for marketing
              purposes. Information may be disclosed only where required by law or where necessary
              to progress your matter with your consent.
            </p>
            <p>
              If you have questions about how your information is handled, please contact our
              office directly.
            </p>
          </AnimatedSection>
        </Container>
      </section>
    </>
  )
}
