/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
      },
      {
        protocol: 'https',
        hostname: 'static1.squarespace.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/sociales',
        destination: '/momentos',
        permanent: true,
      },
      {
        source: '/experiencias',
        destination: '/momentos',
        permanent: true,
      },
      {
        source: '/inicio',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/corporativo',
        destination: '/empresariales',
        permanent: true,
      },
      {
        source: '/empresas',
        destination: '/empresariales',
        permanent: true,
      },
      {
        source: '/teambuilding',
        destination: '/empresariales',
        permanent: true,
      },
      {
        source: '/contacto-otam',
        destination: '/contacto',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
