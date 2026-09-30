export default function Hero() {
  return (
    <div id="cover" className="border-b border-base-300">
      <div className="hero pt-16 md:pt-24 pb-4">
        <div className="hero-content text-center max-w-2xl">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Return to <span className="text-primary">Prontera</span>.
            </h1>
            <p className="py-4 text-base-content/70">
              Fast leveling, fair drops, and a market that stays busy. Create an
              account and be in game in five minutes.
            </p>
            <div className="flex gap-3 justify-center">
              <a href="#register" className="btn btn-primary">
                Create account
              </a>
              <a href="#market" className="btn btn-outline">
                Download Client
              </a>
            </div>
            <div className="flex items-center gap-6 mt-8">
              {["Login", "Char", "Map"].map((label) => (
                <div key={label} className="flex items-center gap-2 text-sm">
                  <span className="badge badge-success badge-xs" />
                  <span className="text-base-content/60">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
