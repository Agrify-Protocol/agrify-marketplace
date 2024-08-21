import { Dispatch, ReactNode, SetStateAction } from "react";

export type AuthContextType = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  setAccessToken: Dispatch<SetStateAction<string>>;
  setRefreshToken: Dispatch<SetStateAction<string>>;
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
