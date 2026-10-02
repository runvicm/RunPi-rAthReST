import { data, useLoaderData, useRouteLoaderData } from "react-router";

const API_URL = import.meta.env.VITE_API_URL;

export async function clientLoader() {
  const res = await fetch(`${API_URL}/api/account/view`, {
    credentials: "include",
    headers: { Accept: "application/json" },
  });

  return res.ok ? await res.json() : null;
}

export default function View({
  account = {
    username: "tester",
    email: "tester@test.com",
    accountId: 2000000,
    groupId: 99,
    gender: "Female",
    state: "Normal",
    loginCount: 7,
    creditBalance: 0,
    birthdate: "",
    vipStatus: "Standard Account",
    lastLoginDate: "2026-09-25 07:42:51",
    lastUsedIp: "192.168.196.178",
  },
  serverName = "Fluxro",
  characters = [
    {
      slot: 1,
      name: "Shido2Ruki",
      jobClass: "Mage",
      baseLevel: 99,
      jobLevel: 1,
      zeny: 0,
      guild: null,
      status: "Offline",
    },
    {
      slot: 2,
      name: "asdasdasdasd",
      jobClass: "Novice",
      baseLevel: 1,
      jobLevel: 1,
      zeny: 0,
      guild: null,
      status: "Offline",
    },
    {
      slot: 3,
      name: "htrtdfgdr",
      jobClass: "Mage",
      baseLevel: 16,
      jobLevel: 1,
      zeny: 0,
      guild: null,
      status: "Offline",
    },
  ],
  storageItems = [],
  onModifyPreferences = () => {},
  onResetLook = () => {},
  onResetPosition = () => {},
}) {
  const totalZeny = characters.reduce((sum, c) => sum + (c.zeny || 0), 0);

  const Row = ({ label, value }) => (
    <tr>
      <th className="bg-base-200 w-40">{label}</th>
      <td>{value ?? <span className="text-base-content/40">—</span>}</td>
    </tr>
  );

  // ======= start real data here
  const loginData = useRouteLoaderData("routes/app-layout");
  const accountData = useLoaderData();

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-4">Viewing Account</h1>

      {/* Account details */}
      <div className="overflow-x-auto rounded-box border border-base-300 mb-8">
        <table className="table">
          <tbody>
            <tr>
              <th className="bg-base-200 w-40">Username</th>
              <td>{accountData.username}</td>
              <th className="bg-base-200 w-40">Account ID</th>
              <td>{accountData.accountID}</td>
            </tr>
            <tr>
              <th className="bg-base-200">E-mail</th>
              <td>
                <a
                  href={`mailto:${accountData.email}`}
                  className="link link-primary"
                >
                  {accountData.email}
                </a>
              </td>
              <th className="bg-base-200">Group ID</th>
              <td>{accountData.groupID}</td>
            </tr>
            <tr>
              <th className="bg-base-200">Gender</th>
              <td>{accountData.gender}</td>
              <th className="bg-base-200">State</th>
              <td>{accountData.state}</td>
            </tr>
            <tr>
              <th className="bg-base-200">Login Count</th>
              <td>{accountData.loginCount}</td>
              <th className="bg-base-200">Credit Balance</th>
              <td>{accountData.creditBalance}</td>
            </tr>
            <tr>
              <th className="bg-base-200">Birthdate</th>
              <td>
                {accountData.birthdate || (
                  <span className="text-base-content/40">—</span>
                )}
              </td>
              <th className="bg-base-200">VIP Status</th>
              <td>{accountData.vipStatus}</td>
            </tr>
            <tr>
              <th className="bg-base-200">Last Login Date</th>
              <td colSpan={3}>{accountData.lastLogin}</td>
            </tr>
            <tr>
              <th className="bg-base-200">Last Used IP</th>
              <td colSpan={3}>
                {loginData.role == 0 ? (
                  accountData.lastIP
                ) : (
                  <a href="#" className="link link-primary">
                    {accountData.lastIP}
                  </a>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="divider" />

      {/* Storage */}
      <h2 className="text-xl font-bold mb-4">
        Storage Items of <span>{account.username}</span>
      </h2>
      {storageItems.length === 0 ? (
        <div className="rounded-box border border-dashed border-base-300 p-8 text-center text-base-content/60">
          There are no storage items on this account.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-box border border-base-300">
          <table className="table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Amount</th>
                <th>Refine</th>
                <th>Card slots</th>
              </tr>
            </thead>
            <tbody>
              {storageItems.map((item, i) => (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.amount}</td>
                  <td>{item.refine}</td>
                  <td>{item.cards?.join(", ") || "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
