import type { Lang } from "../i18n";

export interface Project {
  /** URL-safe id used in the route: /projects/:slug */
  slug: string;
  name: string;
  /** short one-liner shown on the card / row */
  description: string;
  /** longer intro shown on the case-study page (featured only) */
  tagline: string;
  tags: readonly string[];
  /** primary language, drives the little colored dot */
  language: string;
  languageColor: string;
  /** external links — leave empty string to hide the link */
  liveUrl: string;
  repoUrl: string;
  /**
   * Featured projects get a card + case-study page.
   * Compact ones render as a quiet list row (good for small side projects).
   */
  featured: boolean;
  /** optional screenshot path (put files in /public and reference as "/shots/foo.png") */
  screenshot?: string;
  /** case-study content — only used for featured projects */
  caseStudy: {
    heading: string;
    /** each entry is a paragraph; prefix with "- " to render as a bullet */
    body: string[];
  }[];
}

/** Shared non-translated fields for each project. */
const shared = {
  "volunteer-coordination-app": {
    slug: "volunteer-coordination-app",
    name: "help2gether",
    tags: [
      "Vue.js",
      "Vuex",
      "Vue Router",
      "BootstrapVue",
      "Firebase Auth",
      "Realtime Database",
      "Firebase Hosting",
      "Leaflet",
      "OpenStreetMap",
      "Photon",
    ],
    language: "Vue",
    languageColor: "#41b883",
    liveUrl: "https://help2gether-a15a6.web.app/",
    repoUrl: "",
    featured: true,
  },
  "weather-app": {
    slug: "weather-app",
    name: "weather-app",
    tags: ["Angular", "RxJS", "SCSS", "Figma", "REST API"],
    language: "TypeScript",
    languageColor: "#3178c6",
    liveUrl: "https://weather-app-cfd72.web.app/",
    repoUrl: "",
    featured: true,
  },
  "pegas-games": {
    slug: "pegas-games",
    name: "pegas-games",
    tags: ["HTML", "CSS", "JavaScript"],
    language: "JavaScript",
    languageColor: "#f1e05a",
    liveUrl: "https://pegasgames.com/",
    repoUrl: "",
    featured: false,
  },
} as const;

type ProjectSlug = keyof typeof shared;

const copy: Record<
  Lang,
  Record<
    ProjectSlug,
    Pick<Project, "description" | "tagline" | "caseStudy">
  >
> = {
  en: {
    "volunteer-coordination-app": {
      description:
        "Volunteer aid coordination app — browse humanitarian needs, filter by category/urgency/status, and view them on a map.",
      tagline:
        "Individual internship project at Sigma Software — a Vue.js SPA for managing humanitarian aid requests in one place.",
      caseStudy: [
        {
          heading: "Overview",
          body: [
            "Help2Gether is a web app that helps volunteers manage humanitarian aid requests in one place — browse needs, filter by category, urgency, and status, and view them on a map. The idea came from the early months of the war in Ukraine, when people urgently needed food, clothing, and medicine.",
            "Built as an individual internship project at Sigma Software.",
          ],
        },
        {
          heading: "What I built",
          body: [
            "- Product concept and UI sketches",
            "- Vue.js SPA with Vue Router and Vuex",
            "- UI with BootstrapVue",
            "- Firebase Authentication (sign up, login, password reset, profiles)",
            "- Firebase Realtime Database for creating, updating, and reading demands",
            "- Interactive map and address search with Leaflet, OpenStreetMap, and Photon",
            "- Public browse mode for guests (list + map) while keeping contact details (name/phone) private for logged-in users",
            "- Deployed with Firebase Hosting",
          ],
        },
      ],
    },
    "weather-app": {
      description:
        "Responsive weather app UI designed in Figma and implemented with Angular, RxJS and SCSS — including theme switching and API integration.",
      tagline:
        "Designed in Figma, then built with Angular, RxJS and SCSS during my internship at Sigma Software.",
      caseStudy: [
        {
          heading: "Overview",
          body: [
            "Designed and developed a responsive weather app UI in Figma, then implemented it using Angular, RxJS, and SCSS during my internship at Sigma Software.",
          ],
        },
        {
          heading: "What I built",
          body: [
            "- Responsive UI designed in Figma",
            "- Implementation with Angular, RxJS and SCSS",
            "- Theme switching",
            "- Live API integration",
          ],
        },
      ],
    },
    "pegas-games": {
      description:
        "A small website I built to host and present a collection of classic browser games.",
      tagline: "",
      caseStudy: [],
    },
  },
  de: {
    "volunteer-coordination-app": {
      description:
        "App zur Koordinierung humanitärer Hilfe — Bedarfe durchsuchen, nach Kategorie/Dringlichkeit/Status filtern und auf einer Karte anzeigen.",
      tagline:
        "Individuelles Praktikumsprojekt bei Sigma Software — eine Vue.js-SPA zur Verwaltung humanitärer Hilfsanfragen an einem Ort.",
      caseStudy: [
        {
          heading: "Überblick",
          body: [
            "Help2Gether ist eine Web-App, die Freiwilligen hilft, humanitäre Hilfsanfragen an einem Ort zu verwalten — Bedarfe durchsuchen, nach Kategorie, Dringlichkeit und Status filtern und auf einer Karte anzeigen. Die Idee entstand in den ersten Kriegsmonaten in der Ukraine, als Menschen dringend Nahrung, Kleidung und Medikamente brauchten.",
            "Als individuelles Praktikumsprojekt bei Sigma Software entwickelt.",
          ],
        },
        {
          heading: "Was ich gebaut habe",
          body: [
            "- Produktkonzept und UI-Skizzen",
            "- Vue.js-SPA mit Vue Router und Vuex",
            "- UI mit BootstrapVue",
            "- Firebase Authentication (Registrierung, Login, Passwort-Reset, Profile)",
            "- Firebase Realtime Database zum Erstellen, Aktualisieren und Lesen von Bedarfen",
            "- Interaktive Karte und Adresssuche mit Leaflet, OpenStreetMap und Photon",
            "- Öffentlicher Browse-Modus für Gäste (Liste + Karte), Kontaktangaben (Name/Telefon) nur für eingeloggte Nutzer",
            "- Deployment mit Firebase Hosting",
          ],
        },
      ],
    },
    "weather-app": {
      description:
        "Responsives Wetter-App-UI in Figma konzipiert und mit Angular, RxJS und SCSS umgesetzt — inkl. Theme-Umschaltung und API-Integration.",
      tagline:
        "In Figma gestaltet und mit Angular, RxJS und SCSS im Praktikum bei Sigma Software umgesetzt.",
      caseStudy: [
        {
          heading: "Überblick",
          body: [
            "Konzeption und Entwicklung eines responsiven Wetter-App-UI in Figma mit anschließender Umsetzung in Angular, RxJS und SCSS im Praktikum bei Sigma Software.",
          ],
        },
        {
          heading: "Was ich gebaut habe",
          body: [
            "- Responsives UI in Figma gestaltet",
            "- Umsetzung mit Angular, RxJS und SCSS",
            "- Theme-Umschaltung",
            "- API-Integration",
          ],
        },
      ],
    },
    "pegas-games": {
      description:
        "Eine kleine Website, die ich gebaut habe, um eine Sammlung klassischer Browser-Spiele zu hosten und zu präsentieren.",
      tagline: "",
      caseStudy: [],
    },
  },
};

function toProject(lang: Lang, slug: ProjectSlug): Project {
  return {
    ...shared[slug],
    ...copy[lang][slug],
  };
}

const slugs = Object.keys(shared) as ProjectSlug[];

export function getProjects(lang: Lang): Project[] {
  return slugs.map((slug) => toProject(lang, slug));
}

export function getProject(lang: Lang, slug: string): Project | undefined {
  if (!(slug in shared)) return undefined;
  return toProject(lang, slug as ProjectSlug);
}

/** Featured project slugs — used by getStaticPaths for case-study pages. */
export const projectSlugs = slugs.filter((slug) => shared[slug].featured);
