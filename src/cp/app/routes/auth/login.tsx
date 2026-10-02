import { auth } from "~/lib/api/auth";
import type { Route } from "./+types/login";
import { Form, redirect, useActionData, useNavigation } from "react-router";
import { ApiError } from "~/lib/api/client";

export async function clientAction({ request }: Route.ClientActionArgs) {
  const form = await request.formData();
  try {
    await auth.login(
      String(form.get("username")),
      String(form.get("password")),
    );
    return redirect("/account/view");
  } catch (e) {
    if (e instanceof ApiError) return { error: e.message, errors: e.errors };
    return { error: "Network error — please try again" };
  }
}

export default function Login() {
  const result = useActionData<typeof clientAction>();
  const busy = useNavigation().state === "submitting";

  return (
    <Form method="post" className="card bg-base-200 border border-base-300 ">
      <div className="card-body gap-3">
        {result?.error && <p style={{ color: "red" }}>{result.error}</p>}

        <fieldset className="fieldset">
          <label className="label" htmlFor="username">
            Username
          </label>

          <input
            type="text"
            id="username"
            name="username"
            className="input"
            placeholder="Name"
          />
        </fieldset>

        <fieldset className="fieldset">
          <label className="label" htmlFor="password">
            Password
          </label>
          {/* Added name="password" */}
          <input
            type="password"
            id="password"
            name="password"
            className="input"
            placeholder="Password"
          />
        </fieldset>

        <button
          type="submit"
          className="btn btn-primary mt-2 btn-wide"
          disabled={busy}
        >
          {busy ? "Logging in..." : "Log in"}
        </button>
        <p className="text-sm text-base-content/60">
          No account yet?{" "}
          <a href="#register" className="link link-primary">
            Register
          </a>
        </p>
      </div>
    </Form>
  );
}
