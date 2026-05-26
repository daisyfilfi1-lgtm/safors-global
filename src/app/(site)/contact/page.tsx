"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container, Section } from "@/components/ui/container";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  MessageCircle,
  Send,
  ChevronRight,
  CheckCircle,
  ArrowLeft,
  Building2,
  User,
  Package,
  FileText,
  Globe,
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
/*  Contact Info Card                                                 */
/* ------------------------------------------------------------------ */
function ContactInfoBlock() {
  const items = [
    { icon: <MapPin className="w-5 h-5" />, label: "Address", value: siteConfig.address },
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: <Phone className="w-5 h-5" />, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
    { icon: <Clock className="w-5 h-5" />, label: "Business Hours", value: siteConfig.hours },
    { icon: <MessageCircle className="w-5 h-5" />, label: "WhatsApp / WeChat", value: "Available for qualified inquiries" },
  ];

  return (
    <div className="space-y-5">
      {items.map((item) => (
        <div key={item.label} className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary-accent/10 flex items-center justify-center text-primary-accent shrink-0">
            {item.icon}
          </div>
          <div>
            <div className="text-sm font-semibold text-primary-dark">{item.label}</div>
            {item.href ? (
              <a
                href={item.href}
                className="text-sm text-text-secondary hover:text-primary-accent transition-colors"
              >
                {item.value}
              </a>
            ) : (
              <div className="text-sm text-text-secondary">{item.value}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Multi-Step Inquiry Form                                           */
/* ------------------------------------------------------------------ */
type FormData = {
  // Step 1: Who You Are
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  segment: string;
  // Step 2: What You Need
  category: string[];
  urgency: string;
  volume: string;
  // Step 3: Details
  message: string;
  hearAbout: string;
};

const initialForm: FormData = {
  name: "", email: "", phone: "", company: "", country: "", segment: "",
  category: [], urgency: "standard", volume: "",
  message: "", hearAbout: "",
};

const segments = [
  "Independent Garage / Repair Shop",
  "Wholesale Distributor / Importer",
  "Fleet Operator / Logistics Company",
  "Collision Repair Center / Body Shop",
  "E-commerce / Online Parts Seller",
  "OEM / Tier-1 Supplier",
  "Other",
];

const productCategories = [
  "Chassis & Steering",
  "Cooling & Thermal",
  "Electrical & Sensors",
  "Body & Plastic",
  "Powertrain & Transmission",
  "Maintenance & Service",
];

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormData, value: string | string[]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleCategory = (cat: string) => {
    setForm((prev) => ({
      ...prev,
      category: prev.category.includes(cat)
        ? prev.category.filter((c) => c !== cat)
        : [...prev.category, cat],
    }));
  };

  const canProceed = (s: number) => {
    if (s === 1) return form.name && form.email && form.company && form.country;
    if (s === 2) return form.category.length > 0;
    return true;
  };

  const handleSubmit = () => {
    // In production, this would send the form data to an API
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 rounded-full bg-primary-accent/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-primary-accent" />
        </div>
        <h3 className="text-xl font-bold text-primary-dark mb-2">Inquiry Received</h3>
        <p className="text-text-secondary mb-2">
          Thank you, {form.name}! Our team will review your inquiry and respond within 24 hours.
        </p>
        <p className="text-sm text-text-muted mb-6">
          A confirmation has been sent to {form.email}.
        </p>
        <Button variant="outline" onClick={() => { setStep(1); setForm(initialForm); setSubmitted(false); }}>
          Submit Another Inquiry
        </Button>
      </motion.div>
    );
  }

  return (
    <div>
      {/* Steps indicator */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2 flex-1">
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors",
                step >= s
                  ? "bg-primary-accent text-primary-dark"
                  : "bg-bg-secondary text-text-muted"
              )}
            >
              {step > s ? "✓" : s}
            </div>
            <div className={cn(
              "text-xs font-medium hidden sm:block",
              step >= s ? "text-primary-dark" : "text-text-muted"
            )}>
              {s === 1 ? "Who You Are" : s === 2 ? "What You Need" : "Details"}
            </div>
            {s < 3 && (
              <div className={cn(
                "flex-1 h-px mx-2",
                step > s ? "bg-primary-accent" : "bg-border-light"
              )} />
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <User className="w-5 h-5 text-primary-accent" />
              <h3 className="text-lg font-bold text-primary-dark">Tell Us About Yourself</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-primary-dark mb-1">
                  Full Name <span className="text-error">*</span>
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Your full name"
                  className="w-full h-11 px-4 text-sm bg-bg-secondary border border-border-light rounded-md focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent/30"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-dark mb-1">
                  Email <span className="text-error">*</span>
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="your@email.com"
                  className="w-full h-11 px-4 text-sm bg-bg-secondary border border-border-light rounded-md focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent/30"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-dark mb-1">Phone</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="w-full h-11 px-4 text-sm bg-bg-secondary border border-border-light rounded-md focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent/30"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-dark mb-1">
                  Company <span className="text-error">*</span>
                </label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                  placeholder="Your company name"
                  className="w-full h-11 px-4 text-sm bg-bg-secondary border border-border-light rounded-md focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent/30"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-dark mb-1">
                  Country <span className="text-error">*</span>
                </label>
                <input
                  type="text"
                  value={form.country}
                  onChange={(e) => update("country", e.target.value)}
                  placeholder="Your country"
                  className="w-full h-11 px-4 text-sm bg-bg-secondary border border-border-light rounded-md focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent/30"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-dark mb-1">
                  Business Segment
                </label>
                <select
                  value={form.segment}
                  onChange={(e) => update("segment", e.target.value)}
                  className="w-full h-11 px-4 text-sm bg-bg-secondary border border-border-light rounded-md focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent/30 appearance-none"
                >
                  <option value="">Select your segment</option>
                  {segments.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <Button
                variant="primary"
                onClick={() => setStep(2)}
                disabled={!canProceed(1)}
              >
                Next Step
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <Package className="w-5 h-5 text-primary-accent" />
              <h3 className="text-lg font-bold text-primary-dark">What Are You Looking For?</h3>
            </div>

            <div>
              <label className="block text-sm font-medium text-primary-dark mb-3">
                Product Categories <span className="text-error">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {productCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => toggleCategory(cat)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-md border text-sm text-left transition-all",
                      form.category.includes(cat)
                        ? "border-primary-accent bg-primary-accent/5 text-primary-accent"
                        : "border-border-light bg-bg-secondary text-text-secondary hover:border-border-dark"
                    )}
                  >
                    <div
                      className={cn(
                        "w-5 h-5 rounded border-2 flex items-center justify-center transition-colors",
                        form.category.includes(cat)
                          ? "border-primary-accent bg-primary-accent"
                          : "border-border-dark"
                      )}
                    >
                      {form.category.includes(cat) && (
                        <CheckCircle className="w-4 h-4 text-white" />
                      )}
                    </div>
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-primary-dark mb-1">
                  Urgency
                </label>
                <select
                  value={form.urgency}
                  onChange={(e) => update("urgency", e.target.value)}
                  className="w-full h-11 px-4 text-sm bg-bg-secondary border border-border-light rounded-md focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent/30 appearance-none"
                >
                  <option value="standard">Standard (1-2 weeks)</option>
                  <option value="urgent">Urgent (within 1 week)</option>
                  <option value="immediate">Immediate (ASAP)</option>
                  <option value="exploratory">Just exploring / Research</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-dark mb-1">
                  Estimated Monthly Volume
                </label>
                <select
                  value={form.volume}
                  onChange={(e) => update("volume", e.target.value)}
                  className="w-full h-11 px-4 text-sm bg-bg-secondary border border-border-light rounded-md focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent/30 appearance-none"
                >
                  <option value="">Select volume range</option>
                  <option value="under-1k">Under $1,000</option>
                  <option value="1k-10k">$1,000 - $10,000</option>
                  <option value="10k-50k">$10,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="over-100k">$100,000+</option>
                </select>
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <Button variant="ghost" onClick={() => setStep(1)}>
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
              <Button
                variant="primary"
                onClick={() => setStep(3)}
                disabled={!canProceed(2)}
              >
                Next Step
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5 text-primary-accent" />
              <h3 className="text-lg font-bold text-primary-dark">Additional Details</h3>
            </div>

            <div>
              <label className="block text-sm font-medium text-primary-dark mb-1">
                Message / Specific Requirements
              </label>
              <textarea
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Tell us about your specific needs — part numbers, vehicle models, quantities, delivery expectations, or any custom requirements..."
                rows={5}
                className="w-full px-4 py-3 text-sm bg-bg-secondary border border-border-light rounded-md focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent/30 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary-dark mb-1">
                How Did You Hear About Us?
              </label>
              <select
                value={form.hearAbout}
                onChange={(e) => update("hearAbout", e.target.value)}
                className="w-full h-11 px-4 text-sm bg-bg-secondary border border-border-light rounded-md focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent/30 appearance-none"
              >
                <option value="">Select an option</option>
                <option value="search">Search Engine</option>
                <option value="referral">Referral / Word of Mouth</option>
                <option value="trade-show">Trade Show / Exhibition</option>
                <option value="linkedin">LinkedIn / Social Media</option>
                <option value="email">Email Campaign</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex justify-between pt-4">
              <Button variant="ghost" onClick={() => setStep(2)}>
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
              <Button variant="primary" onClick={handleSubmit}>
                <Send className="w-4 h-4" />
                Submit Inquiry
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ================================================================== */
/*  PAGE: Contact                                                      */
/* ================================================================== */
export default function ContactPage() {
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
                Get in Touch
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
            >
              Contact &amp;
              <br />
              <span className="text-primary-accent">Request a Quote</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-white/60 max-w-xl"
            >
              Ready to start a partnership? Fill out our inquiry form and a segment specialist
              will respond within 24 hours.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* ================================================================ */}
      {/*  MAIN CONTENT: Left (Info) + Right (Form)                      */}
      {/* ================================================================ */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left: Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-3">
                We&apos;re Here to Help
              </h2>
              <p className="text-text-secondary text-sm">
                Whether you need pricing, technical specifications, or want to discuss a custom
                manufacturing project — our team is ready to assist.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-8">
              <ContactInfoBlock />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-lg bg-bg-secondary border border-border-light"
            >
              <div className="flex items-center gap-2 mb-3">
                <Globe className="w-5 h-5 text-primary-accent" />
                <h3 className="text-sm font-bold text-primary-dark">Quick Links</h3>
              </div>
              <div className="space-y-2 text-sm">
                <Link href="/resources#catalogs" className="block text-text-secondary hover:text-primary-accent transition-colors">
                  Download Product Catalog
                </Link>
                <Link href="/quality" className="block text-text-secondary hover:text-primary-accent transition-colors">
                  Quality Certifications
                </Link>
                <Link href="/samples" className="block text-text-secondary hover:text-primary-accent transition-colors">
                  Request Free Samples
                </Link>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-6 text-xs text-text-muted">
              Response time: Within 24 hours on business days.
              <br />
              For urgent inquiries, please mention in your message.
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 p-8 rounded-lg bg-white border border-border-light shadow-card-md"
          >
            <MultiStepForm />
          </motion.div>
        </div>
      </Section>

      {/* ================================================================ */}
      {/*  MAP SECTION                                                    */}
      {/* ================================================================ */}
      <Section background="light">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <Badge variant="outline" className="mb-4">
              Visit Us
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-3">
              Our Location
            </h2>
            <p className="text-text-secondary">
              Hangzhou, Zhejiang Province, China — 45 minutes from Hangzhou Xiaoshan International Airport (HGH).
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="h-[300px] rounded-lg bg-gradient-to-br from-bg-dark via-primary-dark to-bg-dark border border-border-dark flex items-center justify-center relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 50% 50%, #00B894 0%, transparent 60%)",
                  filter: "blur(60px)",
                }}
              />
              <div className="text-center relative z-10">
                <MapPin className="w-12 h-12 text-primary-accent/40 mx-auto mb-3" />
                <div className="text-white/60 text-sm font-medium">{siteConfig.address}</div>
                <div className="text-white/30 text-xs mt-1">Map integration coming soon</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Section>
    </>
  );
}
