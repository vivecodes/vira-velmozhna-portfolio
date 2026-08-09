import type { Lang } from "../i18n";
import { useTranslations } from "../i18n/ui";

export interface Tab {
  id: string;
  label: string;
}

/** Tabs shown on the home page (full section nav). */
export function homeTabs(lang: Lang): Tab[] {
  const t = useTranslations(lang);
  return [
    { id: "summary", label: t("nav.summary") },
    { id: "contact-info", label: t("nav.contact") },
    { id: "experience", label: t("nav.experience") },
    { id: "skills", label: t("nav.skills") },
    { id: "languages", label: t("nav.languages") },
    { id: "education", label: t("nav.education") },
    { id: "projects", label: t("nav.projects") },
  ];
}

/** Tabs shown on project detail / 404 pages (subset). */
export function detailTabs(lang: Lang): Tab[] {
  const t = useTranslations(lang);
  return [
    { id: "summary", label: t("nav.summary") },
    { id: "contact-info", label: t("nav.contact") },
    { id: "experience", label: t("nav.experience") },
    { id: "skills", label: t("nav.skills") },
    { id: "projects", label: t("nav.projects") },
  ];
}
