/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  sassOptions: {
    includePaths: ['./src/styles'],
  },
  basePath: '/newsnav', // Replace with your repository name
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
