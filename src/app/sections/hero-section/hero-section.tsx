/**
 * Hero section with animated background and primary value proposition.
 *
 * @returns The hero section element.
 */
export function HeroSection() {
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
