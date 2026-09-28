# RunPi rAthReST
Made by **[Project RunPi](https://projectrunpi.com/)**

> 🚧 Just getting started — this is early days, nothing stable yet. And this is the first time im doing this.

**rAthReST** is a **rAthena Request-Response Service Tools**.

It mirrors what FluxCP does for your rAthena server — but built as a full, standalone API instead of a bundled panel. No fixed frontend: you get the same data and functionality to build your own website or dashboard on top of, in whatever stack you like.

## 🚀 What it's for

* **Headless:** just an API — pair it with React, Vue, Next.js, a mobile app, whatever.
* **Laravel + Eloquent:** clean, familiar way to work with the rAthena database.
* Built as a learning/portfolio project, kept simple on purpose.

## 📁 Structure

```
.devcontainer/      <- VS Code devcontainer config
docker/             <- Dockerfile(s), nginx conf, etc.
src/
    rathrest/       <- Laravel, the actual rAthReST API
    cp/             <- reference frontend consuming the API (not part of rAthReST itself)
```

`cp/` is just an example client to prove the API works standalone — the API doesn't depend on it, and any frontend could take its place.

## 🧩 Current Focus

### Milestone 1: Authentication and an account viewer, using Laravel Sanctum for token-based auth.
- [x] Register
- [x] Login / Logout
- [ ] View authenticated account details
- [ ] Adding News for higher roles

### Milestone 2: User Profile Management
- [ ] Update profile information (name, email)
- [ ] Change password functionality

### Milestone 3: Core Application Features
- [ ] Server Status (onlinem offline)
- [ ] Additional server Status


## 📄 License

MIT

---

