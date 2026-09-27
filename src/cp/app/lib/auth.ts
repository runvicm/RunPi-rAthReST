import { redirect } from "react-router";

const BACKEND_URL = "http://localhost:8080";

export async function requireAuth(endpoint: string = "/api/account") {
  const res = await fetch(`${BACKEND_URL}${endpoint}`, {
    credentials: "include",
    headers: { Accept: "application/json" },
  });

  if (!res.ok) {
    throw redirect("/auth/login");
  }

  return res.json();
}
