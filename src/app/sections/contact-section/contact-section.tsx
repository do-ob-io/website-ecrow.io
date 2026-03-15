import { SectionHeading } from '@/components';

/**
 * Contact section with company information.
 *
 * @returns The contact section element.
 */
export function ContactSection() {
  return (
    <section id="contact" className="
      bg-background-elevated relative overflow-hidden py-32
    ">
      {/* Background effects */}
      <div className="bg-grid absolute inset-0 opacity-20" />
      <div className="
        bg-accent-primary/10 absolute top-1/2 left-1/2 h-150 w-150
        -translate-1/2 rounded-full blur-[150px]
      " />

      <div className="
        relative mx-auto max-w-4xl px-6 text-center
        lg:px-8
      ">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Connect"
          subtitle="Interested in learning more about eCrow and our software products? We'd love to hear from you."
        />

        {/* Contact information */}
        <div className="
          mt-12 flex flex-col items-center justify-center gap-8
          sm:flex-row sm:gap-12
        ">
          <div className="text-foreground-muted flex items-center gap-3">
            <svg className="text-accent-primary size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>contact@ecrow.io</span>
          </div>
          <a
            href="https://github.com/do-ob-io"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-foreground-muted
              hover:text-accent-primary
              flex items-center gap-3 transition-colors
            "
          >
            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span>github.com/do-ob-io</span>
          </a>
        </div>

        {/* Company note */}
        <p className="text-foreground-subtle mt-16 text-sm">
          eCrow Ltd. is a software development company focused on creating innovative digital experiences.
        </p>
      </div>
    </section>
  );
}
