export type SectionTabProps = {
  sections: string[];
  currentSection: string;
  setCurrentSection: React.Dispatch<React.SetStateAction<string>>;
};
