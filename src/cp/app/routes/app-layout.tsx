import { Outlet, useLocation } from "react-router";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Hero from "~/components/Hero";
import PageHero from "~/components/PageHero";
import { auth } from "~/lib/api/auth";
import { ApiError } from "~/lib/api/client";

const TITLES: Record<string, string> = {
  "/auth": "News",
};

export async function clientLoader() {
  try {
    const user = await auth.me(); // { username, role }
    return { user };
  } catch (e) {
    if (e instanceof ApiError && e.status === 401) return { user: null };
    throw e;
  }
}

// const API_URL = import.meta.env.VITE_API_URL;

// export async function clientLoader() {
//   const res = await fetch(`${API_URL}/api/account`, {
//     credentials: "include",
//     headers: { Accept: "application/json" },
//   });
//   return res.ok ? await res.json() : null;
// }

export default function AppLayout() {
  const { pathname } = useLocation();
  const firstSegment = `/${pathname.split("/")[1] ?? ""}`;
  const isHome = pathname === "/";

  return (
    <>
      <Header />
      {isHome ? <Hero /> : <PageHero title={TITLES[firstSegment] ?? ""} />}
      <Outlet />
      <Footer />
    </>
  );
}
