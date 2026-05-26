"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container, Section } from "@/components/ui/container";
import {
  Search,
  FileText,
  BookOpen,
  Download,
  Bookmark,
  RefreshCw,
  HelpCircle,
  ArrowRight,
  ChevronRight,
  FileDown,
  ExternalLink,
  Printer,
  Wrench,
  BarChart3,
  Shield,
  FileCheck,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Animations                                                        */
/* ------------------------------------------------------------------ */
const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
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
/*  Resource Categories                                               */
/* ------------------------------------------------------------------ */
const resourceCategories = [
  {
    id: "technical",
    title: "Technical Documents",
    desc: "Product specifications, technical drawings, installation guidelines, and OE cross-reference data sheets for all product categories.",
    icon: <FileText className="w-8 h-8" />,
    color: "bg-blue-50 border-blue-100",
    iconColor: "text-blue-600",
    items: ["Product Specification Sheets", "OE Cross-Reference Guides (PDF)", "Technical Drawings & Dimensions", "Material Composition Reports", "Torque & Installation Specs"],
  },
  {
    id: "installation",
    title: "Installation Guides",
    desc: "Step-by-step installation manuals with diagrams, torque specifications, and best practices for SAFORS product lines.",
    icon: <BookOpen className="w-8 h-8" />,
    color: "bg-emerald-50 border-emerald-100",
    iconColor: "text-emerald-600",
    items: ["Control Arm Installation Guide", "Radiator Replacement Procedure", "Ball Joint Press-Fit Instructions", "Bumper Cover Removal & Installation", "Ignition Coil Replacement Guide"],
  },
  {
    id: "catalogs",
    title: "Product Catalogs",
    desc: "Comprehensive catalogs organized by product category, vehicle make, and application type. Available in print and digital formats.",
    icon: <Bookmark className="w-8 h-8" />,
    color: "bg-amber-50 border-amber-100",
    iconColor: "text-amber-600",
    items: ["Full Product Catalog (2,400+ SKUs)", "Chassis & Steering Catalog", "Cooling & Thermal Catalog", "Electrical & Sensors Catalog", "Body & Plastic Catalog", "By-Vehicle Application Guide"],
  },
  {
    id: "cross-ref",
    title: "Cross Reference Tool",
    desc: "Look up SAFORS parts by OEM number, competitor number, vehicle make/model/year, or part category.",
    icon: <BarChart3 className="w-8 h-8" />,
    color: "bg-purple-50 border-purple-100",
    iconColor: "text-purple-600",
    items: ["Search by OEM Number", "Search by Vehicle (Make/Model/Year)", "Competitor Cross Reference", "Batch Lookup (Upload CSV)", "API Access for Distributors"],
  },
  {
    id: "warranty",
    title: "Warranty & Returns",
    desc: "Understanding your coverage, how to file a warranty claim, and our return merchandise authorization (RMA) process.",
    icon: <RefreshCw className="w-8 h-8" />,
    color: "bg-rose-50 border-rose-100",
    iconColor: "text-rose-600",
    items: ["Warranty Policy Overview", "Warranty Claim Form", "RMA Request & Process", "Return Shipping Instructions", "Warranty Exclusions & FAQ"],
  },
  {
    id: "faq",
    title: "FAQs",
    desc: "Frequently asked questions about ordering, shipping, product fitment, quality, and technical support.",
    icon: <HelpCircle className="w-8 h-8" />,
    color: "bg-cyan-50 border-cyan-100",
    iconColor: "text-cyan-600",
    items: ["Ordering & Payment", "Shipping & Delivery", "Product Fitment", "Quality & Certifications", "Technical Support", "Account Management"],
  },
];

/* ------------------------------------------------------------------ */
/*  Quick Link Items                                                  */
/* ------------------------------------------------------------------ */
const quickLinks = [
  { label: "Download Full Catalog", icon: <Download className="w-4 h-4" />, href: "#catalogs" },
  { label: "Cross Reference Lookup", icon: <Search className="w-4 h-4" />, href: "#cross-ref" },
  { label: "Installation Guides", icon: <Wrench className="w-4 h-4" />, href: "#installation" },
  { label: "Warranty Claim Form", icon: <FileCheck className="w-4 h-4" />, href: "#warranty" },
];

/* ================================================================== */
/*  PAGE: Resources                                                    */
/* ================================================================== */
export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = searchQuery
    ? resourceCategories.filter(
        (cat) =>
          cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          cat.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
          cat.items.some((item) => item.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : resourceCategories;

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
              "radial-gradient(circle at 30% 40%, #00B894 0%, transparent 50%), radial-gradient(circle at 70% 60%, #00B894 0%, transparent 50%)",
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
                Resource Center
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
            >
              Resources &amp;
              <br />
              <span className="text-primary-accent">Support Center</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-white/60 max-w-xl mb-8"
            >
              Everything you need to find, install, and stock SAFORS parts — from technical
              documentation to cross-reference tools.
            </motion.p>

            {/* Search bar */}
            <motion.div variants={fadeInUp} className="max-w-lg">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  placeholder="Search resources, documents, guides..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-14 pl-12 pr-4 text-base bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent/30 transition-colors"
                />
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ================================================================ */}
      {/*  QUICK LINKS BAR                                                */}
      {/* ================================================================ */}
      <div className="bg-white border-b border-border-light">
        <Container className="py-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.5px] text-text-muted">
              Quick Access:
            </span>
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-full bg-bg-secondary text-text-secondary hover:bg-primary-accent/10 hover:text-primary-accent transition-colors"
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        </Container>
      </div>

      {/* ================================================================ */}
      {/*  RESOURCE CATEGORY GRID                                        */}
      {/* ================================================================ */}
      <Section background="light">
        {filteredResources.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Search className="w-12 h-12 text-text-muted mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-primary-dark mb-2">
              No resources found
            </h3>
            <p className="text-text-secondary mb-6">
              Try a different search term or browse by category.
            </p>
            <Button variant="outline" onClick={() => setSearchQuery("")}>
              Clear Search
            </Button>
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {filteredResources.map((cat) => (
              <motion.div
                key={cat.id}
                id={cat.id}
                variants={fadeInUp}
                className={cn(
                  "rounded-lg border p-6 md:p-8 transition-all hover:shadow-card-md group",
                  cat.color,
                  "bg-white border-border-light"
                )}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center shrink-0",
                      cat.iconColor,
                      "bg-bg-secondary"
                    )}
                  >
                    {cat.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-primary-dark group-hover:text-primary-accent transition-colors mb-1">
                      {cat.title}
                    </h2>
                    <p className="text-sm text-text-secondary">{cat.desc}</p>
                  </div>
                </div>

                {/* Resource items */}
                <ul className="space-y-1.5 mb-5">
                  {cat.items.map((item) => (
                    <li key={item}>
                      <button
                        className="w-full flex items-center justify-between px-3 py-2 text-sm text-text-secondary hover:text-primary-accent hover:bg-bg-secondary rounded-md transition-colors text-left"
                      >
                        <span className="flex items-center gap-2">
                          <FileDown className="w-3.5 h-3.5 text-text-muted" />
                          {item}
                        </span>
                        <Download className="w-3.5 h-3.5 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-3">
                  <Button variant="outline" size="sm" className="text-xs">
                    <Download className="w-3.5 h-3.5" />
                    Download All
                  </Button>
                  <button className="text-xs text-text-muted hover:text-primary-accent transition-colors flex items-center gap-1">
                    View Details
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </Section>

      {/* ================================================================ */}
      {/*  CROSS REFERENCE TOOL SPOTLIGHT                                */}
      {/* ================================================================ */}
      <Section id="cross-ref">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.div variants={fadeInUp}>
            <Badge variant="outline" className="mb-4">
              Cross Reference Tool
            </Badge>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-primary-dark mb-4"
          >
            Find Your Part in Seconds
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-text-secondary mb-8"
          >
            Search by OEM number, competitor part number, vehicle make/model/year, or SAFORS SKU.
            Our cross reference database covers 100,000+ OE and competitor numbers.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            className="p-8 rounded-lg bg-white border border-border-light shadow-card-md"
          >
            <div className="relative mb-4">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input
                type="text"
                placeholder="Enter OEM number, SAFORS SKU, or vehicle..."
                className="w-full h-14 pl-12 pr-4 text-base bg-bg-secondary border border-border-light rounded-lg focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent/30"
              />
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["OEM Number", "Vehicle", "SAFORS SKU", "Competitor Part"].map((tab) => (
                <button
                  key={tab}
                  className="px-4 py-2 text-xs font-medium rounded-full bg-bg-secondary text-text-secondary hover:bg-primary-accent/10 hover:text-primary-accent transition-colors"
                >
                  {tab}
                </button>
              ))}
            </div>

            <p className="text-xs text-text-muted">
              Try searching: &ldquo;51350-TVA-A01&rdquo;, &ldquo;Honda Accord 2018&rdquo;, &ldquo;SF-CA-1001&rdquo;
            </p>

            <div className="mt-6 pt-6 border-t border-border-light text-center">
              <p className="text-sm text-text-secondary mb-3">
                Need to look up multiple parts at once?
              </p>
              <Button variant="outline" size="sm">
                Upload CSV for Batch Lookup
              </Button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="text-center mt-6"
        >
          <p className="text-xs text-text-muted">
            Distributor API access available for real-time cross reference integration.
            <a href="/contact" className="text-primary-accent hover:underline ml-1">Contact us for details</a>.
          </p>
        </motion.div>
      </Section>

      {/* ================================================================ */}
      {/*  CTA SECTION                                                    */}
      {/* ================================================================ */}
      <Section background="accent">
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
            Need Something We Haven&apos;t Listed?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-primary-dark/70 mb-8"
          >
            Our technical documentation team can provide custom specifications, drawings, or
            application data for your specific requirements.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link href="/contact">
              <Button
                variant="primary"
                size="lg"
                className="bg-primary-dark text-white hover:bg-white hover:text-primary-dark"
              >
                Request Technical Support
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Section>
    </>
  );
}
