// app/lib/auth/auth.ts
import { request } from "../api/client";

export type UserProps = {
  username: string;
  role: number;
};

export type RegisterInputProps = {
  username: string;
  password: string;
  email: string;
  gender: string;
  birthdate: string | null;
};

const csrf = () => request("/sanctum/csrf-cookie", { prefix: "" });

export const auth = {
  async login(username: string, password: string) {
    await csrf();
    await request("/auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
  },

  async register(input: RegisterInputProps) {
    await csrf();
    await request("/auth/register", {
      method: "POST",
      body: JSON.stringify(input),
    });
  },

  async logout() {
    await request("/logout", { method: "POST" });
  },

  async me() {
    return request<UserProps>("/account");
  },
};
