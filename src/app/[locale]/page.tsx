import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SiriusOrb } from "@/components/SiriusOrb";
import { SiteFooter } from "@/components/SiteFooter";
import { Starfield } from "@/components/Starfield";
import { toLocaleCode } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const PROVIDERS = [
  { name: "Claude", status: "active" },
  { name: "GPT", status: "active" },
  { name: "Codex", status: "soon" },
  { name: "Gemini", status: "active" },
  { name: "Qwen", status: "soon" },
  { name: "Grok", status: "soon" },
  { name: "DeepSeek", status: "active" },
  { name: "Mistral", status: "soon" },
  { name: "Cohere", status: "soon" },
  { name: "Perplexity", status: "soon" },
  { name: "Together", status: "soon" },
  { name: "Fireworks", status: "soon" },
  { name: "Groq", status: "soon" },
  { name: "OpenRouter", status: "soon" },
  { name: "Llama", status: "soon" },
  { name: "Kimi", status: "soon" },
  { name: "Yi", status: "soon" },
  { name: "Phi", status: "soon" },
  { name: "Ollama", status: "soon" },
  { name: "LM Studio", status: "soon" },
  { name: "vLLM", status: "soon" },
  { name: "llama.cpp", status: "soon" },
] as const;

function ProviderRow({ pass }: { pass: string }) {
  return (
    <>
      {PROVIDERS.map((p) => (
        <span
          className={`sky-name${p.status === "soon" ? " is-soon" : " is-live"}`}
          key={`${pass}-${p.name}`}
        >
          {p.name}
        </span>
      ))}
    </>
  );
}

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const locale = toLocaleCode((await params).locale);
  const dict = getDictionary(locale);

  return (
    <>
      <div className="backdrop" aria-hidden="true">
        <Starfield />
        <div className="haze" />
        <div className="veil" />
      </div>

      <div className="page">
        <header className="nav">
          <div className="nav-inner">
            <a className="brand" href="#top">
              Sirius
            </a>
            <div className="nav-end">
              <nav aria-label={dict.nav.ariaPrimary}>
                <ul className="nav-links">
                  <li>
                    <a href="#features">{dict.nav.features}</a>
                  </li>
                  <li>
                    <a href="#providers">{dict.nav.providers}</a>
                  </li>
                  <li>
                    <a href="#principles">{dict.nav.principles}</a>
                  </li>
                  <li>
                    <span className="btn btn-ghost btn-sm btn-soon" aria-disabled="true">
                      {dict.nav.download}
                    </span>
                  </li>
                </ul>
              </nav>
              <LanguageSwitcher current={locale} ariaLabel={dict.nav.language} />
            </div>
          </div>
        </header>

        <main id="top">
          <section className="hero" aria-labelledby="hero-brand">
            <div className="hero-orb">
              <SiriusOrb />
            </div>

            <div className="hero-copy">
              <p className="hero-brand" id="hero-brand">
                {dict.hero.brand}
              </p>
              <h1>
                {dict.hero.title}
                <span className="hero-break">{dict.hero.titleMuted}</span>
              </h1>
              <p className="hero-lead">{dict.hero.lead}</p>
              <div className="hero-cta">
                <span className="btn btn-primary btn-soon" aria-disabled="true">
                  {dict.hero.ctaPrimary}
                </span>
                <a className="btn btn-ghost" href="#features">
                  {dict.hero.ctaSecondary}
                </a>
              </div>
            </div>
          </section>

          <section className="section" id="features" aria-labelledby="features-title">
            <div className="section-head">
              <p className="section-kicker">{dict.features.kicker}</p>
              <h2 id="features-title">{dict.features.title}</h2>
              <p className="section-lead">{dict.features.lead}</p>
            </div>

            <ol className="orbit-list">
              {dict.features.items.map((f) => (
                <li className="orbit-item" key={f.n}>
                  <span className="orbit-index" aria-hidden="true">
                    {f.n}
                  </span>
                  <div className="orbit-body">
                    <p className="feature-label">{f.label}</p>
                    <h3>{f.title}</h3>
                    <p>{f.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section
            className="section section-sky"
            id="providers"
            aria-labelledby="providers-title"
          >
            <div className="section-head">
              <p className="section-kicker">{dict.providers.kicker}</p>
              <h2 id="providers-title">{dict.providers.title}</h2>
              <p className="section-lead">{dict.providers.lead}</p>
            </div>

            <div className="sky-band" aria-label={dict.providers.ariaList}>
              <div className="sky-track">
                <ProviderRow pass="a" />
                <ProviderRow pass="b" />
              </div>
            </div>

            <p className="sky-legend">
              <span className="sky-legend-live">{dict.providers.live}</span>
              <span className="sky-legend-soon">{dict.providers.soon}</span>
            </p>
          </section>

          <section
            className="section"
            id="principles"
            aria-labelledby="principles-title"
          >
            <div className="section-head">
              <p className="section-kicker">{dict.principles.kicker}</p>
              <h2 id="principles-title">{dict.principles.title}</h2>
            </div>

            <div className="principles">
              {dict.principles.items.map((item) => (
                <article className="principle" key={item.title}>
                  <p className="principle-kicker">{item.kicker}</p>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="cta-band" id="download" aria-labelledby="download-title">
            <p className="word" id="download-title">
              {dict.cta.brand}
            </p>
            <p className="cta-lead">{dict.cta.lead}</p>
            <div className="hero-cta">
              <span className="btn btn-primary btn-soon" aria-disabled="true">
                {dict.cta.button}
              </span>
            </div>
          </section>
        </main>

        <SiteFooter locale={locale} />
      </div>
    </>
  );
}
