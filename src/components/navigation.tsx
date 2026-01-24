import Link from "next/link";
import { Logo } from "./logo";

export interface NavLinkProps {
  /**
   * Link destination.
   */
  href: string;
  /**
   * Link text.
   */
  children: React.ReactNode;
}

/**
 * Individual navigation link.
 */
function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-foreground-muted transition-colors hover:text-foreground focus-ring rounded"
    >
      {children}
    </a>
  );
}

/**
 * Primary navigation header component.
 */
export function Navigation() {
  return (
    <header className="fixed top-0 z-50 w-full">
      {/* Backdrop blur */}
      <div className="absolute inset-0 border-b border-surface-border bg-background/80 backdrop-blur-xl" />

      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="focus-ring rounded" aria-label="eCrow Home">
          <Logo size="md" />
        </Link>

        {/* Navigation links - hidden on mobile */}
        <div className="hidden items-center gap-8 md:flex">
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}
