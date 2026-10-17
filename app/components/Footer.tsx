import { Logo } from "./Logo";
import { CURRENT_SITE, LINE_URL } from "./site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo />
          <p className="mt-2 text-small text-muted">
            Venuee Co., Ltd. · Performance Marketing Agency · Bangkok
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-label text-muted">
          <li>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-brand">
              LINE OA
            </a>
          </li>
          <li>
            <a href={CURRENT_SITE} target="_blank" rel="noopener noreferrer" className="hover:text-brand">
              venuee-performance.com
            </a>
          </li>
          <li>
            <a href={`${CURRENT_SITE}/blog`} target="_blank" rel="noopener noreferrer" className="hover:text-brand">
              Blog
            </a>
          </li>
        </ul>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-4 py-4 font-mono text-label text-muted sm:px-6">
          © 2026 Venuee Co., Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
