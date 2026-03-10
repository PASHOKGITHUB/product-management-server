// @ts-nocheck
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const products = [
  {
    name: "Quantum X1 Pro Headphones",
    description: "Premium noise-cancelling wireless headphones with 40-hour battery life and spatial audio support.",
    price: 349.99,
    sku: "AUD-QNT-X1",
    availability: true,
    images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"],
  },
  {
    name: "Nebula UltraWide Monitor",
    description: "49-inch curved OLED gaming monitor with 240Hz refresh rate and HDR1000.",
    price: 1299.99,
    sku: "DISP-NEB-49",
    availability: true,
    images: ["https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80"],
  },
  {
    name: "Titan Mechanical Keyboard",
    description: "Hot-swappable mechanical keyboard with Gateron switches and customizable RGB lighting.",
    price: 159.50,
    sku: "KBD-TTN-PRO",
    availability: true,
    images: ["https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800&q=80"],
  },
  {
    name: "Apex Gaming Mouse",
    description: "Ultralight wireless gaming mouse with 26K DPI sensor and 80-hour battery.",
    price: 89.99,
    sku: "MSE-APX-WRL",
    availability: true,
    images: ["https://images.unsplash.com/photo-1527690146635-b05a0b4d00b7?auto=format&fit=crop&w=800&q=80"],
  },
  {
    name: "Lumina Smart Desk Lamp",
    description: "Minimalist LED desk lamp with wireless charging base and adjustable color temperature.",
    price: 64.00,
    sku: "LMP-LMN-SMRT",
    availability: true,
    images: ["https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&w=800&q=80"],
  },
  {
    name: "Zenith Ergo Chair",
    description: "High-performance ergonomic office chair with lumbar support and 4D armrests.",
    price: 499.00,
    sku: "FUR-ZTH-ERG",
    availability: false,
    images: ["https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=800&q=80"],
  },
  {
    name: "Aero Drone 4K",
    description: "Compact drone with 4K HDR camera, 3-axis gimbal, and obstacle avoidance.",
    price: 799.00,
    sku: "DRN-AER-4K",
    availability: true,
    images: ["https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800&q=80"],
  },
  {
    name: "Obsidian Smart Watch",
    description: "Sleek smartwatch with blood oxygen monitoring, GPS, and Always-On retina display.",
    price: 299.00,
    sku: "WCH-OBS-GEN3",
    availability: true,
    images: ["https://images.unsplash.com/photo-1544117518-30df57809b09?auto=format&fit=crop&w=800&q=80"],
  },
  {
    name: "Sonic Bloom Speaker",
    description: "Portable waterproof Bluetooth speaker with 360-degree sound and deep bass.",
    price: 129.00,
    sku: "SPK-SNB-WTR",
    availability: true,
    images: ["https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80"],
  },
  {
    name: "Velocita Hybrid Bike",
    description: "Lightweight hybrid commuter bike with carbon fiber frame and Shimano components.",
    price: 1150.00,
    sku: "BK-VEL-HYB",
    availability: true,
    images: ["https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80"],
  }
];

async function main() {
  console.log('Start seeding...');
  
  // Clear existing products
  await prisma.product.deleteMany();
  
  for (const p of products) {
    const product = await prisma.product.create({
      data: p,
    });
    console.log(`Created product with id: ${product.id}`);
  }
  
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
