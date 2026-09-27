import React from "react";

/**
 * AccountView
 * Matches the classic "Viewing Account" layout: account details table,
 * characters table with per-character actions, and a storage section.
 * Pass real data in via props once your API is wired up — sane fallback
 * sample data is used for anything not provided, so this renders standalone too.
 */
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

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-4">Viewing Account</h1>

      {/* Account details */}
      <div className="overflow-x-auto rounded-box border border-base-300 mb-8">
        <table className="table">
          <tbody>
            <tr>
              <th className="bg-base-200 w-40">Username</th>
              <td>{account.username}</td>
              <th className="bg-base-200 w-40">Account ID</th>
              <td>{account.accountId}</td>
            </tr>
            <tr>
              <th className="bg-base-200">E-mail</th>
              <td>
                <a
                  href={`mailto:${account.email}`}
                  className="link link-primary"
                >
                  {account.email}
                </a>
              </td>
              <th className="bg-base-200">Group ID</th>
              <td>{account.groupId}</td>
            </tr>
            <tr>
              <th className="bg-base-200">Gender</th>
              <td>{account.gender}</td>
              <th className="bg-base-200">State</th>
              <td>{account.state}</td>
            </tr>
            <tr>
              <th className="bg-base-200">Login Count</th>
              <td>{account.loginCount}</td>
              <th className="bg-base-200">Credit Balance</th>
              <td>{account.creditBalance}</td>
            </tr>
            <tr>
              <th className="bg-base-200">Birthdate</th>
              <td>
                {account.birthdate || (
                  <span className="text-base-content/40">—</span>
                )}
              </td>
              <th className="bg-base-200">VIP Status</th>
              <td>{account.vipStatus}</td>
            </tr>
            <tr>
              <th className="bg-base-200">Last Login Date</th>
              <td colSpan={3}>{account.lastLoginDate}</td>
            </tr>
            <tr>
              <th className="bg-base-200">Last Used IP</th>
              <td colSpan={3}>
                <a href="#" className="link link-primary">
                  {account.lastUsedIp}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="divider" />

      {/* Characters */}
      <h2 className="text-xl font-bold mb-4">
        Characters on <span className="uppercase">{serverName}</span>
      </h2>
      <div className="overflow-x-auto rounded-box border border-base-300 mb-2">
        <table className="table">
          <thead>
            <tr>
              <th>Slot</th>
              <th>Character Name</th>
              <th>Job Class</th>
              <th>Base Level</th>
              <th>Job Level</th>
              <th>Zeny</th>
              <th>Guild</th>
              <th>Status</th>
              <th>Preferences</th>
              <th>Reset Look</th>
              <th>Reset Position</th>
            </tr>
          </thead>
          <tbody>
            {characters.map((c) => (
              <tr key={c.slot}>
                <td>{c.slot}</td>
                <td>
                  <a href="#" className="link link-primary">
                    {c.name}
                  </a>
                </td>
                <td>{c.jobClass}</td>
                <td>{c.baseLevel}</td>
                <td>{c.jobLevel}</td>
                <td>{c.zeny.toLocaleString()}</td>
                <td>
                  {c.guild ?? (
                    <span className="text-base-content/40 italic">None</span>
                  )}
                </td>
                <td>
                  <span
                    className={`badge badge-sm ${c.status === "Online" ? "badge-success" : "badge-ghost"}`}
                  >
                    {c.status}
                  </span>
                </td>
                <td>
                  <button
                    onClick={() => onModifyPreferences(c)}
                    className="link link-primary text-sm"
                  >
                    Modify Preferences
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => onResetLook(c)}
                    className="link link-primary text-sm"
                  >
                    Reset Look
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => onResetPosition(c)}
                    className="link link-primary text-sm"
                  >
                    Reset Position
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm mb-8">
        Total Zeny: <b>{totalZeny.toLocaleString()}</b>
      </p>

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
