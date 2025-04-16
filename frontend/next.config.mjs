/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "http://localhost:1338/admin",
        permanent: true,
      },
    ];
  },

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
