export default function Login() {
  return (
    <form id="lf" className="card bg-base-200 border border-base-300 ">
      <div className="card-body gap-3">
        <fieldset className="fieldset">
          <label className="label" htmlFor="name">
            Name
          </label>
          <input type="text" id="name" className="input" placeholder="Name" />
        </fieldset>

        <fieldset className="fieldset">
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="input"
            placeholder="Password"
          />
        </fieldset>

        <button className="btn btn-primary mt-2 btn-wide">Log in</button>
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
