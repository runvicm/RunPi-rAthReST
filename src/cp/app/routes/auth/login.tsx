import { useAuth } from "~/hooks/useAuth";

export default function Login() {
  const { login, loading, error } = useAuth();

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await login(
      formData.get("username") as string,
      formData.get("password") as string,
    );
  }

  return (
    <form
      method="post"
      className="card bg-base-200 border border-base-300 "
      onSubmit={handleSubmit}
    >
      <div className="card-body gap-3">
        {error && <p style={{ color: "red" }}>{error}</p>}

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
          disabled={loading}
        >
          {loading ? "Logging in..." : "Log in"}
        </button>
        <p className="text-sm text-base-content/60">
          No account yet?{" "}
          <a href="#register" className="link link-primary">
            Register
          </a>
        </p>
      </div>
    </form>
  );
}
