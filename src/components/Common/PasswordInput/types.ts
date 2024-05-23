export type PasswordInputProps = {
  value: string;
  changeFunc: (...args: any[]) => void;
  placeholder?: string;
  label?: string;
  subtext?: string;
};
