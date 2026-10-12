/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Creator pitch decks are attached to the notification email.
    serverActions: { bodySizeLimit: "6mb" },
  },
};

export default nextConfig;
