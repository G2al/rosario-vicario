import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permette di aprire il server di sviluppo dal telefono sulla stessa rete Wi-Fi.
  allowedDevOrigins: ["192.168.1.16"],
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
  },
};

export default nextConfig;
