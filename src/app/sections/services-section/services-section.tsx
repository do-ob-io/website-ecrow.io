import { SectionHeading, ServiceCard } from '@/components';

/**
 * Services section showcasing SaaS and gaming products.
 *
 * @returns The services section element.
 */
export function ServicesSection() {
  return (
    <section id="services" className="bg-background relative py-32">
      <div className="
        mx-auto max-w-7xl px-6
        lg:px-8
      ">
        <SectionHeading
          eyebrow="What We Build"
          title="Digital Products That Matter"
          subtitle="We specialize in creating innovative software, from enterprise SaaS platforms to engaging browser-based entertainment."
        />

        <div className="
          mt-20 grid gap-8
          md:grid-cols-2
        ">
          <ServiceCard
            title="SaaS Applications"
            description="Enterprise-grade web applications designed to streamline workflows, boost productivity, and scale with your business. Built with modern technologies and user-centric design principles."
            tags={[ 'Enterprise', 'Cloud-Native', 'Scalable' ]}
            illustration={
              <div className="relative">
                {/* Abstract SaaS illustration */}
                <div className="flex items-center gap-4">
                  <div className="
                    border-accent-primary/30 bg-accent-primary/10 h-20 w-32
                    rounded-lg border p-2
                  ">
                    <div className="bg-accent-primary/50 h-2 w-12 rounded-sm" />
                    <div className="mt-2 space-y-1">
                      <div className="
                        bg-accent-primary/30 h-1.5 w-full rounded-sm
                      " />
                      <div className="
                        bg-accent-primary/20 h-1.5 w-3/4 rounded-sm
                      " />
                      <div className="
                        bg-accent-primary/25 h-1.5 w-5/6 rounded-sm
                      " />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="
                      border-accent-secondary/30 bg-accent-secondary/10 size-8
                      rounded-lg border
                    " />
                    <div className="
                      border-accent-secondary/30 bg-accent-secondary/10 size-8
                      rounded-lg border
                    " />
                    <div className="
                      border-accent-secondary/30 bg-accent-secondary/10 size-8
                      rounded-lg border
                    " />
                  </div>
                </div>
                {/* Connection lines */}
                <svg
                  className="
                    text-accent-primary/30 absolute top-1/2 -right-8 h-8 w-16
                    -translate-y-1/2
                  "
                  viewBox="0 0 64 32"
                >
                  <path
                    d="M0 16h48m0 0l-8-8m8 8l-8 8"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
            }
          />

          <ServiceCard
            title="Browser Games"
            description="Immersive gaming experiences that run entirely in the browser. No downloads required. Just instant play with rich graphics, engaging mechanics, and social features."
            tags={[ 'Instant Play', 'Cross-Platform', 'Social' ]}
            illustration={
              <div className="relative">
                {/* Abstract game illustration */}
                <div className="grid grid-cols-3 gap-2">
                  { Array.from({ length: 9 }) .map((_, i) => (
                    <div
                      key={i}
                      className={`
                        size-8 rounded-sm transition-transform
                        hover:scale-110
                        ${
                    i % 3 === 1
                      ? 'bg-accent-tertiary/40'
                      : (i % 2 === 0
                        ? 'bg-accent-secondary/30'
                        : 'bg-accent-primary/30')
                    }
                      `}
                    />
                  ))}
                </div>
                {/* Game controller hint */}
                <div className="
                  bg-accent-tertiary/20 text-accent-tertiary absolute -right-4
                  -bottom-4 flex size-12 items-center justify-center
                  rounded-full
                ">
                  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                  </svg>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
