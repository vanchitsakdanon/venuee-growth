import { Logo } from "./Logo";
import { CTA_PRIMARY, LINE_URL } from "./site";

const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#fit", label: "Who we work with" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" aria-label="Venuee หน้าแรก">
          <Logo />
        </a>
        <nav aria-label="เมนูหลัก" className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-small font-medium text-fg/90 transition hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          {CTA_PRIMARY}
        </a>
      </div>
    </header>
  );
}
