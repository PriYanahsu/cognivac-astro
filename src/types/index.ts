export interface NavChild {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export interface HeroSlide {
  id: string;
  badge: string;
  category: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  image: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface CaseStudyItem {
  id: string;
  /** URL segment under /case-studies. Named for the work, not the client. */
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  href: string;
  metric?: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  decimals?: number;
}

export interface WhyItem {
  id: string;
  title: string;
  description: string;
  accentColor: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  /**
   * Headshot, if one exists. Optional on purpose: with no file the card renders
   * the same monogram the team page uses, which is a designed state rather than
   * a broken one. Drop real photos into /public/images/testimonials and point
   * this at them.
   */
  image?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  /** Short label shown on the FAQ index — Scope, Security, and so on. */
  tag?: string;
}

export interface PlatformCard {
  id: string;
  title: string;
  subtitle: string;
  gradient: string;
}
