import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "SAFORS Automotive Technology terms and conditions governing the use of our website, products, and services.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20">
      <Container className="max-w-3xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-primary-accent/10 flex items-center justify-center text-primary-accent">
            <FileText className="w-5 h-5" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-dark">Terms of Service</h1>
        </div>
        <p className="text-sm text-text-muted mb-8">Last updated: January 2025</p>

        <div className="prose prose-sm max-w-none text-text-secondary space-y-6">
          <section>
            <h2 className="text-xl font-bold text-primary-dark mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the SAFORS Automotive Technology website, products, and services (&ldquo;Services&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, please do not use our Services.
            </p>
            <p>
              These Terms apply to all visitors, users, customers, and others who access or use our Services. We reserve the right to update these Terms at any time. Continued use of the Services after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary-dark mb-3">2. Definitions</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>&ldquo;SAFORS,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;</strong> refers to SAFORS Automotive Technology and its affiliates.</li>
              <li><strong>&ldquo;Customer,&rdquo; &ldquo;you,&rdquo; &ldquo;your&rdquo;</strong> refers to the individual or entity using our Services or purchasing our products.</li>
              <li><strong>&ldquo;Products&rdquo;</strong> refers to automotive components and parts manufactured or distributed by SAFORS.</li>
              <li><strong>&ldquo;Agreement&rdquo;</strong> refers to these Terms of Service and any applicable purchase agreements or order confirmations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary-dark mb-3">3. Products and Orders</h2>
            <h3 className="font-semibold text-primary-dark mb-2">Order Acceptance</h3>
            <p>
              All orders are subject to acceptance by SAFORS. We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, pricing errors, or credit limitations.
            </p>

            <h3 className="font-semibold text-primary-dark mt-4 mb-2">Pricing</h3>
            <p>
              Prices are quoted in USD unless otherwise specified. All prices are subject to change without notice. Quoted prices are valid for 15 days from the date of quotation unless otherwise stated.
            </p>

            <h3 className="font-semibold text-primary-dark mt-4 mb-2">Minimum Order Quantities</h3>
            <p>
              Minimum order quantities (MOQs) may apply depending on the product category and customer segment. MOQs will be communicated during the quotation process.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary-dark mb-3">4. Payment Terms</h2>
            <p>
              Payment terms are established on a per-customer basis and documented in the purchase agreement or invoice. Standard payment methods include wire transfer, letter of credit (L/C), and other mutually agreed methods.
            </p>
            <p>
              Late payments may incur interest charges at the rate specified in the applicable agreement. SAFORS reserves the right to suspend shipments for overdue accounts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary-dark mb-3">5. Shipping and Delivery</h2>
            <p>
              Incoterms are specified in each quotation or order confirmation. SAFORS is not responsible for delays caused by customs clearance, transportation disruptions, or force majeure events.
            </p>
            <p>
              Risk of loss or damage to products passes to the customer in accordance with the agreed Incoterms. Customers should inspect all shipments upon receipt and report any damage or discrepancies within 5 business days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary-dark mb-3">6. Warranties and Returns</h2>
            <h3 className="font-semibold text-primary-dark mb-2">Product Warranty</h3>
            <p>
              SAFORS warrants that its products will be free from defects in materials and workmanship for the warranty period specified on the product or in the applicable agreement. Warranty periods typically range from 1 to 2 years depending on the product category.
            </p>

            <h3 className="font-semibold text-primary-dark mt-4 mb-2">Warranty Exclusions</h3>
            <p>This warranty does not cover:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Products that have been improperly installed, modified, or misused</li>
              <li>Normal wear and tear or consumable items</li>
              <li>Damage caused by accidents, improper maintenance, or environmental factors</li>
              <li>Products not installed in accordance with manufacturer specifications</li>
            </ul>

            <h3 className="font-semibold text-primary-dark mt-4 mb-2">Return Policy</h3>
            <p>
              Returns must be authorized in advance by SAFORS. Authorized returns are subject to a restocking fee unless the return is due to a manufacturing defect. Products must be returned in their original packaging and in resalable condition.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary-dark mb-3">7. Intellectual Property</h2>
            <p>
              All content on our website, including text, graphics, logos, product images, and documentation, is the property of SAFORS or its licensors and is protected by applicable intellectual property laws.
            </p>
            <p>
              Customers may not reproduce, distribute, modify, or create derivative works from our content without prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary-dark mb-3">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, SAFORS shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunity, arising out of or related to the use of our products or services.
            </p>
            <p>
              SAFORS&apos;s total liability for any claim arising from these Terms or the use of our products shall not exceed the purchase price paid for the products giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary-dark mb-3">9. Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of proprietary information shared during the course of business. This includes pricing, product specifications, customer lists, and business strategies. This obligation survives the termination of any business relationship.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary-dark mb-3">10. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the People&apos;s Republic of China, without regard to its conflict of law principles. Any disputes arising from these Terms shall be resolved through friendly negotiation. If negotiation fails, the dispute shall be submitted to the competent court in Hangzhou, Zhejiang Province.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary-dark mb-3">11. Termination</h2>
            <p>
              Either party may terminate a business relationship with written notice as specified in the applicable agreement. Upon termination, the customer shall pay all outstanding amounts due for products delivered or services rendered.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary-dark mb-3">12. Contact</h2>
            <p>
              For questions about these Terms, please contact us:
            </p>
            <div className="mt-2 text-sm">
              <p>Email: legal@saforstech.com</p>
              <p>Phone: +86-571-XXXX-XXXX</p>
              <p>Address: No. XX, XX Road, Xiaoshan District, Hangzhou, Zhejiang, China 311200</p>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
