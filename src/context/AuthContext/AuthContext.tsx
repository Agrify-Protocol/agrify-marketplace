"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { AuthContextType, Props, User } from "./types";
import { updateBearerToken } from "@/utils/updateBearerToken";
import { refreshAccessToken } from "@/services/api/auth";
import {
  getAccessToken,
  getRefreshToken,
  getUser,
  preserveSession,
  resetAuthCookies,
} from "@/app/lib/actions";
import { usePathname, useRouter } from "next/navigation";
import { xrpInstance } from "@/services/axios/instances";

const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const [user, setUser] = useState<User | null>(null);
  const [fetchingUser, setFetchingUser] = useState(true);
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");

  useEffect(() => {
    const handleUser = async () => {
      const user = await getUser();
      setTimeout(() => {
        if (user) {
          setUser(user);
          setFetchingUser(false);
        } else if (
          ["/auth/reset-password", "/auth/signup"].includes(pathname)
        ) {
          return null;
        } else {
          setFetchingUser(false);
          router.push("/auth/login");
        }
      }, 3000);
    };

    handleUser();

    getAccessToken().then((token) => {
      setAccessToken(token);
    });

    getRefreshToken().then((token) => {
      setRefreshToken(token);
    });
  }, []);

  useEffect(() => {
    if (accessToken) {
      updateBearerToken(accessToken);
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
          .catch((err) => {
            if (err.message == "Invalid or Expired Refresh Token") {
              resetAuthCookies();
              router.push("/auth/login");
            }
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
    <AuthContext.Provider
      value={{
        fetchingUser,
        user,
        accessToken,
        setUser,
        setAccessToken,
        setRefreshToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
