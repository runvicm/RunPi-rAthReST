import { useEffect, useState } from "react";

const LINES = [
  "Entering Rune-Midgard...",
  "Summoning Kafra service...",
  "Loading the map server...",
  "Waking up a Poring...",
];

export function HydrationFallback() {
  const [line, setLine] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setLine((i) => (i + 1) % LINES.length);
    }, 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-base-100 text-base-content flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Ring, styled like a warp portal */}
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full border-4 border-base-300" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-primary animate-spin" />
          <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-secondary animate-[spin_1.6s_linear_infinite_reverse]" />
          <div className="absolute inset-0 flex items-center justify-center text-2xl">
            🌀
          </div>
        </div>

        <div className="text-center">
          <p className="font-extrabold text-lg tracking-tight">
            Custom<span className="text-primary">CP</span>
          </p>
          <p className="text-sm text-base-content/60 mt-1 min-height: 1.25rem transition-opacity">
            {LINES[line]}
          </p>
        </div>

        {/* Thin indeterminate progress bar */}
        <div className="w-48 h-1 rounded-full bg-base-300 overflow-hidden">
          <div className="h-full w-1/3 rounded-full bg-primary animate-[loadingbar_1.2s_ease-in-out_infinite]" />
        </div>
      </div>

      <style>{`
        @keyframes loadingbar {
          0%   { transform: translateX(-100%); }
          50%  { transform: translateX(150%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
