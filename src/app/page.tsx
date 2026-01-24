import {
  Navigation,
  Footer,
  SectionHeading,
  FeatureCard,
  ServiceCard,
} from "@/components";

/**
 * Hero section with animated background and primary value proposition.
 */
function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Gradient orbs */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent-primary/20 blur-[120px] animate-glow" />
      <div className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-accent-secondary/20 blur-[100px] animate-glow delay-500" />
      <div className="absolute right-1/3 top-1/3 h-64 w-64 rounded-full bg-accent-tertiary/15 blur-[80px] animate-glow delay-700" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-24 pb-16 lg:px-8">
        {/* Badge */}
        <div className="mb-8 animate-slide-up opacity-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/10 px-4 py-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-accent-primary animate-pulse" />
            <span className="font-medium text-accent-primary">Now Launching 2026</span>
          </span>
        </div>

        {/* Main headline */}
        <h1 className="animate-slide-up opacity-0 delay-100 text-center font-display text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl xl:text-8xl">
          <span className="block">Crafting Digital</span>
          <span className="block text-gradient-primary">Experiences</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-slide-up opacity-0 delay-200 mt-8 max-w-2xl text-center text-lg leading-relaxed text-foreground-muted md:text-xl">
          From powerful SaaS applications to captivating browser-based games,
          we build software that empowers users and pushes the boundaries of
          what&apos;s possible on the web.
        </p>

        {/* Scroll link */}
        <div className="animate-slide-up opacity-0 delay-300 mt-12">
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-foreground-muted transition-colors hover:text-accent-primary"
          >
            <span className="font-medium">Discover What We Do</span>
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in opacity-0 delay-600 absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-foreground-subtle">
            <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
            <div className="h-12 w-px bg-linear-to-brom-foreground-subtle to-transparent" />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent" />
    </section>
  );
}

/**
 * Services section showcasing SaaS and gaming products.
 */
function ServicesSection() {
  return (
    <section id="services" className="relative bg-background py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Build"
          title="Digital Products That Matter"
          subtitle="We specialize in creating innovative software, from enterprise SaaS platforms to engaging browser-based entertainment."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          <ServiceCard
            title="SaaS Applications"
            description="Enterprise-grade web applications designed to streamline workflows, boost productivity, and scale with your business. Built with modern technologies and user-centric design principles."
            tags={["Enterprise", "Cloud-Native", "Scalable"]}
            illustration={
              <div className="relative">
                {/* Abstract SaaS illustration */}
                <div className="flex items-center gap-4">
                  <div className="h-20 w-32 rounded-lg border border-accent-primary/30 bg-accent-primary/10 p-2">
                    <div className="h-2 w-12 rounded bg-accent-primary/50" />
                    <div className="mt-2 space-y-1">
                      <div className="h-1.5 w-full rounded bg-accent-primary/30" />
                      <div className="h-1.5 w-3/4 rounded bg-accent-primary/20" />
                      <div className="h-1.5 w-5/6 rounded bg-accent-primary/25" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="h-8 w-8 rounded-lg border border-accent-secondary/30 bg-accent-secondary/10" />
                    <div className="h-8 w-8 rounded-lg border border-accent-secondary/30 bg-accent-secondary/10" />
                    <div className="h-8 w-8 rounded-lg border border-accent-secondary/30 bg-accent-secondary/10" />
                  </div>
                </div>
                {/* Connection lines */}
                <svg
                  className="absolute -right-8 top-1/2 h-8 w-16 -translate-y-1/2 text-accent-primary/30"
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
            tags={["Instant Play", "Cross-Platform", "Social"]}
            illustration={
              <div className="relative">
                {/* Abstract game illustration */}
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-8 w-8 rounded transition-transform hover:scale-110 ${
                        i % 3 === 1
                          ? "bg-accent-tertiary/40"
                          : i % 2 === 0
                          ? "bg-accent-secondary/30"
                          : "bg-accent-primary/30"
                      }`}
                    />
                  ))}
                </div>
                {/* Game controller hint */}
                <div className="absolute -bottom-4 -right-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-tertiary/20 text-accent-tertiary">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
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

/**
 * Features section highlighting technical capabilities.
 */
function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Lightning Fast",
      description: "Optimized performance with sub-second load times and smooth, responsive interactions across all devices.",
      accent: "primary" as const,
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Enterprise Security",
      description: "Bank-grade encryption, SOC 2 compliance, and comprehensive security measures to protect your data.",
      accent: "secondary" as const,
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: "Flexible Integration",
      description: "RESTful APIs, webhooks, and native integrations with popular tools to fit seamlessly into your workflow.",
      accent: "tertiary" as const,
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Global Scale",
      description: "Distributed infrastructure across multiple regions ensures low latency and high availability worldwide.",
      accent: "primary" as const,
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Privacy First",
      description: "GDPR compliant with transparent data practices. Your data belongs to you, always.",
      accent: "secondary" as const,
    },
  ];

  return (
    <section id="features" className="relative bg-background-elevated py-32">
      {/* Background texture */}
      <div className="absolute inset-0 bg-grid-accent opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="How we do it"
          title="Built for Excellence"
          subtitle="Every product we create is engineered with the highest standards of quality, security, and performance."
        />

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="animate-scale-in opacity-0"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * About section with company information.
 */
function AboutSection() {
  return (
    <section id="about" className="relative bg-background py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Visual element */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-lg">
              {/* Decorative background */}
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-accent-primary/20 via-accent-secondary/10 to-accent-tertiary/20 blur-3xl" />

              {/* Main visual */}
              <div className="relative h-full w-full rounded-3xl border border-surface-border bg-background-elevated p-8">
                {/* Code-style visual */}
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-accent-tertiary">const</span>
                    <span className="text-foreground">eCrow</span>
                    <span className="text-foreground-subtle">=</span>
                    <span className="text-accent-primary">{"{"}</span>
                  </div>
                  <div className="pl-4 space-y-2">
                    <div>
                      <span className="text-accent-secondary">mission</span>
                      <span className="text-foreground-subtle">:</span>
                      <span className="text-accent-primary">{" \"Build digital excellence\""}</span>
                      <span className="text-foreground-subtle">,</span>
                    </div>
                    <div>
                      <span className="text-accent-secondary">focus</span>
                      <span className="text-foreground-subtle">:</span>
                      <span className="text-foreground">{" [\"SaaS\", \"Games\"]"}</span>
                      <span className="text-foreground-subtle">,</span>
                    </div>
                    <div>
                      <span className="text-accent-secondary">values</span>
                      <span className="text-foreground-subtle">:</span>
                      <span className="text-foreground">{" {"}</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-accent-secondary">innovation</span>
                      <span className="text-foreground-subtle">:</span>
                      <span className="text-accent-tertiary">{" true"}</span>
                      <span className="text-foreground-subtle">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-accent-secondary">quality</span>
                      <span className="text-foreground-subtle">:</span>
                      <span className="text-accent-tertiary">{" true"}</span>
                      <span className="text-foreground-subtle">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-accent-secondary">userFirst</span>
                      <span className="text-foreground-subtle">:</span>
                      <span className="text-accent-tertiary">{" true"}</span>
                    </div>
                    <div>
                      <span className="text-foreground">{"}"}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-accent-primary">{"}"}</span>
                    <span className="text-foreground-subtle">;</span>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-accent-primary/20 blur-xl" />
                <div className="absolute -top-4 -left-4 h-16 w-16 rounded-full bg-accent-secondary/20 blur-xl" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="About eCrow"
              title="Pioneering Digital Innovation"
              subtitle="eCrow Ltd. is a software company dedicated to creating exceptional web-based products that make a difference in people's lives."
              align="left"
            />

            <div className="mt-10 space-y-6 text-foreground-muted">
              <p>
                Founded with a vision to push the boundaries of web technology, we develop 
                and operate software products across multiple domains. Our portfolio includes 
                enterprise SaaS applications that streamline business operations and 
                browser-based games that deliver joy to millions.
              </p>
              <p>
                Each product may be marketed under its own distinct brand name, but every one 
                is built with the same commitment to quality, performance, and user experience 
                that defines eCrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Contact section with company information.
 */
function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-background-elevated py-32">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-primary/10 blur-[150px]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Connect"
          subtitle="Interested in learning more about eCrow and our software products? We'd love to hear from you."
        />

        {/* Contact information */}
        <div className="mt-12 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12">
          <div className="flex items-center gap-3 text-foreground-muted">
            <svg className="h-5 w-5 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>contact@ecrow.io</span>
          </div>
          <a
            href="https://github.com/do-ob-io"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-foreground-muted transition-colors hover:text-accent-primary"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span>github.com/do-ob-io</span>
          </a>
        </div>

        {/* Company note */}
        <p className="mt-16 text-sm text-foreground-subtle">
          eCrow Ltd. is a software development company focused on creating innovative digital experiences.
        </p>
      </div>
    </section>
  );
}

/**
 * Home page component for the eCrow website.
 */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-noise">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
