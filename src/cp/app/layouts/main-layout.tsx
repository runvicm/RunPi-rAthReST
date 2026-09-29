import React, { type ComponentType } from "react";
import { Outlet, useLocation } from "react-router";
import Header from "~/components/Header";
import Hero from "~/components/Hero";
import { HydrationFallback } from "~/components/HydrationFallback";
import AccountNav from "~/components/navbar/AccountNav";
import AuthNav from "~/components/navbar/AccountNav";
import HomeNav from "~/components/navbar/HomeNav";
import ServerStatus from "~/components/navbar/ServerStatus";

const API_URL = import.meta.env.VITE_API_URL;

const SIDE_NAV: Record<string, ComponentType> = {
  "/": HomeNav,
  "/account": AccountNav,
};

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
  const segments = pathname.split("/");
  const firstSegment = `/${segments[1] || ""}`;
  const Navbar = SIDE_NAV[firstSegment] || HomeNav;

  console.log(firstSegment);

  return (
    <>
      <Header />
      <Hero />
      <Outlet />
    </>
  );
}
