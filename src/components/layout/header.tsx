"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { categories } from "@/data/products";

const catLinks = categories.map((cat) => ({
  ...cat,
  href: `/category/${cat.id}`,
}));

const navItems = [
  { label: "HOME", href: "/" },
  {
    label: "PRODUCTS",
    href: "/products",
    megaMenu: catLinks.map((cat) => ({
      label: cat.shortName,
      href: cat.href,
      description: cat.description,
    })),
  },
  {
    label: "SOLUTIONS",
    href: "/solutions",
    subItems: [
      { label: "Independent Garages", href: "/solutions#garages" },
      { label: "Distributors", href: "/solutions#distributors" },
      { label: "Fleet Operators", href: "/solutions#fleet" },
      { label: "Collision Repair", href: "/solutions#collision" },
    ],
  },
  { label: "QUALITY", href: "/quality" },
  { label: "RESOURCES", href: "/resources" },
  { label: "ABOUT", href: "/about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = !scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        isTransparent
          ? "bg-transparent"
          : "bg-[rgba(250,250,250,0.95)] shadow-[0_1px_0_rgba(0,0,0,0.06)]"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-20 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span
              className={cn(
                "text-2xl font-bold tracking-tight transition-colors duration-300",
                isTransparent ? "text-white" : "text-primary-dark"
              )}
            >
              SAFORS
            </span>
            <span
              className={cn(
                "text-xs tracking-[0.2em] uppercase hidden sm:block transition-colors duration-300",
                isTransparent ? "text-white/60" : "text-text-muted"
              )}
            >
              Automotive
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.megaMenu && setActiveMega(item.label)}
                onMouseLeave={() => setActiveMega(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-xs font-medium uppercase tracking-[0.5px] transition-colors duration-300 relative",
                    "after:absolute after:bottom-0 after:left-4 after:right-4 after:h-[2px] after:bg-primary-accent after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100",
                    isTransparent ? "text-white/90 hover:text-white" : "text-text-primary hover:text-primary-dark"
                  )}
                >
                  {item.label}
                  {(item.megaMenu || item.subItems) && (
                    <ChevronDown className="w-3 h-3 ml-0.5" />
                  )}
                </Link>

                {/* Mega Menu - Products */}
                {item.megaMenu && activeMega === item.label && (
                  <div className="absolute top-full left-0 w-[700px] bg-white shadow-card-lg rounded-lg p-6 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
                    {item.megaMenu.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="p-3 rounded-md hover:bg-bg-secondary transition-colors group"
                      >
                        <div className="text-sm font-semibold text-primary-dark group-hover:text-primary-accent transition-colors">
                          {sub.label}
                        </div>
                        <div className="text-xs text-text-secondary mt-1 line-clamp-2">
                          {sub.description}
                        </div>
                      </Link>
                    ))}
                    <div className="col-span-2 border-t border-border-light pt-4 mt-2">
                      <Link
                        href="/products"
                        className="text-sm font-medium text-primary-accent hover:underline"
                      >
                        View All 2,400+ SKUs →
                      </Link>
                      <span className="mx-3 text-border-light">|</span>
                      <Link
                        href="/resources#catalogs"
                        className="text-sm font-medium text-primary-accent hover:underline"
                      >
                        Download Full Catalog ↓
                      </Link>
                    </div>
                  </div>
                )}

                {/* Dropdown - Solutions */}
                {item.subItems && activeMega === item.label && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-card-lg rounded-lg p-3 animate-in fade-in slide-in-from-top-2 duration-200">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block px-4 py-3 text-sm text-text-primary hover:bg-bg-secondary rounded-md transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              className={cn(
                "p-2 transition-colors",
                isTransparent ? "text-white/80 hover:text-white" : "text-text-secondary hover:text-text-primary"
              )}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link href="/contact">
              <Button
                variant="primary"
                size="sm"
                className={cn(
                  isTransparent && "bg-white text-primary-dark hover:bg-primary-accent hover:text-white"
                )}
              >
                Request a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "lg:hidden p-2 transition-colors",
              isTransparent ? "text-white" : "text-primary-dark"
            )}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-black/95 z-40 overflow-y-auto">
          <div className="p-6 space-y-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block py-3 text-lg font-medium text-white/80 hover:text-white transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.subItems && (
                  <div className="ml-4 space-y-2 mt-1">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block py-2 text-sm text-white/60 hover:text-white transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                <Button variant="accent" className="w-full">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
