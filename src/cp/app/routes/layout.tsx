import React, { type ComponentType } from "react";
import { Outlet, useLocation } from "react-router";
import Header from "~/components/Header";
import Hero from "~/components/Hero";
import AuthNav from "~/components/navbar/AuthNav";
import HomeNav from "~/components/navbar/HomeNav";
import ServerStatus from "~/components/navbar/ServerStatus";

const SIDE_NAV: Record<string, ComponentType> = {
  "/": HomeNav,
  auth: AuthNav,
};

export default function Layout() {
  const { pathname } = useLocation();
  const segments = pathname.split("/");
  const firstSegment = `/${segments[1] || ""}`;
  const ActiveView = SIDE_NAV[firstSegment] || HomeNav;

  return (
    <>
      <Header />
      <Hero />
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-[240px_1fr] gap-8 py-8 items-start">
        <aside className="md:sticky md:top-20 order-last md:order-first">
          <div className="card bg-base-200 border border-base-300 mb-4">
            <div className="card-body p-0" id="sidenav">
              <ActiveView />
            </div>
          </div>
          <ServerStatus />
        </aside>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}
