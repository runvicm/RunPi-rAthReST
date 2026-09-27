import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("auth/login", "routes/auth/login.tsx"),
    route("auth/register", "routes/auth/register.tsx"),

    ...prefix("account", [
      index("routes/account/view.tsx"),
      // route(":city", "./concerts/city.tsx"),
      // route("trending", "./concerts/trending.tsx"),
    ]),

    route("about", "routes/about.tsx"),
  ]),
] satisfies RouteConfig;
