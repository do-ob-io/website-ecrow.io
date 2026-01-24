import { cn } from "@do-ob/core/web";

export interface FeatureCardProps {
  /**
   * Icon rendered at the top of the card.
   */
  icon: React.ReactNode;
  /**
   * Title of the feature.
   */
  title: string;
  /**
   * Description of the feature.
   */
  description: string;
  /**
   * Optional accent color for the icon background.
   * @default "primary"
   */
  accent?: "primary" | "secondary" | "tertiary";
  /**
   * Additional CSS classes.
   */
  className?: string;
}

const accentStyles = {
  primary: "from-accent-primary/20 to-accent-primary/5 text-accent-primary",
  secondary: "from-accent-secondary/20 to-accent-secondary/5 text-accent-secondary",
  tertiary: "from-accent-tertiary/20 to-accent-tertiary/5 text-accent-tertiary",
};

/**
 * Feature card component for showcasing capabilities.
 */
export function FeatureCard({
  icon,
  title,
  description,
  accent = "primary",
  className,
}: FeatureCardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-surface-border bg-background-elevated p-8 transition-all duration-300 hover-lift",
        className
      )}
    >
      {/* Gradient hover effect */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-surface-highlight to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10">
        {/* Icon container */}
        <div
          className={cn(
            "mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br",
            accentStyles[accent]
          )}
        >
          {icon}
        </div>

        <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
          {title}
        </h3>
        <p className="leading-relaxed text-foreground-muted">{description}</p>
      </div>

      {/* Corner accent */}
      <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-linear-to-br from-accent-primary/10 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
    </article>
  );
}
