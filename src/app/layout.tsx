import type { Metadata, Viewport } from 'next';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Analytics } from '@vercel/analytics/next';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const viewport: Viewport = {
  themeColor: '#FF5E14',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.somosotam.com'),
  title: {
    default: 'OTAM | Casa Productora de Experiencias & Team Building de Alta Gama',
    template: '%s | OTAM Experiencias',
  },
  description:
    'Diseñamos y producimos vivencias transformadoras de alto impacto sensorial, cultural y de integración para empresas y grupos selectos en el Universo de Grupo Orgánico Hoteles Boutique.',
  keywords: [
    'OTAM',
    'somos otam',
    'productora de experiencias',
    'team building cdmx',
    'experiencias corporativas méxico',
    'grupo orgánico hoteles boutique',
    'iron chef team building',
    'sommeliere casino cata',
    'cenas clandestinas cdmx',
    'reforestacion empresarial',
    'frontera 49 roma norte',
    'quinta soledad tlalpan',
    'organico hotel boutique ajusco',
    'organico valle de bravo',
  ],
  authors: [{ name: 'OTAM & Grupo Orgánico Hoteles Boutique' }],
  creator: 'OTAM',
  publisher: 'OTAM',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: 'OTAM',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'OTAM | Casa Productora de Experiencias & Team Building',
    description:
      'Vivencias donde los equipos se conocen, confían, colaboran y se alinean. Operadora oficial de Grupo Orgánico Hoteles Boutique.',
    url: 'https://www.somosotam.com',
    siteName: 'OTAM Experiencias',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: '/images/otam-blanco.png',
        width: 1200,
        height: 630,
        alt: 'OTAM Experiencias',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OTAM | Productora de Experiencias',
    description:
      'Diseño y producción de experiencias de alto impacto en los destinos más exclusivos de México.',
    images: ['/images/otam-blanco.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.somosotam.com/#organization',
        name: 'OTAM Experiencias',
        url: 'https://www.somosotam.com',
        logo: 'https://www.somosotam.com/images/otam-blanco.png',
        description:
          'Casa productora de experiencias de alto impacto y operadora de Grupo Orgánico Hoteles Boutique.',
        telephone: '+525514615826',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Calle Moneda 15',
          addressLocality: 'Tlalpan Centro I, Tlalpan',
          postalCode: '14000',
          addressRegion: 'CDMX',
          addressCountry: 'MX',
        },
        sameAs: ['https://www.instagram.com/otam_experiencias/', 'https://www.gohb.com.mx/'],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.somosotam.com/#website',
        url: 'https://www.somosotam.com',
        name: 'OTAM',
        publisher: {
          '@id': 'https://www.somosotam.com/#organization',
        },
      },
    ],
  };

  return (
    <html
      lang="es-MX"
      className={`${outfit.variable} ${plusJakartaSans.variable}`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-[#FAF9F6] text-[#0C0D0E] antialiased flex flex-col selection:bg-orange selection:text-white"
        suppressHydrationWarning
      >
        <script
          id="json-ld-otam"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  );
}
