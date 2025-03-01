/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/west-bank-demolitions/:path*",
        destination: "https://m-cahana.github.io/west_bank_demolitions/:path*",
      },
      {
        source: "/nyc-violations/:path*",
        destination: "https://m-cahana.github.io/nyc_camera_violations/:path*",
      },
    ];
  },
};

export default nextConfig;
