/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["loremflickr.com", "picsum.photos", "res.cloudinary.com"],
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
