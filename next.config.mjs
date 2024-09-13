/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|woff|woff2|mp4|js|css)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=9999999999, must-revalidate",
          },
        ],
      },
    ];
  },
  images: {
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
