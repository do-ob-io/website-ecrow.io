import { cn } from '@do-ob/core/web';

/**
 * Props for the FeatureCard component.
 */
export interface FeatureCardProps {
  /**
   * Icon rendered at the top of the card.
   */
  readonly icon: React.ReactNode;
  /**
   * Title of the feature.
   */
  readonly title: string;
  /**
   * Description of the feature.
   */
  readonly description: string;
  /**
   * Optional accent color for the icon background.
   * @default "primary"
   */
  readonly accent?: 'primary' | 'secondary' | 'tertiary';
  /**
   * Additional CSS classes.
   */
  readonly className?: string;
}

const accentStyles = {
  primary: 'from-accent-primary/20 to-accent-primary/5 text-accent-primary',
  secondary: 'from-accent-secondary/20 to-accent-secondary/5 text-accent-secondary',
  tertiary: 'from-accent-tertiary/20 to-accent-tertiary/5 text-accent-tertiary',
};

/**
 * Feature card component for showcasing capabilities.
 *
 * @param props - The feature card props.
 * @param props.icon - Icon rendered at the top of the card.
 * @param props.title - Title of the feature.
 * @param props.description - Description of the feature.
 * @param props.accent - Optional accent color for the icon background.
 * @param props.className - Additional CSS classes.
 * @returns The feature card element.
 *
 * @example
 * ```tsx
 * <FeatureCard
 *   icon={<LightningIcon />}
 *   title="Lightning Fast"
 *   description="Optimized for speed."
 *   accent="primary"
 * />
 * ```
 */
export function FeatureCard({
  icon,
  title,
  description,
  accent = 'primary',
  className,
}: FeatureCardProps) {
  return (
    <article
      className={cn(
        `
          group border-surface-border bg-background-elevated hover-lift relative
          overflow-hidden rounded-2xl border p-8 transition-all duration-300
        `,
        className,
      )}
    >
      {/* Gradient hover effect */}
      <div className="
        from-surface-highlight pointer-events-none absolute inset-0
        bg-linear-to-br to-transparent opacity-0 transition-opacity duration-300
        group-hover:opacity-100
      " />

      <div className="relative z-10">
        {/* Icon container */}
        <div
          className={cn(
            `
              mb-6 inline-flex size-14 items-center justify-center rounded-xl
              bg-linear-to-br
            `,
            accentStyles[accent],
          )}
        >
          {icon}
        </div>

        <h3 className="font-display text-foreground mb-3 text-xl font-semibold">
          {title}
        </h3>
        <p className="text-foreground-muted leading-relaxed">{description}</p>
      </div>

      {/* Corner accent */}
      <div className="
        from-accent-primary/10 absolute -right-8 -bottom-8 size-32 rounded-full
        bg-linear-to-br to-transparent opacity-0 blur-2xl transition-opacity
        duration-500
        group-hover:opacity-100
      " />
    </article>
  );
}
