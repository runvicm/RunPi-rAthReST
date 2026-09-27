import React from "react";

export default function ServerStatus() {
  return (
    <div className="card bg-base-200 border border-base-300 hidden md:block">
      <div className="card-body p-4">
        <h3 className="font-semibold text-sm text-base-content/60 mb-1">
          Server status
        </h3>
        <ul className="text-sm divide-y divide-base-300">
          <li className="flex justify-between py-2">
            <span className="text-base-content/60">Login</span>
            <span className="badge badge-success badge-sm gap-1">● Online</span>
          </li>
          <li className="flex justify-between py-2">
            <span className="text-base-content/60">Players</span>
            <b>1,284</b>
          </li>
          <li className="flex justify-between py-2">
            <span className="text-base-content/60">Peak</span>
            <b>2,146</b>
          </li>
          <li className="flex justify-between py-2">
            <span className="text-base-content/60">Registered</span>
            <b>48,392</b>
          </li>
        </ul>
      </div>
    </div>
  );
}
