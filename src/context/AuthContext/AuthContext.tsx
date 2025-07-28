"use client";

import { createContext, useContext, useEffect, useState } from "react";
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

  const isUnauthenticated = unauthenticatedRoutes.some(
    (route) =>
      pathname === route ||
      pathname.startsWith(route) ||
      pathname.includes(route)
  );
  const toast = useToast();

  useEffect(() => {
    const handleUser = async () => {
      const user = await getUser();
      setTimeout(() => {
        if (user) {
          setUser(user);
        }
        if (!isUnauthenticated && !!user) {
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
    const handleRefresh = () => {
      if (user && refreshToken) {
        refreshAccessToken({ refreshToken }, toast)
          .then((result) => {
            if (result) {
              preserveSession(user, result.token, refreshToken);
              setAccessToken(result.token);
            }
          })
          .catch(() => {
            resetAuthCookies().then(() => {
              setUser(null);
              localStorage.removeItem("access_token");
              resetAuthCookies();
              router.push("/auth/login");
            });
          });
      }
    };

    const interval = setInterval(handleRefresh, fifteen_mins_in_millisecs);

    handleRefresh();

    return () => clearInterval(interval);
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
