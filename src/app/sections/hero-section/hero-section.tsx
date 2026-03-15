/**
 * Hero section with animated background and primary value proposition.
 *
 * @returns The hero section element.
 */
export function HeroSection() {
  return (
    <section className="bg-background relative min-h-screen overflow-hidden">
      {/* Animated background elements */}
      <div className="bg-grid absolute inset-0 opacity-50" />

      {/* Gradient orbs */}
      <div className="
        bg-accent-primary/20 animate-glow absolute top-1/4 left-1/4 size-96
        rounded-full blur-[120px]
      " />
      <div className="
        bg-accent-secondary/20 animate-glow absolute right-1/4 bottom-1/4
        size-80 rounded-full blur-[100px] delay-500
      " />
      <div className="
        bg-accent-tertiary/15 animate-glow absolute top-1/3 right-1/3 size-64
        rounded-full blur-[80px] delay-700
      " />

      {/* Content */}
      <div className="
        relative mx-auto flex min-h-screen max-w-7xl flex-col items-center
        justify-center px-6 pt-24 pb-16
        lg:px-8
      ">
        {/* Badge */}
        <div className="animate-slide-up mb-8 opacity-0">
          <span className="
            border-accent-primary/30 bg-accent-primary/10 inline-flex
            items-center gap-2 rounded-full border px-4 py-2 text-sm
          ">
            <span className="
              bg-accent-primary size-2 animate-pulse rounded-full
            " />
            <span className="text-accent-primary font-medium">Now Launching 2026</span>
          </span>
        </div>

        {/* Main headline */}
        <h1 className="
          animate-slide-up font-display text-foreground text-center
          text-5xl/tight font-bold tracking-tight opacity-0 delay-100
          md:text-6xl
          lg:text-7xl
          xl:text-8xl
        ">
          <span className="block">Crafting Digital</span>
          <span className="text-gradient-primary block">Experiences</span>
        </h1>

        {/* Subheadline */}
        <p className="
          animate-slide-up text-foreground-muted mt-8 max-w-2xl text-center
          text-lg/relaxed opacity-0 delay-200
          md:text-xl
        ">
          From powerful SaaS applications to captivating browser-based games,
          we build software that empowers users and pushes the boundaries of
          what&apos;s possible on the web.
        </p>

        {/* Scroll link */}
        <div className="animate-slide-up mt-12 opacity-0 delay-300">
          <a
            href="#services"
            className="
              text-foreground-muted
              hover:text-accent-primary
              inline-flex items-center gap-2 transition-colors
            "
          >
            <span className="font-medium">Discover What We Do</span>
            <svg
              className="size-5"
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
        <div className="
          animate-fade-in absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0
          delay-600
        ">
          <div className="
            text-foreground-subtle flex flex-col items-center gap-2
          ">
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <div className="
              bg-linear-to-brom-foreground-subtle h-12 w-px to-transparent
            " />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="
        from-background absolute inset-x-0 bottom-0 h-32 bg-linear-to-t
        to-transparent
      " />
    </section>
  );
}
