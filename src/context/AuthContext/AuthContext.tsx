"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { AuthContextType, LoginResponse, Props } from "./types";
import { updateBearerToken } from "@/utils/updateBearerToken";
import { projectsInstance } from "@/services/axios/instances";
import { refreshAccessToken } from "@/services/api/auth";

const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: Props) => {
  const storedUser =
    typeof window !== "undefined" && window.localStorage.getItem("carbon_user");
  const parsedStoredUser = storedUser
    ? (JSON.parse(storedUser) as LoginResponse)
    : null;
  const [loginResponse, setLoginResponse] = useState<LoginResponse | null>(
    parsedStoredUser
  );

  useEffect(() => {
    if (loginResponse) {
      updateBearerToken(projectsInstance, loginResponse.token);
      typeof window !== "undefined" &&
        window.localStorage.setItem(
          "carbon_user",
          JSON.stringify(loginResponse)
        );
    }
  }, [loginResponse]);

  useEffect(() => {
    const fifteen_mins_in_millisecs = 900000;
    setInterval(() => {
      if (loginResponse) {
        refreshAccessToken({ refreshToken: loginResponse.refreshToken }).then(
          (result) => {
            setLoginResponse({ ...loginResponse, token: result.token });
          }
        );
      }
    }, fifteen_mins_in_millisecs);
  }, []);

  return (
    <AuthContext.Provider value={{ loginResponse, setLoginResponse }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
