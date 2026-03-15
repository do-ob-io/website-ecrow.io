import { cn } from '@do-ob/core/web';

/**
 * Props for the ServiceCard component.
 */
export interface ServiceCardProps {
  /**
   * Title of the service.
   */
  readonly title: string;
  /**
   * Description of the service.
   */
  readonly description: string;
  /**
   * Visual illustration for the service.
   */
  readonly illustration: React.ReactNode;
  /**
   * Tags/labels for the service.
   */
  readonly tags?: string[];
  /**
   * Additional CSS classes.
   */
  readonly className?: string;
}

/**
 * Service card component for showcasing product offerings.
 *
 * @param props - The service card props.
 * @param props.title - Title of the service.
 * @param props.description - Description of the service.
 * @param props.illustration - Visual illustration for the service.
 * @param props.tags - Tags/labels for the service.
 * @param props.className - Additional CSS classes.
 * @returns The service card element.
 *
 * @example
 * ```tsx
 * <ServiceCard
 *   title="SaaS Applications"
 *   description="Enterprise-grade web applications."
 *   illustration={<AppIllustration />}
 *   tags={["Enterprise", "Cloud-Native"]}
 * />
 * ```
 */
export function ServiceCard({
  title,
  description,
  illustration,
  tags = [],
  className,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        `
          group border-surface-border bg-background-elevated hover-lift relative
          overflow-hidden rounded-3xl border transition-all duration-500
        `,
        className,
      )}
    >
      {/* Illustration area */}
      <div className="
        from-background-subtle to-background-elevated relative h-48
        overflow-hidden bg-linear-to-br
        md:h-56
      ">
        <div className="absolute inset-0 flex items-center justify-center">
          {illustration}
        </div>
        {/* Overlay gradient */}
        <div className="
          from-background-elevated absolute inset-0 bg-linear-to-t
          to-transparent
        " />
      </div>

      {/* Content */}
      <div className="relative p-8">
        {/* Tags */}
        {tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="
                  bg-surface-highlight text-accent-primary rounded-full px-3
                  py-1 font-mono text-xs tracking-wider uppercase
                "
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h3 className="font-display text-foreground mb-3 text-2xl font-bold">
          {title}
        </h3>
        <p className="text-foreground-muted leading-relaxed">{description}</p>
      </div>

      {/* Hover glow effect */}
      <div className="
        ring-accent-primary/50 absolute inset-0 rounded-3xl opacity-0 ring-1
        transition-opacity duration-500
        group-hover:opacity-100
      " />
    </article>
  );
}
