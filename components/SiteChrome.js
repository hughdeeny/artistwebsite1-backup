'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteContent } from '../lib/siteContent';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Music', to: '/music' },
  { label: 'Videos', to: '/videos' },
  { label: 'Tour', to: '/tour' },
  { label: 'About', to: '/about' },
];

export function SiteChrome({ children }) {
  const pathname = usePathname();

  return (
    <div className="site">
      <header className="top-nav">
        <h1 className="brand-wordmark">HUGH DEENY</h1>
        <nav aria-label="Primary">
          <ul className="nav-list">
            {navItems.map((item) => {
              const isActive = pathname === item.to;
              return (
                <li key={item.to}>
                  <Link href={item.to} className={isActive ? 'active' : undefined}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      <main className="page-wrap">{children}</main>

      <ul className="social-list">
        {siteContent.socials.map((social) => (
          <li key={social.label}>
            <a href={social.href} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          </li>
        ))}
      </ul>

      <footer className="site-footer">Copyright © {siteContent.copyrightHolder}</footer>
    </div>
  );
}
