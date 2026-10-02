import { request } from "./client";

export type AccountInfoProps = {
  username: string;
  email: string;
  gender: string;
  state: string;
  loginCount: number;
  vipStatus: string;
  lastLogin: string;
  creditBalance: string;
  birthdate: string | null;
  lastIP: string;
  accountID: number;
  groupID: number;
};

export const acc = {
  async me() {
    return request<AccountInfoProps>("/account");
  },
};
