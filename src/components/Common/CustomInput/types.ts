export type CustomInputProps = {
  id: string;
  type: string;
  value: string | number;
  label?: string;
  subtext?: string;
  placeholder: string;
  changeFunc: (...args: any[]) => void;
  isInvalid?: boolean;
  errorMsg?: string;
};

export type EyeContainerProps = {
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  setDynamicType: React.Dispatch<React.SetStateAction<string>>;
};
