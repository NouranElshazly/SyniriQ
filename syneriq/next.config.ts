/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // مهم للتحويل ل static site
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
