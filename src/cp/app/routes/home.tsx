import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "rAthReST CP - HOME" },
    { name: "description", content: "Welcome to rAthReST CP" },
  ];
}

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
      <span className="badge badge-outline badge-primary uppercase tracking-wide text-xs mb-4">
        Updates
      </span>

      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8">
        Latest News
      </h1>
      <ul className="space-y-0">
        {NEWS.map(([d, t, s], i) => (
          <li key={i} className="py-4 border-t border-base-300 flex gap-4">
            <time className="text-base-content/50 text-sm w-24 shrink-0">
              ${d}
            </time>
            <div>
              <b className="block">${t}</b>
              <span className="text-base-content/60 text-sm">${s}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const NEWS = [
  [
    "24 Sep 2026",
    "Endless Tower opens for the weekend",
    "Double drops on floors 1–100 until Sunday midnight.",
  ],
  [
    "18 Sep 2026",
    "Patch 2026.09 notes",
    "Rebalanced Assassin Cross skills and fixed the guild storage bug.",
  ],
  [
    "09 Sep 2026",
    "WoE schedule changed",
    "Castle wars now run Wednesday and Saturday at 20:00 server time.",
  ],
];
