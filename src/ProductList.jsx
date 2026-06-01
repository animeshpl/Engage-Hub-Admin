import {
  ArrowUpDown,
  BarChart3,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  Columns3,
  Download,
  Package,
  Plus,
  RefreshCw,
  Search,
  ShoppingBag,
  Tag,
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

const productKpis = [
  {
    label: "Total Products",
    value: "1,248",
    description: "Across active catalogues",
    icon: Package,
    tone: "bg-emerald-50 text-[#079455]",
  },
  {
    label: "Active SKUs",
    value: "982",
    description: "Ready for campaign mapping",
    icon: ShoppingBag,
    tone: "bg-blue-50 text-[#2563EB]",
  },
  {
    label: "Categories",
    value: "36",
    description: "Mapped to brands",
    icon: Tag,
    tone: "bg-orange-50 text-[#F97316]",
  },
  {
    label: "QR Linked",
    value: "74%",
    description: "Product assets configured",
    icon: BarChart3,
    tone: "bg-purple-50 text-[#7C3AED]",
  },
];

const products = [
  {
    name: "Pine Rewards Starter Kit",
    code: "SKU-1101",
    brand: "Pine Labs",
    category: "Starter Kit",
    grade: "Gold",
    qr: "Mapped",
    status: "Active",
    updated: "29 May 2026",
    avatar: "PR",
    avatarClass: "bg-[#079455]",
  },
  {
    name: "QR Merchant Standee",
    code: "SKU-1102",
    brand: "Pine Labs",
    category: "Visibility",
    grade: "Standard",
    qr: "Mapped",
    status: "Active",
    updated: "27 May 2026",
    avatar: "QS",
    avatarClass: "bg-[#2563EB]",
  },
  {
    name: "Retailer Welcome Pack",
    code: "SKU-1103",
    brand: "Engage Hub",
    category: "Onboarding",
    grade: "Silver",
    qr: "Pending",
    status: "Draft",
    updated: "25 May 2026",
    avatar: "RW",
    avatarClass: "bg-[#F59E0B]",
  },
  {
    name: "Dealer Loyalty Voucher",
    code: "SKU-1104",
    brand: "Engage Hub",
    category: "Rewards",
    grade: "Platinum",
    qr: "Mapped",
    status: "Active",
    updated: "22 May 2026",
    avatar: "DL",
    avatarClass: "bg-[#7C3AED]",
  },
  {
    name: "Scan Training Leaflet",
    code: "SKU-1105",
    brand: "Pine Labs",
    category: "Training Asset",
    grade: "Standard",
    qr: "Not Linked",
    status: "Paused",
    updated: "18 May 2026",
    avatar: "ST",
    avatarClass: "bg-[#EF4444]",
  },
];

function Breadcrumb() {
  const crumbs = ["Dashboard", "Product & Catalogue", "Products", "Product List"];

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
          Product List
        </h1>
        <p className="mt-2 text-[14px] font-medium text-[#344054]">
          View and manage product masters, SKU metadata, QR mappings and product
          catalogue readiness.
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
          Add Product
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

function Badge({ label }) {
  const styles = {
    Active: "bg-emerald-50 text-[#008A4A]",
    Draft: "bg-slate-100 text-[#667085]",
    Paused: "bg-orange-50 text-[#B54708]",
    Mapped: "bg-emerald-50 text-[#008A4A]",
    Pending: "bg-orange-50 text-[#B54708]",
    "Not Linked": "bg-red-50 text-[#D92D20]",
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

function FilterPanel() {
  return (
    <Card className="mb-4 overflow-hidden p-0">
      <div className="h-1 bg-[#079455]" />
      <div className="grid grid-cols-[1.6fr_0.9fr_0.9fr_0.9fr_120px] items-end gap-4 p-4">
        <label>
          <span className="mb-2 block text-[11px] font-bold text-[#101828]">
            Search by product name or SKU
          </span>
          <div className="flex h-8 items-center justify-between rounded-md border border-[#D0D9E8] bg-white px-3 text-[12px] font-medium text-[#52637C]">
            <span>Search by product name, SKU or brand...</span>
            <Search className="h-4 w-4 text-[#0F2D55]" />
          </div>
        </label>
        {["Category", "Brand", "Status"].map((label) => (
          <label key={label}>
            <span className="mb-2 block text-[11px] font-bold text-[#101828]">
              {label}
            </span>
            <div className="flex h-8 items-center justify-between rounded-md border border-[#D0D9E8] bg-white px-3 text-[12px] font-medium text-[#52637C]">
              <span>All {label}s</span>
              <ChevronDown className="h-4 w-4 text-[#0F2D55]" />
            </div>
          </label>
        ))}
        <button className="h-8 rounded-md bg-[#079455] text-[12px] font-bold text-white">
          Apply Filters
        </button>
      </div>
    </Card>
  );
}

function ProductTable() {
  return (
    <Card className="overflow-hidden">
      <div className="flex items-start justify-between p-4 pb-2">
        <div>
          <h2 className="text-[17px] font-bold text-[#101828]">
            Product Directory
          </h2>
          <p className="mt-1 text-[12px] font-semibold text-[#50617D]">
            Showing product masters with brand, category and QR readiness.
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
        </div>
      </div>
      <table className="w-full table-fixed border-t border-[#D9E1EC] text-left">
        <thead>
          <tr className="bg-[#F8FAFC] text-[11px] font-bold text-[#132849]">
            <th className="w-11 border-r border-[#D9E1EC] px-3 py-3">
              <input type="checkbox" className="h-3.5 w-3.5 rounded" />
            </th>
            <th className="w-[260px] border-r border-[#D9E1EC] px-3 py-3">
              <span className="inline-flex items-center gap-1">
                Product / SKU <ArrowUpDown className="h-3 w-3" />
              </span>
            </th>
            <th className="border-r border-[#D9E1EC] px-3 py-3">Brand</th>
            <th className="border-r border-[#D9E1EC] px-3 py-3">Category</th>
            <th className="border-r border-[#D9E1EC] px-3 py-3">Grade</th>
            <th className="border-r border-[#D9E1EC] px-3 py-3">QR Mapping</th>
            <th className="border-r border-[#D9E1EC] px-3 py-3">Status</th>
            <th className="px-3 py-3">Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              className="border-t border-[#D9E1EC] text-[12px] font-semibold text-[#101828]"
              key={product.code}
            >
              <td className="border-r border-[#D9E1EC] px-3 py-3">
                <input type="checkbox" className="h-3.5 w-3.5 rounded" />
              </td>
              <td className="border-r border-[#D9E1EC] px-3 py-3">
                <div className="flex items-center gap-3">
                  <span
                    className={classNames(
                      "grid h-8 w-8 shrink-0 place-items-center rounded-full text-[11px] font-bold text-white",
                      product.avatarClass,
                    )}
                  >
                    {product.avatar}
                  </span>
                  <div>
                    <p className="leading-tight">{product.name}</p>
                    <p className="mt-1 text-[11px] font-bold text-[#667085]">
                      {product.code}
                    </p>
                  </div>
                </div>
              </td>
              <td className="border-r border-[#D9E1EC] px-3 py-3">
                {product.brand}
              </td>
              <td className="border-r border-[#D9E1EC] px-3 py-3">
                {product.category}
              </td>
              <td className="border-r border-[#D9E1EC] px-3 py-3">
                {product.grade}
              </td>
              <td className="border-r border-[#D9E1EC] px-3 py-3">
                <Badge label={product.qr} />
              </td>
              <td className="border-r border-[#D9E1EC] px-3 py-3">
                <Badge label={product.status} />
              </td>
              <td className="px-3 py-3">{product.updated}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between border-t border-[#D9E1EC] px-4 py-3">
        <p className="text-[12px] font-semibold text-[#465B7A]">
          Showing 1 to 5 of 1,248 products
        </p>
        <div className="flex items-center gap-2">
          {["‹", "1", "2", "3", "...", "25", "›"].map((item) => (
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

export default function ProductList() {
  return (
    <div className="p-6">
      <PageHeader />
      <section className="mb-4 grid grid-cols-4 gap-3.5">
        {productKpis.map((item) => (
          <KpiCard item={item} key={item.label} />
        ))}
      </section>
      <FilterPanel />
      <ProductTable />
    </div>
  );
}
