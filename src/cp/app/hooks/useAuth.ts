import { useState, useCallback } from "react";
import { useNavigate } from "react-router";

const BACKEND_URL = "http://localhost:8000"; // 👈 browser-reachable URL, adjust to your mapped port

type ErrorResponseProps = {
  message?: string;
  errors?: Record<string, string[]>;
};

function getCookie(name: string): string {
  return decodeURIComponent(
    document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${name}=`))
      ?.split("=")[1] ?? "",
  );
}

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const login = useCallback(
    async (username: string, password: string) => {
      setLoading(true);
      setError(null);

      try {
        // Step 1 — get CSRF cookie
        await fetch(`${BACKEND_URL}/sanctum/csrf-cookie`, {
          credentials: "include",
        });

        // Step 2 — read XSRF token from browser cookie
        const xsrfToken = getCookie("XSRF-TOKEN");

        // Step 3 — login
        const res = await fetch(`${BACKEND_URL}/api/auth/login`, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-XSRF-TOKEN": xsrfToken,
          },
          body: JSON.stringify({ username, password }),
        });

        const data = (await res.json()) as ErrorResponseProps;

        if (!res.ok) {
          setError(data.message || "Login failed");
          return false;
        }

        navigate("/account");
        return true;
      } catch (err) {
        setError("Network error — please try again");
        return false;
      } finally {
        setLoading(false);
      }
    },
    [navigate],
  );

  const register = useCallback(
    async (
      username: string,
      password: string,
      email: string,
      gender: string,
      birthdate: string | null,
    ) => {
      setLoading(true);
      setError(null);

      try {
        await fetch(`${BACKEND_URL}/sanctum/csrf-cookie`, {
          credentials: "include",
        });

        const xsrfToken = getCookie("XSRF-TOKEN");

        const res = await fetch(`${BACKEND_URL}/api/auth/register`, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-XSRF-TOKEN": xsrfToken,
          },
          body: JSON.stringify({
            username,
            password,
            email,
            gender,
            birthdate,
          }),
        });

        const data = (await res.json()) as ErrorResponseProps;

        if (!res.ok) {
          setError(data.message || "Registration Failed");
          return false;
        }

        navigate("/auth/login");
        return true;
      } catch (err) {
        setError("Network error — please try again");
        return false;
      } finally {
        setLoading(false);
      }
    },
    [navigate],
  );

  const logout = useCallback(async () => {
    setLoading(true);

    try {
      const xsrfToken = getCookie("XSRF-TOKEN");

      const res = await fetch(`${BACKEND_URL}/api/logout`, {
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "X-XSRF-TOKEN": xsrfToken,
        },
      });

      if (!res.ok) {
        console.error("Logout failed", await res.json());
      }

      navigate("/auth/login");
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  return { login, logout, register, loading, error };
}
