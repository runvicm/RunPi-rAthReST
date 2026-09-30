export default function ServerInfo() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
      <span className="badge badge-outline badge-primary uppercase tracking-wide text-xs mb-4">
        Server info
      </span>
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8">
        Rates, limits, and connection details.
      </h1>

      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        <div>
          <h2 className="font-bold mb-2">Rates</h2>
          <div className="overflow-x-auto rounded-box border border-base-300 bg-base-200">
            <table className="table">
              <tbody>
                <tr>
                  <td className="text-base-content/60">Mode</td>
                  <td className="font-semibold text-right">Renewal</td>
                </tr>
                <tr>
                  <td className="text-base-content/60">Base EXP</td>
                  <td className="font-semibold text-right">50x</td>
                </tr>
                <tr>
                  <td className="text-base-content/60">Job EXP</td>
                  <td className="font-semibold text-right">50x</td>
                </tr>
                <tr>
                  <td className="text-base-content/60">Item drop</td>
                  <td className="font-semibold text-right">5x</td>
                </tr>
                <tr>
                  <td className="text-base-content/60">Card drop</td>
                  <td className="font-semibold text-right">2x</td>
                </tr>
                <tr>
                  <td className="text-base-content/60">MVP drop</td>
                  <td className="font-semibold text-right">3x</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="font-bold mb-2">Limits</h2>
          <div className="overflow-x-auto rounded-box border border-base-300 bg-base-200">
            <table className="table">
              <tbody>
                <tr>
                  <td className="text-base-content/60">Max level</td>
                  <td className="font-semibold text-right">99 / 70</td>
                </tr>
                <tr>
                  <td className="text-base-content/60">Max stat</td>
                  <td className="font-semibold text-right">99</td>
                </tr>
                <tr>
                  <td className="text-base-content/60">Max ASPD</td>
                  <td className="font-semibold text-right">190</td>
                </tr>
                <tr>
                  <td className="text-base-content/60">Party size</td>
                  <td className="font-semibold text-right">12</td>
                </tr>
                <tr>
                  <td className="text-base-content/60">Guild size</td>
                  <td className="font-semibold text-right">56</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="divider" />

      <h2 className="font-bold mb-2">Connection</h2>
      <div className="overflow-x-auto rounded-box border border-base-300 bg-base-200">
        <table className="table">
          <tbody>
            <tr>
              <td className="text-base-content/60">Client version</td>
              <td className="font-semibold text-right">2021-11-03 RagexeRE</td>
            </tr>
            <tr>
              <td className="text-base-content/60">Server mode</td>
              <td className="font-semibold text-right">Renewal</td>
            </tr>
            <tr>
              <td className="text-base-content/60">Login IP</td>
              <td className="font-semibold text-right">
                play.valkyrie.example
              </td>
            </tr>
            <tr>
              <td className="text-base-content/60">Ports</td>
              <td className="font-semibold text-right">6900 / 6121 / 5121</td>
            </tr>
            <tr>
              <td className="text-base-content/60">Time zone</td>
              <td className="font-semibold text-right">GMT+8 (Manila)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
