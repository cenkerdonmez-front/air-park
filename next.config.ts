import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/aida-public/**',
      },
    ],
  },
  // Cloudflare Pages compatibility
  experimental: {
    // Disable experimental features that aren't compatible with Cloudflare
  },
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);