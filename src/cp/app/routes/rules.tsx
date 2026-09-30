interface Rule {
  title: string;
  description: string;
}

const rules: Rule[] = [
  {
    title: "No botting or macros",
    description:
      "Automated play of any kind is banned, including third-party click tools.",
  },
  {
    title: "No cheating or exploits",
    description:
      "Report bugs to staff instead of using them. Rewards will be reversed.",
  },
  {
    title: "Keep chat respectful",
    description: "No harassment, hate speech, or spam in any channel.",
  },
  {
    title: "No real-money trading",
    description:
      "Selling items, zeny, or accounts for real money is not allowed.",
  },
  {
    title: "Don't share your account",
    description: "You are responsible for everything done on your account.",
  },
  {
    title: "Staff decisions are final",
    description: "Appeal a ban by email within 7 days.",
  },
];

export default function Rules() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-12">
      <span className="badge badge-outline badge-primary uppercase tracking-wide text-xs mb-4">
        Server rules
      </span>
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8">
        Play fair, or don't play here.
      </h1>

      <p className="text-base-content/70 mb-8">
        Breaking these can lead to a warning, a temporary ban, or a permanent
        ban.
      </p>

      <ol className="space-y-0">
        {rules.map((rule, i) => (
          <li key={rule.title}>
            <div className="flex gap-4 py-4">
              <span className="text-primary font-extrabold text-xl w-8 shrink-0">
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold">{rule.title}</h3>
                <p className="text-base-content/70 text-sm">
                  {rule.description}
                </p>
              </div>
            </div>
            {i < rules.length - 1 && <div className="divider m-0" />}
          </li>
        ))}
      </ol>
    </div>
  );
}
