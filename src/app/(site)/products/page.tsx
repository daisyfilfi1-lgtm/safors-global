"use client";

import { Suspense, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container, Section } from "@/components/ui/container";
import { categories, products } from "@/data/products";
import type { ProductCategory } from "@/data/products";
import {
  Search,
  SlidersHorizontal,
  X,
  Package,
  ChevronDown,
  ArrowRight,
  CheckCircle,
  Plus,
  Filter,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Animation Variants                                                 */
/* ------------------------------------------------------------------ */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

/* ------------------------------------------------------------------ */
/*  Stock badge helper                                                 */
/* ------------------------------------------------------------------ */
function StockBadge({ stock }: { stock: "in-stock" | "low-stock" | "made-to-order" }) {
  const map = {
    "in-stock": { label: "In Stock", variant: "success" as const },
    "low-stock": { label: "Low Stock", variant: "warning" as const },
    "made-to-order": { label: "Made to Order", variant: "outline" as const },
  };
  const s = map[stock];
  return <Badge variant={s.variant}>{s.label}</Badge>;
}

/* ------------------------------------------------------------------ */
/*  Category icon                                                      */
/* ------------------------------------------------------------------ */
function CatIcon({ id }: { id: string }) {
  const icons: Record<string, string> = {
    chassis: "🔧",
    cooling: "❄️",
    electrical: "⚡",
    body: "🚗",
    powertrain: "⚙️",
    maintenance: "🛠️",
  };
  return <span className="text-xl">{icons[id] || "📦"}</span>;
}

/* ================================================================== */
/*  PAGE: Products Hub                                                 */
/* ================================================================== */
export default function ProductsPageWrapped() {
  return (
    <Suspense fallback={<div className="pt-32 pb-20 text-center text-text-muted">Loading products...</div>}>
      <ProductsPage />
    </Suspense>
  );
}

function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">("all");
  const [showFilters, setShowFilters] = useState(false);
  const [stockFilter, setStockFilter] = useState<string>("all");
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") as ProductCategory | null;

  // Set initial category from URL param on mount
  useState(() => {
    if (initialCategory && categories.some((c) => c.id === initialCategory)) {
      setActiveCategory(initialCategory);
    }
  });

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchCategory = activeCategory === "all" || p.category === activeCategory;
      const matchStock = stockFilter === "all" || p.stock === stockFilter;
      const query = searchQuery.toLowerCase();
      const matchSearch =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.sku.toLowerCase().includes(query) ||
        p.oem.some((o) => o.toLowerCase().includes(query)) ||
        p.vehicleFit.some((v) => v.toLowerCase().includes(query)) ||
        p.shortDescription.toLowerCase().includes(query);
      return matchCategory && matchStock && matchSearch;
    });
  }, [activeCategory, searchQuery, stockFilter]);

  const activeCatName =
    activeCategory === "all"
      ? "All Products"
      : categories.find((c) => c.id === activeCategory)?.name || "Products";

  const totalCount = categories.find((c) => c.id === activeCategory)?.skuCount || products.length;

  return (
    <>
      {/* ================================================================ */}
      {/*  HERO                                                           */}
      {/* ================================================================ */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-dark via-primary-dark to-bg-dark overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, #00B894 0%, transparent 50%), radial-gradient(circle at 70% 50%, #00B894 0%, transparent 50%)",
            filter: "blur(80px)",
          }}
        />
        <Container className="relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="accent" className="mb-4">
                {categories.length} Categories &bull; {products.length} Featured SKUs
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
            >
              {activeCatName}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-white/60 max-w-xl"
            >
              Browse our catalog of {totalCount}+ precision-engineered automotive components.
              OE-fit quality with global stock availability.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* ================================================================ */}
      {/*  FILTERS & SEARCH                                               */}
      {/* ================================================================ */}
      <div className="sticky top-20 z-30 bg-white border-b border-border-light shadow-sm">
        <Container className="py-4">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input
                type="text"
                placeholder="Search by name, SKU, OEM, or vehicle..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 pl-10 pr-4 text-sm bg-bg-secondary border border-border-light rounded-md focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent/30 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Mobile filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary"
            >
              <Filter className="w-4 h-4" />
              Filters
              <ChevronDown
                className={cn("w-3 h-3 transition-transform", showFilters && "rotate-180")}
              />
            </button>

            {/* Desktop category pills + stock filter */}
            <div className="hidden lg:flex items-center gap-2 flex-wrap">
              <button
                onClick={() => { setActiveCategory("all"); setStockFilter("all"); }}
                className={cn(
                  "px-4 py-2 text-xs font-semibold uppercase tracking-[0.5px] rounded-full transition-all",
                  activeCategory === "all"
                    ? "bg-primary-dark text-white"
                    : "bg-bg-secondary text-text-secondary hover:bg-border-light"
                )}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "px-4 py-2 text-xs font-semibold uppercase tracking-[0.5px] rounded-full transition-all flex items-center gap-1.5",
                    activeCategory === cat.id
                      ? "bg-primary-dark text-white"
                      : "bg-bg-secondary text-text-secondary hover:bg-border-light"
                  )}
                >
                  <CatIcon id={cat.id} />
                  {cat.shortName}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile filter panel */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="lg:hidden mt-4 pt-4 border-t border-border-light"
            >
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => { setActiveCategory("all"); setStockFilter("all"); }}
                  className={cn(
                    "px-3 py-1.5 text-xs font-medium rounded-full transition-all",
                    activeCategory === "all" ? "bg-primary-dark text-white" : "bg-bg-secondary text-text-secondary"
                  )}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      "px-3 py-1.5 text-xs font-medium rounded-full transition-all",
                      activeCategory === cat.id ? "bg-primary-dark text-white" : "bg-bg-secondary text-text-secondary"
                    )}
                  >
                    {cat.shortName}
                  </button>
                ))}
              </div>
              {/* Stock filter */}
              <div className="flex gap-2 mt-3">
                {[
                  { value: "all", label: "All Stock" },
                  { value: "in-stock", label: "In Stock" },
                  { value: "low-stock", label: "Low Stock" },
                  { value: "made-to-order", label: "Made to Order" },
                ].map((s) => (
                  <button
                    key={s.value}
                    onClick={() => setStockFilter(s.value)}
                    className={cn(
                      "px-3 py-1.5 text-xs font-medium rounded-full transition-all",
                      stockFilter === s.value ? "bg-primary-accent text-primary-dark" : "bg-bg-secondary text-text-secondary"
                    )}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Desktop stock filter tabs */}
          <div className="hidden lg:flex items-center gap-2 mt-3">
            {[
              { value: "all", label: "All" },
              { value: "in-stock", label: "In Stock" },
              { value: "low-stock", label: "Low Stock" },
              { value: "made-to-order", label: "Made to Order" },
            ].map((s) => (
              <button
                key={s.value}
                onClick={() => setStockFilter(s.value)}
                className={cn(
                  "px-3 py-1 text-xs font-medium rounded-full transition-all",
                  stockFilter === s.value
                    ? "bg-primary-accent/10 text-primary-accent"
                    : "text-text-muted hover:text-text-secondary"
                )}
              >
                {s.label}
              </button>
            ))}
            <span className="ml-auto text-xs text-text-muted">
              {filteredProducts.length} of {products.length} products shown
            </span>
          </div>

          {/* Mobile count */}
          <div className="lg:hidden text-xs text-text-muted mt-2">
            {filteredProducts.length} of {products.length} products shown
          </div>
        </Container>
      </div>

      {/* ================================================================ */}
      {/*  PRODUCT GRID                                                   */}
      {/* ================================================================ */}
      <Section background="light">
        {filteredProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Package className="w-12 h-12 text-text-muted mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-primary-dark mb-2">No products found</h3>
            <p className="text-text-secondary mb-6">
              Try adjusting your search or filter criteria.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
                setStockFilter("all");
              }}
            >
              Clear All Filters
            </Button>
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                className="group bg-white rounded-lg border border-border-light overflow-hidden hover:shadow-card-lg hover:border-primary-accent/30 transition-all duration-300 flex flex-col"
              >
                {/* Image placeholder */}
                <div className="h-44 bg-gradient-to-br from-bg-secondary to-gray-100 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity bg-primary-accent" />
                  <Package className="w-12 h-12 text-gray-300 group-hover:text-primary-accent/30 transition-colors" />
                  <div className="absolute top-3 right-3">
                    <StockBadge stock={product.stock} />
                  </div>
                  {product.featured && (
                    <div className="absolute top-3 left-3">
                      <Badge variant="accent" size="sm">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Card body */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="text-xs text-text-muted font-mono mb-1">{product.sku}</div>
                  <h3 className="text-sm font-bold text-primary-dark group-hover:text-primary-accent transition-colors mb-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-text-secondary mb-3 line-clamp-2 flex-1">
                    {product.shortDescription}
                  </p>

                  {/* Fitment / OEM */}
                  <div className="space-y-1.5 text-xs text-text-muted mb-4">
                    {product.vehicleFit.length > 0 && (
                      <div className="flex items-start gap-1.5">
                        <span className="shrink-0 mt-0.5">🚗</span>
                        <span className="line-clamp-1">{product.vehicleFit[0]}</span>
                      </div>
                    )}
                    {product.oem.length > 0 && (
                      <div className="flex items-start gap-1.5">
                        <span className="shrink-0 mt-0.5 text-[10px] font-bold">OEM</span>
                        <span className="line-clamp-1">{product.oem[0]}</span>
                      </div>
                    )}
                  </div>

                  {/* Add to Quote button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-auto group-hover:border-primary-accent group-hover:text-primary-accent"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Add to Quote
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </Section>

      {/* ================================================================ */}
      {/*  CATEGORY STATS BAR                                             */}
      {/* ================================================================ */}
      <div className="bg-primary-dark py-10">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                variants={fadeInUp}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "text-center p-3 rounded-lg border transition-all cursor-pointer",
                  activeCategory === cat.id
                    ? "border-primary-accent bg-primary-accent/10"
                    : "border-white/10 hover:border-white/20"
                )}
              >
                <div className="text-white/70 text-xs font-semibold uppercase tracking-wide">
                  {cat.shortName}
                </div>
                <div className="text-primary-accent text-lg font-bold mt-1">{cat.skuCount}</div>
                <div className="text-white/40 text-[10px]">SKUs</div>
              </motion.button>
            ))}
          </motion.div>
        </Container>
      </div>

      {/* ================================================================ */}
      {/*  CTA                                                             */}
      {/* ================================================================ */}
      <Section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold text-primary-dark mb-4"
          >
            Can&apos;t Find What You&apos;re Looking For?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-text-secondary mb-8"
          >
            Our catalog is continuously expanding. Contact our team for custom manufacturing
            inquiries or parts not listed here.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <a href="/contact">
              <Button variant="primary" size="lg">
                Request Custom Quote
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </Section>
    </>
  );
}
