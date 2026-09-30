import { Outlet, useLocation } from "react-router";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Hero from "~/components/Hero";
import { HydrationFallback } from "~/components/HydrationFallback";
import PageHero from "~/components/PageHero";

const TITLES: Record<string, string> = {
  "/auth": "News",
};

const API_URL = import.meta.env.VITE_API_URL;

export async function clientLoader() {
  const res = await fetch(`${API_URL}/api/account`, {
    credentials: "include",
    headers: { Accept: "application/json" },
  });
  return res.ok ? await res.json() : null;
}
clientLoader.hydrate = true as const;

export function HydrateFallback() {
  return <HydrationFallback />;
}

export default function Layout() {
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
