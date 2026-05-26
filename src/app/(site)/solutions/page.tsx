"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container, Section } from "@/components/ui/container";
import Link from "next/link";
import {
  Wrench,
  Building2,
  Truck,
  Shield,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Clock,
  DollarSign,
  HeadphonesIcon,
  BarChart3,
  Package,
  Users,
  AlertTriangle,
  Lightbulb,
  Target,
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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

/* ------------------------------------------------------------------ */
/*  Segment Data                                                       */
/* ------------------------------------------------------------------ */
interface SegmentData {
  id: string;
  label: string;
  icon: React.ReactNode;
  tagline: string;
  painPoints: string[];
  solution: string[];
  impact: { metric: string; label: string }[];
  cta: string;
}

const segments: SegmentData[] = [
  {
    id: "garages",
    label: "Independent Garages",
    icon: <Wrench className="w-6 h-6" />,
    tagline: "Fit it right the first time. Every time.",
    painPoints: [
      "Parts that don't fit — wasted labor hours and angry customers",
      "Inconsistent quality across different suppliers",
      "Slow delivery times causing vehicle downtime",
      "Difficulty finding the right part without OEM numbers",
    ],
    solution: [
      "OE-fit geometry guaranteed — parts install without modification",
      "Single-source catalog covering 2,400+ SKUs across 6 categories",
      "Same-day shipping on 90% of orders from regional warehouses",
      "Cross-reference by OEM, vehicle, or part type in our online catalog",
    ],
    impact: [
      { metric: "99%+", label: "Fitment Accuracy" },
      { metric: "< 0.3%", label: "Return Rate" },
      { metric: "24H", label: "Sample Turnaround" },
      { metric: "18%", label: "Avg. Cost Savings" },
    ],
    cta: "Open a Garage Account →",
  },
  {
    id: "distributors",
    label: "Wholesale Distributors",
    icon: <Building2 className="w-6 h-6" />,
    tagline: "Scale your catalog. Protect your margins.",
    painPoints: [
      "Thin margins squeezing profitability on high-volume SKUs",
      "Inventory complexity — managing hundreds of suppliers",
      "Inconsistent lead times from multiple factories",
      "Lack of marketing and technical support for sales teams",
    ],
    solution: [
      "Tiered volume pricing with guaranteed margin protection",
      "2,400+ SKUs from a single supplier — reduce vendor count",
      "Private label programs with custom packaging and branding",
      "EDI/API integration for real-time inventory and order sync",
    ],
    impact: [
      { metric: "15-25%", label: "Margin Improvement" },
      { metric: "2,400+", label: "SKUs, One Supplier" },
      { metric: "99.2%", label: "On-Time Delivery" },
      { metric: "48H", label: "Quote Response" },
    ],
    cta: "Become a Distributor →",
  },
  {
    id: "fleet",
    label: "Fleet Operators",
    icon: <Truck className="w-6 h-6" />,
    tagline: "Minimize downtime. Maximize ROI.",
    painPoints: [
      "Vehicle downtime eating into operational revenue",
      "Inconsistent part quality leading to repeat failures",
      "Complex procurement across multiple vehicle makes/models",
      "Lack of preventive maintenance programs tailored to fleet needs",
    ],
    solution: [
      "Bulk pricing and consignment stock programs for high-use parts",
      "Preventive maintenance kits — everything needed for scheduled service",
      "Dedicated fleet account manager for priority support",
      "Multi-make coverage from a single supplier (Honda, Toyota, BMW, Ford, Mercedes-Benz)",
    ],
    impact: [
      { metric: "18%", label: "Lower Maintenance Costs" },
      { metric: "92%", label: "Fewer Repeat Repairs" },
      { metric: "48H", label: "Emergency Order Fulfillment" },
      { metric: "500+", label: "Fleet Customers Served" },
    ],
    cta: "Enroll Your Fleet →",
  },
  {
    id: "collision",
    label: "Collision Repair",
    icon: <Shield className="w-6 h-6" />,
    tagline: "CAPA-certified. Insurance-approved. Flawless fit.",
    painPoints: [
      "Insurance companies pushing for lower-cost alternatives",
      "Non-OE parts that don't fit — costly rework and customer complaints",
      "Inconsistent color match on pre-painted components",
      "Long backorder times on popular body panels",
    ],
    solution: [
      "CAPA-certified body panels meeting insurance industry standards",
      "OE-grade TPO materials with precise geometry for flawless fitment",
      "Primed surfaces ready for paint — consistent finish results",
      "Fast inventory turns on high-demand collision parts (bumpers, lamps, grilles, mirrors)",
    ],
    impact: [
      { metric: "CAPA", label: "Certified Panels" },
      { metric: "< 1%", label: "Fitment Issues" },
      { metric: "72H", label: "Standard Delivery" },
      { metric: "30%+", label: "Cost vs. OE Dealer" },
    ],
    cta: "Get Collision Pricing →",
  },
];

/* ================================================================== */
/*  PAGE: Solutions                                                    */
/* ================================================================== */
export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState(segments[0].id);

  const activeSegment = segments.find((s) => s.id === activeTab) || segments[0];

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
              "radial-gradient(circle at 20% 30%, #00B894 0%, transparent 50%), radial-gradient(circle at 80% 70%, #00B894 0%, transparent 50%)",
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
                Tailored Solutions
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
            >
              Solutions Built for
              <br />
              <span className="text-primary-accent">Your Business</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-white/60 max-w-xl"
            >
              Whether you run a garage, distribute parts, manage a fleet, or operate a collision
              center — we have a program designed for you.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* ================================================================ */}
      {/*  TAB NAVIGATION                                                 */}
      {/* ================================================================ */}
      <div className="sticky top-20 z-30 bg-white border-b border-border-light">
        <Container>
          <nav className="flex overflow-x-auto gap-1 -mb-px">
            {segments.map((seg) => (
              <button
                key={seg.id}
                onClick={() => setActiveTab(seg.id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-all",
                  activeTab === seg.id
                    ? "border-primary-accent text-primary-accent"
                    : "border-transparent text-text-secondary hover:text-text-primary hover:border-border-light"
                )}
              >
                <span
                  className={cn(
                    "transition-colors",
                    activeTab === seg.id ? "text-primary-accent" : "text-text-muted"
                  )}
                >
                  {seg.icon}
                </span>
                {seg.label}
              </button>
            ))}
          </nav>
        </Container>
      </div>

      {/* ================================================================ */}
      {/*  ACTIVE SEGMENT CONTENT                                         */}
      {/* ================================================================ */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Hero image area */}
          <div className="relative h-56 md:h-72 bg-gradient-to-br from-bg-dark via-primary-dark to-primary-dark overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 50% 50%, #00B894 0%, transparent 60%)",
                filter: "blur(60px)",
              }}
            />
            <Container className="relative h-full flex items-center">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-xl bg-primary-accent/20 flex items-center justify-center text-primary-accent">
                  {activeSegment.icon}
                </div>
                <div>
                  <Badge variant="accent" className="mb-2">
                    {activeSegment.label}
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {activeSegment.tagline}
                  </h2>
                </div>
              </div>
            </Container>
          </div>

          {/* Content */}
          <Section background="white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              {/* Left column: Pain Points + Solution */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={staggerContainer}
                viewport={{ once: true }}
              >
                {/* Pain Points */}
                <motion.div variants={fadeInUp}>
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="w-5 h-5 text-error" />
                    <h3 className="text-lg font-bold text-primary-dark">Pain Points</h3>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {activeSegment.painPoints.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-3 text-sm text-text-secondary"
                      >
                        <span className="w-5 h-5 rounded-full bg-error/10 flex items-center justify-center text-error shrink-0 mt-0.5 text-xs font-bold">
                          !
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* SAFORS Solution */}
                <motion.div variants={fadeInUp}>
                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb className="w-5 h-5 text-primary-accent" />
                    <h3 className="text-lg font-bold text-primary-dark">SAFORS Solution</h3>
                  </div>
                  <ul className="space-y-3">
                    {activeSegment.solution.map((s) => (
                      <li
                        key={s}
                        className="flex items-start gap-3 text-sm text-text-secondary"
                      >
                        <CheckCircle className="w-5 h-5 text-primary-accent shrink-0 mt-0.5" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>

              {/* Right column: Business Impact + CTA */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={staggerContainer}
                viewport={{ once: true }}
              >
                {/* Business Impact */}
                <motion.div variants={fadeInUp}>
                  <div className="flex items-center gap-2 mb-6">
                    <Target className="w-5 h-5 text-primary-accent" />
                    <h3 className="text-lg font-bold text-primary-dark">Business Impact</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {activeSegment.impact.map((imp) => (
                      <div
                        key={imp.label}
                        className="p-5 rounded-lg bg-bg-secondary border border-border-light text-center"
                      >
                        <div className="text-2xl md:text-3xl font-bold text-primary-accent mb-1">
                          {imp.metric}
                        </div>
                        <div className="text-xs text-text-secondary">{imp.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Additional benefits */}
                <motion.div variants={fadeInUp} className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <BarChart3 className="w-5 h-5 text-primary-accent" />
                    <h3 className="text-lg font-bold text-primary-dark">Why SAFORS?</h3>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Dedicated account manager for your segment",
                      "Free samples for qualification testing",
                      "Co-branded marketing materials available",
                      "Quarterly business reviews with performance data",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <CheckCircle className="w-4 h-4 text-primary-accent shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* CTA */}
                <motion.div variants={fadeInUp}>
                  <Link href="/contact">
                    <Button variant="primary" size="lg" className="w-full sm:w-auto">
                      {activeSegment.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </Section>
        </motion.div>
      </AnimatePresence>

      {/* ================================================================ */}
      {/*  CROSS-SELL: OTHER SEGMENTS                                     */}
      {/* ================================================================ */}
      <Section background="light">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-3">
              Not What You&apos;re Looking For?
            </h2>
            <p className="text-text-secondary">
              Explore solutions for other segments.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {segments
              .filter((s) => s.id !== activeTab)
              .map((seg) => (
                <motion.div key={seg.id} variants={fadeInUp}>
                  <button
                    onClick={() => setActiveTab(seg.id)}
                    className="w-full text-left p-6 rounded-lg bg-white border border-border-light hover:shadow-card-md hover:border-primary-accent/30 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary-accent/10 flex items-center justify-center text-primary-accent mb-4">
                      {seg.icon}
                    </div>
                    <h3 className="text-lg font-bold text-primary-dark group-hover:text-primary-accent transition-colors mb-1">
                      {seg.label}
                    </h3>
                    <p className="text-sm text-text-secondary">{seg.tagline}</p>
                    <div className="mt-4 text-sm font-medium text-primary-accent flex items-center gap-1">
                      View Solution
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </button>
                </motion.div>
              ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* ================================================================ */}
      {/*  FINAL CTA                                                      */}
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
            Talk to a Segment Specialist
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-primary-dark/70 mb-8"
          >
            Tell us about your business and we&apos;ll build a custom program that fits your
            needs. No obligations, just straight talk and fast answers.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link href="/contact">
              <Button
                variant="primary"
                size="lg"
                className="bg-primary-dark text-white hover:bg-white hover:text-primary-dark"
              >
                Schedule a Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Section>
    </>
  );
}
