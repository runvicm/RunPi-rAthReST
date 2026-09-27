export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-16">
      {/* Eyebrow + headline */}
      <span className="badge badge-outline badge-primary uppercase tracking-wide text-xs mb-4">
        About this server
      </span>
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-6">
        A Ragnarok server built to test something else.
      </h1>

      {/* Intro */}
      <p className="text-base-content/80 leading-relaxed mb-10">
        This server exists mainly for fun, for a small group of friends who
        wanted somewhere to play. But the site you're looking at right now is
        the real project — it runs entirely on a REST API called{" "}
        <span className="font-semibold text-primary">rAthReST</span>, built from
        scratch on top of this server's own database.
      </p>

      <div className="divider" />

      {/* What is rAthReST */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">What is rAthReST?</h2>
        <p className="text-base-content/80 leading-relaxed mb-4">
          Most rAthena servers run their web panel the old way — a PHP app (like
          FluxCP) that talks to the database directly on every page load.
          rAthReST takes a different approach: it's a standalone Laravel API
          that sits in front of the game's database, and this website is just
          one client of that API. Nothing you see on this site reaches the
          database directly — every page, every login, every character lookup
          goes through the same API anyone else could call too.
        </p>
        <p className="text-base-content/80 leading-relaxed">
          That separation is the actual point of this project — an API that
          isn't tied to one website, one framework, or one way of displaying the
          data.
        </p>
      </section>

      <div className="divider" />

      {/* What it handles right now */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-5">What it handles right now</h2>

        <div className="space-y-5">
          <div>
            <h3 className="font-semibold mb-1">Account authentication</h3>
            <p className="text-base-content/80 leading-relaxed">
              Registration and login run against this server's real login table,
              session-based and cookie-secured, with the same protections you'd
              expect from a production web app — CSRF, hashed and validated
              input, rate limiting on repeated attempts.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Server status</h3>
            <p className="text-base-content/80 leading-relaxed">
              The player count and server state on the homepage are live reads
              from the game server's own tables, not a cached number someone
              updates by hand.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Account access</h3>
            <p className="text-base-content/80 leading-relaxed">
              Once logged in, everything under your account — profile,
              characters, and whatever gets added next — is fetched per-request
              and scoped to your own session. No one else's data is a URL away.
            </p>
          </div>
        </div>

        <p className="text-base-content/60 text-sm mt-5">
          Rankings, character lookups, and a few other read-only endpoints are
          next.
        </p>
      </section>

      <div className="divider" />

      {/* Closing */}
      <section>
        <h2 className="text-xl font-bold mb-3">So, mainly — it's for fun</h2>
        <p className="text-base-content/80 leading-relaxed">
          The server itself is low-key: fast leveling, fair drops, a market that
          stays busy, and a handful of friends killing time together. The API
          underneath is the part built to last past this server — a reusable
          piece of infrastructure any rAthena server could run on, not just this
          one.
        </p>
      </section>
    </div>
  );
}
