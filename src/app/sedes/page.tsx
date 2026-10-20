import React from 'react';
import Image from 'next/image';
import { ExternalLink, MapPin, CheckCircle2, Sparkles, ArrowRight, Compass, Users, MessageCircle, Building2, Crown, Truck } from 'lucide-react';
import { HOTEL_LOCATIONS, GRUPO_ORGANICO_INFO } from '@/data/ecosystem';
import ContactForm from '@/components/ContactForm';

export default function SedesPage() {
  return (
    <div className="pt-28 pb-24 bg-[#0C0D0E] min-h-screen">
      
      {/* Header */}
      <section className="relative py-16 sm:py-24 text-center overflow-hidden fun-grid-bg border-b border-white/[0.06]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-orange/15 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange/15 border border-orange/40 text-orange text-xs uppercase tracking-wider font-extrabold mb-5">
            <Compass className="w-4 h-4 text-orange" />
            <span>Alianza Oficial & Operadora Exclusiva</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-white uppercase tracking-tight mb-4 leading-tight">
            NUESTRAS 6 SEDES & ESPACIOS PARA EVENTOS
          </h1>

          <p className="text-muted text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Cualquiera de nuestras experiencias y formatos de evento se puede vivir en <strong className="text-white font-bold">cualquiera de las 6 propiedades de Grupo Orgánico Hoteles Boutique</strong>. Descubre auditorios, salones ejecutivos, jardines monumentales, rooftops y playas privadas listos para tu grupo.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-white/10 text-xs font-bold text-white">
              <Crown className="w-3.5 h-3.5 text-orange" />
              <span>Opción de Buyout (Hotel Completo)</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-white/10 text-xs font-bold text-white">
              <Building2 className="w-3.5 h-3.5 text-orange" />
              <span>+30 Salones & Auditorios Equipados</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-white/10 text-xs font-bold text-white">
              <Sparkles className="w-3.5 h-3.5 text-orange" />
              <span>Producción Llave en Mano con OTAM</span>
            </span>
          </div>
        </div>
      </section>

      {/* Sedes Detailed Cards */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 space-y-16">
        {HOTEL_LOCATIONS.map((hotel) => {
          const whatsappHotelUrl = `https://wa.me/525514615826?text=${encodeURIComponent(
            `Hola OTAM, me interesa cotizar un evento privado / corporativo en ${hotel.name}. ¿Me podrían compartir disponibilidad de espacios y fechas?`
          )}`;

          return (
            <div
              key={hotel.id}
              className="bg-surface border border-white/[0.08] hover:border-orange/50 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange/10 p-6 sm:p-10 space-y-8"
            >
              {/* Hotel Overview (Image + Identity) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Image */}
                <div className="lg:col-span-5 relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 shadow-xl">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover transition-transform duration-700 hover:scale-105 brightness-95"
                  />
                  <div className="absolute top-3.5 left-3.5 flex flex-col gap-2 items-start">
                    <span className="px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider font-extrabold bg-black/85 text-orange border border-orange/40 backdrop-blur-md">
                      {hotel.environment}
                    </span>
                  </div>
                  {hotel.capacityTotal && (
                    <div className="absolute bottom-3.5 left-3.5">
                      <span className="px-3 py-1 rounded-lg text-xs uppercase tracking-wider font-black bg-orange text-white shadow-lg flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" />
                        <span>{hotel.capacityTotal}</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* Info Text */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-orange font-extrabold">
                    <MapPin className="w-4 h-4" />
                    <span>{hotel.region}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white tracking-tight uppercase">
                    {hotel.name}
                  </h2>

                  <p className="text-sm sm:text-base font-semibold text-orange-light">
                    "{hotel.tagline}"
                  </p>

                  <p className="text-sm text-muted leading-relaxed">
                    {hotel.description}
                  </p>

                  {/* Ideal for Tags */}
                  {hotel.idealFor && hotel.idealFor.length > 0 && (
                    <div className="pt-2">
                      <span className="text-[11px] uppercase tracking-wider font-bold text-white/70 block mb-2">
                        Recomendado para:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {hotel.idealFor.map((item, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/90 font-medium"
                          >
                            ✓ {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <a
                      href={whatsappHotelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-orange to-orange-dark hover:from-orange-hover hover:to-orange text-white text-xs uppercase tracking-wider font-extrabold py-3.5 px-6 rounded-xl transition-all shadow-md hover:shadow-orange-glow group"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Cotizar Evento en esta Sede</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </a>

                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs uppercase tracking-wider font-bold py-3.5 px-5 rounded-xl transition-colors"
                    >
                      <span>Sitio Oficial</span>
                      <ExternalLink className="w-3.5 h-3.5 text-muted" />
                    </a>
                  </div>

                </div>

              </div>

              {/* ESPACIOS CLAVE PARA EVENTOS (AUDITORIOS, SALONES, JARDINES) */}
              {hotel.eventSpaces && hotel.eventSpaces.length > 0 && (
                <div className="pt-6 border-t border-white/[0.08]">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <span className="text-xs uppercase tracking-widest font-black text-orange flex items-center gap-1.5">
                        <Building2 className="w-4 h-4" />
                        <span>Espacios Clave para Eventos & Convenciones</span>
                      </span>
                      <h3 className="text-lg sm:text-xl font-display font-extrabold text-white tracking-tight mt-0.5">
                        Auditorios, Salones y Áreas de Montaje
                      </h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {hotel.eventSpaces.map((space, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-4 rounded-2xl bg-black/40 border border-white/10 hover:border-orange/40 transition-colors flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <span className="text-[10px] uppercase font-bold text-orange px-2 py-0.5 rounded bg-orange/10 border border-orange/20">
                              {space.type}
                            </span>
                            <span className="text-xs font-black text-white px-2 py-0.5 rounded bg-white/10">
                              {space.capacity}
                            </span>
                          </div>

                          <h4 className="text-sm font-display font-bold text-white mb-1.5">
                            {space.name}
                          </h4>

                          <p className="text-xs text-muted leading-relaxed">
                            {space.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* AMENIDADES Y CARACTERÍSTICAS */}
              <div className="pt-4 border-t border-white/[0.06]">
                <p className="text-xs uppercase tracking-wider font-extrabold text-muted mb-3">
                  Amenidades e Infraestructura de la Propiedad:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {hotel.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-white/80 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          );
        })}
      </section>

      {/* Grupo Orgánico Portal Banner */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-8">
        <div className="bg-gradient-to-r from-orange/20 via-surface to-surface border border-orange/30 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange/20 text-orange text-xs uppercase tracking-wider font-extrabold mb-3">
              <span>Alianza de Hospitalidad</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-black text-white uppercase tracking-tight mb-2">
              ¿Buscas hospedaje individual o escapadas de fin de semana?
            </h3>
            <p className="text-muted text-sm max-w-xl">
              Explora el portal de Grupo Orgánico Hoteles Boutique para reservar habitaciones, suites y escapadas independientes en cualquiera de las 6 sedes.
            </p>
          </div>

          <a
            href={GRUPO_ORGANICO_INFO.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-orange to-orange-dark text-white font-extrabold text-xs uppercase tracking-widest py-4 px-8 rounded-2xl shadow-orange-glow hover:scale-105 transition-all flex-shrink-0"
          >
            <span>PORTAL GOHB.COM.MX</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Banner: ¿Tienes tu propio espacio? */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-6">
        <div className="bg-gradient-to-r from-orange/20 via-[#18191c] to-surface border-2 border-orange/40 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-orange text-white flex items-center justify-center shrink-0 shadow-orange-glow">
              <Truck className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange/20 text-orange text-xs uppercase tracking-wider font-extrabold mb-2">
                <span>OTAM On Tour</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-black text-white uppercase tracking-tight mb-1">
                ¿Prefieres tu evento en tus oficinas o jardín privado?
              </h3>
              <p className="text-muted text-sm max-w-xl">
                Llevamos cualquiera de nuestras experiencias gastronómicas, rallys y dinámicas a tu propio espacio en cualquier estado de México. Montaje llave en mano y cero complicaciones.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/525514615826?text=${encodeURIComponent(
              'Hola OTAM, me interesa cotizar una experiencia en nuestras oficinas / locación propia. ¿Me podrían compartir opciones y dinámicas móviles?'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-orange to-orange-dark text-white font-black text-xs uppercase tracking-wider py-4 px-8 rounded-2xl shadow-orange-glow hover:scale-105 transition-all flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Cotizar en mi locación</span>
          </a>
        </div>
      </section>

      {/* Formulario de contacto para sedes */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-10">
        <ContactForm
          initialMotivo="Consulta General o Especial"
          title="¿NO SABES QUÉ SEDE ELEGIR?"
          subtitle="Dinos cuántos asistentes son, el tipo de evento y la atmósfera que buscas (bosque, alta montaña, casona patrimonial, rooftop urbano o playa). Te enviamos la comparativa de espacios y propuesta en menos de 2 horas."
        />
      </section>

    </div>
  );
}

