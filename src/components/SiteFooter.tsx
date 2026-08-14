import Image from "next/image";

import { TopLink } from "@/components/TopLink";
import { content } from "@/content";

const YEAR = new Date().getFullYear();

const CHANNELS = [
  {
    kind: "email" as const,
    value: "contact@lumni.dev.br",
    href: "mailto:contact@lumni.dev.br",
  },
] as const;

function EmailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="site-footer-icon"
    >
      <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Zm.5-.6 8.5 5.6 8.5-5.6" />
    </svg>
  );
}

/** Rodapé espelhado do lumni-landing (`SiteFooter`). */
export function SiteFooter() {
  const dict = content;
  const copyright = `© 2024 - ${YEAR} Lumni. ${dict.footer.rights}`;

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-grid">
          <div className="site-footer-brand">
            <a
              href="https://lumni.dev.br"
              className="site-footer-logo"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/images/logo-inverse.png"
                alt="Lumni"
                width={240}
                height={120}
                className="site-footer-logo-img"
              />
            </a>
            <p>{dict.footer.companyDescription}</p>
          </div>

          <nav aria-label={dict.footer.servicesHeading}>
            <h2 className="site-footer-heading">{dict.footer.servicesHeading}</h2>
            <ul className="site-footer-list">
              {dict.footer.services.map((service) => (
                <li key={service}>
                  <a href={dict.footer.servicesHref} target="_blank" rel="noreferrer">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={dict.footer.contactHeading}>
            <h2 className="site-footer-heading">{dict.footer.contactHeading}</h2>
            <ul className="site-footer-list">
              {CHANNELS.map((channel) => (
                <li key={channel.kind}>
                  <a href={channel.href} className="site-footer-channel">
                    <EmailIcon />
                    <span dir="ltr">{channel.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="site-footer-bottom">
          <div className="site-footer-legal">
            <p>Lumni - Serviços Digitais · CNPJ 65.613.389/0001-96</p>
            <p>{copyright}</p>
          </div>
          <nav aria-label={dict.footer.ariaLegalNav} className="site-footer-legal-nav">
            <a href={dict.footer.privacyHref} target="_blank" rel="noreferrer">
              {dict.footer.privacy}
            </a>
            <a href={dict.footer.termsHref} target="_blank" rel="noreferrer">
              {dict.footer.terms}
            </a>
            <TopLink>{dict.footer.backToTop}</TopLink>
          </nav>
        </div>
      </div>
    </footer>
  );
}
