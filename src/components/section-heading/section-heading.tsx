import { cn } from '@do-ob/core/web';

/**
 * Props for the SectionHeading component.
 */
export interface SectionHeadingProps {
  /**
   * Eyebrow text displayed above the title.
   */
  readonly eyebrow?: string;
  /**
   * Main title text.
   */
  readonly title: string;
  /**
   * Subtitle/description text.
   */
  readonly subtitle?: string;
  /**
   * Alignment of the text.
   * @default "center"
   */
  readonly align?: 'left' | 'center';
  /**
   * Additional CSS classes.
   */
  readonly className?: string;
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
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && (
        <span className="
          text-accent-primary mb-4 inline-block font-mono text-sm
          tracking-widest uppercase
        ">
          {eyebrow}
        </span>
      )}
      <h2 className="
        font-display text-foreground text-4xl/tight font-bold tracking-tight
        md:text-5xl
        lg:text-6xl
      ">
        {title}
      </h2>
      {subtitle && (
        <p className="
          text-foreground-muted mt-6 text-lg/relaxed
          md:text-xl
        ">
          {subtitle}
        </p>
      )}
    </div>
  );
}
