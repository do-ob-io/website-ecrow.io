import { SectionHeading } from "@/components";

/**
 * About section with company information.
 *
 * @returns The about section element.
 */
export function AboutSection() {
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
