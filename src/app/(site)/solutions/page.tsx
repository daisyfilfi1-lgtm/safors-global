"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { AnimatePresence, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import {
  Wrench,
  Building2,
  Truck,
  Shield,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Star,
  Clock,
  Search,
  Download,
  Phone,
  BarChart3,
  Package,
  Users,
  ChevronDown,
} from "lucide-react";

/* ================================================================== */
/*  Scroll-in animation hook — visible by default, animates on enter   */
/* ================================================================== */
function ScrollIn({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <div
      ref={ref}
      className={cn("transition-all duration-700 ease-out", className)}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function ScrollGrid({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <div ref={ref} className={className} style={{ opacity: isInView ? 1 : 0, transition: "opacity 0.6s ease-out 0.1s" }}>
      {children}
    </div>
  );
}

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return { count, ref };
}

/* ================================================================== */
/*  Segment Data — 按报告优化                                          */
/* ================================================================== */
interface PainPoint {
  title: string;
  scene: string;
}

interface BeforeAfter {
  before: string;
  after: string;
  afterData: string;
}

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  location: string;
}

interface Differentiator {
  title: string;
  description: string;
}

interface SegmentData {
  id: string;
  label: string;
  icon: React.ReactNode;
  tagline: string;
  headline: string;
  subline: string;
  heroBg: string;
  painPoints: PainPoint[];
  beforeAfter: BeforeAfter[];
  metrics: { value: string; label: string; desc: string }[];
  products: { name: string; desc: string; skuCount: string }[];
  testimonials: Testimonial[];
  differentiators: Differentiator[];
  ctaPrimary: string;
  ctaSecondary: string;
}

const segments: SegmentData[] = [
  {
    id: "garages",
    label: "Independent Garages",
    icon: <Wrench className="w-6 h-6" />,
    tagline: "Fit it right the first time. Every time.",
    headline: "FIT IT RIGHT THE FIRST TIME. EVERY TIME.",
    subline:
      "OE-grade chassis, cooling, and electrical parts — with the fitment accuracy and same-day availability your shop depends on.",
    heroBg: "from-blue-950 via-slate-900 to-zinc-900",
    painPoints: [
      {
        title: "Parts that don't fit",
        scene:
          "Your tech spends 45 min installing, only to find mounting holes misaligned. Car stuck on lift. Customer calling.",
      },
      {
        title: "Inconsistent quality",
        scene:
          "One batch works fine. The next fails within 2,000 miles. Your reputation takes the hit.",
      },
      {
        title: "Slow delivery times",
        scene:
          "The part you need is 'in stock' but won't arrive for 5 days. The vehicle sits. Revenue stops.",
      },
      {
        title: "Can't find the right part",
        scene:
          "OEM number rubbed off. Customer doesn't know trim level. You spend 20 min on hold with the dealer.",
      },
    ],
    beforeAfter: [
      {
        before: "Parts don't fit — wasted labor & angry customers",
        after: "OE-fit geometry guaranteed",
        afterData: "99%+ fitment accuracy. Every part verified against OE dimensional tolerances.",
      },
      {
        before: "Inconsistent quality — reputation risk",
        after: "Single-source ISO 9001/IATF 16949 certified catalog",
        afterData: "Batch consistency guaranteed. Zero quality complaints in 14 months for active accounts.",
      },
      {
        before: "Slow delivery — vehicle downtime",
        after: "Same-day shipping on 90% orders from regional warehouses",
        afterData: "Average 2.3 day delivery to shop door.",
      },
      {
        before: "Can't find the right part — 20 min on hold",
        after: "Cross-reference by OEM, VIN, or part type",
        afterData: "Find the right part in 30 seconds. 2,400+ SKU database.",
      },
    ],
    metrics: [
      {
        value: "99",
        label: "FITMENT ACCURACY",
        desc: "Verified against 2,400+ OE cross-references",
      },
      {
        value: "0.3",
        label: "RETURN RATE",
        desc: "Industry average is 4–6%. Our QC process eliminates misfits before shipping.",
      },
      {
        value: "24",
        label: "SAMPLE TURNAROUND",
        desc: "Free qualification samples shipped within 24 hours of request.",
      },
      {
        value: "18",
        label: "AVG. COST SAVINGS",
        desc: "Compared to OE dealer pricing, without compromising durability.",
      },
    ],
    products: [
      { name: "CHASSIS & STEERING", desc: "Control arms, ball joints, tie rods, suspension kits", skuCount: "480" },
      { name: "COOLING & THERMAL", desc: "Radiators, water pumps, EV thermal management", skuCount: "360" },
      { name: "ELECTRICAL & SENSORS", desc: "Switches, sensors, ignition coils, control modules", skuCount: "520" },
    ],
    testimonials: [
      {
        quote:
          "We've reduced our parts procurement cost by 22% since switching to SAFORS for chassis and cooling lines — without a single quality complaint in 14 months.",
        name: "Marcus Chen",
        title: "Procurement Director",
        company: "Pacific Auto Parts",
        location: "California",
      },
      {
        quote:
          "Same-day shipping means my lifts are never empty. Game changer for a busy shop like ours.",
        name: "Ahmed Al-Rashid",
        title: "Shop Owner",
        company: "Al-Rashid Auto Care",
        location: "Dubai",
      },
      {
        quote:
          "Their VIN lookup tool saved us 15 minutes per order. That adds up when you're doing 20+ orders a day.",
        name: "Lars Jensen",
        title: "Service Manager",
        company: "Stockholm Auto Service",
        location: "Sweden",
      },
    ],
    differentiators: [
      {
        title: "DEDICATED ACCOUNT MANAGER",
        description:
          "One person who knows your shop, your vehicle mix, and your ordering habits. Not a call center reading scripts.",
      },
      {
        title: "FREE SAMPLES FOR QUALIFICATION",
        description:
          "Test our parts on your bench before committing to volume. Most jobbers won't break a case for a sample.",
      },
      {
        title: "CO-BRANDED MARKETING MATERIALS",
        description:
          "Point-of-sale displays, catalogs, and digital assets with your logo alongside ours. We grow when you grow.",
      },
      {
        title: "QUARTERLY BUSINESS REVIEWS",
        description:
          "Data-driven reviews: what's selling, what's not, and how to optimize your inventory turnover. Not just an invoice.",
      },
    ],
    ctaPrimary: "REQUEST A QUOTE",
    ctaSecondary: "ORDER FREE SAMPLES",
  },
  {
    id: "distributors",
    label: "Wholesale Distributors",
    icon: <Building2 className="w-6 h-6" />,
    tagline: "Scale your catalog. Protect your margins.",
    headline: "SCALE YOUR CATALOG. PROTECT YOUR MARGINS.",
    subline:
      "Tiered wholesale pricing, private label programs, and territory protection for committed distributors.",
    heroBg: "from-slate-900 via-zinc-900 to-blue-950",
    painPoints: [
      {
        title: "Thin margins squeezing profitability",
        scene:
          "Your current supplier raised prices 3 times this year. You can't pass all costs to your customers without losing them.",
      },
      {
        title: "Inventory complexity — too many suppliers",
        scene:
          "Managing 50+ vendors for different product lines. Each has its own portal, terms, and lead times.",
      },
      {
        title: "Long lead times force overstocking",
        scene:
          "You carry 60+ days of inventory because lead times are unpredictable. Capital is tied up on the shelf.",
      },
      {
        title: "No regional exclusivity",
        scene:
          "Your own supplier sells direct on Amazon, competing with your retail prices.",
      },
    ],
    beforeAfter: [
      {
        before: "Thin margins — supplier raised prices 3x this year",
        after: "Tiered wholesale pricing with annual volume rebates",
        afterData: "Average 15–25% margin improvement for active distributor partners.",
      },
      {
        before: "50+ vendor management complexity",
        after: "2,400+ SKUs from a single certified supplier",
        afterData: "Reduce vendor count by 80%. One portal, one invoice, one relationship.",
      },
      {
        before: "60+ days inventory due to unpredictable lead times",
        after: "Hangzhou + Dubai dual-hub logistics",
        afterData: "14-day sea freight to Europe. 7-day air to North America.",
      },
      {
        before: "Competing with Amazon pricing from own supplier",
        after: "Signed territory protection for committed distributors",
        afterData: "White-label catalog and POS material support included.",
      },
    ],
    metrics: [
      { value: "25", label: "MARGIN IMPROVEMENT", desc: "Average margin improvement for distributor partners" },
      { value: "2400", label: "SKUs, ONE SUPPLIER", desc: "Reduce vendor count by 80%" },
      { value: "99.2", label: "ON-TIME DELIVERY", desc: "OTIF rate across all logistics routes" },
      { value: "48", label: "QUOTE RESPONSE", desc: "Average quote turnaround time in hours" },
    ],
    products: [
      { name: "CHASSIS & STEERING", desc: "Control arms, ball joints, tie rods — highest velocity SKUs", skuCount: "480" },
      { name: "BODY & PLASTIC", desc: "Bumpers, lamps, grilles — CAPA-certified alternatives", skuCount: "430" },
      { name: "MAINTENANCE & SERVICE", desc: "Filters, belts, service kits — recurring order staples", skuCount: "270" },
    ],
    testimonials: [
      {
        quote:
          "Switching to SAFORS as our primary chassis supplier simplified our inventory from 12 vendors to 1. Margins improved 20% in the first quarter.",
        name: "Roberto Martinez",
        title: "VP of Supply Chain",
        company: "AutoPartes del Norte",
        location: "Mexico City",
      },
      {
        quote:
          "The territory protection agreement gave us the confidence to invest in SAFORS inventory. No one undercuts us online.",
        name: "Hassan Al-Farsi",
        title: "Managing Director",
        company: "Gulf Auto Supply",
        location: "Dubai",
      },
    ],
    differentiators: [
      {
        title: "TERRITORY PROTECTION",
        description: "Signed exclusivity agreements for committed distributors. No online price erosion from your own supplier.",
      },
      {
        title: "PRIVATE LABEL PROGRAM",
        description: "Your brand on our products. Custom packaging, catalogs, and digital assets — we manufacture, you sell.",
      },
      {
        title: "EDI/API INTEGRATION",
        description: "Real-time inventory sync, automated ordering, and invoice integration with your ERP system.",
      },
      {
        title: "CO-MARKETING FUND",
        description: "Joint marketing budget for trade shows, local advertising, and sales collateral. We invest in your growth.",
      },
    ],
    ctaPrimary: "APPLY FOR DISTRIBUTOR PARTNERSHIP",
    ctaSecondary: "DOWNLOAD WHOLESALE KIT",
  },
  {
    id: "fleet",
    label: "Fleet Operators",
    icon: <Truck className="w-6 h-6" />,
    tagline: "Minimize downtime. Maximize ROI.",
    headline: "MINIMIZE DOWNTIME. MAXIMIZE ROI.",
    subline:
      "Predictable TCO with fleet-grade warranties. Bulk ordering, consolidated invoicing, and EV-compatible maintenance lines.",
    heroBg: "from-zinc-900 via-blue-950 to-slate-900",
    painPoints: [
      {
        title: "Vehicle downtime eats into revenue",
        scene: "One truck off the road costs $800+/day. Parts delays turn a 2-hour job into a 2-day wait.",
      },
      {
        title: "Inconsistent quality causes repeat failures",
        scene: "The same part fails on 3 different trucks in the same month. Your maintenance team is redoing work.",
      },
      {
        title: "Complex procurement across multiple makes",
        scene: "Your fleet has Honda, Toyota, BMW, and Ford. That's 4 different supplier relationships to manage.",
      },
      {
        title: "No preventive maintenance program",
        scene: "Parts ordered reactively, not proactively. Emergency shipping costs blow the maintenance budget.",
      },
    ],
    beforeAfter: [
      {
        before: "$800+/day downtime from parts delays",
        after: "Emergency order fulfillment within 48 hours",
        afterData: "Consignment stock programs available for high-use parts.",
      },
      {
        before: "Repeat failures on same part across fleet",
        after: "Fleet-grade warranty on all maintenance parts",
        afterData: "92% reduction in repeat repairs within 6 months.",
      },
      {
        before: "4 different suppliers for mixed fleet",
        after: "Multi-make coverage from a single supplier",
        afterData: "Honda, Toyota, BMW, Ford, Mercedes-Benz — one catalog, one PO.",
      },
      {
        before: "Reactive ordering — emergency freight costs",
        after: "Preventive maintenance kits for scheduled service",
        afterData: "Everything needed for 30K/60K/90K service in one box.",
      },
    ],
    metrics: [
      { value: "18", label: "LOWER MAINTENANCE COSTS", desc: "Average TCO reduction for enrolled fleet programs" },
      { value: "92", label: "FEWER REPEAT REPAIRS", desc: "Quality improvement within 6 months of switching" },
      { value: "48", label: "EMERGENCY FULFILLMENT", desc: "Hour turnaround on emergency orders" },
      { value: "500", label: "FLEET CUSTOMERS", desc: "Served across North America, Europe, and Middle East" },
    ],
    products: [
      { name: "MAINTENANCE & SERVICE", desc: "Preventive maintenance kits, filters, belts, service packs", skuCount: "270" },
      { name: "COOLING & THERMAL", desc: "Radiators, water pumps — fleet-duty rated", skuCount: "360" },
      { name: "CHASSIS & STEERING", desc: "Suspension kits, control arms — extended warranty", skuCount: "480" },
    ],
    testimonials: [
      {
        quote:
          "The preventive maintenance kits alone saved us 12% in the first year. Everything we need for a 60K service shows up in one box.",
        name: "David Okonkwo",
        title: "Fleet Maintenance Director",
        company: "TransEast Logistics",
        location: "Lagos, Nigeria",
      },
    ],
    differentiators: [
      {
        title: "CONSIGNMENT STOCK PROGRAM",
        description: "We stock your most-used parts in your warehouse. You pay when you use them, not when we ship them.",
      },
      {
        title: "DEDICATED FLEET ACCOUNT MANAGER",
        description: "Single point of contact who knows your vehicle mix and maintenance schedule. Priority response within 1 hour.",
      },
      {
        title: "EV-COMPATIBLE MAINTENANCE LINES",
        description: "Thermal management, electrical components, and cooling systems for hybrid and EV fleet vehicles.",
      },
      {
        title: "CONSOLIDATED INVOICING",
        description: "One monthly invoice for all locations. CSV export for your fleet management software.",
      },
    ],
    ctaPrimary: "ENROLL YOUR FLEET",
    ctaSecondary: "DOWNLOAD FLEET BROCHURE",
  },
  {
    id: "collision",
    label: "Collision Repair",
    icon: <Shield className="w-6 h-6" />,
    tagline: "CAPA-certified. Insurance-approved. Flawless fit.",
    headline: "CAPA-CERTIFIED. INSURANCE-APPROVED. FLAWLESS FIT.",
    subline:
      "CAPA-tracked body and lamp alternatives. Insurance-grade documentation. 48-hour quote turnaround.",
    heroBg: "from-slate-900 via-zinc-900 to-neutral-900",
    painPoints: [
      {
        title: "Insurance pushing for cheaper alternatives",
        scene: "The adjuster approved a budget part. It arrives with mounting holes 5mm off. Rework costs kill the job.",
      },
      {
        title: "Non-OE parts that don't fit",
        scene: "Aftermarket bumper doesn't align with the fender. Customer sees the gap. They're not happy.",
      },
      {
        title: "Inconsistent color match",
        scene: "Pre-painted part arrives with a noticeable shade difference. Now you're painting it anyway.",
      },
      {
        title: "Long backorders on popular panels",
        scene: "Honda Accord bumper — 3 week backorder. Customer's car sits in the lot. Supplement gets declined.",
      },
    ],
    beforeAfter: [
      {
        before: "Budget parts with 5mm misalignment — rework costs",
        after: "CAPA-certified panels meeting insurance standards",
        afterData: "Flawless fitment. Less than 1% fitment issues across all CAPA-tracked parts.",
      },
      {
        before: "Noticeable gap after aftermarket install",
        after: "OE-grade TPO materials with precise geometry",
        afterData: "Bumpers, lamps, grilles — dimensional accuracy within OE tolerances.",
      },
      {
        before: "Pre-painted parts with shade mismatch",
        after: "Primed surfaces ready for paint",
        afterData: "Consistent substrate for flawless finish. No peeling, no fish-eye.",
      },
      {
        before: "3-week backorder on Honda Accord bumper",
        after: "Fast inventory turns on high-demand collision parts",
        afterData: "Bumpers, lamps, grilles, mirrors — 72-hour standard delivery.",
      },
    ],
    metrics: [
      { value: "CAPA", label: "CERTIFIED PANELS", desc: "Insurance-industry certified alternatives" },
      { value: "1", label: "FITMENT ISSUES", desc: "Less than 1% fitment issues across all CAPA parts" },
      { value: "72", label: "STANDARD DELIVERY", desc: "Hour turnaround on in-stock collision parts" },
      { value: "30", label: "COST VS OE DEALER", desc: "Average savings compared to OEM dealer pricing" },
    ],
    products: [
      { name: "BODY & PLASTIC", desc: "Bumpers, lamps, grilles, mirrors — CAPA-ready", skuCount: "430" },
      { name: "ELECTRICAL & SENSORS", desc: "Parking sensors, lighting modules, switches", skuCount: "520" },
      { name: "COOLING & THERMAL", desc: "Radiators, condensers, cooling fans", skuCount: "360" },
    ],
    testimonials: [
      {
        quote:
          "CAPA certification was non-negotiable for our insurance partners. SAFORS was the only supplier who could provide the documentation we needed, same day.",
        name: "Sofia Lindström",
        title: "Operations Manager",
        company: "Nordic Collision Centers",
        location: "Stockholm, Sweden",
      },
    ],
    differentiators: [
      {
        title: "CAPA DOCUMENTATION PACKAGE",
        description: "Every CAPA-certified part ships with full traceability docs. Insurance auditors approved, every time.",
      },
      {
        title: "48-HOUR QUOTE TURNAROUND",
        description: "Upload your estimate, get a competitive quote for alternative parts within 48 hours. No chasing, no phone tag.",
      },
      {
        title: "OE CROSS-REFERENCE DATABASE",
        description: "Enter OEM number once. Get our equivalent SKU, price, and stock status instantly.",
      },
      {
        title: "BATCH PRICING FOR CHAINS",
        description: "Multi-location collision centers get consolidated pricing, centralized billing, and consistent parts across shops.",
      },
    ],
    ctaPrimary: "GET COLLISION PRICING",
    ctaSecondary: "REQUEST CAPA DOCUMENTATION",
  },
];

/* ================================================================== */
/*  Components                                                         */
/* ================================================================== */

function CountUpMetric({
  value,
  label,
  desc,
  suffix = "",
}: {
  value: string;
  label: string;
  desc: string;
  suffix?: string;
}) {
  const numValue = parseInt(value.replace(/[^0-9]/g, ""));
  const isNumeric = !isNaN(numValue);
  const { count, ref } = useCountUp(isNumeric ? numValue : 0);

  return (
    <div
      ref={ref}
      className="text-center group cursor-default"
  >
      <div className="relative">
        <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 transition-transform duration-300 group-hover:scale-105">
          {isNumeric ? (
            <>
              {value.includes("<") && "<"}
              {count}
              {value.includes("%") ? "%+" : value.includes("+") ? "+" : suffix}
            </>
          ) : (
            value
          )}
        </div>
        <div className="w-12 h-0.5 bg-primary-accent mx-auto mb-3" />
      </div>
      <div className="text-sm font-semibold text-primary-accent mb-1 tracking-[1px] uppercase">
        {label}
      </div>
      <div className="text-xs text-white/50 max-w-[200px] mx-auto leading-relaxed">
        {desc}
      </div>
    </div>
  );
}

function ProductSpotlightCard({
  name,
  desc,
  skuCount,
}: {
  name: string;
  desc: string;
  skuCount: string;
}) {
  return (
    <div
      className="group bg-white rounded-lg shadow-card-sm hover:shadow-card-lg transition-all duration-300 overflow-hidden"
  >
      {/* Image placeholder */}
      <div className="aspect-square bg-gradient-to-br from-bg-secondary to-bg-secondary/80 flex items-center justify-center overflow-hidden">
        <Package className="w-16 h-16 text-text-muted/30 group-hover:scale-110 transition-transform duration-500" />
      </div>
      {/* Info */}
      <div className="p-5">
        <h4 className="text-sm font-bold uppercase tracking-[0.5px] mb-1">{name}</h4>
        <p className="text-xs text-text-secondary mb-3">{desc}</p>
        <Link
          href="/products"
          className="text-xs font-semibold text-primary-accent flex items-center gap-1 hover:underline"
      >
          View {skuCount} SKUs →
        </Link>
      </div>
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div
      className="bg-white rounded-lg border border-border-light p-6 md:p-8 h-full flex flex-col"
  >
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary-accent text-primary-accent" />
        ))}
      </div>
      <blockquote className="text-base md:text-lg italic text-text-primary leading-relaxed mb-6 flex-1">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <div className="border-t border-border-light pt-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent font-bold text-sm">
            {t.name.charAt(0)}
          </div>
          <div>
            <div className="text-sm font-semibold text-text-primary">{t.name}</div>
            <div className="text-xs text-text-secondary">
              {t.title}, {t.company}
            </div>
            <div className="text-xs text-text-muted">{t.location}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DifferentiatorCard({ d }: { d: Differentiator }) {
  return (
    <div
      className="bg-white rounded-lg p-6 md:p-8 border border-border-light hover:shadow-card-md hover:-translate-y-1 transition-all duration-300 group"
  >
      <div className="w-10 h-10 rounded-lg bg-primary-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <CheckCircle2 className="w-5 h-5 text-primary-accent" />
      </div>
      <h4 className="text-sm font-bold uppercase tracking-[0.5px] mb-2">{d.title}</h4>
      <p className="text-sm text-text-secondary leading-relaxed">{d.description}</p>
    </div>
  );
}

/* ================================================================== */
/*  PAGE: Solutions — 10-Section Redesign                             */
/* ================================================================== */
export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState(segments[0].id);
  const seg = segments.find((s) => s.id === activeTab) || segments[0];
  const [vinOpen, setVinOpen] = useState(false);

  return (
    <>
      {/* ================================================================ */}
      {/*  SECTION 1: HERO — 场景锚定                                       */}
      {/* ================================================================ */}
      <section
        className={cn(
          "relative min-h-[70vh] flex items-center overflow-hidden",
          `bg-gradient-to-br ${seg.heroBg}`
        )}
    >
        {/* Decorative gradient orbs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary-accent/20 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-white/5 blur-[100px]" />
        </div>

        <Container className="relative z-10 pt-32 pb-20">
          <div
            className="max-w-3xl"
        >
            <div>
              <Badge variant="accent" className="mb-4">
                SOLUTIONS FOR {seg.label.toUpperCase().replace("&", "AND")}
              </Badge>
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
          >
              {seg.headline}
            </h1>
            <p
              className="text-lg text-white/60 max-w-xl mb-8"
          >
              {seg.subline}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact">
                <Button
                  variant="accent"
                  size="lg"
                  className="bg-primary-accent text-primary-dark hover:bg-white"
              >
                  CHECK PART AVAILABILITY
                  <Search className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/resources#catalogs">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/40 text-white hover:bg-white hover:text-primary-dark"
              >
                  DOWNLOAD CATALOG
                  <Download className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30"
        >
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* ================================================================ */}
      {/*  TAB NAVIGATION                                                  */}
      {/* ================================================================ */}
      <div className="sticky top-20 z-30 bg-white border-b border-border-light">
        <Container>
          <nav className="flex overflow-x-auto gap-1 -mb-px scrollbar-none">
            {segments.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={cn(
                  "flex items-center gap-2 px-4 md:px-5 py-4 text-xs md:text-sm font-medium whitespace-nowrap border-b-2 transition-all",
                  activeTab === s.id
                    ? "border-primary-accent text-primary-accent"
                    : "border-transparent text-text-secondary hover:text-text-primary"
                )}
            >
                <span
                  className={cn(
                    activeTab === s.id ? "text-primary-accent" : "text-text-muted"
                  )}
              >
                  {s.icon}
                </span>
                {s.label}
              </button>
            ))}
          </nav>
        </Container>
      </div>

      {/* ================================================================ */}
      {/*  CONTENT — AnimatePresence per segment                          */}
      {/* ================================================================ */}
      <AnimatePresence mode="wait">
        <div
          key={activeTab}
        >
          {/* ================================================================ */}
          {/*  SECTION 2: PAIN POINTS — 情绪共鸣带                             */}
          {/* ================================================================ */}
          <section className="py-20 md:py-24 bg-bg-secondary">
            <Container>
              <div
            >
                <div className="text-center mb-12">
                  <Badge variant="accent" className="mb-3">
                    THE PROBLEMS WE SOLVE
                  </Badge>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-3">
                    We asked 200+ {seg.label.toLowerCase()} owners
                    <br />
                    what keeps them up at night.
                  </h2>
                  <p className="text-text-secondary max-w-xl mx-auto">
                    Here&apos;s what they told us — and how SAFORS addresses each one.
                  </p>
                </div>

                <div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
              >
                  {seg.painPoints.map((p, i) => (
                    <div
                      key={p.title}
                      className="group bg-white rounded-lg shadow-card-sm hover:shadow-card-md hover:-translate-y-1 transition-all duration-300 p-6"
                  >
                      <div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center mb-3">
                        <XCircle className="w-5 h-5 text-error" />
                      </div>
                      <h3 className="text-lg font-semibold text-text-primary mb-2">
                        {p.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {p.scene}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </section>

          {/* ================================================================ */}
          {/*  SECTION 3: BEFORE / AFTER — 对比式价值证明                       */}
          {/* ================================================================ */}
          <section className="py-20 md:py-24">
            <Container>
              <div
            >
                <div className="text-center mb-14">
                  <Badge variant="accent" className="mb-3">
                    HOW SAFORS SOLVES EACH PROBLEM
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
                    Before &amp; After
                  </h2>
                </div>

                <div className="space-y-4">
                  {seg.beforeAfter.map((ba, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden border border-border-light"
                  >
                      {/* BEFORE */}
                      <div className="bg-[#FEF2F2] p-6 md:p-8">
                        <div className="flex items-center gap-2 mb-2">
                          <XCircle className="w-5 h-5 text-[#991B1B]" />
                          <span className="text-xs font-bold uppercase text-[#991B1B] tracking-[0.5px]">
                            Before
                          </span>
                        </div>
                        <p className="text-sm font-medium text-[#991B1B]">{ba.before}</p>
                      </div>

                      {/* AFTER */}
                      <div className="bg-[#F0FDF9] p-6 md:p-8 relative">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="w-5 h-5 text-primary-accent" />
                          <span className="text-xs font-bold uppercase text-primary-dark tracking-[0.5px]">
                            After
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-primary-dark mb-1">
                          {ba.after}
                        </p>
                        <p className="text-xs text-text-secondary">{ba.afterData}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </section>

          {/* ================================================================ */}
          {/*  SECTION 4: DATA WALL — 视觉数据墙                               */}
          {/* ================================================================ */}
          <section className="py-20 md:py-24 bg-primary-dark relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary-accent blur-[150px]" />
            </div>
            <Container className="relative z-10">
              <div
            >
                <div className="text-center mb-14">
                  <Badge variant="accent" className="mb-3">
                    NUMBERS THAT MATTER TO YOUR BOTTOM LINE
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Data speaks louder than promises.
                  </h2>
                </div>

                <div
                  className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
              >
                  {seg.metrics.map((m) => (
                    <CountUpMetric
                      key={m.label}
                      value={m.value}
                      label={m.label}
                      desc={m.desc}
                      suffix={m.label === "SAMPLE TURNAROUND" ? "H" : "%"}
                    />
                  ))}
                </div>
              </div>
            </Container>
          </section>

          {/* ================================================================ */}
          {/*  SECTION 5: PRODUCT SPOTLIGHT — 核心品类速览                      */}
          {/* ================================================================ */}
          <section className="py-20 md:py-24 bg-bg-secondary">
            <Container>
              <div
            >
                <div className="text-center mb-12">
                  <Badge variant="accent" className="mb-3">
                    WHAT OUR CUSTOMERS ORDER MOST
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
                    Top categories for {seg.label}
                  </h2>
                </div>

                <div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                  {seg.products.map((p) => (
                    <ProductSpotlightCard key={p.name} {...p} />
                  ))}
                </div>
              </div>
            </Container>
          </section>

          {/* ================================================================ */}
          {/*  SECTION 6: SOCIAL PROOF — 同行证言                              */}
          {/* ================================================================ */}
          <section className="py-20 md:py-24">
            <Container>
              <div
            >
                <div className="text-center mb-12">
                  <Badge variant="accent" className="mb-3">
                    WHAT OUR CUSTOMERS SAY
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
                    Trusted by garages worldwide
                  </h2>
                </div>

                <div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                  {seg.testimonials.map((t) => (
                    <TestimonialCard key={t.name} t={t} />
                  ))}
                </div>
              </div>
            </Container>
          </section>

          {/* ================================================================ */}
          {/*  SECTION 7: WHY SAFORS — 差异化证据链                            */}
          {/* ================================================================ */}
          <section className="py-20 md:py-24 bg-bg-secondary">
            <Container>
              <div
            >
                <div className="text-center mb-12">
                  <Badge variant="accent" className="mb-3">
                    WHY {seg.label.toUpperCase()} CHOOSE SAFORS
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
                    We compete on service, not just price.
                  </h2>
                </div>

                <div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
              >
                  {seg.differentiators.map((d) => (
                    <DifferentiatorCard key={d.title} d={d} />
                  ))}
                </div>
              </div>
            </Container>
          </section>

          {/* ================================================================ */}
          {/*  SECTION 8: VIN LOOKUP CTA — 即时工具入口                        */}
          {/* ================================================================ */}
          <section className="py-16 md:py-20 bg-primary-accent">
            <Container>
              <div
                className="text-center"
            >
                <h2
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-dark mb-4"
              >
                  NEED TO CHECK IF A PART FITS RIGHT NOW?
                </h2>
                <p
                  className="text-primary-dark/70 mb-8 max-w-xl mx-auto"
              >
                  Enter your VIN or OEM part number and get instant fitment confirmation.
                </p>

                <div className="max-w-2xl mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3 mb-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                      <input
                        type="text"
                        placeholder="Enter VIN or OEM Part Number"
                        className="w-full h-14 pl-11 pr-4 rounded-md bg-white text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-dark/20"
                      />
                    </div>
                    <Button
                      variant="primary"
                      size="lg"
                      className="bg-primary-dark text-white hover:bg-bg-dark h-14 min-w-[160px]"
                  >
                      CHECK FITMENT
                    </Button>
                  </div>

                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {["Make", "Model", "Year", "Engine"].map((f) => (
                      <select
                        key={f}
                        className="h-10 px-4 rounded-md bg-white text-sm text-text-primary border-none focus:outline-none focus:ring-2 focus:ring-primary-dark/20"
                    >
                        <option value="">{f}</option>
                      </select>
                    ))}
                  </div>

                  <p className="text-xs text-primary-dark/60">
                    Example: &quot;2019 Honda Accord 2.0L → Control Arm&quot; — Get results in seconds
                  </p>
                </div>
              </div>
            </Container>
          </section>

          {/* ================================================================ */}
          {/*  SECTION 9: CROSS-SELL — 其他客户场景入口                        */}
          {/* ================================================================ */}
          <section className="py-20 md:py-24">
            <Container>
              <div
            >
                <div className="text-center mb-12">
                  <Badge variant="accent" className="mb-3">
                    SAFORS ALSO SERVES
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
                    Not your segment? We cover more.
                  </h2>
                </div>

                <div
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                  {segments
                    .filter((s) => s.id !== activeTab)
                    .map((s) => (
                      <div key={s.id}>
                        <button
                          onClick={() => setActiveTab(s.id)}
                          className="w-full text-left group rounded-lg overflow-hidden border border-border-light hover:shadow-card-lg transition-all duration-300"
                      >
                          {/* Image area */}
                          <div className="aspect-video bg-gradient-to-br from-bg-dark to-primary-dark relative flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="relative z-10 w-14 h-14 rounded-xl bg-primary-accent/20 flex items-center justify-center text-primary-accent">
                              {s.icon}
                            </div>
                          </div>
                          {/* Text area */}
                          <div className="p-5">
                            <h3 className="text-base font-bold text-text-primary group-hover:text-primary-accent transition-colors mb-1">
                              {s.label}
                            </h3>
                            <p className="text-sm text-text-secondary">{s.tagline}</p>
                            <div className="mt-3 text-sm font-medium text-primary-accent flex items-center gap-1">
                              Explore Solutions →
                            </div>
                          </div>
                        </button>
                      </div>
                    ))}
                </div>
              </div>
            </Container>
          </section>

          {/* ================================================================ */}
          {/*  SECTION 10: BOTTOM CTA — 强力行动召唤                           */}
          {/* ================================================================ */}
          <section className="py-24 md:py-28 bg-primary-dark relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 50%, #00B894 0%, transparent 50%), radial-gradient(circle at 70% 50%, #00B894 0%, transparent 50%)",
                }}
              />
            </div>
            <Container className="relative z-10 text-center">
              <div
                className="max-w-3xl mx-auto"
            >
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
              >
                  READY TO STOCK SAFORS IN YOUR{" "}
                  {activeTab === "garages"
                    ? "SHOP"
                    : activeTab === "distributors"
                    ? "WAREHOUSE"
                    : activeTab === "fleet"
                    ? "FLEET"
                    : "CENTER"}
                  ?
                </h2>
                <p
                  className="text-lg text-white/60 mb-10 max-w-xl mx-auto"
              >
                  Get a tailored quote, request free samples, or schedule a 15-minute video
                  call with our {seg.label.toLowerCase()} specialist.
                </p>

                <div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                  <Link href="/contact">
                    <Button
                      variant="accent"
                      size="lg"
                      className="bg-primary-accent text-primary-dark hover:bg-white min-w-[200px]"
                  >
                      {seg.ctaPrimary}
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white/40 text-white hover:bg-white hover:text-primary-dark min-w-[200px]"
                  >
                      {seg.ctaSecondary}
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="ghost"
                      size="lg"
                      className="text-white/70 hover:text-white min-w-[200px]"
                  >
                      SCHEDULE A CALL
                      <Phone className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Container>
          </section>
        </div>
      </AnimatePresence>
    </>
  );
}
