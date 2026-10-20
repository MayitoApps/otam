'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Play, ExternalLink, Sparkles, MapPin, Building2, ShieldCheck, CheckCircle2, ArrowRight, MessageCircle, Crown, Users } from 'lucide-react';
import { GRUPO_ORGANICO_INFO } from '@/data/ecosystem';

export default function OrganicoUniverseVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  const whatsappEventQuoteUrl = `https://wa.me/525514615826?text=${encodeURIComponent(
    'Hola OTAM, me interesa cotizar un evento privado / empresarial en una de las sedes de Grupo Orgánico Hoteles Boutique. ¿Me podrían compartir disponibilidad y opciones?'
  )}`;

  return (
    <section className="relative py-20 sm:py-28 bg-[#0C0D0E] overflow-hidden">
      {/* Decorative ambient background with warm orange glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-orange/[0.09] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* TÍTULO ARRIBA DEL VIDEO */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange/10 border border-orange/30 text-orange text-xs uppercase tracking-widest font-extrabold mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Alianza Oficial & Operadora Exclusiva</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-black text-white tracking-tight uppercase max-w-4xl mx-auto leading-tight">
            DESCUBRE EL UNIVERSO DE GRUPO ORGÁNICO HOTELES BOUTIQUE
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange to-transparent mx-auto mt-5 rounded-full" />
        </div>

        {/* CONTENEDOR DEL VIDEO (MÁXIMA CALIDAD, MÍNIMOS BOTONES) */}
        <div className="relative aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-orange/20 shadow-2xl shadow-orange/10 bg-black/80 group">
          {!isPlaying ? (
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Background poster preview image */}
              <div 
                className="absolute inset-0 bg-cover bg-center brightness-[0.6] transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('/images/sedes/ajusco.jpg')`
                }}
              />
              
              {/* Dark subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60" />

              {/* Botón de reproducción energético naranja */}
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                className="relative z-20 group/btn flex flex-col items-center gap-4 cursor-pointer"
                aria-label="Reproducir video de Grupo Orgánico Hoteles Boutique"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-orange to-orange-dark text-white flex items-center justify-center shadow-orange-glow transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:brightness-110">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-0.5 text-white" />
                </div>
                <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-white bg-black/60 px-4 py-1.5 rounded-full border border-white/10 group-hover/btn:border-orange/60 transition-colors">
                  ▶ Reproducir Video Oficial
                </span>
              </button>
            </div>
          ) : (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${GRUPO_ORGANICO_INFO.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&controls=1&iv_load_policy=3&vq=hd1080`}
              title="Descubre el Universo de Grupo Orgánico Hoteles Boutique"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
            />
          )}
        </div>

        {/* TEXTO ENFOCADO A VENTA: VIVE TUS EVENTOS EN CUALQUIERA DE LAS 6 PROPIEDADES */}
        <div className="mt-14 sm:mt-18 max-w-4xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange/10 border border-orange/20 text-orange text-[11px] uppercase tracking-wider font-extrabold">
            <span>6 Destinos Únicos · Un Solo Proveedor Integral</span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white tracking-tight uppercase leading-snug">
            Tus eventos y experiencias se pueden vivir en{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange via-orange-light to-amber">
              cualquiera de nuestras 6 propiedades
            </span>
          </h3>

          <p className="text-sm sm:text-base md:text-lg text-muted max-w-3xl mx-auto leading-relaxed">
            No te conformes con un salón de hotel convencional. En <strong className="text-white">OTAM</strong>, como productora y operadora oficial de <strong className="text-white">Grupo Orgánico Hoteles Boutique</strong>, diseñamos y producimos retiros corporativos, team building de alto impacto, convenciones anuales, bodas y fiestas privadas en el escenario que mejor resuene con la personalidad de tu grupo.
          </p>

          <p className="text-sm sm:text-base text-white/90 max-w-3xl mx-auto font-medium">
            Tú eliges el destino; nosotros nos encargamos de todo: salones equipados, auditorios acústicos, hospedaje boutique, banquetería de autor, logística de transporte y dinámicas inolvidables.
          </p>

          {/* BENEFICIOS DE VENTA CLAVE (BUYOUT, INFRAESTRUCTURA, LLAVE EN MANO) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 text-left">
            <div className="p-5 rounded-2xl bg-surface border border-white/10 hover:border-orange/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-orange/15 border border-orange/30 flex items-center justify-center text-orange mb-3">
                <Crown className="w-5 h-5 text-orange" />
              </div>
              <h4 className="text-white font-display font-extrabold text-sm uppercase tracking-wide mb-1">
                Bloqueo Exclusivo (Buyout)
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                Reserva la propiedad completa para tu empresa o grupo. 100% de confidencialidad, privacidad total y cero huéspedes ajenos.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface border border-white/10 hover:border-orange/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-orange/15 border border-orange/30 flex items-center justify-center text-orange mb-3">
                <Building2 className="w-5 h-5 text-orange" />
              </div>
              <h4 className="text-white font-display font-display font-extrabold text-sm uppercase tracking-wide mb-1">
                Espacios para Cada Formato
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                Auditorios de hasta 150 personas, más de 20 salones ejecutivos, terrazas panorámicas, hectáreas de bosque y playas privadas.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface border border-white/10 hover:border-orange/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-orange/15 border border-orange/30 flex items-center justify-center text-orange mb-3">
                <ShieldCheck className="w-5 h-5 text-orange" />
              </div>
              <h4 className="text-white font-display font-extrabold text-sm uppercase tracking-wide mb-1">
                Producción Llave en Mano
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                Audio, pantallas, mobiliario temático, maridajes de autor y dinámicas guiadas. Solo llegas a disfrutar; nosotros operamos todo.
              </p>
            </div>
          </div>

          {/* DÓNDE ESTÁN LAS 6 PROPIEDADES (DETALLE DE VENTAS) */}
          <div className="pt-8">
            <div className="text-center mb-6">
              <span className="text-xs uppercase tracking-widest text-orange font-extrabold">
                📍 Ubicaciones Estratégicas Disponibles para tu Evento
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              {GRUPO_ORGANICO_INFO.salesPitch.destinationsSummary.map((dest, i) => (
                <div
                  key={i}
                  className="p-4 sm:p-5 rounded-2xl bg-surface/80 border border-white/10 hover:border-orange/50 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-orange px-2.5 py-0.5 rounded-md bg-orange/10 border border-orange/20">
                      {dest.badge}
                    </span>
                    <MapPin className="w-3.5 h-3.5 text-muted flex-shrink-0" />
                  </div>
                  <h4 className="text-white font-display font-extrabold text-sm tracking-tight mb-1.5">
                    {dest.name}
                  </h4>
                  <p className="text-xs text-muted leading-relaxed">
                    {dest.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* BOTONES DE ACCIÓN ENFOCADOS A COTIZACIÓN Y VENTA */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappEventQuoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange via-orange-light to-amber text-white text-xs sm:text-sm uppercase tracking-wider font-black py-4 px-8 rounded-2xl transition-all duration-300 shadow-orange-glow hover:scale-105 group"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>COTIZAR EVENTO EN NUESTRAS 6 SEDES</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <Link
              href="/sedes"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-surface hover:bg-surface-light border border-white/15 hover:border-orange/60 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider py-4 px-8 rounded-2xl transition-all"
            >
              <span>VER ESPACIOS, SALONES Y AUDITORIOS</span>
              <ArrowRight className="w-4 h-4 text-orange" />
            </Link>

            <a
              href={GRUPO_ORGANICO_INFO.website}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-bold text-muted hover:text-white py-3 px-4 transition-colors"
            >
              <span>Sitio Grupo Orgánico</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

