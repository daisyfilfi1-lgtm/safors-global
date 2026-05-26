"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container, Section } from "@/components/ui/container";
import { categories } from "@/data/products";
import {
  CheckCircle,
  Shield,
  Truck,
  Factory,
  ChevronRight,
  Star,
  Quote,
  ArrowRight,
  Globe,
  Clock,
  HeadphonesIcon,
  Wrench,
  Building2,
  Ship,
  Warehouse,
  Users,
  Package,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Animation Variants                                                 */
/* ------------------------------------------------------------------ */
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

/* ------------------------------------------------------------------ */
/*  Category Icon Map                                                  */
/* ------------------------------------------------------------------ */
const categoryIcons: Record<string, React.ReactNode> = {
  chassis: <Shield className="w-8 h-8" />,
  cooling: <Factory className="w-8 h-8" />,
  electrical: <Wrench className="w-8 h-8" />,
  body: <Package className="w-8 h-8" />,
  powertrain: <Truck className="w-8 h-8" />,
  maintenance: <Clock className="w-8 h-8" />,
};

/* ================================================================== */
/*  SECTION: Hero                                                      */
/* ================================================================== */
function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#0D0D0D] to-[#1A1A2E] z-0" />
      <div className="absolute inset-0 opacity-20 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 50%, #00B894 0%, transparent 50%), radial-gradient(circle at 75% 50%, #00B894 0%, transparent 50%)",
            filter: "blur(80px)",
          }}
        />
      </div>
      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] z-0"
        style={{
          backgroundImage:
            "linear-gradient(#00B894 1px, transparent 1px), linear-gradient(90deg, #00B894 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Container className="relative z-10 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <Badge variant="accent" size="sm" className="mb-4">
              ISO 9001 &amp; IATF 16949 Certified
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            PRECISION PARTS.
            <br />
            <span className="text-primary-accent">GLOBAL REACH.</span>
            <br />
            PROVEN RELIABILITY.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/products">
              <Button variant="accent" size="lg" className="min-w-[200px]">
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="min-w-[200px] border-white/20 text-white hover:bg-white hover:text-primary-dark"
              >
                Request a Quote
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-6 mt-12 text-white/40 text-xs"
          >
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary-accent" />
              {siteConfig.skuCount}+ SKUs
            </span>
            <span className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary-accent" />
              {siteConfig.countries} Countries
            </span>
            <span className="flex items-center gap-2">
              <Factory className="w-4 h-4 text-primary-accent" />
              {siteConfig.factoryArea} Factory
            </span>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
          <div className="w-1 h-2.5 rounded-full bg-primary-accent" />
        </div>
      </motion.div>
    </section>
  );
}

/* ================================================================== */
/*  SECTION: Trust Bar                                                 */
/* ================================================================== */
function TrustBar() {
  const stats = [
    { value: "ISO 9001:2015", label: "IATF 16949:2016 Certified", icon: <Shield className="w-6 h-6" /> },
    { value: "30+", label: "Countries Exported To", icon: <Globe className="w-6 h-6" /> },
    { value: "50,000㎡", label: "Manufacturing Facility", icon: <Factory className="w-6 h-6" /> },
  ];

  return (
    <div className="bg-white border-b border-border-light">
      <Container className="py-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border-light"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="flex items-center gap-4 px-6 py-4 md:py-0"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-accent/10 flex items-center justify-center text-primary-accent shrink-0">
                {stat.icon}
              </div>
              <div>
                <div className="text-xl font-bold text-primary-dark">{stat.value}</div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
}

/* ================================================================== */
/*  SECTION: Product Categories                                        */
/* ================================================================== */
function ProductCategoriesSection() {
  return (
    <Section background="light" id="products">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-14"
      >
        <motion.div variants={fadeInUp}>
          <Badge variant="outline" className="mb-4">
            Product Portfolio
          </Badge>
        </motion.div>
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold text-primary-dark mb-4"
        >
          Comprehensive Product Categories
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-text-secondary max-w-2xl mx-auto"
        >
          {siteConfig.skuCount}+ precision-engineered SKUs across six core categories, covering
          passenger cars and light commercial vehicles.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {categories.map((cat) => (
          <motion.div key={cat.id} variants={fadeInUp}>
            <Link
              href={`/category/${cat.id}`}
              className={cn(
                "group block relative overflow-hidden rounded-lg bg-white border border-border-light",
                "hover:shadow-card-lg hover:border-primary-accent/30 transition-all duration-300"
              )}
            >
              {/* Placeholder image */}
              <div className="h-48 bg-gradient-to-br from-bg-secondary to-gray-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity bg-primary-accent" />
                <div className="text-primary-dark/30 group-hover:text-primary-accent/50 transition-colors">
                  {categoryIcons[cat.id] || <Package className="w-16 h-16" />}
                </div>
                <div className="absolute top-3 right-3">
                  <Badge variant="accent" size="sm">
                    {cat.skuCount} SKUs
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-primary-dark group-hover:text-primary-accent transition-colors mb-2">
                  {cat.name}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
                  {cat.description}
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary-accent">
                  View Category
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-10"
      >
        <Link href="/products">
          <Button variant="outline" size="lg">
            Browse Full Catalog
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </motion.div>
    </Section>
  );
}

/* ================================================================== */
/*  SECTION: The SAFORS Difference                                     */
/* ================================================================== */
function SaforsDifference() {
  const highlights = [
    { label: "On-Time Delivery", value: siteConfig.otifRate },
    { label: "Return Rate", value: siteConfig.returnRate },
    { label: "Sample Turnaround", value: siteConfig.sampleTurnaround },
    { label: "Total SKUs", value: siteConfig.skuCount },
  ];

  return (
    <Section background="dark" id="difference">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Left: Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeInUp}>
            <Badge variant="accent" className="mb-4">
              The SAFORS Difference
            </Badge>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Engineered in China.
            <br />
            <span className="text-primary-accent">Trusted Worldwide.</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white/60 leading-relaxed mb-8"
          >
            From our 50,000㎡ manufacturing campus in Hangzhou, we deliver components that
            meet—and often exceed—OE specifications. Every part undergoes rigorous testing
            before it ships.
          </motion.p>

          <motion.ul variants={fadeInUp} className="space-y-4">
            {[
              "OE-fit geometry guaranteed — or we replace it free",
              "Multi-stage quality control with CMM and durability testing",
              "Batch traceability from raw material to finished part",
              "Continuous investment in R&D and production automation",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-white/70 text-sm">
                <CheckCircle className="w-5 h-5 text-primary-accent shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeInUp} className="mt-8">
            <Link href="/quality">
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-primary-accent hover:border-primary-accent">
                Learn About Our Quality
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: Stats Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 gap-4"
        >
          {highlights.map((h) => (
            <motion.div
              key={h.label}
              variants={scaleIn}
              className="bg-white/5 border border-white/10 rounded-lg p-6 text-center hover:bg-white/10 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-accent mb-1">
                {h.value}
              </div>
              <div className="text-sm text-white/50">{h.label}</div>
            </motion.div>
          ))}
          {/* Full-width CTA card */}
          <motion.div
            variants={scaleIn}
            className="col-span-2 bg-primary-accent/10 border border-primary-accent/20 rounded-lg p-6 text-center"
          >
            <div className="text-white text-sm mb-2">
              Ready to experience the SAFORS difference?
            </div>
            <Link href="/contact">
              <Button variant="accent" size="sm">
                Contact Our Team
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ================================================================== */
/*  SECTION: Solutions By Segment                                      */
/* ================================================================== */
function SolutionsBySegment() {
  const segments = [
    {
      title: "Independent Garages",
      desc: "Reliable parts that fit right the first time. Reduce comebacks and build customer trust with OE-quality components.",
      icon: <Wrench className="w-8 h-8" />,
      href: "/solutions#garages",
      features: ["Same-day shipping on 90% of orders", "Fitment guarantee with hassle-free returns", "Competitive pricing on high-turnover SKUs"],
    },
    {
      title: "Wholesale Distributors",
      desc: "Scale your catalog with 2,400+ SKUs across six categories. Competitive margins, private labeling, and dedicated account management.",
      icon: <Building2 className="w-8 h-8" />,
      href: "/solutions#distributors",
      features: ["Volume pricing & tiered discounts", "Private label programs available", "EDI/API integration for inventory sync"],
    },
    {
      title: "Fleet Operators",
      desc: "Minimize downtime with consistent, high-durability components. Fleet maintenance programs with bulk pricing and scheduled deliveries.",
      icon: <Truck className="w-8 h-8" />,
      href: "/solutions#fleet",
      features: ["Bulk pricing & consignment stock", "Preventive maintenance kits", "Dedicated fleet account manager"],
    },
    {
      title: "Collision Repair",
      desc: "CAPA-certified body panels and lighting. Consistent color match, OEM-fit geometry, and fast turnaround on insurance-approved parts.",
      icon: <Shield className="w-8 h-8" />,
      href: "/solutions#collision",
      features: ["CAPA-certified body panels", "Color-matched primed surfaces", "Insurance-compliant documentation"],
    },
  ];

  return (
    <Section id="solutions">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-14"
      >
        <motion.div variants={fadeInUp}>
          <Badge variant="outline" className="mb-4">
            Solutions
          </Badge>
        </motion.div>
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold text-primary-dark mb-4"
        >
          Solutions for Every Segment
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-text-secondary max-w-2xl mx-auto"
        >
          Tailored programs, pricing, and support for the way you work.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {segments.map((seg) => (
          <motion.div
            key={seg.title}
            variants={fadeInUp}
            className="group relative overflow-hidden rounded-lg border border-border-light bg-white hover:shadow-card-lg transition-all duration-300 p-8"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-lg bg-primary-accent/10 flex items-center justify-center text-primary-accent shrink-0">
                {seg.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-dark group-hover:text-primary-accent transition-colors">
                  {seg.title}
                </h3>
                <p className="text-sm text-text-secondary mt-1">{seg.desc}</p>
              </div>
            </div>

            <ul className="space-y-2 mb-6">
              {seg.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                  <CheckCircle className="w-4 h-4 text-primary-accent shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <Link
              href={seg.href}
              className="inline-flex items-center text-sm font-semibold text-primary-accent hover:underline"
            >
              Learn More
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

/* ================================================================== */
/*  SECTION: Global Footprint                                          */
/* ================================================================== */
function GlobalFootprint() {
  const hubs = [
    { city: "Hangzhou, China", role: "Global HQ & Manufacturing", flag: "🇨🇳" },
    { city: "Los Angeles, USA", role: "West Coast Distribution", flag: "🇺🇸" },
    { city: "Rotterdam, Netherlands", role: "European Logistics Hub", flag: "🇳🇱" },
    { city: "Dubai, UAE", role: "MENA Distribution Center", flag: "🇦🇪" },
    { city: "Singapore", role: "Asia-Pacific Logistics Hub", flag: "🇸🇬" },
    { city: "Panama City, Panama", role: "Latin America Gateway", flag: "🇵🇦" },
  ];

  return (
    <Section background="light" id="global">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-14"
      >
        <motion.div variants={fadeInUp}>
          <Badge variant="outline" className="mb-4">
            Global Reach
          </Badge>
        </motion.div>
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold text-primary-dark mb-4"
        >
          Global Footprint
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-text-secondary max-w-2xl mx-auto"
        >
          Six strategic hubs ensuring fast, reliable delivery to over 30 countries worldwide.
        </motion.p>
      </motion.div>

      {/* World Map placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-10 bg-gradient-to-br from-primary-dark via-bg-dark to-primary-dark border border-border-dark"
      >
        {/* Stylized node lines */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 40%, #00B894 0%, transparent 30%), radial-gradient(circle at 50% 50%, #00B894 0%, transparent 35%), radial-gradient(circle at 80% 30%, #00B894 0%, transparent 30%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,184,148,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,184,148,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Center label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <Globe className="w-12 h-12 text-primary-accent/30 mx-auto mb-2" />
            <div className="text-white/20 text-sm font-medium">Serving 30+ Countries</div>
          </div>
        </div>
      </motion.div>

      {/* Hub cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
      >
        {hubs.map((hub) => (
          <motion.div
            key={hub.city}
            variants={fadeInUp}
            className="text-center p-4 rounded-lg bg-white border border-border-light hover:shadow-card-md transition-shadow"
          >
            <div className="text-2xl mb-2">{hub.flag}</div>
            <div className="text-sm font-semibold text-primary-dark">{hub.city.split(",")[0]}</div>
            <div className="text-xs text-text-secondary mt-1">{hub.role}</div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

/* ================================================================== */
/*  SECTION: Testimonials                                              */
/* ================================================================== */
function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "SAFORS has been our primary chassis parts supplier for three years. Their fitment accuracy is over 99% — virtually no returns. That directly impacts our bottom line.",
      author: "Carlos Mendes",
      role: "Procurement Director, AutoPartes Brasil",
    },
    {
      quote:
        "The sample turnaround is incredible. We received prototype control arms within 48 hours of request. That level of responsiveness is unheard of in this industry.",
      author: "Sarah Chen",
      role: "VP Operations, Pacific Auto Supply",
    },
    {
      quote:
        "We switched to SAFORS for our fleet maintenance program. Since then, our per-vehicle maintenance costs have dropped 18% and part failure rates are the lowest we've seen.",
      author: "James Okafor",
      role: "Fleet Manager, Lagos Transport Services",
    },
  ];

  return (
    <Section id="testimonials">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-14"
      >
        <motion.div variants={fadeInUp}>
          <Badge variant="outline" className="mb-4">
            Testimonials
          </Badge>
        </motion.div>
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold text-primary-dark mb-4"
        >
          Trusted by Industry Leaders
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-text-secondary max-w-2xl mx-auto"
        >
          Hear from our partners across the globe.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {testimonials.map((t) => (
          <motion.div
            key={t.author}
            variants={fadeInUp}
            className="relative p-8 rounded-lg bg-white border border-border-light hover:shadow-card-md transition-shadow"
          >
            <Quote className="w-8 h-8 text-primary-accent/20 mb-4" />
            <p className="text-sm text-text-secondary leading-relaxed mb-6 italic">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent font-bold text-sm">
                {t.author.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-semibold text-primary-dark">{t.author}</div>
                <div className="text-xs text-text-muted">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

/* ================================================================== */
/*  SECTION: CTA Banner                                                */
/* ================================================================== */
function CTABanner() {
  return (
    <Section background="accent" id="cta">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold text-primary-dark mb-4"
        >
          Ready to Stock SAFORS?
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-primary-dark/70 text-lg mb-8"
        >
          Join 500+ distributors and repair chains worldwide who trust SAFORS for precision parts,
          competitive pricing, and reliable delivery.
        </motion.p>
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact">
            <Button
              variant="primary"
              size="lg"
              className="bg-primary-dark text-white hover:bg-white hover:text-primary-dark min-w-[200px]"
            >
              Get Started Today
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/resources">
            <Button
              variant="outline"
              size="lg"
              className="border-primary-dark/30 text-primary-dark hover:bg-primary-dark hover:text-white min-w-[200px]"
            >
              Download Catalog
            </Button>
          </Link>
        </motion.div>
        <motion.p variants={fadeInUp} className="mt-6 text-primary-dark/50 text-xs">
          Free samples available for qualified buyers. Minimum order quantities apply.
        </motion.p>
      </motion.div>
    </Section>
  );
}

/* ================================================================== */
/*  PAGE: Homepage                                                     */
/* ================================================================== */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ProductCategoriesSection />
      <SaforsDifference />
      <SolutionsBySegment />
      <GlobalFootprint />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
