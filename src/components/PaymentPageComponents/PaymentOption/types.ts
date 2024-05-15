export type OptionProps = {
  text: string;
  optionNumber: number;
  isChosen: boolean;
  handleSelect: (optionNumber: number) => void;
};
