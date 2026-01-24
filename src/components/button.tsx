import { cn } from "@do-ob/core/web";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style variant.
   * @default "primary"
   */
  variant?: "primary" | "secondary" | "ghost" | "outline";
  /**
   * Size of the button.
   * @default "md"
   */
  size?: "sm" | "md" | "lg";
  /**
   * Content to render inside the button.
   */
  children: React.ReactNode;
}

const variants = {
  primary:
    "bg-accent-primary text-background hover:bg-accent-primary/90 shadow-lg shadow-accent-primary/25",
  secondary:
    "bg-accent-secondary text-background hover:bg-accent-secondary/90 shadow-lg shadow-accent-secondary/25",
  ghost: "bg-transparent text-foreground hover:bg-surface-highlight",
  outline:
    "bg-transparent text-foreground border border-surface-border hover:border-accent-primary hover:text-accent-primary",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

/**
 * Primary button component for calls to action.
 */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-ring",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
