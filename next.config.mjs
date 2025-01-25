/** @type {import('next').NextConfig} */
const nextConfig = {
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
