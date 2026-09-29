import type { ComponentType } from "react";
import { NavLink } from "react-router";

export interface NavItem {
  to: string;
  label: string;
  icon: ComponentType<{ size?: number; className?: string }>;
}

export interface NavSectionProps {
  title: string;
  links: NavItem[];
}

export function NavSection({ title, links }: NavSectionProps) {
  return (
    <ul className="menu menu-vertical bg-base-200 rounded-box w-56 lg:w-full gap-1 p-2">
      <li className="menu-title text-xs uppercase tracking-wide text-base-content/50">
        {title}
      </li>
      {links.map(({ to, label, icon: Icon }) => (
        <li key={to}>
          <NavLink
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-2 ${isActive ? "menu-active font-semibold" : ""}`
            }
          >
            <Icon size={16} className="shrink-0" />
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
