import React from "react";

export default function Register() {
  return (
    <form
      method="post"
      className="card bg-base-200 border border-base-300 "
      // onSubmit={handleSubmit}
    >
      <div className="card-body gap-3">
        {/* {error && <p style={{ color: "red" }}>{error}</p>} */}

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
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
        </fieldset>

        <fieldset className="fieldset">
          <label className="label" htmlFor="confirm_password">
            Confirm Password
          </label>
          <input
            type="confirm_password"
            name="confirm_password"
            className="input"
            placeholder="Confirm Password"
          />
        </fieldset>

        <fieldset className="fieldset">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Confirm Password"
          />
        </fieldset>

        <fieldset className="fieldset">
          <label className="label" htmlFor="confirm_email">
            Confirm Email
          </label>
          <input
            type="confirm_email"
            name="confirm_email"
            className="input"
            placeholder="Confirm Password"
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="label mb-2">Gender</legend>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="male"
                className="radio"
              />
              <span>Male</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="female"
                className="radio"
              />
              <span>Female</span>
            </label>
          </div>
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Date of Birth</legend>
          <input type="date" className="input input-bordered w-full max-w-xs" />
        </fieldset>

        <button
          type="submit"
          className="btn btn-primary mt-2 btn-wide"
          // disabled={loading}
        >
          {/* {loading ? "Logging in..." : "Log in"} */} Create my Account
        </button>
      </div>
    </form>
  );
}
