# RunPi rAthReST
Made by **[Project RunPi](https://projectrunpi.com/)**

> 🚧 **Early Days** — Just getting started, nothing stable yet.
> This is a learning and portfolio project kept simple on purpose.

**rAthReST** is a **rAthena Request-Response Service Tool**.

It mirrors what FluxCP does for your rAthena server — but built
as a full, standalone API instead of a bundled panel.
No fixed frontend: you get the same data and functionality to build
your own website or dashboard on top of, in whatever stack you like.


## 🚀 What It's For

* **Headless:** Just an API — pair with React, Vue, Next.js, etc.
* **Laravel + Eloquent:** Clean way to work with rAthena DB.
* Built as a learning/portfolio project, kept simple on purpose.


## 📁 Repository Structure

```text
.devcontainer/      <- VS Code devcontainer config
docker/             <- Dockerfile(s), Nginx conf, etc.
src/
    rathrest/       <- Laravel API (the core service)
    cp/             <- Reference frontend (standalone client)


`cp/` is just an example client to prove the API works standalone — the API doesn't depend on it, and any frontend could take its place.
```


## 🧩 Current Focus

### Milestone 1: Authentication & Account Viewer
Using Laravel Sanctum for token-based auth:
- [x] Register
- [x] Login / Logout
- [X] View authenticated account details
- [ ] Character, Storage
- [ ] News management for higher roles

### Milestone 2: User Profile Management
- [ ] Update profile information (name, email)
- [ ] Change password functionality

### Milestone 3: Core Application Features
- [ ] Server Status (online, offline)
- [ ] Additional server status & metrics


## ⚠️ Disclaimer

> [!WARNING]
> **rAthReST** is an independent, open-source project and is
> **not** affiliated with, endorsed by, or officially connected
> to the rAthena project or its development team. All product names,
> trademarks, and registered trademarks belong to their owners.


## 📄 License

This project is licensed under a **Custom Fair-Use License** (see [LICENSE](LICENSE)).

- **✅ Allowed:** Free to use, modify, and run on any rAthena server (including servers with cash shops or VIP).
- **❌ Prohibited:** Selling the source code, selling modified versions, or charging clients for this API tool.