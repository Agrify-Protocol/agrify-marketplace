/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["loremflickr.com", "picsum.photos", "res.cloudinary.com"],
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
