import { IconChevronDown } from "@tabler/icons-react";
import { NavLink, useLoaderData } from "react-router";
import { useAuth } from "~/hooks/useAuth";

export default function Header() {
  const { logout, loading } = useAuth();
  const account = useLoaderData();

  return (
    <header className="navbar bg-base-200 border-b border-base-300 px-4 md:px-8">
      <div className="navbar-start">
        <NavLink to="/" className="text-xl font-bold">
          rRathReST<span className="text-primary">CP</span>
        </NavLink>
      </div>

      <nav className="navbar-center hidden md:flex gap-1">
        <NavLink to="/" className="btn btn-ghost btn-sm">
          Home
        </NavLink>
        <NavLink to="/ranking" className="btn btn-ghost btn-sm">
          Ranking
        </NavLink>
        <NavLink to="/about" className="btn btn-ghost btn-sm">
          About
        </NavLink>
      </nav>

      <div className="navbar-end gap-2">
        <div className="flex items-center gap-2 text-sm mr-2">
          <span className="status status-success" />
          <span className="hidden sm:inline">Online</span>
        </div>

        {account ? (
          <button
            onClick={logout}
            disabled={loading}
            className="btn btn-error btn-sm"
          >
            Logout
          </button>
        ) : (
          <>
            <NavLink to="/auth/login" className="btn btn-ghost btn-sm">
              Log in
            </NavLink>
            <NavLink to="/auth/register" className="btn btn-primary btn-sm">
              Register
            </NavLink>
          </>
        )}
      </div>
    </header>
  );
}
