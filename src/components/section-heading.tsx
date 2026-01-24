import { cn } from "@do-ob/core/web";

export interface SectionHeadingProps {
  /**
   * Eyebrow text displayed above the title.
   */
  eyebrow?: string;
  /**
   * Main title text.
   */
  title: string;
  /**
   * Subtitle/description text.
   */
  subtitle?: string;
  /**
   * Alignment of the text.
   * @default "center"
   */
  align?: "left" | "center";
  /**
   * Additional CSS classes.
   */
  className?: string;
}

/**
 * Section heading component with eyebrow, title, and subtitle.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="mb-4 inline-block font-mono text-sm uppercase tracking-widest text-accent-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 text-lg leading-relaxed text-foreground-muted md:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
