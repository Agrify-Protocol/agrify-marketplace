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
import { toastFn } from "@/utils/toastFn";

const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const toast = useToast();

  const [user, setUser] = useState<User | null>(null);
  const [fetchingUser, setFetchingUser] = useState(true);
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");

  const unauthenticatedRoutes = [
    "/auth/reset-password",
    "/auth/signup",
    "/auth/login",
    "/product-story",
    "/home",
    // "/profile/traceable-produce/produce-details/track",
  ];

  const isUnauthenticated = useMemo(() => {
    return unauthenticatedRoutes.some(
      (route) =>
        pathname === route ||
        pathname.startsWith(route) ||
        pathname.includes(route) ||
        pathname === "/",
    );
  }, [pathname]);

  useEffect(() => {
    const handleUser = async () => {
      const user = await getUser();
      setTimeout(() => {
        if (user) {
          setUser(user);
        }
        if (!isUnauthenticated && !!user === false) {
          toastFn(toast, "Unauthorized access. Please sign in.");
          // router.push("/auth/login");
        }
        setFetchingUser(false);
      }, 1000);
    };

    handleUser();

    getRefreshToken().then((token) => {
      setRefreshToken(token);
    });
  }, [pathname, isUnauthenticated]);

  useEffect(() => {
    if (accessToken) {
      if (typeof window !== "undefined") {
        localStorage.setItem("access_token", accessToken);
      }
    }
  }, [accessToken]);

  const fifteenMinutes = 15 * 60 * 1000;

  const handleLogout = () => {
    resetAuthCookies().then(() => {
      setUser(null);
      localStorage.removeItem("access_token");
      router.push("/auth/login");
    });
  };

  useEffect(() => {
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
            toastFn(toast, "Session expired. Please sign in again.");
            handleLogout();
          });
      }
    };

    const interval = setInterval(handleRefresh, fifteenMinutes);
    handleRefresh();

    return () => clearInterval(interval);
  }, [user, refreshToken]);

  //inactivity logout
  useEffect(() => {
    let inactivityTimeout: NodeJS.Timeout;

    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimeout);
      inactivityTimeout = setTimeout(handleLogout, fifteenMinutes);
    };

    const activityEvents = ["mousemove", "keydown", "scroll", "click"];

    activityEvents.forEach((event) =>
      window.addEventListener(event, resetInactivityTimer),
    );

    resetInactivityTimer();

    return () => {
      clearTimeout(inactivityTimeout);
      activityEvents.forEach((event) =>
        window.removeEventListener(event, resetInactivityTimer),
      );
    };
  }, []);

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
