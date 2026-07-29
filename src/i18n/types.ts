export interface FeatureCopy {
  readonly n: string;
  readonly label: string;
  readonly title: string;
  readonly body: string;
}

export interface PrincipleCopy {
  readonly kicker: string;
  readonly title: string;
  readonly body: string;
}

export interface Dictionary {
  readonly meta: {
    readonly title: string;
    readonly description: string;
  };
  readonly nav: {
    readonly features: string;
    readonly providers: string;
    readonly principles: string;
    readonly download: string;
    readonly ariaPrimary: string;
    readonly language: string;
  };
  readonly hero: {
    readonly brand: string;
    readonly title: string;
    readonly titleMuted: string;
    readonly lead: string;
    readonly ctaPrimary: string;
    readonly ctaSecondary: string;
  };
  readonly features: {
    readonly kicker: string;
    readonly title: string;
    readonly lead: string;
    readonly items: readonly FeatureCopy[];
  };
  readonly providers: {
    readonly kicker: string;
    readonly title: string;
    readonly lead: string;
    readonly ariaList: string;
    readonly live: string;
    readonly soon: string;
  };
  readonly principles: {
    readonly kicker: string;
    readonly title: string;
    readonly items: readonly PrincipleCopy[];
  };
  readonly cta: {
    readonly brand: string;
    readonly lead: string;
    readonly button: string;
    readonly mailSubject: string;
  };
  readonly footer: {
    readonly companyDescription: string;
    readonly servicesHeading: string;
    readonly contactHeading: string;
    readonly services: readonly string[];
    readonly servicesHref: string;
    readonly privacy: string;
    readonly terms: string;
    readonly backToTop: string;
    readonly rights: string;
    readonly ariaLegalNav: string;
    readonly privacyHref: string;
    readonly termsHref: string;
  };
}
