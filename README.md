# RunPi rAthReST

Made by [Project RunPi](https://projectrunpi.com/)

> 🚧 **Early days.** Just getting started, nothing stable yet. This is a learning and portfolio project, kept simple on purpose.

**rAthReST** is a rAthena Request-Response Service Tool.

It covers what FluxCP does for your rAthena server, but as a full, standalone API instead of a bundled panel. There's no fixed frontend: you get the same data and functionality to build your own website or dashboard on top of, in whatever stack you like.

## 🚀 What it's for

- **Headless:** just an API. Pair it with React, Vue, Next.js, etc.
- **Laravel + Eloquent:** a clean way to work with the rAthena database.
- **Learning project:** built to learn and to show my work, kept simple on purpose.

## 📁 Repository structure

```
.devcontainer/   VS Code devcontainer config
docker/          Dockerfile(s), Nginx conf, etc.
src/
  rathrest/      Laravel API (the core service)
  cp/            Reference frontend (standalone client)
```

`cp/` is just an example client to prove the API works standalone. The API doesn't depend on it, and any frontend could take its place.

## 🧩 Current focus

**Milestone 1: Authentication & account viewer** (Laravel Sanctum, token-based)
- [x] Register
- [x] Login / logout
- [x] View authenticated account details
- [ ] Characters, storage
- [ ] News management for higher roles

**Milestone 2: User profile management**
- [ ] Update profile information (name, email)
- [ ] Change password

**Milestone 3: Core application features**
- [x] Server status (online/offline)
- [ ] Additional server status and metrics

## 💬 Feedback welcome

This is an early-stage project and I'm learning as I go. Suggestions, critiques, and issues are all appreciated. If you try it on your server and something breaks, please open an issue.

## ⚠️ Disclaimer

rAthReST is an independent project and is not affiliated with, endorsed by, or officially connected to the rAthena project or its development team. All product names, trademarks, and registered trademarks belong to their owners.

## 📄 License

This project uses the rAthReST Community Fair-Use License (see [LICENSE](https://github.com/runvicm/RunPi-rAthReST/blob/main/LICENSE)). It's source-available, not open source in the formal sense.

- ✅ **Allowed:** free to use, modify, and run on any rAthena server (including servers with cash shops or VIP). You can also charge for your own services, like setup or custom development.
- ❌ **Not allowed:** selling the source code, selling modified versions, or charging clients for this software itself.