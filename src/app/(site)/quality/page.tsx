"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container, Section } from "@/components/ui/container";
import {
  CheckCircle,
  Shield,
  Award,
  FileCheck,
  Microscope,
  Cog,
  ClipboardCheck,
  HardDrive,
  Thermometer,
  Gauge,
  Ruler,
  Wrench,
  ArrowRight,
  ChevronRight,
  Factory,
  Users,
  Search,
  BarChart3,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Animations                                                        */
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

/* ================================================================== */
/*  PAGE: Quality & Certifications                                     */
/* ================================================================== */
export default function QualityPage() {
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
                Quality Assurance
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
            >
              Quality &amp;
              <br />
              <span className="text-primary-accent">Certifications</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-white/60 max-w-xl"
            >
              Every part that leaves our 50,000㎡ factory has been tested, measured, and verified.
              Our quality management system is certified to the highest international standards.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* ================================================================ */}
      {/*  QUICK STATS                                                    */}
      {/* ================================================================ */}
      <div className="bg-white border-b border-border-light">
        <Container className="py-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { value: siteConfig.otifRate, label: "On-Time Delivery" },
              { value: siteConfig.returnRate, label: "Return Rate" },
              { value: "12-Step", label: "Quality Process" },
              { value: "500+", label: "QC Personnel" },
            ].map((s) => (
              <motion.div
                key={s.label}
                variants={fadeInUp}
                className="text-center p-4"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary-accent mb-1">
                  {s.value}
                </div>
                <div className="text-sm text-text-secondary">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </div>

      {/* ================================================================ */}
      {/*  PROCESS TIMELINE                                               */}
      {/* ================================================================ */}
      <Section id="process">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <Badge variant="outline" className="mb-4">
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              12-Step Quality Process
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              From raw material inspection to final packaging — every step is documented,
              measured, and traceable.
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border-light -translate-x-1/2" />

            <div className="space-y-8">
              {[
                { step: "01", title: "Raw Material Inspection", desc: "Chemical composition analysis and mechanical property testing on all incoming materials. Supplier batch certificates verified.", icon: <Search className="w-5 h-5" /> },
                { step: "02", title: "Incoming Visual QC", desc: "100% visual inspection for surface defects, dimensional anomalies, and packaging damage before materials enter production.", icon: <ClipboardCheck className="w-5 h-5" /> },
                { step: "03", title: "Production Setup Verification", desc: "First-article inspection before each production run. Tooling, fixtures, and machine parameters verified against SOP.", icon: <Cog className="w-5 h-5" /> },
                { step: "04", title: "In-Process Dimensional Checks", desc: "Statistical process control (SPC) at defined intervals. Critical dimensions measured with CMM and digital calipers.", icon: <Ruler className="w-5 h-5" /> },
                { step: "05", title: "Material Property Testing", desc: "Hardness, tensile strength, and impact resistance testing on production samples at specified frequencies.", icon: <HardDrive className="w-5 h-5" /> },
                { step: "06", title: "Functional Performance Testing", desc: "Parts tested under simulated operating conditions — fatigue cycling, torque validation, and pressure testing.", icon: <Gauge className="w-5 h-5" /> },
                { step: "07", title: "Thermal & Environmental Testing", desc: "Heat aging, cold impact, and thermal cycling tests to validate material performance across extreme conditions.", icon: <Thermometer className="w-5 h-5" /> },
                { step: "08", title: "Final Dimensional Inspection", desc: "100% critical dimension verification. Non-conforming parts are segregated and quarantined for root cause analysis.", icon: <Ruler className="w-5 h-5" /> },
                { step: "09", title: "Surface Finish & Appearance QC", desc: "Visual and tactile inspection of surface finish, coating uniformity, and color match against master samples.", icon: <Shield className="w-5 h-5" /> },
                { step: "10", title: "Trial Fitment Verification", desc: "Random samples from each batch fitted to actual vehicle assemblies to validate real-world fitment.", icon: <Wrench className="w-5 h-5" /> },
                { step: "11", title: "Packaging & Labeling QC", desc: "Barcode scan verification, packaging integrity check, and labeling accuracy audit before palletization.", icon: <FileCheck className="w-5 h-5" /> },
                { step: "12", title: "Final Lot Release", desc: "Quality manager reviews all inspection data and signs off lot release. Non-conforming lots are blocked from shipment.", icon: <CheckCircle className="w-5 h-5" /> },
              ].map((item, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={item.step}
                    variants={fadeInUp}
                    className={cn(
                      "relative flex items-center gap-6 md:gap-10",
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    )}
                  >
                    {/* Connector dot */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary-accent items-center justify-center text-white text-xs font-bold z-10 border-4 border-white">
                      {item.step}
                    </div>

                    {/* Content card */}
                    <div className={cn("flex-1", isLeft ? "md:text-right md:pr-16" : "md:pl-16")}>
                      <div className="p-6 rounded-lg bg-white border border-border-light hover:shadow-card-md transition-shadow">
                        <div className={cn(
                          "flex items-center gap-3 mb-2",
                          isLeft ? "md:flex-row-reverse" : ""
                        )}>
                          <div className="w-10 h-10 rounded-lg bg-primary-accent/10 flex items-center justify-center text-primary-accent shrink-0">
                            {item.icon}
                          </div>
                          <h3 className="text-lg font-bold text-primary-dark">{item.title}</h3>
                        </div>
                        <p className="text-sm text-text-secondary">{item.desc}</p>
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </Section>

      {/* ================================================================ */}
      {/*  LAB & TESTING                                                  */}
      {/* ================================================================ */}
      <Section background="light" id="lab">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <Badge variant="outline" className="mb-4">
              Testing Capabilities
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              In-House Laboratory &amp; Testing
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our accredited in-house lab is equipped with advanced testing equipment to ensure
              every part meets rigorous quality standards.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: <Microscope className="w-8 h-8" />, title: "CMM Inspection", desc: "Coordinate measuring machines for 3D dimensional analysis with micron-level accuracy." },
              { icon: <Gauge className="w-8 h-8" />, title: "Material Testing", desc: "Tensile, hardness, and impact testing to validate material properties." },
              { icon: <Thermometer className="w-8 h-8" />, title: "Environmental Chamber", desc: "Thermal cycling from -40°C to +150°C with humidity control for accelerated aging tests." },
              { icon: <BarChart3 className="w-8 h-8" />, title: "Fatigue Testing", desc: "Dynamic load cycling to simulate real-world wear over thousands of operating hours." },
            ].map((lab) => (
              <motion.div
                key={lab.title}
                variants={fadeInUp}
                className="p-6 rounded-lg bg-white border border-border-light hover:shadow-card-md transition-shadow text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-accent/10 flex items-center justify-center text-primary-accent mx-auto mb-4">
                  {lab.icon}
                </div>
                <h3 className="text-lg font-bold text-primary-dark mb-2">{lab.title}</h3>
                <p className="text-sm text-text-secondary">{lab.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* ================================================================ */}
      {/*  CERTIFICATIONS GRID                                            */}
      {/* ================================================================ */}
      <Section id="certifications">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <Badge variant="outline" className="mb-4">
              Certifications
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Certified Quality Management
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our facilities and processes are certified by leading international bodies.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                name: "ISO 9001:2015",
                org: "International Organization for Standardization",
                desc: "Certified quality management system covering design, production, and distribution of automotive components.",
                scope: "All product categories & processes",
              },
              {
                name: "IATF 16949:2016",
                org: "International Automotive Task Force",
                desc: "Automotive-specific QMS standard with additional requirements for defect prevention and waste reduction.",
                scope: "Chassis, steering, and powertrain lines",
              },
              {
                name: "CAPA Certified",
                org: "Certified Automotive Parts Association",
                desc: "Certification for aftermarket body panels meeting dimensional and material standards for collision repair.",
                scope: "Body & plastic product lines",
              },
              {
                name: "DOT Compliant",
                org: "U.S. Department of Transportation",
                desc: "Lighting and safety components manufactured to FMVSS standards for U.S. market distribution.",
                scope: "Lamps, mirrors, and safety-related parts",
              },
              {
                name: "E-mark / CE",
                org: "European Union",
                desc: "ECE Regulation compliance for lighting, mirrors, and safety components sold in European markets.",
                scope: "Lighting, mirrors, and body parts for EU",
              },
              {
                name: "ISO 14001",
                org: "Environmental Management",
                desc: "Certified environmental management system for sustainable manufacturing operations and waste reduction.",
                scope: "All manufacturing facilities",
              },
            ].map((cert) => (
              <motion.div
                key={cert.name}
                variants={fadeInUp}
                className="p-6 rounded-lg border border-border-light bg-white hover:shadow-card-md hover:border-primary-accent/30 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-accent/10 flex items-center justify-center text-primary-accent mb-4">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-primary-dark mb-1">{cert.name}</h3>
                <p className="text-xs text-text-muted mb-3">{cert.org}</p>
                <p className="text-sm text-text-secondary mb-3">{cert.desc}</p>
                <div className="text-xs">
                  <span className="font-medium text-primary-dark">Scope: </span>
                  <span className="text-text-muted">{cert.scope}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* ================================================================ */}
      {/*  SUPPLIER AUDIT CTA                                             */}
      {/* ================================================================ */}
      <Section background="accent">
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
            See It for Yourself
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-primary-dark/70 text-lg mb-8"
          >
            We welcome supplier audits — remote or on-site. Our quality documentation is open
            for review, and our factory floor is ready for your visit.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact">
              <Button
                variant="primary"
                size="lg"
                className="bg-primary-dark text-white hover:bg-white hover:text-primary-dark min-w-[200px]"
              >
                Schedule an Audit
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-primary-dark/30 text-primary-dark hover:bg-primary-dark hover:text-white min-w-[200px]"
              >
                Request Quality Docs
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Section>
    </>
  );
}
