/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/uploads/**",
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true, // Log full URL of fetch requests
    },
  },
  //   experimental: {
  //   ppr: 'incremental',
  // },
};

export default nextConfig;
