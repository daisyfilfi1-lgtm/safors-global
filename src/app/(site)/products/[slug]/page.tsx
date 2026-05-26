"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products, categories, type ProductCategory } from "@/data/products";
import {
  ChevronRight,
  Shield,
  Ruler,
  Weight,
  Truck,
  FileText,
  Clock,
  CheckCircle2,
  XCircle,
  ArrowLeft,
  PackagePlus,
} from "lucide-react";

const stockConfig = {
  "in-stock": { label: "In Stock — Ships within 24H", color: "success" as const, Icon: CheckCircle2 },
  "low-stock": { label: "Low Stock", color: "warning" as const, Icon: Clock },
  "made-to-order": { label: "Made to Order — 14 Days", color: "outline" as const, Icon: Clock },
};

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = products.find((p) => p.id === slug);

  if (!product) {
    return (
      <div className="pt-32 pb-20">
        <Container className="text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-text-secondary mb-8">
            The product you are looking for does not exist or has been removed.
          </p>
          <Link href="/products">
            <Button variant="primary">View All Products</Button>
          </Link>
        </Container>
      </div>
    );
  }

  const cat = categories.find((c) => c.id === product.category);
  const stock = stockConfig[product.stock];
  const { Icon: StockIcon } = stock;

  return (
    <div className="pt-32 pb-20">
      <Container>
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-text-secondary mb-8">
          <Link href="/" className="hover:text-primary-accent transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/products" className="hover:text-primary-accent transition-colors">
            Products
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link
            href={`/products/${product.category}`}
            className="hover:text-primary-accent transition-colors"
          >
            {cat?.shortName || product.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-text-primary">{product.sku}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Image */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-square bg-bg-secondary rounded-lg flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary-accent/10 flex items-center justify-center">
                  <PackagePlus className="w-10 h-10 text-primary-accent" />
                </div>
                <p className="text-sm text-text-muted">Product image coming soon</p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3 mt-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-bg-secondary rounded-md flex items-center justify-center"
                >
                  <p className="text-[10px] text-text-muted">View {i}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium text-text-muted uppercase tracking-[0.5px]">
                {product.sku}
              </span>
              <Badge variant={stock.color} size="sm">
                <StockIcon className="w-3 h-3 mr-1" />
                {stock.label}
              </Badge>
              {product.certifications.map((cert) => (
                <Badge key={cert} variant="outline" size="sm">
                  {cert}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-3">
              {product.name}
            </h1>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Fitment Checker */}
            <div className="bg-bg-secondary rounded-lg p-6 mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.5px] mb-3">
                Vehicle Fitment Check
              </h3>
              <div className="flex flex-wrap gap-3 mb-3">
                {["Make", "Model", "Year", "Engine"].map((field) => (
                  <select
                    key={field}
                    className="flex-1 min-w-[120px] h-10 px-3 rounded-md border border-border-light bg-white text-sm text-text-primary focus:outline-none focus:border-primary-accent"
                  >
                    <option value="">Select {field}</option>
                  </select>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <input
                  type="text"
                  placeholder="Or enter VIN"
                  className="flex-1 h-10 px-3 rounded-md border border-border-light bg-white text-sm text-text-primary focus:outline-none focus:border-primary-accent"
                />
                <Button variant="primary" size="sm">
                  Check Fitment
                </Button>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-bg-secondary rounded-lg p-6 mb-8">
              <p className="text-sm text-text-muted mb-2">
                Wholesale pricing available.
              </p>
              <div className="flex items-center gap-2">
                <Link href="/contact">
                  <Button variant="primary">Request Account</Button>
                </Link>
                <span className="text-text-muted text-sm">or</span>
                <Link href="/contact">
                  <Button variant="outline">Contact Sales</Button>
                </Link>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-4 mb-10">
              <Button variant="primary" size="lg">
                <PackagePlus className="w-5 h-5" />
                Add to Quote List
              </Button>
              <Button variant="outline" size="lg">
                Order Sample
              </Button>
            </div>

            {/* Tech Specs Tabs */}
            <div className="border-t border-border-light pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-4 bg-bg-secondary rounded-lg">
                  <Ruler className="w-5 h-5 text-primary-accent shrink-0" />
                  <div>
                    <p className="text-xs text-text-muted">Dimensions</p>
                    <p className="text-sm font-medium">{product.dimensions}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-bg-secondary rounded-lg">
                  <Weight className="w-5 h-5 text-primary-accent shrink-0" />
                  <div>
                    <p className="text-xs text-text-muted">Weight</p>
                    <p className="text-sm font-medium">{product.weight}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-bg-secondary rounded-lg">
                  <Shield className="w-5 h-5 text-primary-accent shrink-0" />
                  <div>
                    <p className="text-xs text-text-muted">Warranty</p>
                    <p className="text-sm font-medium">{product.warranty}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-bg-secondary rounded-lg">
                  <FileText className="w-5 h-5 text-primary-accent shrink-0" />
                  <div>
                    <p className="text-xs text-text-muted">Material</p>
                    <p className="text-sm font-medium">{product.material}</p>
                  </div>
                </div>
              </div>

              {/* Compatible Vehicles */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Compatible Vehicles</h3>
                <ul className="space-y-2">
                  {product.vehicleFit.map((v) => (
                    <li key={v} className="flex items-center gap-2 text-sm text-text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-primary-accent shrink-0" />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>

              {/* OEM Cross Reference */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">OEM Cross Reference</h3>
                <div className="flex flex-wrap gap-2">
                  {product.oem.map((oem) => (
                    <span
                      key={oem}
                      className="px-3 py-1.5 bg-bg-secondary rounded-md text-sm font-mono text-text-secondary"
                    >
                      {oem}
                    </span>
                  ))}
                </div>
              </div>

              {/* Documents */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Documents</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm">
                    <FileText className="w-4 h-4" />
                    Specification Sheet
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="w-4 h-4" />
                    Installation Guide
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="w-4 h-4" />
                    Test Report
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-border-light">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-accent hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Products
          </Link>
        </div>
      </Container>
    </div>
  );
}
