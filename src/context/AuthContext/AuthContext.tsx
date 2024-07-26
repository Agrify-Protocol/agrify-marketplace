"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { AuthContextType, Props, User } from "./types";
import { updateBearerToken } from "@/utils/updateBearerToken";
import {
  farmInstance,
  invoiceInstance,
  paymentInstance,
  projectsInstance,
  purchaseInstance,
} from "@/services/axios/instances";
import { refreshAccessToken } from "@/services/api/auth";
import {
  getAccessToken,
  getRefreshToken,
  getUser,
  preserveSession,
} from "@/app/lib/actions";
import { useRouter } from "next/navigation";

const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: Props) => {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");

  useEffect(() => {
    getUser().then((user) => {
      user ? setUser(user) : router.push("/login");
    });

    getAccessToken().then((token) => {
      setAccessToken(token);
    });

    getRefreshToken().then((token) => {
      setRefreshToken(token);
    });
  }, []);

  useEffect(() => {
    if (accessToken) {
      updateBearerToken(projectsInstance, accessToken);
      updateBearerToken(invoiceInstance, accessToken);
      updateBearerToken(farmInstance, accessToken);
      updateBearerToken(purchaseInstance, accessToken);
      updateBearerToken(paymentInstance, accessToken);
    }
  }, [accessToken]);

  useEffect(() => {
    const fifteen_mins_in_millisecs = 900000;
    if (user && refreshToken) {
      const handleRefresh = () => {
        refreshAccessToken({ refreshToken })
          .then((result) => {
            preserveSession(user, result.token, refreshToken);
          })
          .finally(() => {
            setInterval(() => {
              handleRefresh();
            }, fifteen_mins_in_millisecs);
          });
      };

      handleRefresh();
    }
  }, [user, refreshToken]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
