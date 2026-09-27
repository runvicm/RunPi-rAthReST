import React from "react";
import { useAuth } from "~/hooks/useAuth";

export default function Register() {
  const { register, loading, error } = useAuth();

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await register(
      formData.get("username") as string,
      formData.get("password") as string,
      formData.get("email") as string,
      formData.get("gender") as string,
      formData.get("birthdate") as string | null,
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
            type="password"
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
              <input type="radio" name="gender" value="M" className="radio" />
              <span>Male</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="gender" value="F" className="radio" />
              <span>Female</span>
            </label>
          </div>
        </fieldset>

        <fieldset className="fieldset">
          <legend className="label mb-2">Date of Birth</legend>
          <input
            type="date"
            name="birthdate"
            className="input input-bordered w-full max-w-xs"
          />
        </fieldset>

        <button
          type="submit"
          className="btn btn-primary mt-2 btn-wide"
          disabled={loading}
        >
          {loading ? "Creating account..." : "Create my Account"}
        </button>
      </div>
    </form>
  );
}
