import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, MapPin, Phone, ExternalLink, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_DISPLAY, WHATSAPP_PHONE } from '@/data/experiences';

export default function Footer() {
  const currentYear = 2026;

  const hotelSites = [
    { name: 'Orgánico Hotel Boutique Ajusco', url: 'https://www.organicohotelboutique.com/' },
    { name: 'Orgánico Hotel Boutique Valle de Bravo', url: 'https://www.organicohotelboutiquevalle.com/' },
    { name: 'Centro Cultural Quinta Soledad (Tlalpan)', url: 'https://www.centroculturalquintasoledad.com/' },
    { name: 'Frontera 49 Roma Norte', url: 'https://www.frontera49.com/' },
    { name: 'Orgánico Hotel Boutique Tepoztlán', url: 'https://www.organicohotelboutiquetepoz.com/' },
    { name: 'Mikipi Hotel Boutique (Veracruz)', url: 'https://mikipihotelboutique.com/lander' },
  ];

  return (
    <footer className="relative bg-[#FAF9F6] border-t-2 border-orange/40 text-zinc-700 pt-16 pb-12 overflow-hidden">
      {/* Background ambient gradient with warm orange glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-0.5 bg-gradient-to-r from-transparent via-orange/50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-zinc-200/80">
          
          {/* Columna 1 & 2: Branding y Filosofía */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block">
              <div className="relative w-36 h-10">
                <Image
                  src="/images/otam-negro.png"
                  alt="OTAM"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed max-w-sm font-medium">
              Casa productora de experiencias y operadora de <strong className="text-black font-extrabold">Grupo Orgánico Hoteles Boutique</strong>. Creamos vivencias donde las personas conectan, confían y se transforman a través de retos, aventura, gastronomía y naturaleza.
            </p>

            <div className="pt-1 flex items-center gap-3">
              <a
                href="https://www.instagram.com/otam_experiencias/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-zinc-200/90 flex items-center justify-center text-zinc-700 hover:text-orange hover:border-orange transition-all duration-300 bg-white shadow-sm"
                aria-label="Instagram de OTAM Experiencias"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_PHONE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-zinc-200/90 flex items-center justify-center text-zinc-700 hover:text-orange hover:border-orange transition-all duration-300 bg-white shadow-sm"
                aria-label="WhatsApp directo"
              >
                <div className="relative w-4 h-4">
                  <Image
                    src="/images/whatsapp.png"
                    alt="WhatsApp"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            </div>
          </div>

          {/* Columna 3: Navegación Rápida */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-black text-orange mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-600 font-medium">
              <li>
                <Link href="/" className="hover:text-black hover:font-bold transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/momentos" className="hover:text-black hover:font-bold transition-colors">
                  Momentos Sociales & Íntimos
                </Link>
              </li>
              <li>
                <Link href="/empresariales" className="hover:text-black hover:font-bold transition-colors">
                  Experiencias Empresariales
                </Link>
              </li>
              <li>
                <Link href="/sedes" className="hover:text-black hover:font-bold transition-colors">
                  Sedes & Ecosistema
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-black hover:font-bold transition-colors">
                  Cotizar Experiencia
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: El Universo Grupo Orgánico */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-black text-orange mb-4">
              Grupo Orgánico
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-600 font-medium">
              {hotelSites.map((hotel) => (
                <li key={hotel.name}>
                  <a
                    href={hotel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-black transition-colors group"
                  >
                    <span>{hotel.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-400 group-hover:text-orange transition-colors" />
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="https://www.gohb.com.mx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange hover:text-orange-dark font-extrabold inline-flex items-center gap-1 hover:underline"
                >
                  <span>Portal Oficial GOHB</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 5: Ubicación y Contacto Directo */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-black text-orange mb-4">
              Contacto & Sede
            </h4>
            <div className="space-y-3.5 text-xs text-zinc-600 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Calle Moneda 15, Tlalpan Centro I, Tlalpan, 14000 Ciudad de México, CDMX.
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange flex-shrink-0" />
                <a href={`tel:${WHATSAPP_PHONE}`} className="hover:text-orange transition-colors font-black text-black">
                  {WHATSAPP_DISPLAY}
                </a>
              </div>

              <div className="pt-1">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-1.5 text-orange hover:text-orange-dark font-black transition-colors"
                >
                  <span>Formulario de Cotización</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-3 font-medium">
          <p>
            © {currentYear} OTAM. Todos los derechos reservados. Operadora de Grupo Orgánico Hoteles Boutique.
          </p>
          <div className="flex items-center gap-4">
            <span>Privacidad & Confidencialidad</span>
            <span>CDMX · México</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
