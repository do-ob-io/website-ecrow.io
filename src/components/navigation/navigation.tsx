import Link from 'next/link';

import { Logo } from '../logo';

/**
 * Props for the NavLink component.
 */
export interface NavLinkProps {
  /**
   * Link destination.
   */
  readonly href: string;
  /**
   * Link text.
   */
  readonly children: React.ReactNode;
}

/**
 * Individual navigation link component.
 *
 * @param props - The nav link props.
 * @param props.href - Link destination.
 * @param props.children - Link text.
 * @returns The nav link element.
 */
function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="
        text-foreground-muted focus-ring rounded-sm text-sm font-medium
        transition-colors
        hover:text-foreground
      "
    >
      {children}
    </a>
  );
}

/**
 * Primary navigation header component.
 *
 * @returns The navigation header element.
 *
 * @example
 * ```tsx
 * <Navigation />
 * ```
 */
export function Navigation() {
  return (
    <header className="fixed top-0 z-50 w-full">
      {/* Backdrop blur */}
      <div className="
        border-surface-border absolute inset-0 border-b bg-background/80
        backdrop-blur-xl
      " />

      <nav className="
        relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4
        lg:px-8
      ">
        {/* Logo */}
        <Link href="/" className="focus-ring rounded-sm" aria-label="eCrow Home">
          <Logo size="md" />
        </Link>

        {/* Navigation links - hidden on mobile */}
        <div className="
          hidden items-center gap-8
          md:flex
        ">
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}
