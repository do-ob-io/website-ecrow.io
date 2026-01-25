import { cn } from "@do-ob/core/web";

/**
 * Props for the SectionHeading component.
 */
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
 *
 * @param props - The section heading props.
 * @param props.eyebrow - Eyebrow text displayed above the title.
 * @param props.title - Main title text.
 * @param props.subtitle - Subtitle/description text.
 * @param props.align - Alignment of the text.
 * @param props.className - Additional CSS classes.
 * @returns The section heading element.
 *
 * @example
 * ```tsx
 * <SectionHeading
 *   eyebrow="About Us"
 *   title="Our Mission"
 *   subtitle="Building digital excellence"
 * />
 * ```
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
