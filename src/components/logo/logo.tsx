/**
 * Props for the Logo component.
 */
export interface LogoProps {
  /**
   * Size variant for the logo.
   * @default "md"
   */
  size?: "sm" | "md" | "lg";
  /**
   * Whether to show the text alongside the icon.
   * @default true
   */
  showText?: boolean;
  /**
   * Additional CSS classes to apply.
   */
  className?: string;
}

const sizes = {
  sm: { icon: 24, text: "text-lg" },
  md: { icon: 32, text: "text-xl" },
  lg: { icon: 48, text: "text-3xl" },
};

/**
 * eCrow brand logo with geometric crow icon.
 *
 * @param props - The logo props.
 * @param props.size - Size variant for the logo.
 * @param props.showText - Whether to show the text alongside the icon.
 * @param props.className - Additional CSS classes to apply.
 * @returns The logo element.
 *
 * @example
 * ```tsx
 * <Logo size="lg" showText={true} />
 * ```
 */
export function Logo({ size = "md", showText = true, className = "" }: LogoProps) {
  const { icon, text } = sizes[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Geometric crow icon */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Wing shape */}
        <path
          d="M8 36L24 8L40 36L24 28L8 36Z"
          fill="url(#crow-gradient)"
          className="drop-shadow-lg"
        />
        {/* Eye */}
        <circle cx="24" cy="20" r="3" fill="var(--background)" />
        {/* Beak accent */}
        <path d="M24 8L28 16L24 14L20 16L24 8Z" fill="var(--accent-primary)" />
        <defs>
          <linearGradient id="crow-gradient" x1="8" y1="8" x2="40" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--accent-primary)" />
            <stop offset="1" stopColor="var(--accent-secondary)" />
          </linearGradient>
        </defs>
      </svg>
      {showText && (
        <span className={`font-display font-bold tracking-tight ${text}`}>
          <span className="text-gradient-primary">e</span>
          <span className="text-foreground">Crow</span>
        </span>
      )}
    </div>
  );
}
