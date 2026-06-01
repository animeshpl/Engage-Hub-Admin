import {
  ArrowRight,
  ArrowUpDown,
  BarChart3,
  Bell,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Clock3,
  Columns3,
  Download,
  ExternalLink,
  FileText,
  Filter,
  Gift,
  HelpCircle,
  Home,
  Layers,
  LayoutGrid,
  MapPin,
  Megaphone,
  Package,
  Plus,
  QrCode,
  RefreshCw,
  Search,
  ShieldCheck,
  ShoppingBag,
  Star,
  User,
  Wallet,
} from "lucide-react";
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import ProductList from "./ProductList.jsx";

const navSections = [
  {
    label: "Dashboard",
    items: [{ label: "Dashboard", icon: Home }],
  },
  {
    label: "User & Access",
    items: [
      { label: "User Management", icon: User },
      { label: "Roles & Permissions", icon: ShieldCheck },
      { label: "Approvals", icon: CheckCircle2 },
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
      {
        label: "Products",
        icon: ShoppingBag,
        route: "/product-list",
        children: [{ label: "Product List", route: "/product-list" }],
      },
      { label: "Catalogue", icon: FileText },
      { label: "QR & Product Assets", icon: QrCode },
    ],
  },
  {
    label: "Campaign & Program",
    items: [
      {
        label: "Program Management",
        icon: Home,
        route: "/",
        children: [{ label: "Program List", route: "/" }],
      },
      { label: "Campaign Management", icon: Megaphone },
      { label: "Scheme Management", icon: Layers },
      { label: "Gamification", icon: Star },
      { label: "Budget & Allocation", icon: BarChart3 },
    ],
  },
  {
    label: "Rewards, Wallet & Coupons",
    items: [
      { label: "Wallet", icon: Wallet },
      { label: "Rewards", icon: Gift },
    ],
  },
];

const kpis = [
  {
    label: "Total Programs",
    value: "78",
    description: "Across all program types",
    icon: BarChart3,
    tone: "bg-emerald-50 text-[#079455]",
  },
  {
    label: "Active Programs",
    value: "48",
    description: "61.5% of total programs",
    icon: CheckCircle2,
    tone: "bg-blue-50 text-[#2563EB]",
  },
  {
    label: "Pending Approval",
    value: "6",
    description: "6 awaiting approval",
    icon: Clock3,
    tone: "bg-orange-50 text-[#F97316]",
  },
  {
    label: "Budget Utilization",
    value: "64%",
    description: "64 budgets linked",
    icon: BarChart3,
    tone: "bg-purple-50 text-[#7C3AED]",
  },
];

const tabs = [
  ["All", "78"],
  ["Active", "48"],
  ["Draft", "12"],
  ["Pending Approval", "6"],
  ["Paused", "4"],
  ["Ended", "8"],
];

const programs = [
  {
    name: "Retailer Growth League",
    code: "PRG-2401",
    owner: "Ankit Sharma",
    category: "Retail Growth",
    campaigns: "8 linked",
    dateRange: "12 Aug 2026 - 30 Sep",
    amount: "INR 82.4L",
    used: 64,
    approval: "Approved",
    status: "Active",
    avatar: "RG",
    avatarClass: "bg-[#079455]",
    progressClass: "bg-[#079455]",
  },
  {
    name: "Festive Spark",
    code: "PRG-2402",
    owner: "Priya Nair",
    category: "Festive Incentive",
    campaigns: "5 linked",
    dateRange: "18 Aug 2026 - 30 Sep",
    amount: "INR 44.8L",
    used: 51,
    approval: "In Review",
    status: "Active",
    avatar: "FS",
    avatarClass: "bg-[#F59E0B]",
    progressClass: "bg-[#2563EB]",
  },
  {
    name: "QR Scan Booster",
    code: "PRG-2403",
    owner: "Rahul Mehta",
    category: "Scan Rewards",
    campaigns: "3 linked",
    dateRange: "24 Aug 2026 - 30 Sep",
    amount: "INR 18.2L",
    used: 72,
    approval: "Pending",
    status: "Draft",
    avatar: "QS",
    avatarClass: "bg-[#2563EB]",
    progressClass: "bg-[#2563EB]",
  },
  {
    name: "Elite Partner Club",
    code: "PRG-2404",
    owner: "Sneha Rao",
    category: "Loyalty",
    campaigns: "12 linked",
    dateRange: "01 Sep 2026 - 31 Dec",
    amount: "INR 1.2Cr",
    used: 58,
    approval: "Approved",
    status: "Active",
    avatar: "EP",
    avatarClass: "bg-[#7C3AED]",
    progressClass: "bg-[#079455]",
  },
  {
    name: "Monsoon Dealer Drive",
    code: "PRG-2405",
    owner: "Vikram Desai",
    category: "Channel Growth",
    campaigns: "6 linked",
    dateRange: "05 Jul 2026 - 31 Aug",
    amount: "INR 35.1L",
    used: 93,
    approval: "Attention",
    status: "Paused",
    avatar: "MD",
    avatarClass: "bg-[#EF4444]",
    progressClass: "bg-[#EF4444]",
  },
  {
    name: "New Retailer Onboarding",
    code: "PRG-2406",
    owner: "Meera Joshi",
    category: "Onboarding",
    campaigns: "2 linked",
    dateRange: "01 Sep 2026 - 30 Nov",
    amount: "INR 9.6L",
    used: 22,
    approval: "Draft",
    status: "Draft",
    avatar: "NR",
    avatarClass: "bg-[#0EA5A4]",
    progressClass: "bg-[#079455]",
  },
];

const overview = [
  ["Active", "48", "#079455"],
  ["Draft", "12", "#F59E0B"],
  ["Pending", "6", "#2563EB"],
  ["Paused", "4", "#EF4444"],
  ["Ended", "8", "#CBD5E1"],
];

const recentlyUpdated = [
  {
    name: "Retailer Growth League",
    note: "Budget mapping updated",
    time: "11:05 AM",
    avatar: "RG",
    avatarClass: "bg-[#079455]",
  },
  {
    name: "Festive Spark",
    note: "Approval note added",
    time: "09:42 AM",
    avatar: "FS",
    avatarClass: "bg-[#F59E0B]",
  },
  {
    name: "QR Scan Booster",
    note: "Eligibility changed",
    time: "Yesterday",
    avatar: "QS",
    avatarClass: "bg-[#2563EB]",
  },
];

const quickActions = [
  ["Create Program", Plus],
  ["Import Program Mapping", Download],
  ["Configure Categories", LayoutGrid],
  ["View Budget Allocation", BarChart3],
  ["Approval Queue", CheckCircle2],
];

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

function PineLogo() {
  return (
    <div className="relative grid h-[30px] w-[30px] shrink-0 place-items-center overflow-hidden rounded-lg bg-[#12B76A]">
      <span className="absolute h-4 w-4 -translate-x-0.5 translate-y-0.5 rotate-45 rounded-[2px] bg-[#071827]" />
    </div>
  );
}

function isRouteActive(pathname, route) {
  return route === "/" ? pathname === "/" : pathname === route;
}

function SidebarItem({ item }) {
  const Icon = item.icon;
  const { pathname } = useLocation();
  const childActive = item.children?.some((child) =>
    isRouteActive(pathname, child.route),
  );
  const parentActive = childActive || isRouteActive(pathname, item.route);
  const expanded = item.children && (item.label === "Products" || parentActive);
  const href = item.route || "#";

  return (
    <div>
      <Link
        to={href}
        className={classNames(
          "grid h-8 grid-cols-[18px_1fr_14px] items-center gap-2 rounded-lg px-2 text-[12px] font-semibold text-white/[0.92] transition",
          parentActive
            ? "bg-[#0C5145] text-white"
            : "hover:bg-white/[0.08]",
        )}
      >
        <Icon className="h-4 w-4" strokeWidth={2} />
        <span className="truncate">{item.label}</span>
        <ChevronRight
          className={classNames(
            "h-3.5 w-3.5 justify-self-end text-white/80",
            expanded && "rotate-90",
          )}
        />
      </Link>
      {expanded && (
        <div className="ml-[18px] mt-1 space-y-1 border-l border-white/15 pl-2.5">
          {item.children.map((child) => (
            <Link
              to={child.route}
              key={child.label}
              className={classNames(
                "flex h-7 items-center gap-2 rounded-md px-2 text-[12px] font-medium",
                isRouteActive(pathname, child.route)
                  ? "bg-[#079455] text-white"
                  : "text-white/75 hover:bg-white/[0.08]",
              )}
            >
              <span className="h-1 w-1 rounded-full bg-current" />
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-20 flex w-[235px] flex-col overflow-hidden bg-[linear-gradient(180deg,#061827_0%,#082236_100%)] text-white">
      <div className="flex h-[68px] items-center gap-2.5 border-b border-white/10 px-4">
        <PineLogo />
        <div>
          <p className="text-[23px] font-semibold leading-none">Pine Labs</p>
          <p className="mt-1 text-[11px] font-medium text-white/70">
            Admin Portal
          </p>
        </div>
      </div>
      <nav className="scrollbar-none flex-1 overflow-y-auto px-3 py-4">
        {navSections.map((section) => (
          <div key={section.label} className="mb-4">
            <p className="mb-2 px-1 text-[10px] font-bold uppercase tracking-wide text-white/55">
              {section.label}
            </p>
            <div className="space-y-1">
              {section.items.map((item) => (
                <SidebarItem key={item.label} item={item} />
              ))}
            </div>
          </div>
        ))}
      </nav>
      <div className="p-3">
        <button className="flex h-10 w-full items-center gap-2 rounded-lg bg-white/[0.07] px-3 text-[12px] font-semibold text-white/90">
          <ChevronLeft className="h-4 w-4" />
          Collapse Menu
        </button>
      </div>
    </aside>
  );
}

function Topbar() {
  return (
    <header className="sticky top-0 z-10 grid h-[60px] grid-cols-[1fr_auto_1fr] items-center border-b border-[#E5EAF0] bg-white px-6">
      <div />
      <label className="flex h-9 w-[510px] items-center gap-3 rounded-lg border border-[#D0D7E2] bg-white px-3">
        <Search className="h-4 w-4 text-[#475467]" />
        <input
          className="w-full border-0 bg-transparent text-[13px] font-medium text-[#667085] outline-none placeholder:text-[#52637C]"
          placeholder="Search for users, campaigns, reports, settings and more..."
        />
        <kbd className="rounded-md border border-[#D9E1EC] bg-[#F8FAFC] px-2 py-1 text-[11px] font-semibold leading-none text-[#475467]">
          ⌘ K
        </kbd>
      </label>
      <div className="flex items-center justify-end gap-4">
        <button className="grid h-8 w-8 place-items-center rounded-full border border-[#D9E1EC] text-[#0F1F3A]">
          <HelpCircle className="h-[18px] w-[18px]" />
        </button>
        <button className="relative grid h-8 w-8 place-items-center rounded-full border border-[#D9E1EC] text-[#0F1F3A]">
          <Bell className="h-[18px] w-[18px]" />
          <span className="absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center rounded-full bg-[#E40046] px-1 text-[9px] font-bold leading-none text-white">
            12
          </span>
        </button>
        <div className="flex items-center gap-2.5">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-[#079455] text-[11px] font-bold text-white">
            AS
          </div>
          <div className="min-w-[92px]">
            <p className="text-[12px] font-bold leading-tight text-[#101828]">
              Ankit Sharma
            </p>
            <p className="text-[10px] font-medium leading-tight text-[#344054]">
              Super Admin
            </p>
          </div>
          <ChevronDown className="h-4 w-4 text-[#344054]" />
        </div>
      </div>
    </header>
  );
}

function Breadcrumb() {
  const crumbs = [
    "Dashboard",
    "Campaign & Program",
    "Program Management",
    "Program List",
  ];

  return (
    <nav className="mb-3 flex items-center gap-2 text-[12px] font-semibold text-[#465B7A]">
      {crumbs.map((crumb, index) => (
        <div
          className={classNames(
            "flex items-center gap-2",
            index === crumbs.length - 1 && "text-[#101828]",
          )}
          key={crumb}
        >
          <span>{crumb}</span>
          {index < crumbs.length - 1 && (
            <ChevronRight className="h-3.5 w-3.5 text-[#7A8AA4]" />
          )}
        </div>
      ))}
    </nav>
  );
}

function PageHeader() {
  return (
    <div className="mb-5 flex items-start justify-between gap-4">
      <div>
        <Breadcrumb />
        <h1 className="text-[28px] font-bold leading-tight text-[#101828]">
          Program List
        </h1>
        <p className="mt-2 text-[14px] font-medium text-[#344054]">
          View, monitor and manage engagement programs, campaign links, budgets
          and approvals.
        </p>
      </div>
      <div className="mt-8 flex items-center gap-3">
        <button className="flex h-9 items-center gap-2 rounded-lg border border-[#D5DEEA] bg-white px-4 text-[12px] font-bold text-[#101828]">
          <Download className="h-4 w-4" />
          Export
        </button>
        <button className="flex h-9 items-center gap-8 rounded-lg border border-[#D5DEEA] bg-white px-4 text-[12px] font-bold text-[#101828]">
          Bulk Actions
          <ChevronDown className="h-4 w-4" />
        </button>
        <button className="flex h-9 items-center gap-2 rounded-lg bg-[#079455] px-5 text-[12px] font-bold text-white shadow-[0_10px_18px_rgba(7,148,85,0.18)]">
          <Plus className="h-4 w-4" />
          Create Program
        </button>
      </div>
    </div>
  );
}

function KpiCard({ item }) {
  const Icon = item.icon;

  return (
    <Card className="flex h-[96px] items-center gap-4 p-4">
      <div
        className={classNames(
          "grid h-12 w-12 shrink-0 place-items-center rounded-lg",
          item.tone,
        )}
      >
        <Icon className="h-[22px] w-[22px]" strokeWidth={2.2} />
      </div>
      <div>
        <p className="text-[13px] font-bold text-[#0B3670]">{item.label}</p>
        <p className="mt-0.5 text-[31px] font-bold leading-none tracking-tight text-[#111B3E]">
          {item.value}
        </p>
        <p className="mt-2 text-[12px] font-medium text-[#405678]">
          {item.description}
        </p>
      </div>
    </Card>
  );
}

function KpiCards() {
  return (
    <section className="mb-4 grid grid-cols-4 gap-3.5">
      {kpis.map((item) => (
        <KpiCard item={item} key={item.label} />
      ))}
    </section>
  );
}

function StatusTabs() {
  return (
    <div className="mb-0 flex h-10 items-end gap-8 border-b border-[#D9E1EC]">
      {tabs.map(([label, count], index) => (
        <button
          key={label}
          className={classNames(
            "flex h-9 items-center gap-2 border-b-2 text-[12px] font-bold",
            index === 0
              ? "border-[#079455] text-[#075E38]"
              : "border-transparent text-[#1F3150]",
          )}
        >
          {label}
          <span
            className={classNames(
              "rounded-full px-2 py-0.5 text-[10px] font-bold",
              index === 0
                ? "bg-emerald-50 text-[#079455]"
                : "bg-[#EEF2F6] text-[#667085]",
            )}
          >
            {count}
          </span>
        </button>
      ))}
    </div>
  );
}

function Field({ label, children, className = "" }) {
  return (
    <label className={classNames("block", className)}>
      <span className="mb-2 block text-[11px] font-bold text-[#101828]">
        {label}
      </span>
      {children}
    </label>
  );
}

function InputBox({ children, wide }) {
  return (
    <div
      className={classNames(
        "flex h-8 items-center justify-between gap-2 rounded-md border border-[#D0D9E8] bg-white px-3 text-[12px] font-medium text-[#52637C]",
        wide && "min-w-[330px]",
      )}
    >
      {children}
    </div>
  );
}

function FilterPanel() {
  return (
    <Card className="mb-4 overflow-hidden p-0">
      <div className="h-1 bg-[#079455]" />
      <div className="space-y-4 p-4">
        <div className="grid grid-cols-[1.7fr_0.9fr_0.9fr_0.9fr] gap-4">
          <Field label="Search by program name or code">
            <InputBox>
              <span>Search by program name, code or owner...</span>
              <Search className="h-4 w-4 text-[#0F2D55]" />
            </InputBox>
          </Field>
          <Field label="Program Category">
            <InputBox>
              <span>All Categories</span>
              <ChevronDown className="h-4 w-4 text-[#0F2D55]" />
            </InputBox>
          </Field>
          <Field label="Owner">
            <InputBox>
              <span>All Owners</span>
              <ChevronDown className="h-4 w-4 text-[#0F2D55]" />
            </InputBox>
          </Field>
          <Field label="Status">
            <InputBox>
              <span>All Statuses</span>
              <ChevronDown className="h-4 w-4 text-[#0F2D55]" />
            </InputBox>
          </Field>
        </div>
        <div className="grid grid-cols-[0.9fr_0.9fr_0.9fr_120px_80px_120px] items-end gap-4">
          <Field label="Start / End Date">
            <InputBox>
              <span>Select date range</span>
              <CalendarDays className="h-4 w-4 text-[#0F2D55]" />
            </InputBox>
          </Field>
          <Field label="Budget Source">
            <InputBox>
              <span>All Budgets</span>
              <ChevronDown className="h-4 w-4 text-[#0F2D55]" />
            </InputBox>
          </Field>
          <Field label="Campaign Linkage">
            <InputBox>
              <span>Any linkage</span>
              <ChevronDown className="h-4 w-4 text-[#0F2D55]" />
            </InputBox>
          </Field>
          <button className="flex h-8 items-center justify-center gap-2 rounded-md border border-[#D0D9E8] bg-white text-[12px] font-bold text-[#101828]">
            <Filter className="h-4 w-4" />
            More Filters
          </button>
          <button className="h-8 rounded-md border border-[#D0D9E8] bg-white text-[12px] font-bold text-[#101828]">
            Reset
          </button>
          <button className="h-8 rounded-md bg-[#079455] text-[12px] font-bold text-white">
            Apply Filters
          </button>
        </div>
      </div>
    </Card>
  );
}

function Badge({ label }) {
  const styles = {
    Approved: "bg-emerald-50 text-[#008A4A]",
    "In Review": "bg-blue-50 text-[#155EEF]",
    Pending: "bg-orange-50 text-[#B54708]",
    Attention: "bg-red-50 text-[#D92D20]",
    Draft: "bg-slate-100 text-[#667085]",
    Active: "bg-emerald-50 text-[#008A4A]",
    Paused: "bg-orange-50 text-[#B54708]",
  };

  return (
    <span
      className={classNames(
        "inline-flex rounded-full px-2.5 py-1 text-[11px] font-bold",
        styles[label] || "bg-slate-100 text-slate-600",
      )}
    >
      {label}
    </span>
  );
}

function ProgressBar({ value, color }) {
  return (
    <div>
      <p className="text-[12px] font-bold text-[#101828]">{value.amount}</p>
      <div className="mt-1 h-1.5 rounded-full bg-[#E2EAF2]">
        <div
          className={classNames("h-1.5 rounded-full", color)}
          style={{ width: `${value.used}%` }}
        />
      </div>
      <p className="mt-1 text-[11px] font-semibold text-[#667085]">
        {value.used}% used
      </p>
    </div>
  );
}

function ProgramTable() {
  return (
    <Card className="overflow-hidden">
      <div className="flex items-start justify-between p-4 pb-2">
        <div>
          <h2 className="text-[17px] font-bold text-[#101828]">
            Program Directory
          </h2>
          <p className="mt-1 text-[12px] font-semibold text-[#50617D]">
            Showing approved, draft and in-review programs with linked campaign
            health.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="grid h-8 w-10 place-items-center rounded-md border border-[#D0D9E8] bg-white text-[#0F2D55]">
            <RefreshCw className="h-4 w-4" />
          </button>
          <button className="flex h-8 items-center gap-2 rounded-md border border-[#D0D9E8] bg-white px-3 text-[12px] font-bold text-[#101828]">
            <Columns3 className="h-4 w-4" />
            Columns
            <ChevronDown className="h-3.5 w-3.5" />
          </button>
          <button className="flex h-8 items-center gap-2 rounded-md border border-[#D0D9E8] bg-white px-3 text-[12px] font-bold text-[#101828]">
            25 per page
            <ChevronDown className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
      <table className="w-full table-fixed border-t border-[#D9E1EC] text-left">
        <thead>
          <tr className="bg-[#F8FAFC] text-[11px] font-bold text-[#132849]">
            <th className="w-11 border-r border-[#D9E1EC] px-3 py-3">
              <input type="checkbox" className="h-3.5 w-3.5 rounded" />
            </th>
            <th className="w-[198px] border-r border-[#D9E1EC] px-3 py-3">
              <span className="inline-flex items-center gap-1">
                Program / Code <ArrowUpDown className="h-3 w-3" />
              </span>
            </th>
            <th className="w-[106px] border-r border-[#D9E1EC] px-3 py-3">
              <span className="inline-flex items-center gap-1">
                Owner <ArrowUpDown className="h-3 w-3" />
              </span>
            </th>
            <th className="w-[112px] border-r border-[#D9E1EC] px-3 py-3">
              <span className="inline-flex items-center gap-1">
                Category <ArrowUpDown className="h-3 w-3" />
              </span>
            </th>
            <th className="w-[82px] border-r border-[#D9E1EC] px-3 py-3">
              Campaigns
            </th>
            <th className="w-[120px] border-r border-[#D9E1EC] px-3 py-3">
              Date Range
            </th>
            <th className="w-[110px] border-r border-[#D9E1EC] px-3 py-3">
              Budget Used
            </th>
            <th className="w-[92px] border-r border-[#D9E1EC] px-3 py-3">
              Approval
            </th>
            <th className="w-[82px] px-3 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {programs.map((program) => (
            <tr
              className="border-t border-[#D9E1EC] text-[12px] font-semibold text-[#101828]"
              key={program.code}
            >
              <td className="border-r border-[#D9E1EC] px-3 py-3">
                <input type="checkbox" className="h-3.5 w-3.5 rounded" />
              </td>
              <td className="border-r border-[#D9E1EC] px-3 py-3">
                <div className="flex items-center gap-3">
                  <span
                    className={classNames(
                      "grid h-8 w-8 shrink-0 place-items-center rounded-full text-[11px] font-bold text-white",
                      program.avatarClass,
                    )}
                  >
                    {program.avatar}
                  </span>
                  <div>
                    <p className="leading-tight">{program.name}</p>
                    <p className="mt-1 text-[11px] font-bold text-[#667085]">
                      {program.code}
                    </p>
                  </div>
                </div>
              </td>
              <td className="border-r border-[#D9E1EC] px-3 py-3">
                {program.owner}
              </td>
              <td className="border-r border-[#D9E1EC] px-3 py-3">
                {program.category}
              </td>
              <td className="border-r border-[#D9E1EC] px-3 py-3 font-bold text-[#0B3670]">
                {program.campaigns}
              </td>
              <td className="border-r border-[#D9E1EC] px-3 py-3">
                {program.dateRange}
              </td>
              <td className="border-r border-[#D9E1EC] px-3 py-3">
                <ProgressBar
                  value={{ amount: program.amount, used: program.used }}
                  color={program.progressClass}
                />
              </td>
              <td className="border-r border-[#D9E1EC] px-3 py-3">
                <Badge label={program.approval} />
              </td>
              <td className="px-3 py-3">
                <Badge label={program.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between border-t border-[#D9E1EC] px-4 py-3">
        <p className="text-[12px] font-semibold text-[#465B7A]">
          Showing 1 to 6 of 78 programs
        </p>
        <div className="flex items-center gap-2">
          {["‹", "1", "2", "3", "...", "10", "›"].map((item) => (
            <button
              key={item}
              className={classNames(
                "grid h-8 min-w-8 place-items-center rounded-md border border-[#D0D9E8] px-2 text-[12px] font-semibold text-[#0F2D55]",
                item === "1" && "border-[#079455] bg-emerald-50 text-[#079455]",
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </Card>
  );
}

function DonutChart() {
  return (
    <div className="flex items-center gap-4">
      <div
        className="relative grid h-[112px] w-[112px] shrink-0 place-items-center rounded-full"
        style={{
          background:
            "conic-gradient(#079455 0 61.5%, #F59E0B 61.5% 76.9%, #2563EB 76.9% 84.6%, #EF4444 84.6% 89.7%, #CBD5E1 89.7% 100%)",
        }}
      >
        <div className="grid h-[70px] w-[70px] place-items-center rounded-full bg-white text-center">
          <div>
            <p className="text-[28px] font-bold leading-none text-[#111B3E]">
              78
            </p>
            <p className="mt-1 text-[10px] font-bold text-[#465B7A]">Programs</p>
          </div>
        </div>
      </div>
      <ul className="flex-1 space-y-3">
        {overview.map(([label, value, color]) => (
          <li
            className="grid grid-cols-[12px_1fr_auto] items-center gap-2 text-[12px] font-bold text-[#101828]"
            key={label}
          >
            <span
              className="h-2.5 w-2.5 rounded-sm"
              style={{ backgroundColor: color }}
            />
            <span>{label}</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SideCardHeader({ title, action }) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-[16px] font-bold text-[#111B3E]">{title}</h2>
      {action && (
        <a href="#" className="text-[11px] font-bold text-[#079455]">
          {action}
        </a>
      )}
    </div>
  );
}

function RightPanel() {
  return (
    <aside className="space-y-4">
      <Card className="p-4">
        <SideCardHeader title="Program Overview" action="View Report" />
        <DonutChart />
      </Card>
      <Card className="p-4">
        <SideCardHeader title="Recently Updated" action="View All" />
        <div className="space-y-0">
          {recentlyUpdated.map((item) => (
            <div
              key={item.name}
              className="grid grid-cols-[28px_1fr_auto] items-center gap-3 border-b border-[#EEF2F6] py-2.5 last:border-0"
            >
              <span
                className={classNames(
                  "grid h-6 w-6 place-items-center rounded-full text-[9px] font-bold text-white",
                  item.avatarClass,
                )}
              >
                {item.avatar}
              </span>
              <div>
                <p className="text-[12px] font-bold text-[#101828]">
                  {item.name}
                </p>
                <p className="text-[10px] font-semibold text-[#667085]">
                  {item.note}
                </p>
              </div>
              <time className="text-[10px] font-bold text-[#52637C]">
                {item.time}
              </time>
            </div>
          ))}
        </div>
      </Card>
      <Card className="p-4">
        <SideCardHeader title="Quick Actions" />
        <div className="space-y-1">
          {quickActions.map(([label, Icon]) => (
            <button
              key={label}
              className="grid h-9 w-full grid-cols-[28px_1fr_16px] items-center gap-2 border-b border-[#EEF2F6] text-left text-[12px] font-bold text-[#101828] last:border-0"
            >
              <span className="grid h-6 w-6 place-items-center rounded-md bg-emerald-50 text-[#079455]">
                <Icon className="h-3.5 w-3.5" />
              </span>
              {label}
              <ChevronRight className="h-4 w-4 justify-self-end text-[#0F2D55]" />
            </button>
          ))}
        </div>
      </Card>
      <Card className="overflow-hidden bg-[#F8FCFA] p-4">
        <div className="mb-3 flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-50 text-[#079455]">
            <CircleHelp className="h-4 w-4" />
          </span>
          <h2 className="text-[16px] font-bold text-[#111B3E]">Need Help?</h2>
        </div>
        <p className="text-[12px] font-medium leading-snug text-[#405678]">
          Review program setup guidelines, approval rules and budget linkage
          before publishing high-impact programs.
        </p>
        <button className="mt-4 flex h-8 w-[138px] items-center justify-center gap-2 rounded-md border border-[#D0D9E8] bg-white text-[12px] font-bold text-[#101828]">
          <ExternalLink className="h-4 w-4" />
          View Help Docs
        </button>
        <a
          href="#"
          className="mt-4 flex items-center justify-between text-[12px] font-bold text-[#079455]"
        >
          Contact Support
          <ArrowRight className="h-5 w-5" />
        </a>
      </Card>
    </aside>
  );
}

function ProgramListPage() {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_286px] gap-5 p-6">
      <section className="min-w-0">
        <PageHeader />
        <KpiCards />
        <StatusTabs />
        <FilterPanel />
        <ProgramTable />
      </section>
      <RightPanel />
    </div>
  );
}

function AppShell() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Sidebar />
      <main className="ml-[235px] min-h-screen">
        <Topbar />
        <Routes>
          <Route path="/" element={<ProgramListPage />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/Engage-Hub-Admin">
      <AppShell />
    </BrowserRouter>
  );
}
