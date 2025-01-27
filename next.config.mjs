/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    STRAPI_URL: "http://localhost:1338",
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1338",
        pathname: "/uploads/**/*",
      },
    ],
  },
};

// const nextConfig = {
//   output: "export",
// };

export default nextConfig;
