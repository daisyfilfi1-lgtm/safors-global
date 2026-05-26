import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "SAFORS",
  tagline: "Precision Parts. Global Reach. Proven Reliability.",
  description:
    "SAFORS delivers engineered automotive components from China's most advanced manufacturing corridor to independent garages, distributors, and fleet operators worldwide.",
  email: "export@saforstech.com",
  phone: "+86-571-XXXX-XXXX",
  address: "No. XX, XX Road, Xiaoshan District, Hangzhou, Zhejiang, China 311200",
  hours: "Mon–Fri 09:00–18:00 CST (GMT+8)",
  founded: "1996",
  employees: "500+",
  factoryArea: "50,000㎡",
  countries: "30+",
  otifRate: "99.2%",
  returnRate: "< 0.3%",
  sampleTurnaround: "24H",
  skuCount: "2,400+",
  certifications: ["ISO 9001:2015", "IATF 16949:2016", "CAPA", "DOT", "E-mark / CE"],
};
