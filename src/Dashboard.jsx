import {
  BarChart3,
  CheckCircle2,
  Clock3,
  Download,
  Megaphone,
  Package,
  Plus,
  RefreshCw,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Card({ children, className = "" }) {
  return (
    <section
      className={classNames(
        "rounded-xl border border-[#E5EAF0] bg-white shadow-sm",
        className,
      )}
    >
      {children}
    </section>
  );
}

const kpis = [
  {
    label: "Active Campaigns",
    value: "78",
    description: "12% vs last week",
    icon: Megaphone,
    tone: "bg-emerald-50 text-[#079455]",
  },
  {
    label: "Total Users",
    value: "1,24,560",
    description: "8% vs last week",
    icon: Users,
    tone: "bg-blue-50 text-[#2563EB]",
  },
  {
    label: "Wallet Transactions",
    value: "5,43,210",
    description: "15% vs last week",
    icon: Wallet,
    tone: "bg-purple-50 text-[#7C3AED]",
  },
  {
    label: "Products Linked",
    value: "1,248",
    description: "74% QR mapped",
    icon: Package,
    tone: "bg-orange-50 text-[#F97316]",
  },
];

const tasks = [
  ["Program approvals pending", "6", Clock3, "text-[#F97316] bg-orange-50"],
  ["Campaigns active", "48", CheckCircle2, "text-[#079455] bg-emerald-50"],
  ["Budget alerts", "4", BarChart3, "text-[#7C3AED] bg-purple-50"],
];

export default function Dashboard() {
  return (
    <div className="p-6">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <nav className="mb-3 text-[12px] font-semibold text-[#465B7A]">
            Dashboard
          </nav>
          <h1 className="text-[28px] font-bold leading-tight text-[#101828]">
            Dashboard
          </h1>
          <p className="mt-2 text-[14px] font-medium text-[#344054]">
            Monitor engagement programs, campaign health, product readiness and
            pending actions.
          </p>
        </div>
        <div className="mt-8 flex items-center gap-3">
          <button className="flex h-9 items-center gap-2 rounded-lg border border-[#D5DEEA] bg-white px-4 text-[12px] font-bold text-[#101828]">
            <Download className="h-4 w-4" />
            Export
          </button>
          <button className="flex h-9 items-center gap-2 rounded-lg bg-[#079455] px-5 text-[12px] font-bold text-white shadow-[0_10px_18px_rgba(7,148,85,0.18)]">
            <Plus className="h-4 w-4" />
            Quick Action
          </button>
        </div>
      </div>

      <section className="mb-4 grid grid-cols-4 gap-3.5">
        {kpis.map((item) => {
          const Icon = item.icon;
          return (
            <Card className="flex h-[96px] items-center gap-4 p-4" key={item.label}>
              <div
                className={classNames(
                  "grid h-12 w-12 shrink-0 place-items-center rounded-lg",
                  item.tone,
                )}
              >
                <Icon className="h-[22px] w-[22px]" strokeWidth={2.2} />
              </div>
              <div>
                <p className="text-[13px] font-bold text-[#0B3670]">
                  {item.label}
                </p>
                <p className="mt-0.5 text-[31px] font-bold leading-none tracking-tight text-[#111B3E]">
                  {item.value}
                </p>
                <p className="mt-2 text-[12px] font-medium text-[#079455]">
                  {item.description}
                </p>
              </div>
            </Card>
          );
        })}
      </section>

      <div className="grid grid-cols-[minmax(0,1fr)_320px] gap-5">
        <Card className="p-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-[17px] font-bold text-[#101828]">
                Engagement Overview
              </h2>
              <p className="mt-1 text-[12px] font-semibold text-[#50617D]">
                Weekly activity across programs, campaigns and product scans.
              </p>
            </div>
            <button className="grid h-8 w-10 place-items-center rounded-md border border-[#D0D9E8] bg-white text-[#0F2D55]">
              <RefreshCw className="h-4 w-4" />
            </button>
          </div>
          <div className="flex h-[320px] items-end gap-4 rounded-lg border border-[#E5EAF0] bg-[#F8FAFC] p-5">
            {[42, 58, 48, 74, 62, 86, 68].map((height, index) => (
              <div className="flex flex-1 flex-col items-center gap-2" key={height}>
                <div
                  className="w-full rounded-t-md bg-[#079455]"
                  style={{ height: `${height * 2.7}px` }}
                />
                <span className="text-[11px] font-semibold text-[#667085]">
                  D{index + 1}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-4">
          <h2 className="mb-4 text-[17px] font-bold text-[#101828]">
            Priority Queue
          </h2>
          <div className="space-y-2">
            {tasks.map(([label, value, Icon, tone]) => (
              <div
                className="grid h-14 grid-cols-[36px_1fr_auto] items-center gap-3 rounded-lg border border-[#E5EAF0] px-3"
                key={label}
              >
                <span className={classNames("grid h-8 w-8 place-items-center rounded-lg", tone)}>
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-[12px] font-bold text-[#101828]">
                  {label}
                </span>
                <span className="text-[18px] font-bold text-[#111B3E]">
                  {value}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-lg bg-emerald-50 p-4 text-[#075E38]">
            <div className="flex items-center gap-2 text-[13px] font-bold">
              <TrendingUp className="h-4 w-4" />
              This week is trending up
            </div>
            <p className="mt-2 text-[12px] font-medium text-[#25634D]">
              Program activity and product scan coverage are both above the
              previous week.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
