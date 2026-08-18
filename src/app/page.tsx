import { SiriusOrb } from "@/components/SiriusOrb";
import { SiteFooter } from "@/components/SiteFooter";
import { Starfield } from "@/components/Starfield";
import { TopLink } from "@/components/TopLink";
import { content } from "@/content";

export default function HomePage() {
  return (
    <>
      <div className="backdrop" aria-hidden="true">
        <Starfield />
        <div className="haze" />
        <div className="veil" />
      </div>

      <div className="page">
        <div id="top" aria-hidden="true" />
        <header className="nav">
          <div className="nav-inner">
            <TopLink className="brand">Sirius</TopLink>
            <div className="nav-end">
              <nav aria-label={content.nav.ariaPrimary}>
                <ul className="nav-links">
                  <li>
                    <a href="#features">{content.nav.features}</a>
                  </li>
                  <li>
                    <a href="#models">{content.nav.models}</a>
                  </li>
                  <li>
                    <a href="#principles">{content.nav.principles}</a>
                  </li>
                  <li>
                    <a href="#extensao">{content.nav.extension}</a>
                  </li>
                  <li>
                    <a href="#dashboard">{content.nav.dashboard}</a>
                  </li>
                  <li>
                    <span className="btn btn-ghost btn-sm btn-soon" aria-disabled="true">
                      {content.nav.download}
                    </span>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main>
          <section className="hero" aria-labelledby="hero-brand">
            <div className="hero-orb">
              <SiriusOrb />
            </div>

            <div className="hero-copy">
              <p className="hero-brand" id="hero-brand">
                {content.hero.brand}
              </p>
              <h1>
                {content.hero.title}
                <span className="hero-break">{content.hero.titleMuted}</span>
              </h1>
              <p className="hero-lead">{content.hero.lead}</p>
              <div className="hero-cta">
                <span className="btn btn-primary btn-soon" aria-disabled="true">
                  {content.hero.ctaPrimary}
                </span>
                <a className="btn btn-ghost" href="#features">
                  {content.hero.ctaSecondary}
                </a>
              </div>
            </div>
          </section>

          <section className="section" id="features" aria-labelledby="features-title">
            <div className="section-head">
              <p className="section-kicker">{content.features.kicker}</p>
              <h2 id="features-title">{content.features.title}</h2>
              <p className="section-lead">{content.features.lead}</p>
            </div>

            <ol className="orbit-list">
              {content.features.items.map((f) => (
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

          <section className="section" id="models" aria-labelledby="models-title">
            <div className="section-head">
              <p className="section-kicker">{content.models.kicker}</p>
              <h2 id="models-title">{content.models.title}</h2>
              <p className="section-lead">{content.models.lead}</p>
            </div>

            <div className="principles" aria-label={content.models.ariaList}>
              {content.models.items.map((m) => (
                <article className="principle" key={m.name}>
                  <p className="principle-kicker">{m.tier}</p>
                  <h3>{m.name}</h3>
                  <p>{m.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section
            className="section"
            id="principles"
            aria-labelledby="principles-title"
          >
            <div className="section-head">
              <p className="section-kicker">{content.principles.kicker}</p>
              <h2 id="principles-title">{content.principles.title}</h2>
            </div>

            <div className="principles">
              {content.principles.items.map((item) => (
                <article className="principle" key={item.title}>
                  <p className="principle-kicker">{item.kicker}</p>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="extensao" aria-labelledby="extension-title">
            <div className="section-head">
              <p className="section-kicker">{content.extension.kicker}</p>
              <h2 id="extension-title">{content.extension.title}</h2>
              <p className="section-lead">{content.extension.lead}</p>
            </div>

            <div className="principles">
              {content.extension.items.map((item) => (
                <article className="principle" key={item.title}>
                  <p className="principle-kicker">{item.kicker}</p>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>

            <div className="hero-cta extension-cta">
              <a
                className="btn btn-primary"
                href={content.extension.buttonHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content.extension.button}
              </a>
            </div>
          </section>

          <section className="section" id="dashboard" aria-labelledby="dashboard-title">
            <div className="section-head">
              <p className="section-kicker">{content.dashboard.kicker}</p>
              <h2 id="dashboard-title">{content.dashboard.title}</h2>
              <p className="section-lead">{content.dashboard.lead}</p>
            </div>

            <div className="dash-showcase">
              <span className="dash-glow" aria-hidden="true" />
              <div className="dash-window">
                <div className="dash-bar">
                  <span className="dash-dots" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="dash-url">{content.dashboard.url}</span>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/dashboard-analytics.png"
                  alt={content.dashboard.imageAlt}
                  width={1130}
                  height={588}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="principles dash-points">
              {content.dashboard.items.map((item) => (
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
              {content.cta.brand}
            </p>
            <p className="cta-lead">{content.cta.lead}</p>
            <div className="hero-cta">
              <span className="btn btn-primary btn-soon" aria-disabled="true">
                {content.cta.button}
              </span>
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
