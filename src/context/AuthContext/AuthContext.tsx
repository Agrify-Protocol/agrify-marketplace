"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { AuthContextType, LoginResponse, Props } from "./types";
import { updateBearerToken } from "@/utils/updateBearerToken";
import { projectsInstance } from "@/services/axios/instances";

const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: Props) => {
  const [loginResponse, setLoginResponse] = useState<LoginResponse | null>(
    null
  );

  useEffect(() => {
    if (loginResponse) {
      updateBearerToken(projectsInstance, loginResponse.token);
    }
  }, [loginResponse]);

  return (
    <AuthContext.Provider value={{ loginResponse, setLoginResponse }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
