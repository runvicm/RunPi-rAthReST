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
            <div className="stats stats-vertical sm:stats-horizontal shadow bg-base-200 border border-base-300 mt-12 md:mt-16">
              <div className="stat py-3 px-4">
                <div className="stat-title text-xs">Login</div>
                <div className="stat-value text-success text-base">
                  &#9679; Online
                </div>
              </div>
              <div className="stat py-3 px-4">
                <div className="stat-title text-xs">Char</div>
                <div className="stat-value text-success text-base">
                  &#9679; Online
                </div>
              </div>
              <div className="stat py-3 px-4">
                <div className="stat-title text-xs">Map</div>
                <div className="stat-value text-success text-base">
                  &#9679; Online
                </div>
              </div>
              <div className="stat py-3 px-4">
                <div className="stat-title text-xs">Players online</div>
                <div className="stat-value text-base">1,284</div>
              </div>
              <div className="stat py-3 px-4">
                <div className="stat-title text-xs">Mode</div>
                <div className="stat-value text-base">Renewal</div>
              </div>
              <div className="stat py-3 px-4">
                <div className="stat-title text-xs">Rates</div>
                <div className="stat-value text-base">50x/50x/5x</div>
              </div>
              <div className="stat py-3 px-4">
                <div className="stat-title text-xs">Max level</div>
                <div className="stat-value text-base">99/70</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
