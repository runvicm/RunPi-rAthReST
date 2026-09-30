interface DownloadFile {
  name: string;
  version: string;
  size: string;
  url: string;
}

const files: DownloadFile[] = [
  {
    name: "Full client (direct)",
    version: "2026.10",
    size: "4.2 GB",
    url: "#",
  },
  // { name: "Full client (Mega)", version: "2026.09", size: "4.2 GB", url: "#" },
  // {
  //   name: "Full client (Google Drive)",
  //   version: "2026.09",
  //   size: "4.2 GB",
  //   url: "#",
  // },
  // { name: "Patcher only", version: "1.4.2", size: "12 MB", url: "#" },
  // { name: "Setup tool", version: "1.0.8", size: "3 MB", url: "#" },
];

export default function Download() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
      <span className="badge badge-outline badge-primary uppercase tracking-wide text-xs mb-4">
        Get started
      </span>
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8">
        Download the client.
      </h1>

      <div className="overflow-x-auto rounded-box border border-base-300 bg-base-200 mb-10">
        <table className="table">
          <thead>
            <tr>
              <th>File</th>
              <th>Version</th>
              <th>Size</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {files.map((f) => (
              <tr key={f.name}>
                <td>{f.name}</td>
                <td className="text-base-content/60">{f.version}</td>
                <td className="text-base-content/60">{f.size}</td>
                <td className="text-right">
                  <a href={f.url} className="btn btn-primary btn-sm">
                    Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="divider" />

      <h2 className="font-bold mb-2">New here?</h2>
      <p className="text-base-content/70 mb-6 max-w-2xl">
        Download the full client from any one mirror. If you already have a
        Ragnarok client, the patcher alone is enough. Follow the setup guide for
        the steps.
      </p>

      <div className="overflow-x-auto rounded-box border border-base-300 bg-base-200">
        <table className="table">
          <tbody>
            <tr>
              <td className="text-base-content/60">Client date</td>
              <td className="font-semibold text-right">2026-02-19 RagexeRE</td>
            </tr>
            <tr>
              <td className="text-base-content/60">Last patched</td>
              <td className="font-semibold text-right">18 Sep 2026</td>
            </tr>
            <tr>
              <td className="text-base-content/60">Antivirus warning?</td>
              <td className="font-semibold text-right">
                Add the game folder as an exception
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
