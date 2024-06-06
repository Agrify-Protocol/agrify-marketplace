import { Dispatch, ReactNode, SetStateAction } from "react";

export type AuthContextType = {
  loginResponse: LoginResponse | null;
  setLoginResponse: Dispatch<SetStateAction<LoginResponse | null>>;
};

export type Props = {
  children: ReactNode;
};

export type LoginResponse = {
  user: User;
  token: string;
  refreshToken: string;
};

export type User = {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  isAdmin: boolean;
};
