import { Outlet } from "react-router";
import HomeNav from "~/components/navbar/HomeNav";
import ServerStatus from "~/components/navbar/ServerStatus";

export default function HomeLayout() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-[240px_1fr] gap-8 py-8 items-start">
      <aside className="md:sticky md:top-20 order-last md:order-first">
        <div className="card bg-base-200 border border-base-300 mb-4">
          <div className="card-body p-0">
            <HomeNav />
          </div>
        </div>
        <ServerStatus />
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
