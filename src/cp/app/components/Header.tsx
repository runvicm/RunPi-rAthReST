import { IconChevronDown } from "@tabler/icons-react";
import { NavLink, useLoaderData } from "react-router";
import { useAuth } from "~/hooks/useAuth";

export default function Header() {
  const { logout, loading } = useAuth();
  const account = useLoaderData();

  return (
    <header className="navbar bg-base-200 border-b border-base-300 sticky top-0 z-30 px-4 md:px-8">
      <div className="flex-1">
        <NavLink to="/" className="text-xl font-extrabold tracking-tight">
          rRathReST<span className="text-primary">CP</span>
        </NavLink>
      </div>
      <nav className="flex flex-wrap gap-1" id="mn">
        <NavLink to="/" className="btn btn-ghost btn-sm">
          Home
        </NavLink>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
            Information <IconChevronDown size={16} />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-200 border border-base-300 rounded-box z-10 w-40 p-2 shadow"
          >
            <li>
              <NavLink to="#ladder">Ladder</NavLink>
            </li>
            <li>
              <NavLink to="#market">Market</NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/account/view" className="btn btn-ghost btn-sm">
          Account
        </NavLink>
        <NavLink to="/about" className="btn btn-ghost btn-sm">
          About
        </NavLink>

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
      </nav>
      <div className="flex-none flex items-center gap-2 ml-2" id="acts"></div>
    </header>
  );
}
