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
    name: "volunteer-coordination-app",
    tags: ["Vue.js", "Vuex", "Firebase Auth", "Realtime Database"],
    language: "Vue",
    languageColor: "#41b883",
    liveUrl: "",
    repoUrl: "",
    featured: true,
  },
  "weather-app": {
    slug: "weather-app",
    name: "weather-app",
    tags: ["Angular", "RxJS", "SCSS", "Figma", "REST API"],
    language: "TypeScript",
    languageColor: "#3178c6",
    liveUrl: "",
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
        "Volunteer coordination app built with Vue.js, Vuex, Firebase Authentication and Realtime Database.",
      tagline:
        "Built during my internship at Sigma Software — state management with Vuex and real-time data via Firebase.",
      caseStudy: [
        {
          heading: "Overview",
          body: [
            "Built during my internship at Sigma Software as one of two frontend projects delivered in a team setting with Agile workflows and Git.",
          ],
        },
        {
          heading: "What I built",
          body: [
            "- Volunteer coordination app in Vue.js",
            "- State management with Vuex",
            "- Firebase Authentication and Realtime Database integration",
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
        "App zur Koordinierung von Freiwilligen mit Vue.js, Vuex, Firebase Authentication und Realtime Database.",
      tagline:
        "Im Praktikum bei Sigma Software gebaut — State Management mit Vuex und Echtzeitdaten über Firebase.",
      caseStudy: [
        {
          heading: "Überblick",
          body: [
            "Im Praktikum bei Sigma Software als eines von zwei Frontend-Projekten im Team entwickelt — mit agilen Arbeitsweisen und Git.",
          ],
        },
        {
          heading: "Was ich gebaut habe",
          body: [
            "- App zur Koordinierung von Freiwilligen in Vue.js",
            "- State Management mit Vuex",
            "- Integration von Firebase Authentication und Realtime Database",
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
