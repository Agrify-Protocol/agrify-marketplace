"use client";

import { createContext, useContext, useState } from "react";
import { AuthContextType, LoginResponse, Props } from "./types";

const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: Props) => {
  const [loginResponse, setLoginResponse] = useState<LoginResponse | null>(
    null
  );
  return (
    <AuthContext.Provider value={{ loginResponse, setLoginResponse }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
