export type CustomInputProps = {
  id: string;
  type: string;
  value: string;
  label?: string;
  subtext?: string;
  placeholder: string;
  changeFunc: (...args: any[]) => void;
};

export type EyeContainerProps = {
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  setDynamicType: React.Dispatch<React.SetStateAction<string>>;
};
