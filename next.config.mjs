/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  sassOptions: {
    includePaths: ['./src/styles'],
  },
  images: {
    unoptimized: true,
  },
  // Only use basePath in production
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/newsnav', // Replace with your repository name if different
  }),
};

export default nextConfig;
