import {
  IconBox,
  IconKey,
  IconList,
  IconNews,
  IconSword,
  IconTicket,
  IconUser,
  IconUsers,
  type TablerIcon,
} from "@tabler/icons-react";
import { useRouteLoaderData } from "react-router";
import { NavSection, type NavItem } from "./NavSection";

const accountLinks: NavItem[] = [
  { to: "/account/view", label: "My Account", icon: IconUser },
  { to: "/account/characters", label: "Characters", icon: IconUsers },
  { to: "/account/storage", label: "Kafra Storage", icon: IconBox },
  { to: "/account/security", label: "Change Password/Email", icon: IconKey },
  { to: "/account/tikcets", label: "Change Password/Email", icon: IconTicket },
];

const adminLinks: NavItem[] = [
  { to: "/admin/news/add", label: "Add News", icon: IconNews },
  { to: "/admin/accounts", label: "Account List", icon: IconList },
  { to: "/admin/characters", label: "Character List", icon: IconSword },
  { to: "/admin/tickets", label: "Ticket List", icon: IconTicket },
];

export default function AccountNav() {
  const loginData = useRouteLoaderData("layouts/main-layout");
  return (
    <nav className="flex flex-col gap-4">
      <NavSection title="Account" links={accountLinks} />
      {loginData?.role > 0 && (
        <NavSection title="Administration" links={adminLinks} />
      )}
    </nav>
  );
}
