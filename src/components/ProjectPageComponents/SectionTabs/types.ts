export type SectionTabProps = {
  sections: string[];
  currentSection: string | null;
  id?: string | string[];
  type: "my profile" | "projects"
};
