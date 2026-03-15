import { Logo } from '../logo';

const pageLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

/**
 * Site footer with navigation and company information.
 *
 * @returns The footer element.
 *
 * @example
 * ```tsx
 * <Footer />
 * ```
 */
export function Footer() {
  return (
    <footer className="border-surface-border bg-background relative border-t">
      {/* Background accent */}
      <div className="bg-grid absolute inset-0 opacity-30" />

      <div className="
        relative mx-auto max-w-7xl px-6 py-16
        lg:px-8
      ">
        {/* Main content */}
        <div className="
          flex flex-col items-center gap-8 text-center
          md:flex-row md:justify-between md:text-left
        ">
          {/* Brand */}
          <div className="max-w-md">
            <Logo size="lg" />
            <p className="text-foreground-muted mt-4 leading-relaxed">
              eCrow Ltd. develops and operates innovative web-based software
              products, from powerful SaaS applications to engaging browser-based
              digital games.
            </p>
          </div>

          {/* Page navigation */}
          <nav className="
            flex flex-wrap justify-center gap-6
            md:justify-end
          ">
            {pageLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="
                  text-foreground-muted
                  hover:text-foreground
                  focus-ring rounded-sm text-sm font-medium transition-colors
                "
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom section */}
        <div className="
          border-surface-border mt-12 flex flex-col items-center justify-between
          gap-4 border-t pt-8
          sm:flex-row
        ">
          <p className="text-foreground-subtle text-sm">
            &copy; {new Date().getFullYear()} eCrow Ltd. All rights reserved.
          </p>

          {/* GitHub link */}
          <a
            href="https://github.com/do-ob-io"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-foreground-muted
              hover:text-accent-primary
              focus-ring flex items-center gap-2 rounded-sm text-sm
              transition-colors
            "
            aria-label="GitHub"
          >
            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span>do-ob-io</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
