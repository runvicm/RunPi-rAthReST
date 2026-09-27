import { Link } from "react-router";

export default function HomeNav() {
  return (
    <ul className="menu menu-paged menu-vertical bg-base-200 rounded-box w-56 lg:w-auto gap-2">
      <li>
        <Link to="#" className="">
          News
        </Link>
      </li>
      <li>
        <Link to="#" className="">
          Server Info
        </Link>
      </li>
      <li>
        <Link to="#" className="">
          Rules
        </Link>
      </li>
      <li>
        <Link to="#" className="">
          Download
        </Link>
      </li>
    </ul>
  );
}
