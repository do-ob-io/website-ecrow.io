import { SectionHeading, FeatureCard } from '@/components';

/**
 * Feature data for the features section.
 */
const features = [
  {
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Lightning Fast',
    description: 'Optimized performance with sub-second load times and smooth, responsive interactions across all devices.',
    accent: 'primary' as const,
  },
  {
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Enterprise Security',
    description: 'Bank-grade encryption, SOC 2 compliance, and comprehensive security measures to protect your data.',
    accent: 'secondary' as const,
  },
  {
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: 'Flexible Integration',
    description: 'RESTful APIs, webhooks, and native integrations with popular tools to fit seamlessly into your workflow.',
    accent: 'tertiary' as const,
  },
  {
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Global Scale',
    description: 'Distributed infrastructure across multiple regions ensures low latency and high availability worldwide.',
    accent: 'primary' as const,
  },
  {
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Privacy First',
    description: 'GDPR compliant with transparent data practices. Your data belongs to you, always.',
    accent: 'secondary' as const,
  },
];

/**
 * Features section highlighting technical capabilities.
 *
 * @returns The features section element.
 */
export function FeaturesSection() {
  return (
    <section id="features" className="bg-background-elevated relative py-32">
      {/* Background texture */}
      <div className="bg-grid-accent absolute inset-0 opacity-30" />

      <div className="
        relative mx-auto max-w-7xl px-6
        lg:px-8
      ">
        <SectionHeading
          eyebrow="How we do it"
          title="Built for Excellence"
          subtitle="Every product we create is engineered with the highest standards of quality, security, and performance."
        />

        <div className="
          mt-20 grid gap-6
          sm:grid-cols-2
          lg:grid-cols-3
        ">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="animate-scale-in opacity-0"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
