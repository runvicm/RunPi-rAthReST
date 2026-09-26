# RunPi rAthReST

> 🚧 Just getting started — this is early days, nothing stable yet.

**rAthReST** is a **rAthena Request-Response Service Tools**.

It mirrors what FluxCP does for your rAthena server — but built as a full, standalone API instead of a bundled panel. No fixed frontend: you get the same data and functionality to build your own website or dashboard on top of, in whatever stack you like.

## 🚀 What it's for

* **Headless:** just an API — pair it with React, Vue, Next.js, a mobile app, whatever.
* **Laravel + Eloquent:** clean, familiar way to work with the rAthena database.
* Built as a learning/portfolio project, kept simple on purpose.

## 📁 Structure

\`\`\`
.devcontainer/  <- VS Code devcontainer config
docker/         <- Dockerfile(s), nginx conf, etc.
src/
    raae/       <- Laravel, the actual rAthReST API
    cp/         <- reference frontend consuming the API (not part of rAthReST itself)
\`\`\`

`cp/` is just an example client to prove the API works standalone — the API doesn't depend on it, and any frontend could take its place.

## 🧩 Current Focus

First milestone: authentication and an account viewer, using Laravel Sanctum for token-based auth.

- Register
- Login / Logout
- View authenticated account details

## 📄 License

MIT

---

Made by **[Project RunPi](https://projectrunpi.com/)**