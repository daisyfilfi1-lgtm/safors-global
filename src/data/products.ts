export interface Product {
  id: string;
  sku: string;
  name: string;
  category: ProductCategory;
  subCategory: string;
  description: string;
  shortDescription: string;
  oem: string[];
  vehicleFit: string[];
  material: string;
  weight: string;
  dimensions: string;
  certifications: string[];
  warranty: string;
  image: string;
  stock: "in-stock" | "low-stock" | "made-to-order";
  featured: boolean;
}

export type ProductCategory =
  | "chassis"
  | "cooling"
  | "electrical"
  | "body"
  | "powertrain"
  | "maintenance";

export const categories: {
  id: ProductCategory;
  name: string;
  shortName: string;
  description: string;
  skuCount: number;
  icon: string;
  image: string;
}[] = [
  {
    id: "chassis",
    name: "CHASSIS & STEERING",
    shortName: "Chassis & Steering",
    description:
      "Control arms, ball joints, tie rods, and suspension kits. OE-fit geometry for passenger cars and light commercial vehicles.",
    skuCount: 480,
    icon: "https://img.icons8.com/?size=100&id=114169&format=png&color=0D0D0D",
    image: "/images/categories/chassis.jpg",
  },
  {
    id: "cooling",
    name: "COOLING & THERMAL",
    shortName: "Cooling & Thermal",
    description:
      "Radiators, water pumps, and EV thermal management modules. Engineered for optimal heat dissipation and durability.",
    skuCount: 360,
    icon: "https://img.icons8.com/?size=100&id=114169&format=png&color=0D0D0D",
    image: "/images/categories/cooling.jpg",
  },
  {
    id: "electrical",
    name: "ELECTRICAL & SENSORS",
    shortName: "Electrical & Sensors",
    description:
      "Switches, sensors, ignition coils, and control modules. Precision electronics for modern vehicle architectures.",
    skuCount: 520,
    icon: "https://img.icons8.com/?size=100&id=114169&format=png&color=0D0D0D",
    image: "/images/categories/electrical.jpg",
  },
  {
    id: "body",
    name: "BODY & PLASTIC",
    shortName: "Body & Plastic",
    description:
      "Bumpers, lamps, mirrors, and grilles. CAPA-ready alternatives that meet or exceed OE specifications.",
    skuCount: 430,
    icon: "https://img.icons8.com/?size=100&id=114169&format=png&color=0D0D0D",
    image: "/images/categories/body.jpg",
  },
  {
    id: "powertrain",
    name: "POWERTRAIN & TRANSMISSION",
    shortName: "Powertrain & Transmission",
    description:
      "Engine mounts, gaskets, seals, and transmission components. Built for high-mileage reliability.",
    skuCount: 340,
    icon: "https://img.icons8.com/?size=100&id=114169&format=png&color=0D0D0D",
    image: "/images/categories/powertrain.jpg",
  },
  {
    id: "maintenance",
    name: "MAINTENANCE & SERVICE",
    shortName: "Maintenance & Service",
    description:
      "Filters, belts, hoses, and routine service kits. Fleet-grade durability for preventive maintenance programs.",
    skuCount: 270,
    icon: "https://img.icons8.com/?size=100&id=114169&format=png&color=0D0D0D",
    image: "/images/categories/maintenance.jpg",
  },
];

export const products: Product[] = [
  {
    id: "ca-001",
    sku: "SF-CA-1001",
    name: "Front Lower Control Arm",
    category: "chassis",
    subCategory: "Control Arms",
    description:
      "Precision-engineered front lower control arm manufactured from high-strength steel with corrosion-resistant coating. Features premium rubber bushings and ball joint for OE-equivalent ride quality and durability.",
    shortDescription: "OE-fit front lower control arm for Honda Accord 2018-2022",
    oem: ["51350-TVA-A01", "51360-TVA-A01", "51350-TVA-A02"],
    vehicleFit: [
      "Honda Accord 2018-2022",
      "Honda Accord Hybrid 2018-2022",
      "Honda Inspire 2018-2022",
    ],
    material: "High-strength steel with e-coating",
    weight: "3.2 kg",
    dimensions: "420 x 180 x 120 mm",
    certifications: ["ISO 9001"],
    warranty: "2 years / 50,000 km",
    image: "/images/products/control-arm.jpg",
    stock: "in-stock",
    featured: true,
  },
  {
    id: "ca-002",
    sku: "SF-CA-1002",
    name: "Front Upper Control Arm",
    category: "chassis",
    subCategory: "Control Arms",
    description:
      "Front upper control arm designed for precise alignment geometry. Forged construction with maintenance-free ball joint.",
    shortDescription: "Forged upper control arm for Toyota Camry 2018-2023",
    oem: ["48068-06190", "48068-06191"],
    vehicleFit: ["Toyota Camry 2018-2023", "Toyota Avalon 2019-2022"],
    material: "Forged steel with powder coating",
    weight: "2.8 kg",
    dimensions: "380 x 160 x 110 mm",
    certifications: ["ISO 9001", "IATF 16949"],
    warranty: "2 years / 50,000 km",
    image: "/images/products/upper-control-arm.jpg",
    stock: "in-stock",
    featured: true,
  },
  {
    id: "bj-001",
    sku: "SF-BJ-2001",
    name: "Suspension Ball Joint",
    category: "chassis",
    subCategory: "Ball Joints",
    description:
      "Premium suspension ball joint with PTFE-lined bearing for reduced friction and extended service life. Sealed boot prevents contamination.",
    shortDescription: "Press-fit ball joint for BMW 3 Series E90",
    oem: ["31126775960", "31126775961", "31126775959"],
    vehicleFit: ["BMW 3 Series E90 2005-2013", "BMW 3 Series E91 2005-2012"],
    material: "Alloy steel, PTFE-lined bearing",
    weight: "0.6 kg",
    dimensions: "85 x 85 x 95 mm",
    certifications: ["ISO 9001"],
    warranty: "1 year / 30,000 km",
    image: "/images/products/ball-joint.jpg",
    stock: "in-stock",
    featured: false,
  },
  {
    id: "tr-001",
    sku: "SF-TR-3001",
    name: "Inner Tie Rod End",
    category: "chassis",
    subCategory: "Tie Rods",
    description:
      "Inner tie rod end with precision-rolled threads for consistent steering response. Heat-treated for maximum fatigue resistance.",
    shortDescription: "Inner tie rod for Ford F-150 2015-2020",
    oem: ["FL3Z-3280-A", "FL3Z-3280-B", "AL3Z-3280-A"],
    vehicleFit: ["Ford F-150 2015-2020", "Ford Expedition 2015-2020"],
    material: "Heat-treated alloy steel",
    weight: "0.4 kg",
    dimensions: "280 x 40 x 40 mm",
    certifications: ["ISO 9001"],
    warranty: "1 year / 30,000 km",
    image: "/images/products/tie-rod.jpg",
    stock: "in-stock",
    featured: false,
  },
  {
    id: "rd-001",
    sku: "SF-RD-1001",
    name: "Engine Cooling Radiator",
    category: "cooling",
    subCategory: "Radiators",
    description:
      "High-efficiency aluminum radiator with brazed core construction. Increased cooling capacity over OE for improved thermal management.",
    shortDescription: "Aluminum radiator for Toyota Corolla 2014-2019",
    oem: ["16400-0T020", "16400-0T021", "16400-0T022"],
    vehicleFit: ["Toyota Corolla 2014-2019", "Toyota Levin 2014-2019"],
    material: "Aluminum core with plastic tanks",
    weight: "4.5 kg",
    dimensions: "610 x 380 x 100 mm",
    certifications: ["ISO 9001"],
    warranty: "2 years / 50,000 km",
    image: "/images/products/radiator.jpg",
    stock: "in-stock",
    featured: true,
  },
  {
    id: "wp-001",
    sku: "SF-WP-2001",
    name: "Water Pump",
    category: "cooling",
    subCategory: "Water Pumps",
    description:
      "Engine coolant water pump with precision-cast impeller and double-sealed bearing. Direct OE replacement, no modification required.",
    shortDescription: "Water pump for Honda Civic 2016-2021",
    oem: ["19200-5PA-A01", "19200-5PA-A02"],
    vehicleFit: ["Honda Civic 2016-2021", "Honda CR-V 2017-2022"],
    material: "Cast aluminum housing, steel impeller",
    weight: "1.2 kg",
    dimensions: "150 x 150 x 180 mm",
    certifications: ["ISO 9001"],
    warranty: "1 year / 30,000 km",
    image: "/images/products/water-pump.jpg",
    stock: "in-stock",
    featured: false,
  },
  {
    id: "ig-001",
    sku: "SF-IG-1001",
    name: "Ignition Coil",
    category: "electrical",
    subCategory: "Ignition Coils",
    description:
      "Direct-fit ignition coil with enhanced secondary voltage output. Epoxy-encapsulated for vibration resistance and thermal stability.",
    shortDescription: "Ignition coil for BMW N55 engine",
    oem: ["12138616153", "12138616154", "12137594937"],
    vehicleFit: [
      "BMW 3 Series F30 2012-2019",
      "BMW 5 Series F10 2010-2017",
      "BMW X5 F15 2013-2018",
    ],
    material: "Epoxy-encapsulated, stainless steel terminals",
    weight: "0.2 kg",
    dimensions: "120 x 60 x 60 mm",
    certifications: ["ISO 9001", "IATF 16949"],
    warranty: "1 year / 30,000 km",
    image: "/images/products/ignition-coil.jpg",
    stock: "in-stock",
    featured: true,
  },
  {
    id: "bs-001",
    sku: "SF-BS-1001",
    name: "Front Bumper Cover",
    category: "body",
    subCategory: "Bumpers",
    description:
      "CAPA-certified front bumper cover manufactured from OEM-grade TPO material. Precision-molded for perfect fitment, primed and ready for paint.",
    shortDescription: "Front bumper cover for Honda Accord 2018-2022",
    oem: ["71100-TVA-A00", "71100-TVA-A10"],
    vehicleFit: ["Honda Accord 2018-2022"],
    material: "TPO (Thermoplastic Olefin)",
    weight: "4.8 kg",
    dimensions: "1800 x 500 x 400 mm",
    certifications: ["CAPA", "ISO 9001"],
    warranty: "1 year / limited",
    image: "/images/products/bumper.jpg",
    stock: "in-stock",
    featured: true,
  },
  {
    id: "em-001",
    sku: "SF-EM-1001",
    name: "Engine Mount",
    category: "powertrain",
    subCategory: "Engine Mounts",
    description:
      "Hydraulic engine mount with fluid-filled chamber for superior vibration damping. Direct OE replacement eliminates drivetrain shake.",
    shortDescription: "Hydraulic engine mount for Toyota Camry 2018-2023",
    oem: ["12371-0P010", "12371-0P011"],
    vehicleFit: ["Toyota Camry 2018-2023", "Toyota RAV4 2019-2023"],
    material: "Aluminum bracket, rubber with hydraulic fluid",
    weight: "1.5 kg",
    dimensions: "200 x 150 x 140 mm",
    certifications: ["ISO 9001"],
    warranty: "2 years / 50,000 km",
    image: "/images/products/engine-mount.jpg",
    stock: "in-stock",
    featured: true,
  },
  {
    id: "fl-001",
    sku: "SF-FL-1001",
    name: "Engine Oil Filter",
    category: "maintenance",
    subCategory: "Filters",
    description:
      "High-efficiency oil filter with synthetic media for extended oil change intervals. Anti-drain-back valve ensures immediate oil pressure on startup.",
    shortDescription: "Oil filter for Mercedes-Benz M274 engine",
    oem: ["A2741800009", "A2741800109"],
    vehicleFit: ["Mercedes-Benz C-Class W205 2014-2021", "Mercedes-Benz E-Class W213 2016-2023"],
    material: "Synthetic filter media, steel housing",
    weight: "0.3 kg",
    dimensions: "75 x 75 x 95 mm",
    certifications: ["ISO 9001"],
    warranty: "N/A (consumable)",
    image: "/images/products/oil-filter.jpg",
    stock: "in-stock",
    featured: false,
  },
];
