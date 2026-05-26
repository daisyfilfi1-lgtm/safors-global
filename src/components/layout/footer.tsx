import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/utils";
import { categories } from "@/data/products";
import { Globe, ExternalLink, Image as ImageIcon, Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white/60">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-white mb-3">SAFORS</div>
            <p className="text-sm leading-relaxed mb-4">
              {siteConfig.description.slice(0, 120)}...
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-primary-accent hover:text-primary-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-primary-accent hover:text-primary-accent transition-colors"
                aria-label="YouTube"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-primary-accent hover:text-primary-accent transition-colors"
                aria-label="Instagram"
              >
                <ImageIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-[0.5px] mb-4">
              Products
            </h4>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/category/${cat.id}`}
                    className="text-sm hover:text-primary-accent transition-colors"
                  >
                    {cat.shortName}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/products"
                  className="text-sm font-medium text-primary-accent hover:underline"
                >
                  View All Products →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-[0.5px] mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {["About", "Quality", "Careers", "News", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm hover:text-primary-accent transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-[0.5px] mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary-accent" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 shrink-0 text-primary-accent" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-primary-accent transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 shrink-0 text-primary-accent" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-primary-accent transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-primary-accent" />
                <span>{siteConfig.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>
            &copy; {new Date().getFullYear()} SAFORS Automotive Technology. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/legal/privacy" className="hover:text-primary-accent transition-colors">
              Privacy
            </Link>
            <Link href="/legal/terms" className="hover:text-primary-accent transition-colors">
              Terms
            </Link>
            <a href="#" className="hover:text-primary-accent transition-colors">
              Cookie Settings
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
