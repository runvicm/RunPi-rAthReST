import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/app-layout.tsx", [
    layout("layouts/home-layout.tsx", [
      index("routes/home.tsx"),
      route("auth/login", "routes/auth/login.tsx"),
      route("auth/register", "routes/auth/register.tsx"),

      route("server-info", "routes/server-info.tsx"),
      route("download", "routes/download.tsx"),
      route("rules", "routes/rules.tsx"),
    ]),

    ...prefix("account", [
      layout("layouts/account-layout.tsx", [
        route("view", "routes/account/view.tsx"),
        route("characters", "routes/account/characters.tsx"),
        route("storage", "routes/account/storage.tsx"),
      ]),
    ]),

    route("about", "routes/about.tsx"),
  ]),
] satisfies RouteConfig;
