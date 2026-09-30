import {
  IconDownload,
  IconInfoCircle,
  IconInfoHexagon,
  IconNews,
} from "@tabler/icons-react";
import { NavSection, type NavItem } from "./NavSection";

const homeLinks: NavItem[] = [
  { to: "/", label: "News", icon: IconNews },
  { to: "/server-info", label: "Server Info", icon: IconInfoCircle },
  { to: "/download", label: "Download", icon: IconDownload },
  { to: "/rules", label: "Rules", icon: IconInfoHexagon },
];

export default function HomeNav() {
  return (
    <nav className="flex flex-col gap-4">
      <NavSection title="Account" links={homeLinks} />
    </nav>
  );
}
