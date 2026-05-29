import {
  AlertTriangle,
  BarChart3,
  Bell,
  Building2,
  CalendarDays,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Coins,
  Download,
  FileText,
  Gamepad2,
  Gift,
  HelpCircle,
  Home,
  Layers,
  Lightbulb,
  MapPin,
  Megaphone,
  MessageSquare,
  Package,
  QrCode,
  Search,
  Settings,
  Shield,
  ShoppingBag,
  Star,
  Ticket,
  Upload,
  User,
  UserPlus,
  Users,
  Wallet,
  Zap,
  Info,
  Grid3X3,
} from "lucide-react";

const navSections = [
  {
    label: "",
    items: [{ label: "Dashboard", icon: Home, active: true, chevron: false }],
  },
  {
    label: "User & Access",
    items: [
      { label: "User Management", icon: User },
      { label: "Roles & Permissions", icon: Shield },
      { label: "Approvals", icon: CheckCircle },
    ],
  },
  {
    label: "Organization & Geography",
    items: [
      { label: "Organization Master", icon: Building2 },
      { label: "Geography Master", icon: MapPin },
      { label: "Brand Master", icon: Package },
    ],
  },
  {
    label: "Product & Catalogue",
    items: [
      { label: "Products", icon: ShoppingBag },
      { label: "Catalogue", icon: FileText },
      { label: "QR & Product Assets", icon: QrCode },
    ],
  },
  {
    label: "Campaign & Program",
    items: [
      { label: "Program Management", icon: Star },
      { label: "Campaign Management", icon: Megaphone },
      { label: "Scheme Management", icon: Layers },
      { label: "Gamification", icon: Gamepad2 },
      { label: "Budget & Allocation", icon: Wallet },
    ],
  },
  {
    label: "Rewards, Wallet & Coupons",
    items: [
      { label: "Wallet", icon: Wallet },
      { label: "Rewards", icon: Gift },
      { label: "Coupons", icon: Ticket },
    ],
  },
  {
    label: "Communication & Notifications",
    items: [
      { label: "Communication Center", icon: MessageSquare },
      { label: "Templates", icon: CalendarDays },
      { label: "Content Management", icon: FileText },
    ],
  },
  {
    label: "Reports & Analytics",
    items: [
      { label: "Reports", icon: BarChart3 },
      { label: "Analytics", icon: BarChart3 },
      { label: "Export Center", icon: Download },
    ],
  },
  {
    label: "Utilities",
    items: [
      { label: "Bulk Operations", icon: Upload },
      { label: "Downloads", icon: Download },
      { label: "System Utilities", icon: Settings },
    ],
  },
];

const kpis = [
  {
    label: "Active Campaigns",
    value: "78",
    trend: "12%",
    icon: Megaphone,
    iconClass: "bg-emerald-50 text-[#079455]",
  },
  {
    label: "Total Users",
    value: "1,24,560",
    trend: "8%",
    icon: UserPlus,
    iconClass: "bg-blue-50 text-[#2563EB]",
  },
  {
    label: "Wallet Transactions",
    value: "5,43,210",
    trend: "15%",
    icon: Wallet,
    iconClass: "bg-purple-50 text-[#7C3AED]",
  },
  {
    label: "Points Issued",
    value: "12.8M",
    trend: "18%",
    icon: Coins,
    iconClass: "bg-orange-50 text-[#F97316]",
  },
  {
    label: "Coupons Redeemed",
    value: "98,765",
    trend: "10%",
    icon: Ticket,
    iconClass: "bg-pink-50 text-[#DB2777]",
  },
];

const campaignRows = [
  ["Summer Bonanza 2025", "24,560", "18%"],
  ["Mega Rewards", "18,230", "12%"],
  ["Spin & Win", "14,890", "10%"],
  ["Festive Delight", "12,456", "8%"],
  ["Refer & Earn", "9,876", "6%"],
];

const activities = [
  {
    text: "Point upload completed for March 2025",
    time: "10 mins ago",
    color: "bg-[#079455]",
  },
  {
    text: 'Campaign "Summer Bonanza" published',
    time: "1 hour ago",
    color: "bg-[#7C3AED]",
  },
  {
    text: "User import completed successfully",
    time: "3 hours ago",
    color: "bg-[#2563EB]",
  },
  {
    text: "Bank verification completed for 250 users",
    time: "5 hours ago",
    color: "bg-[#F97316]",
  },
  {
    text: "Coupon code generated for campaign",
    time: "Yesterday",
    color: "bg-[#DB2777]",
  },
];

const statusItems = [
  ["Active", "78 (51%)", "#079455"],
  ["Upcoming", "32 (21%)", "#2563EB"],
  ["Ongoing", "24 (16%)", "#7C3AED"],
  ["Ended", "18 (12%)", "#F97316"],
];

const walletMetrics = [
  {
    label: "Total Wallet Balance",
    value: "₹ 3,45,67,890",
    trend: "11%",
    color: "#079455",
    points: "8,42 26,34 42,30 58,21 74,36 88,31 102,42 116,19 132,27 146,17 160,31 176,33 190,24",
  },
  {
    label: "Total Points Issued",
    value: "12.8M",
    trend: "18%",
    color: "#F97316",
    points: "8,36 22,29 38,21 52,12 68,27 82,39 96,25 112,30 126,14 140,22 154,10 168,25 182,20 194,14",
  },
  {
    label: "Total Points Redeemed",
    value: "9.6M",
    trend: "14%",
    color: "#2563EB",
    points: "8,42 24,36 40,22 56,31 72,38 88,29 104,36 118,17 132,24 146,11 162,23 176,29 192,17",
  },
];

const approvals = [
  {
    label: "Registration",
    count: "24",
    icon: UserPlus,
    iconClass: "bg-blue-50 text-[#2563EB]",
    badgeClass: "bg-orange-50 text-[#F97316]",
  },
  {
    label: "Profile Approval",
    count: "18",
    icon: UserPlus,
    iconClass: "bg-emerald-50 text-[#079455]",
    badgeClass: "bg-emerald-50 text-[#079455]",
  },
  {
    label: "Redemption",
    count: "12",
    icon: Gift,
    iconClass: "bg-orange-50 text-[#F97316]",
    badgeClass: "bg-orange-50 text-[#F97316]",
  },
  {
    label: "Campaign",
    count: "07",
    icon: Megaphone,
    iconClass: "bg-purple-50 text-[#7C3AED]",
    badgeClass: "bg-purple-50 text-[#7C3AED]",
  },
  {
    label: "Coupons",
    count: "05",
    icon: Ticket,
    iconClass: "bg-pink-50 text-[#DB2777]",
    badgeClass: "bg-pink-50 text-[#DB2777]",
  },
];

const alerts = [
  {
    text: "3 campaigns are nearing end date",
    time: "2h ago",
    icon: AlertTriangle,
    tone: "bg-orange-50 text-[#F97316]",
  },
  {
    text: "Scheduled maintenance on 25 May 2025, 02:00 AM - 04:00 AM",
    time: "1d ago",
    icon: Info,
    tone: "bg-blue-50 text-[#2563EB]",
  },
  {
    text: "Wallet reconciliation pending",
    time: "2d ago",
    icon: AlertTriangle,
    tone: "bg-orange-50 text-[#F97316]",
  },
];

const quickLinks = [
  ["Create Campaign", Megaphone, "text-teal-500 bg-teal-50"],
  ["Point Upload", Upload, "text-[#2563EB] bg-blue-50"],
  ["Create Coupon", Ticket, "text-[#DB2777] bg-pink-50"],
  ["Upload QR Batch", QrCode, "text-slate-500 bg-slate-50"],
  ["Bulk User Import", Users, "text-[#079455] bg-emerald-50"],
  ["Generate Report", FileText, "text-[#2563EB] bg-blue-50"],
  ["Approval Center", CheckCircle, "text-[#F97316] bg-orange-50"],
  ["View All", Grid3X3, "text-slate-500 bg-slate-50"],
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Card({ children, className = "" }) {
  return (
    <section
      className={classNames(
        "rounded-xl border border-[#E5EAF0] bg-white shadow-card",
        className,
      )}
    >
      {children}
    </section>
  );
}

function CardHeader({ title, action, children }) {
  return (
    <div className="flex min-h-8 items-center justify-between gap-3">
      <h2 className="text-[15px] font-semibold leading-none text-[#101828]">
        {title}
      </h2>
      {children || (
        action && (
          <a href="#" className="text-[11px] font-semibold text-[#079455]">
            {action}
          </a>
        )
      )}
    </div>
  );
}

function PineLogo() {
  return (
    <div className="relative h-7 w-7 shrink-0">
      <span className="absolute left-0 top-0 h-5 w-7 bg-[#11B76A] [clip-path:polygon(0_0,100%_0,100%_100%)]" />
      <span className="absolute left-1 top-3.5 h-4 w-5 rotate-180 bg-[#11B76A] [clip-path:polygon(0_0,100%_0,100%_100%)]" />
    </div>
  );
}

function SidebarItem({ item }) {
  const Icon = item.icon;

  return (
    <a
      href="#"
      className={classNames(
        "grid h-7 grid-cols-[18px_1fr_12px] items-center gap-2 rounded-lg px-2 text-[11px] font-semibold leading-none text-white/[0.92] transition",
        item.active
          ? "bg-gradient-to-r from-[#078B4F] to-[#079455] shadow-[0_8px_20px_rgba(7,148,85,0.25)]"
          : "hover:bg-white/[0.08]",
      )}
    >
      <Icon className="h-3.5 w-3.5" strokeWidth={2} />
      <span className="truncate">{item.label}</span>
      {item.chevron === false ? null : (
        <ChevronRight className="h-3.5 w-3.5 justify-self-end text-white/80" />
      )}
    </a>
  );
}

function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-20 flex w-[220px] flex-col overflow-hidden bg-[radial-gradient(circle_at_18%_0%,rgba(7,148,85,0.22),transparent_26%),linear-gradient(180deg,#061320_0%,#0B2234_100%)] text-white">
      <div className="flex items-center gap-2.5 px-4 pb-4 pt-5">
        <PineLogo />
        <div>
          <p className="text-[24px] font-medium leading-none tracking-[-0.01em]">
            Pine Labs
          </p>
          <p className="mt-1.5 text-[11px] font-medium text-white/[0.78]">
            Admin Portal
          </p>
        </div>
      </div>

      <nav className="scrollbar-none flex-1 overflow-y-auto px-3 pb-3">
        {navSections.map((section, index) => (
          <div key={section.label || "dashboard"}>
            {section.label && (
              <p
                className={classNames(
                  "mb-1.5 mt-3 border-white/10 px-1 text-[10px] font-medium uppercase leading-none text-white/[0.76]",
                  index > 1 && "border-t pt-3",
                )}
              >
                {section.label}
              </p>
            )}
            <div className="space-y-1">
              {section.items.map((item) => (
                <SidebarItem key={item.label} item={item} />
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="px-3 pb-3">
        <button className="flex h-9 w-full items-center gap-2 rounded-lg bg-white/[0.07] px-3 text-[11px] font-semibold text-white/[0.92]">
          <ChevronLeft className="h-3.5 w-3.5" />
          Collapse Menu
        </button>
      </div>
    </aside>
  );
}

function Topbar() {
  return (
    <header className="sticky top-0 z-10 grid h-[58px] grid-cols-[1fr_auto_1fr] items-center border-b border-[#E5EAF0] bg-white/95 px-8 backdrop-blur">
      <div />
      <label className="flex h-9 w-[650px] items-center gap-3 rounded-lg border border-[#E5EAF0] bg-white px-3 shadow-[0_4px_18px_rgba(16,24,40,0.03)]">
        <Search className="h-4 w-4 text-[#475467]" />
        <input
          className="w-full border-0 bg-transparent text-[12px] font-medium text-[#667085] outline-none placeholder:text-[#667085]"
          placeholder="Search for users, campaigns, reports, settings and more..."
        />
        <kbd className="rounded-md bg-[#F2F4F7] px-2.5 py-1 text-[11px] font-semibold leading-none text-[#475467]">
          ⌘ K
        </kbd>
      </label>

      <div className="flex items-center justify-end gap-4">
        <button className="grid h-8 w-8 place-items-center rounded-full text-[#344054]">
          <HelpCircle className="h-5 w-5" />
        </button>
        <button className="relative grid h-8 w-8 place-items-center rounded-full text-[#344054]">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-0 grid h-4 min-w-4 place-items-center rounded-full bg-[#E40046] px-1 text-[9px] font-bold leading-none text-white">
            12
          </span>
        </button>
        <div className="flex items-center gap-2.5">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-[#079455] text-[11px] font-bold text-white">
            AS
          </div>
          <div className="min-w-[84px]">
            <p className="text-[12px] font-semibold leading-tight text-[#101828]">
              Ankit Sharma
            </p>
            <p className="text-[10px] font-medium leading-tight text-[#667085]">
              Super Admin
            </p>
          </div>
          <ChevronDown className="h-4 w-4 text-[#667085]" />
        </div>
      </div>
    </header>
  );
}

function DashboardHeader() {
  return (
    <div className="mb-4 flex items-start justify-between">
      <div>
        <h1 className="text-[24px] font-semibold leading-tight text-[#101828]">
          Dashboard
        </h1>
        <p className="mt-1 text-[13px] font-medium text-[#667085]">
          Welcome back, Ankit Sharma! Here's what's happening with your programs.
        </p>
      </div>
      <div className="flex items-center gap-5">
        <button className="flex h-10 items-center gap-2 rounded-lg bg-gradient-to-b from-[#12A864] to-[#079455] px-4 text-[12px] font-semibold text-white shadow-[0_8px_20px_rgba(7,148,85,0.22)]">
          <Zap className="h-4 w-4 fill-white" />
          Quick Actions
          <ChevronDown className="h-4 w-4" />
        </button>
        <button className="flex h-10 min-w-[214px] items-center justify-between gap-3 rounded-lg border border-[#E5EAF0] bg-white px-4 text-[12px] font-semibold text-[#344054]">
          <CalendarDays className="h-4 w-4 text-[#475467]" />
          <span>15 May 2025 - 21 May 2025</span>
          <ChevronDown className="h-4 w-4 text-[#667085]" />
        </button>
      </div>
    </div>
  );
}

function KpiCard({ item }) {
  const Icon = item.icon;

  return (
    <Card className="flex h-[110px] items-center gap-5 px-4">
      <div
        className={classNames(
          "grid h-[52px] w-[52px] shrink-0 place-items-center rounded-xl",
          item.iconClass,
        )}
      >
        <Icon className="h-7 w-7" strokeWidth={2.1} />
      </div>
      <div>
        <p className="text-[12px] font-semibold text-[#344054]">
          {item.label}
        </p>
        <p className="mt-2 text-[24px] font-semibold tracking-[-0.01em] text-[#101828]">
          {item.value}
        </p>
        <p className="mt-2 text-[12px] font-semibold text-[#079455]">
          ↑ {item.trend}
          <span className="ml-1.5 font-medium text-[#667085]">vs last week</span>
        </p>
      </div>
    </Card>
  );
}

function KpiRow() {
  return (
    <section className="mb-4 grid grid-cols-5 gap-5">
      {kpis.map((item) => (
        <KpiCard key={item.label} item={item} />
      ))}
    </section>
  );
}

function CampaignPerformanceCard() {
  return (
    <Card className="col-span-6 h-[296px] p-4">
      <CardHeader title="Campaign Performance">
        <button className="flex h-8 min-w-[124px] items-center justify-between gap-3 rounded-lg border border-[#E5EAF0] bg-white px-3 text-[12px] font-medium text-[#344054]">
          All Campaigns
          <ChevronDown className="h-4 w-4 text-[#667085]" />
        </button>
      </CardHeader>

      <div className="mt-2 flex items-center justify-center gap-5 text-[11px] font-medium text-[#344054]">
        <span className="flex items-center gap-2">
          <i className="h-0.5 w-4 bg-[#079455]" />
          This Week
        </span>
        <span className="flex items-center gap-2">
          <i className="h-0.5 w-4 border-t border-dashed border-[#7A8EAE]" />
          Last Week
        </span>
      </div>

      <svg
        className="mt-1 h-[208px] w-full overflow-visible"
        viewBox="0 0 650 226"
        role="img"
        aria-label="Campaign performance chart"
      >
        <g stroke="#E5EAF0" strokeWidth="1">
          <line x1="40" y1="18" x2="632" y2="18" />
          <line x1="40" y1="62" x2="632" y2="62" />
          <line x1="40" y1="106" x2="632" y2="106" />
          <line x1="40" y1="150" x2="632" y2="150" />
          <line x1="40" y1="194" x2="632" y2="194" />
        </g>
        <g fill="#101828" fontSize="11" fontWeight="500">
          <text x="6" y="22">80K</text>
          <text x="6" y="66">60K</text>
          <text x="6" y="110">40K</text>
          <text x="6" y="154">20K</text>
          <text x="24" y="198">0</text>
        </g>
        <polyline
          points="74,150 162,124 250,148 338,130 426,102 532,122 618,38"
          fill="none"
          stroke="#7A8EAE"
          strokeDasharray="5 4"
          strokeWidth="1.7"
        />
        <polyline
          points="74,118 162,74 250,108 338,58 426,104 532,54 618,102"
          fill="none"
          stroke="#079455"
          strokeWidth="1.9"
        />
        <g fill="white" stroke="#079455" strokeWidth="2">
          <circle cx="74" cy="118" r="3.1" />
          <circle cx="162" cy="74" r="3.1" />
          <circle cx="250" cy="108" r="3.1" />
          <circle cx="338" cy="58" r="3.1" />
          <circle cx="426" cy="104" r="3.1" />
          <circle cx="532" cy="54" r="3.1" />
          <circle cx="618" cy="102" r="3.1" />
        </g>
        <g fill="#7A8EAE">
          <circle cx="74" cy="150" r="2.3" />
          <circle cx="162" cy="124" r="2.3" />
          <circle cx="250" cy="148" r="2.3" />
          <circle cx="338" cy="130" r="2.3" />
          <circle cx="426" cy="102" r="2.3" />
          <circle cx="532" cy="122" r="2.3" />
          <circle cx="618" cy="38" r="2.3" />
        </g>
        <g fill="#101828" fontSize="10.5" fontWeight="500">
          <text x="62" y="220">15 May</text>
          <text x="150" y="220">16 May</text>
          <text x="238" y="220">17 May</text>
          <text x="326" y="220">18 May</text>
          <text x="414" y="220">19 May</text>
          <text x="520" y="220">20 May</text>
          <text x="606" y="220">21 May</text>
        </g>
      </svg>
    </Card>
  );
}

function TopCampaignsCard() {
  return (
    <Card className="col-span-3 h-[296px] p-4">
      <CardHeader title="Top Performing Campaigns" action="View All" />
      <table className="mt-3 w-full text-left text-[12px]">
        <thead>
          <tr className="border-b border-[#E5EAF0] text-[11px] font-medium text-[#667085]">
            <th className="pb-3 font-medium">Campaign Name</th>
            <th className="pb-3 text-right font-medium">Redemptions</th>
            <th className="pb-3 text-right font-medium" />
          </tr>
        </thead>
        <tbody className="font-medium text-[#101828]">
          {campaignRows.map(([name, value, trend]) => (
            <tr key={name} className="border-b border-[#EEF2F6] last:border-0">
              <td className="py-2.5">{name}</td>
              <td className="py-2.5 text-right">{value}</td>
              <td className="py-2.5 text-right font-semibold text-[#079455]">
                ↑ {trend}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

function RecentActivityCard() {
  return (
    <Card className="col-span-3 h-[296px] p-4">
      <CardHeader title="Recent Activity" action="View All" />
      <ol className="relative mt-3 space-y-0 pl-7 before:absolute before:left-[9px] before:top-3 before:h-[184px] before:w-px before:bg-[#E5EAF0]">
        {activities.map((item) => (
          <li
            key={item.text}
            className="relative border-b border-[#EEF2F6] pb-2.5 pt-0 first:pt-0 last:border-0"
          >
            <span
              className={classNames(
                "absolute -left-[22px] top-1 h-2 w-2 rounded-full",
                item.color,
              )}
            />
            <p className="text-[12px] font-medium leading-snug text-[#101828]">
              {item.text}
            </p>
            <p className="mt-1.5 text-[11px] font-medium text-[#667085]">
              {item.time}
            </p>
          </li>
        ))}
      </ol>
    </Card>
  );
}

function ProgramStatusCard() {
  return (
    <Card className="col-span-4 h-[188px] p-4">
      <CardHeader title="Program Status" action="View All" />
      <div className="mt-3 flex items-center gap-8">
        <div
          className="relative grid h-[112px] w-[112px] shrink-0 place-items-center rounded-full"
          style={{
            background:
              "conic-gradient(#079455 0 51%, #2563EB 51% 72%, #7C3AED 72% 88%, #F97316 88% 100%)",
          }}
        >
          <div className="grid h-[72px] w-[72px] place-items-center rounded-full bg-white text-center">
            <div>
              <p className="text-[20px] font-semibold leading-none text-[#101828]">
                152
              </p>
              <p className="mt-2 text-[10px] font-semibold leading-none text-[#101828]">
                Total Programs
              </p>
            </div>
          </div>
        </div>
        <ul className="flex-1 space-y-2.5">
          {statusItems.map(([label, value, color]) => (
            <li
              key={label}
              className="grid grid-cols-[14px_1fr_auto] items-center gap-2 text-[12px] font-medium text-[#344054]"
            >
              <span
                className="h-3 w-3 rounded"
                style={{ backgroundColor: color }}
              />
              <span>{label}</span>
              <strong className="text-[11px] font-semibold text-[#101828]">
                {value}
              </strong>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

function Sparkline({ color, points }) {
  return (
    <svg className="mt-1.5 h-7 w-full" viewBox="0 0 200 48">
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="190" cy="24" r="0.1" fill={color} />
    </svg>
  );
}

function WalletSummaryCard() {
  return (
    <Card className="col-span-4 h-[188px] p-4">
      <CardHeader title="Wallet Summary" action="View Details" />
      <div className="mt-3 grid grid-cols-3 gap-3">
        {walletMetrics.map((metric) => (
          <div
            key={metric.label}
            className="h-[112px] rounded-lg border border-[#E5EAF0] bg-white p-3"
          >
            <p className="text-[11px] font-medium text-[#344054]">
              {metric.label}
            </p>
            <p className="mt-1.5 whitespace-nowrap text-[16px] font-semibold tracking-[-0.01em] text-[#101828]">
              {metric.value}
            </p>
            <p className="mt-1 text-[10px] font-semibold text-[#079455]">
              ↑ {metric.trend}
              <span className="ml-1 font-medium text-[#667085]">
                vs last week
              </span>
            </p>
            <Sparkline color={metric.color} points={metric.points} />
          </div>
        ))}
      </div>
    </Card>
  );
}

function RedemptionSummaryCard() {
  return (
    <Card className="col-span-4 h-[188px] p-4">
      <CardHeader title="Redemption Summary" action="View Details" />
      <div className="mt-3 flex items-center gap-6">
        <div className="relative h-[109px] w-[170px] shrink-0">
          <svg viewBox="0 0 220 130" className="h-full w-full">
            <path
              d="M34 108 A76 76 0 0 1 186 108"
              fill="none"
              stroke="#E8EAEE"
              strokeWidth="28"
              strokeLinecap="butt"
            />
            <path
              d="M34 108 A76 76 0 0 1 186 108"
              fill="none"
              stroke="#7C3AED"
              strokeWidth="28"
              strokeDasharray="162 239"
              strokeLinecap="butt"
            />
          </svg>
          <div className="absolute inset-x-0 bottom-2 text-center">
            <p className="text-[20px] font-semibold leading-none text-[#101828]">
              68%
            </p>
            <p className="mt-2 text-[11px] font-semibold text-[#101828]">
              Redemption Rate
            </p>
          </div>
        </div>
        <dl className="grid flex-1 grid-cols-[1fr_auto] gap-x-4 gap-y-6 text-[12px]">
          <dt className="font-medium text-[#667085]">Total Redemption Value</dt>
          <dd className="font-semibold text-[#101828]">₹ 1,23,45,678</dd>
          <dt className="font-medium text-[#667085]">Total Redeemed</dt>
          <dd className="font-semibold text-[#101828]">98,765</dd>
          <dt className="font-medium text-[#667085]">Pending Redemption</dt>
          <dd className="font-semibold text-[#101828]">12,345</dd>
        </dl>
      </div>
    </Card>
  );
}

function PendingApprovalsCard() {
  return (
    <Card className="col-span-4 h-[186px] p-4">
      <CardHeader title="Pending Approvals" action="View All" />
      <div className="mt-3 grid grid-cols-5 gap-3">
        {approvals.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex h-[105px] flex-col items-center justify-center rounded-xl border border-[#E5EAF0] bg-white text-center"
            >
              <div
                className={classNames(
                  "grid h-10 w-10 place-items-center rounded-xl",
                  item.iconClass,
                )}
              >
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-2 h-4 text-[10px] font-semibold text-[#344054]">
                {item.label}
              </p>
              <span
                className={classNames(
                  "mt-2 grid h-7 min-w-8 place-items-center rounded-full px-2 text-[12px] font-bold",
                  item.badgeClass,
                )}
              >
                {item.count}
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

function AlertsCard() {
  return (
    <Card className="col-span-4 h-[186px] p-4">
      <CardHeader title="Alerts & Notifications" action="View All" />
      <div className="mt-3 space-y-1.5">
        {alerts.map((alert) => {
          const Icon = alert.icon;
          return (
            <div
              key={alert.text}
              className="grid min-h-8 grid-cols-[36px_1fr_auto] items-center gap-3"
            >
              <span
                className={classNames(
                  "grid h-8 w-8 place-items-center rounded-lg",
                  alert.tone,
                )}
              >
                <Icon className="h-4 w-4" />
              </span>
              <p className="truncate text-[12px] font-medium text-[#101828]">
                {alert.text}
              </p>
              <time className="text-[10px] font-medium text-[#667085]">
                {alert.time}
              </time>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

function QuickLinksCard() {
  return (
    <Card className="col-span-4 h-[186px] p-4">
      <CardHeader title="Quick Links" />
      <div className="mt-3 grid grid-cols-4 gap-3">
        {quickLinks.map(([label, Icon, tone]) => (
          <button
            key={label}
            className="flex h-12 flex-col items-center justify-center gap-1 rounded-lg border border-[#E5EAF0] bg-white text-center"
          >
            <span className={classNames("grid h-7 w-7 place-items-center rounded-lg", tone)}>
              <Icon className="h-4 w-4" />
            </span>
            <span className="text-[10px] font-semibold text-[#344054]">
              {label}
            </span>
          </button>
        ))}
      </div>
    </Card>
  );
}

function SmartAssistantBanner() {
  return (
    <section className="flex h-[58px] items-center justify-between rounded-xl border border-[#E1F1E9] bg-gradient-to-r from-[#EFFAF3] to-[#F7FAF9] px-5">
      <div className="flex items-center gap-4">
        <div className="grid h-9 w-9 place-items-center rounded-full text-[#079455]">
          <Lightbulb className="h-7 w-7" strokeWidth={1.8} />
        </div>
        <div>
          <p className="text-[12px] font-semibold text-[#101828]">
            Smart Assistant
          </p>
          <p className="mt-1 text-[11px] font-medium text-[#667085]">
            Need help with something? Ask me or explore our guided workflows.
          </p>
        </div>
      </div>
      <button className="flex h-9 items-center gap-2 rounded-lg bg-gradient-to-b from-[#12A864] to-[#079455] px-5 text-[12px] font-semibold text-white shadow-[0_8px_20px_rgba(7,148,85,0.18)]">
        <Zap className="h-4 w-4 fill-white" />
        Ask Assistant
      </button>
    </section>
  );
}

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Sidebar />
      <main className="ml-[220px] min-h-screen">
        <Topbar />
        <div className="px-8 py-5">
          <DashboardHeader />
          <KpiRow />

          <section className="mb-4 grid grid-cols-12 gap-4">
            <CampaignPerformanceCard />
            <TopCampaignsCard />
            <RecentActivityCard />
          </section>

          <section className="mb-4 grid grid-cols-12 gap-4">
            <ProgramStatusCard />
            <WalletSummaryCard />
            <RedemptionSummaryCard />
          </section>

          <section className="mb-4 grid grid-cols-12 gap-4">
            <PendingApprovalsCard />
            <AlertsCard />
            <QuickLinksCard />
          </section>

          <SmartAssistantBanner />
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return <Dashboard />;
}
