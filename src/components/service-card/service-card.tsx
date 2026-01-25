import { cn } from "@do-ob/core/web";

/**
 * Props for the ServiceCard component.
 */
export interface ServiceCardProps {
  /**
   * Title of the service.
   */
  title: string;
  /**
   * Description of the service.
   */
  description: string;
  /**
   * Visual illustration for the service.
   */
  illustration: React.ReactNode;
  /**
   * Tags/labels for the service.
   */
  tags?: string[];
  /**
   * Additional CSS classes.
   */
  className?: string;
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
        "group relative overflow-hidden rounded-3xl border border-surface-border bg-background-elevated transition-all duration-500 hover-lift",
        className
      )}
    >
      {/* Illustration area */}
      <div className="relative h-48 overflow-hidden bg-linear-to-br from-background-subtle to-background-elevated md:h-56">
        <div className="absolute inset-0 flex items-center justify-center">
          {illustration}
        </div>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-background-elevated to-transparent" />
      </div>

      {/* Content */}
      <div className="relative p-8">
        {/* Tags */}
        {tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-surface-highlight px-3 py-1 font-mono text-xs uppercase tracking-wider text-accent-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h3 className="mb-3 font-display text-2xl font-bold text-foreground">
          {title}
        </h3>
        <p className="leading-relaxed text-foreground-muted">{description}</p>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 ring-1 ring-accent-primary/50 transition-opacity duration-500 group-hover:opacity-100" />
    </article>
  );
}
