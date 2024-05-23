export type CustomInputProps = {
  type: string;
  value: string;
  label?: string;
  subtext?: string;
  placeholder: string;
  changeFunc: (...args: any[]) => void;
};
