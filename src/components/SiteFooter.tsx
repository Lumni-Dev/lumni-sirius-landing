import Image from "next/image";

import { toLocaleCode, type LocaleCode } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const YEAR = new Date().getFullYear();

const CHANNELS = [
  {
    kind: "email" as const,
    value: "contact@lumni.dev.br",
    href: "mailto:contact@lumni.dev.br",
  },
  {
    kind: "whatsapp" as const,
    value: "+55 (11) 90000-0000",
    href: "https://wa.me/5511900000000",
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

function WhatsappIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className="site-footer-icon"
    >
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.465 3.488"
        transform="translate(1.6 1.6) scale(0.867)"
      />
    </svg>
  );
}

interface SiteFooterProps {
  locale: LocaleCode | string;
}

/** Rodapé espelhado do lumni-landing (`SiteFooter`). */
export function SiteFooter({ locale }: SiteFooterProps) {
  const code = toLocaleCode(String(locale));
  const dict = getDictionary(code);
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
                  <a
                    href={channel.href}
                    target={channel.kind === "whatsapp" ? "_blank" : undefined}
                    rel={channel.kind === "whatsapp" ? "noreferrer" : undefined}
                    className="site-footer-channel"
                  >
                    {channel.kind === "email" ? <EmailIcon /> : <WhatsappIcon />}
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
            <a href="#top">{dict.footer.backToTop}</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
