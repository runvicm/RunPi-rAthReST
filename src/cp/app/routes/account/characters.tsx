import React from "react";
import { useLoaderData } from "react-router";

const API_URL = import.meta.env.VITE_API_URL;

export interface CharacterProps {
  id: number;
  slot: number;
  name: string;
  jobClass: string;
  baseLevel: number;
  jobLevel: number;
  zeny: number;
  guild: string | null;
  online: "Online" | "Offline";
}

export async function clientLoader() {
  const res = await fetch(`${API_URL}/api/account/characters`, {
    credentials: "include",
    headers: { Accept: "application/json" },
  });

  return res.ok ? await res.json() : null;
}

export default function Characters() {
  const chacractersData = useLoaderData();
  const totalZeny = chacractersData.reduce(
    (sum: number, char: CharacterProps) => sum + char.zeny,
    0,
  );

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-4">Characters</h1>
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
              {/* <th>Preferences</th>
              <th>Reset Look</th>
              <th>Reset Position</th> */}
            </tr>
          </thead>
          <tbody>
            {chacractersData.map((char: CharacterProps) => (
              <tr key={char.slot}>
                <td>{char.slot}</td>
                <td>
                  <a href="#" className="link link-primary">
                    {char.name}
                  </a>
                </td>
                <td>{char.jobClass}</td>
                <td>{char.baseLevel}</td>
                <td>{char.jobLevel}</td>
                <td>{char.zeny.toLocaleString()}</td>
                <td>
                  {char.guild !== "None" ? (
                    char.guild
                  ) : (
                    <span className="text-base-content/40 italic">None</span>
                  )}
                </td>
                <td>
                  <span
                    className={`badge badge-sm ${char.online === "Online" ? "badge-success" : "badge-ghost"}`}
                  >
                    {char.online}
                  </span>
                </td>
                {/* <td>
                  <button
                    onClick={() => onModifyPreferences(char)}
                    className="link link-primary text-sm"
                  >
                    Modify Preferences
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => onResetLook(char)}
                    className="link link-primary text-sm"
                  >
                    Reset Look
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => onResetPosition(char)}
                    className="link link-primary text-sm"
                  >
                    Reset Position
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm mb-8">
        Total Zeny: <b>{totalZeny.toLocaleString()}</b>
      </p>
    </div>
  );
}
