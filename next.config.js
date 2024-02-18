/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "image.tmdb.org",
      },

      {
        protocol: "https",
        hostname: "links.papareact.com",
      },
    ],
  },
};

module.exports = nextConfig;
