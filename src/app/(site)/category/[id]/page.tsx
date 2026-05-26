"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { categories, products, type ProductCategory } from "@/data/products";
import {
  ArrowRight,
  ChevronRight,
  Package,
  Download,
  FileText,
  CheckCircle2,
  Plus,
} from "lucide-react";

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

export default function CategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const category = categories.find((c) => c.id === id) || categories[0];
  const categoryProducts = products.filter((p) => p.category === category.id);
  const catId = category.id as ProductCategory;

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[320px] bg-gradient-to-br from-primary-dark via-bg-dark to-primary-dark flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,184,148,0.12),transparent_50%)]" />
        <Container className="relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {category.shortName}
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mb-6">
              {category.description}
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-primary-accent font-medium">
                Browse {category.skuCount} SKUs
              </span>
              <span className="text-white/30">|</span>
              <Link
                href="/resources#catalogs"
                className="text-white/60 hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <Download className="w-4 h-4" />
                Download Catalog
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Breadcrumb */}
      <Container className="py-4">
        <nav className="flex items-center gap-2 text-sm text-text-secondary">
          <Link href="/" className="hover:text-primary-accent transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/products" className="hover:text-primary-accent transition-colors">Products</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-text-primary">{category.shortName}</span>
        </nav>
      </Container>

      {/* Product Grid */}
      <section className="py-12">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {categoryProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                className="group bg-white rounded-lg border border-border-light hover:border-primary-accent hover:shadow-card-md hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="aspect-square bg-bg-secondary flex items-center justify-center">
                  <Package className="w-12 h-12 text-text-muted/40" />
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs font-medium text-text-muted uppercase tracking-[0.5px]">
                      {product.sku}
                    </span>
                    <Badge
                      variant={
                        product.stock === "in-stock"
                          ? "success"
                          : product.stock === "low-stock"
                          ? "warning"
                          : "outline"
                      }
                      size="sm"
                    >
                      {product.stock === "in-stock"
                        ? "In Stock"
                        : product.stock === "low-stock"
                        ? "Low Stock"
                        : "Made to Order"}
                    </Badge>
                  </div>

                  <h3 className="text-base font-semibold text-text-primary mb-1 group-hover:text-primary-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-text-secondary mb-3 line-clamp-2">
                    {product.shortDescription}
                  </p>

                  {product.vehicleFit.length > 0 && (
                    <p className="text-xs text-text-muted mb-1">
                      Fits: {product.vehicleFit[0]}
                    </p>
                  )}
                  {product.oem.length > 0 && (
                    <p className="text-xs text-text-muted mb-4 font-mono">
                      Replaces: {product.oem[0]}
                    </p>
                  )}

                  <div className="flex gap-2">
                    <Link
                      href={`/products/${product.id}`}
                      className="flex-1 text-center py-2 rounded-md bg-primary-dark text-white text-xs font-semibold uppercase tracking-[0.5px] hover:bg-primary-accent transition-colors"
                    >
                      View Details
                    </Link>
                    <button className="p-2 rounded-md border border-border-light text-text-secondary hover:border-primary-accent hover:text-primary-accent transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {categoryProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-text-secondary">No products found in this category.</p>
            </div>
          )}
        </Container>
      </section>

      {/* Back link */}
      <section className="pb-20">
        <Container>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-accent hover:underline"
          >
            ← Back to All Products
          </Link>
        </Container>
      </section>
    </div>
  );
}
