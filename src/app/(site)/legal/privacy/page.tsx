import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "SAFORS Automotive Technology privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20">
      <Container className="max-w-3xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-primary-accent/10 flex items-center justify-center text-primary-accent">
            <Shield className="w-5 h-5" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-dark">Privacy Policy</h1>
        </div>
        <p className="text-sm text-text-muted mb-8">Last updated: January 2025</p>

        <div className="prose prose-sm max-w-none text-text-secondary space-y-6">
          <section>
            <h2 className="text-xl font-bold text-primary-dark mb-3">1. Introduction</h2>
            <p>
              SAFORS Automotive Technology (&ldquo;SAFORS,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, request quotes, or interact with our services.
            </p>
            <p>
              By using our website and services, you consent to the data practices described in this policy. If you do not agree with any part of this policy, please discontinue use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary-dark mb-3">2. Information We Collect</h2>
            <h3 className="font-semibold text-primary-dark mb-2">Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us, including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name, email address, phone number, and company name</li>
              <li>Business address and country of operation</li>
              <li>Job title and professional information</li>
              <li>Communication preferences and inquiry details</li>
            </ul>

            <h3 className="font-semibold text-primary-dark mt-4 mb-2">Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>IP address, browser type, and operating system</li>
              <li>Pages visited, time spent, and referring URLs</li>
              <li>Device information and general location data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary-dark mb-3">3. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>To respond to your inquiries and provide quotations</li>
              <li>To process and fulfill orders for products and services</li>
              <li>To communicate with you about your account, orders, and inquiries</li>
              <li>To improve our website, products, and customer service</li>
              <li>To send marketing communications (with your consent)</li>
              <li>To comply with legal obligations and regulatory requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary-dark mb-3">4. Data Sharing and Disclosure</h2>
            <p>
              We do not sell your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Service providers who assist in our business operations (shipping, payment processing, IT services)</li>
              <li>Business partners in connection with products or services you have requested</li>
              <li>Legal authorities when required by applicable law or to protect our rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary-dark mb-3">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, access controls, and secure data storage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary-dark mb-3">6. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes described in this policy, or as required by applicable law. When data is no longer needed, we securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary-dark mb-3">7. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate or incomplete data</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict processing of your data</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:privacy@saforstech.com" className="text-primary-accent hover:underline">privacy@saforstech.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary-dark mb-3">8. Cookies</h2>
            <p>
              Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. You can control cookie preferences through your browser settings.
            </p>
            <p className="mt-2">
              We use both session cookies (which expire when you close your browser) and persistent cookies (which remain until deleted or they expire).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary-dark mb-3">9. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for international data transfers in compliance with applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary-dark mb-3">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page with an updated effective date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary-dark mb-3">11. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="mt-2 text-sm">
              <p>Email: privacy@saforstech.com</p>
              <p>Phone: +86-571-XXXX-XXXX</p>
              <p>Address: No. XX, XX Road, Xiaoshan District, Hangzhou, Zhejiang, China 311200</p>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
