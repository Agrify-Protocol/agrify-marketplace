"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { AuthContextType, Props, User } from "./types";
import { refreshAccessToken } from "@/services/api/auth";
import {
  getRefreshToken,
  getUser,
  preserveSession,
  resetAuthCookies,
} from "@/app/lib/actions";
import { usePathname, useRouter } from "next/navigation";
import { useToast } from "@chakra-ui/react";

const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const [user, setUser] = useState<User | null>(null);
  const [fetchingUser, setFetchingUser] = useState(true);
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const unauthenticatedRoutes = [
    "/auth/reset-password",
    "/auth/signup",
    "/auth/login",
    "/product-story",
    "/projects",
    "/profile/produce-details/track",
  ];

  const toast = useToast();
  const isLoggedIn = useMemo(() => !!accessToken, [accessToken]);

  useEffect(() => {
    const handleUser = async () => {
      const user = await getUser();
      setTimeout(() => {
        if (user) {
          setUser(user);
        }
        if (
          !unauthenticatedRoutes.includes(pathname) &&
          !!user &&
          !isLoggedIn
        ) {
          router.push("/auth/login");
        }
        setFetchingUser(false);
      }, 3000);
    };

    handleUser();

    getRefreshToken().then((token) => {
      setRefreshToken(token);
    });
  }, []);

  useEffect(() => {
    if (accessToken) {
      if (typeof window !== "undefined") {
        localStorage.setItem("access_token", accessToken);
      }
    }
  }, [accessToken]);

  useEffect(() => {
    const fifteen_mins_in_millisecs = 900000;
    if (user && refreshToken) {
      const handleRefresh = () => {
        refreshAccessToken({ refreshToken }, toast)
          .then((result) => {
            if (result) {
              preserveSession(user, result.token, refreshToken);
            }
          })
          .catch((err) => {
            if (err.message) {
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
