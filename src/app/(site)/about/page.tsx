"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container, Section } from "@/components/ui/container";
import {
  Globe,
  Factory,
  Users,
  TrendingUp,
  MapPin,
  ChevronRight,
  ArrowRight,
  CheckCircle,
  Calendar,
  Building2,
  Award,
  Target,
  Eye,
  Heart,
  Shield,
  Lightbulb,
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
/*  PAGE: About SAFORS                                                 */
/* ================================================================== */
export default function AboutPage() {
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
              "radial-gradient(circle at 25% 40%, #00B894 0%, transparent 50%), radial-gradient(circle at 75% 60%, #00B894 0%, transparent 50%)",
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
                About SAFORS
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
            >
              About
              <br />
              <span className="text-primary-accent">SAFORS Automotive</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-white/60 max-w-xl"
            >
              From a precision machining workshop to a global automotive parts manufacturer —
              our journey spans three decades of continuous improvement.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* ================================================================ */}
      {/*  BRAND STORY                                                    */}
      {/* ================================================================ */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="h-[400px] rounded-lg bg-gradient-to-br from-bg-dark via-primary-dark to-bg-dark overflow-hidden border border-border-dark relative">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 50% 50%, #00B894 0%, transparent 60%)",
                  filter: "blur(60px)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Factory className="w-16 h-16 text-primary-accent/30 mx-auto mb-4" />
                  <div className="text-white/60 text-sm font-medium">50,000㎡ Manufacturing Campus</div>
                  <div className="text-white/30 text-xs mt-1">Hangzhou, China</div>
                </div>
              </div>
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-card-lg p-5 border border-border-light hidden md:block">
              <div className="text-2xl font-bold text-primary-accent">{siteConfig.founded}</div>
              <div className="text-xs text-text-secondary">Founded</div>
            </div>
          </motion.div>

          {/* Story text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="outline" className="mb-4">
                Our Story
              </Badge>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-primary-dark mb-6"
            >
              Three Decades of
              <br />
              <span className="text-primary-accent">Precision Engineering</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-text-secondary leading-relaxed mb-4"
            >
              SAFORS Automotive Technology was founded in {siteConfig.founded} as a precision
              machining workshop in Hangzhou, Zhejiang Province — the heart of China&apos;s
              automotive manufacturing corridor.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-text-secondary leading-relaxed mb-4"
            >
              Over the past three decades, we have grown into a 50,000㎡ manufacturing campus
              employing over {siteConfig.employees} people. Our product portfolio has expanded from
              chassis components to six full categories covering over 2,400 SKUs.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-text-secondary leading-relaxed mb-6"
            >
              Today, SAFORS exports to more than {siteConfig.countries} countries across six
              continents. We serve independent garages, wholesale distributors, fleet operators,
              and collision repair centers with parts that meet or exceed OE specifications.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/contact">
                <Button variant="primary">
                  Meet Our Team
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* ================================================================ */}
      {/*  MISSION / VISION / VALUES                                      */}
      {/* ================================================================ */}
      <Section background="light">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: <Target className="w-8 h-8" />,
              title: "Our Mission",
              desc: "To deliver precision-engineered automotive components that make repair shops more profitable, distributors more competitive, and fleets more reliable — all while maintaining the highest standards of quality and value.",
            },
            {
              icon: <Eye className="w-8 h-8" />,
              title: "Our Vision",
              desc: "To be the most trusted aftermarket parts partner globally — known for uncompromising quality, exceptional service, and continuous innovation in automotive component manufacturing.",
            },
            {
              icon: <Heart className="w-8 h-8" />,
              title: "Our Values",
              desc: "Precision in everything we do. Integrity in every transaction. Partnership with every customer. Innovation in every product. Sustainability in every process.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="p-8 rounded-lg bg-white border border-border-light hover:shadow-card-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-accent/10 flex items-center justify-center text-primary-accent mb-5">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-dark mb-3">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ================================================================ */}
      {/*  GLOBAL PRESENCE                                                */}
      {/* ================================================================ */}
      <Section id="global">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <Badge variant="outline" className="mb-4">
              Global Reach
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Our Global Presence
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Strategic hubs connecting our Hangzhou headquarters to customers in over 30 countries.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { city: "Hangzhou", country: "China", role: "Global HQ & Manufacturing", flag: "🇨🇳", desc: "50,000㎡ campus housing R&D, production, testing, and global logistics." },
              { city: "Los Angeles", country: "USA", role: "West Coast Distribution", flag: "🇺🇸", desc: "Regional warehouse serving North American distributors with 48H delivery." },
              { city: "Rotterdam", country: "Netherlands", role: "European Logistics Hub", flag: "🇳🇱", desc: "Strategic EU gateway for rapid distribution across European markets." },
              { city: "Dubai", country: "UAE", role: "MENA Distribution Center", flag: "🇦🇪", desc: "Serving Middle East and North Africa markets with regional stock." },
              { city: "Singapore", role: "Asia-Pacific Logistics Hub", country: "Singapore", flag: "🇸🇬", desc: "Regional hub for Southeast Asia, Australia, and New Zealand markets." },
              { city: "Panama City", country: "Panama", role: "Latin America Gateway", flag: "🇵🇦", desc: "Gateway for Central and South American distribution networks." },
            ].map((hub) => (
              <motion.div
                key={hub.city}
                variants={fadeInUp}
                className="p-6 rounded-lg bg-white border border-border-light hover:shadow-card-md transition-shadow"
              >
                <div className="text-3xl mb-3">{hub.flag}</div>
                <h3 className="text-lg font-bold text-primary-dark">{hub.city}</h3>
                <p className="text-xs text-text-muted mb-1">{hub.country}</p>
                <p className="text-sm font-medium text-primary-accent mb-2">{hub.role}</p>
                <p className="text-sm text-text-secondary">{hub.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* ================================================================ */}
      {/*  TIMELINE / MILESTONES                                          */}
      {/* ================================================================ */}
      <Section background="light" id="milestones">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <Badge variant="outline" className="mb-4">
              Milestones
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Our Journey
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Key milestones in three decades of automotive component manufacturing.
            </p>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border-light" />

            <div className="space-y-8">
              {[
                { year: "1996", title: "Foundation", desc: "SAFORS founded as a precision machining workshop in Hangzhou, specializing in chassis components for domestic OEM suppliers." },
                { year: "2003", title: "Export Begins", desc: "First international orders to Southeast Asia and Middle East. Company establishes dedicated export division." },
                { year: "2008", title: "ISO 9001 Certification", desc: "Achieved ISO 9001:2008 certification. Implemented comprehensive quality management system across all production lines." },
                { year: "2012", title: "Facility Expansion", desc: "Moved to new 50,000㎡ campus. Added cooling system and electrical component production lines." },
                { year: "2015", title: "IATF 16949 Certified", desc: "Achieved IATF 16949:2016 certification for chassis and powertrain product lines." },
                { year: "2018", title: "Global Expansion", desc: "Opened distribution hubs in Los Angeles, Rotterdam, and Dubai. Reached 30+ country export footprint." },
                { year: "2021", title: "CAPA & DOT Certification", desc: "Body panel line achieved CAPA certification. Lighting products certified to DOT and E-mark standards." },
                { year: "2024", title: "Digital Transformation", desc: "Launched B2B e-commerce platform, EDI/API integration for distributor partners, and AI-powered quality inspection systems." },
              ].map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  variants={fadeInUp}
                  className="relative flex items-start gap-6 pl-12"
                >
                  {/* Dot */}
                  <div className="absolute left-3 top-1.5 w-8 h-8 rounded-full bg-primary-accent flex items-center justify-center text-white text-[10px] font-bold -translate-x-1/2 border-4 border-bg-secondary z-10">
                    {milestone.year.slice(2)}
                  </div>

                  <div className="flex-1 p-5 rounded-lg bg-white border border-border-light hover:shadow-card-sm transition-shadow">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-bold text-primary-accent uppercase tracking-wider">
                        {milestone.year}
                      </span>
                      <h3 className="text-lg font-bold text-primary-dark">{milestone.title}</h3>
                    </div>
                    <p className="text-sm text-text-secondary">{milestone.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>

      {/* ================================================================ */}
      {/*  EXPORT TEAM                                                    */}
      {/* ================================================================ */}
      <Section id="team">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <Badge variant="outline" className="mb-4">
              Our Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Meet the Export Team
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our international sales team speaks your language — literally and figuratively.
              Dedicated account managers for every region.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { name: "David Zhang", role: "VP, International Sales", region: "Global Accounts", flag: "🌍" },
              { name: "Maria Santos", role: "Regional Sales Director", region: "North & South America", flag: "🌎" },
              { name: "Ahmed Al-Rashid", role: "Regional Sales Director", region: "MENA & Africa", flag: "🌍" },
              { name: "Lena Weber", role: "Regional Sales Director", region: "Europe", flag: "🌍" },
              { name: "Kevin Chen", role: "Key Account Manager", region: "Southeast Asia & Oceania", flag: "🌏" },
              { name: "Priya Sharma", role: "Customer Success Lead", region: "Global Support", flag: "🌐" },
              { name: "Tomás Rivera", role: "Technical Sales Engineer", region: "Latin America", flag: "🌎" },
              { name: "Wei Liu", role: "Export Operations Manager", region: "Logistics & Compliance", flag: "📦" },
            ].map((member) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                className="p-6 rounded-lg bg-white border border-border-light hover:shadow-card-md transition-shadow text-center group"
              >
                {/* Avatar placeholder */}
                <div className="w-16 h-16 rounded-full bg-primary-accent/10 flex items-center justify-center text-2xl mx-auto mb-4 group-hover:bg-primary-accent/20 transition-colors">
                  {member.flag}
                </div>
                <h3 className="text-lg font-bold text-primary-dark">{member.name}</h3>
                <p className="text-sm font-medium text-primary-accent mb-1">{member.role}</p>
                <p className="text-xs text-text-muted">{member.region}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center mt-10">
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Our Team
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Section>

      {/* ================================================================ */}
      {/*  FACTORY STATS BANNER                                           */}
      {/* ================================================================ */}
      <Section background="dark">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: "30+", label: "Years of Excellence" },
            { value: siteConfig.factoryArea, label: "Manufacturing Campus" },
            { value: siteConfig.employees, label: "Skilled Employees" },
            { value: siteConfig.countries, label: "Export Countries" },
          ].map((s) => (
            <motion.div key={s.label} variants={fadeInUp}>
              <div className="text-3xl md:text-4xl font-bold text-primary-accent mb-1">
                {s.value}
              </div>
              <div className="text-sm text-white/50">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </>
  );
}
