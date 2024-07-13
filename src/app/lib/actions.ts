"use server";

import { User } from "@/context/AuthContext/types";
import { cookies } from "next/headers";

export async function preserveSession(
  user: User,
  accessToken: string,
  refreshToken: string
) {
  cookies().set("carbon_session_user", JSON.stringify(user), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // one week
    path: "/",
  });

  cookies().set("carbon_session_access_token", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60, // 60 minutes
    path: "/",
  });

  cookies().set("carbon_session_refresh_token", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // one week
    path: "/",
  });
}

export async function resetAuthCookies() {
  cookies().set("carbon_session_user", "");
  cookies().set("carbon_session_access_token", "");
  cookies().set("carbon_session_refresh_token", "");
}

export async function getUser() {
  const user = cookies().get("carbon_session_user")?.value;
  if (user) {
    return JSON.parse(user) as User;
  } else return null;
}

export async function getAccessToken() {
  let accessToken = cookies().get("carbon_session_access_token")?.value;
  return accessToken ? accessToken : "";
}

export async function getRefreshToken() {
  let refreshToken = cookies().get("carbon_session_refresh_token")?.value;
  return refreshToken ? refreshToken : "";
}
