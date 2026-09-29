import { Navigate, Outlet, useRouteLoaderData } from "react-router";
import AccountNav from "~/components/navbar/AccountNav";
import ServerStatus from "~/components/navbar/ServerStatus";

type Account = { username: string; role: number } | null;
export default function AccountLayout() {
  const account = useRouteLoaderData("layouts/main-layout") as
    | Account
    | undefined;

  if (!account) return <Navigate to="/auth/login" replace />;

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-[240px_1fr] gap-8 py-8 items-start">
      <aside className="md:sticky md:top-20 order-last md:order-first">
        <div className="card bg-base-200 border border-base-300 mb-4">
          <div className="card-body p-0">
            <AccountNav />
          </div>
        </div>
        <ServerStatus />
      </aside>
      <main>
        <div>
          <p>Logged in as {account.username}</p>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
