import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, Flame, Zap, Heart, Compass, ShieldCheck, CheckCircle2, MapPin, MessageCircle, Truck } from 'lucide-react';
import OrganicoUniverseVideo from '@/components/OrganicoUniverseVideo';
import AnimatedMetrics from '@/components/AnimatedMetrics';
import ExperienceCard from '@/components/ExperienceCard';
import InstagramFeed from '@/components/InstagramFeed';
import ContactForm from '@/components/ContactForm';
import { EXPERIENCES } from '@/data/experiences';
import { HOTEL_LOCATIONS } from '@/data/ecosystem';

export default function HomePage() {
  // Fast Refresh optimized compilation check
  const featuredExperiences = EXPERIENCES.filter((e) => e.featured).slice(0, 6);

  return (
    <div className="relative bg-[#FAF9F6]">
      
      {/* 1. HERO ENERGÉTICO & ILUMINADO */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#FFFDF9] fun-grid-bg">
        
        {/* Glows ambientales de luz solar, naranja y ámbar vibrante */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-b from-orange/20 via-amber/15 to-transparent rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-10 left-0 right-0 h-40 bg-gradient-to-t from-[#FAF9F6] to-transparent pointer-events-none z-10" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
          
          {/* Badge interactivo y vibrante */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-orange/40 text-orange text-xs uppercase tracking-wider font-black mb-8 shadow-md shadow-orange/10 animate-bounceSlow">
            <Flame className="w-4 h-4 text-orange fill-orange" />
            <span>¡Cero Rutina! Productora de Vivencias Extraordinarias</span>
          </div>

          {/* Headline con tipografía audaz e iluminada */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-black tracking-tight uppercase leading-[1.08] max-w-5xl mb-6">
            Menos juntas aburridas.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange via-orange-light to-amber">
              Experiencias épicas
            </span>{' '}
            que jamás van a olvidar.
          </h1>

          {/* Subtítulo dinámico y cercano */}
          <p className="text-base sm:text-xl text-zinc-600 max-w-3xl leading-relaxed mb-8 font-normal">
            Creamos el pretexto perfecto para que tu equipo o tus personas favoritas se desconecten del piloto automático, compitan amistosamente, cocinen como chefs estrella o se fundan en fogatas bajo las constelaciones.
          </p>

          {/* Botones de Acción (Naranja protagonista + Negro de alto contraste) */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
            <Link
              href="/empresariales"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange via-orange-light to-amber text-white font-black text-xs sm:text-sm uppercase tracking-wider py-4 px-8 rounded-2xl transition-all duration-300 shadow-orange-glow hover:scale-105 group"
            >
              <span>⚡ VER EXPERIENCIAS DE EQUIPO</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/momentos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-black hover:bg-zinc-800 text-white font-black text-xs sm:text-sm uppercase tracking-wider py-4 px-8 rounded-2xl transition-all duration-300 shadow-md group"
            >
              <span>🥂 MOMENTOS SOCIALES</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Fun Badges / Floating Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-12 mt-6">
            <span className="inline-flex items-center gap-2 bg-white border border-zinc-200/90 px-4 py-2 rounded-xl text-xs font-black text-zinc-900 shadow-sm">
              <span>🍕</span>
              <span>Iron Chef & Pizzas al Horno</span>
            </span>
            <span className="inline-flex items-center gap-2 bg-white border border-zinc-200/90 px-4 py-2 rounded-xl text-xs font-black text-zinc-900 shadow-sm">
              <span>🍷</span>
              <span>Sommelière Casino de Vino</span>
            </span>
            <span className="inline-flex items-center gap-2 bg-white border border-zinc-200/90 px-4 py-2 rounded-xl text-xs font-black text-zinc-900 shadow-sm">
              <span>🏹</span>
              <span>Aventura en Montaña & Rápel</span>
            </span>
            <span className="inline-flex items-center gap-2 bg-white border border-zinc-200/90 px-4 py-2 rounded-xl text-xs font-black text-zinc-900 shadow-sm">
              <span>🔥</span>
              <span>Fogatadas Místicas & Bombones</span>
            </span>
            <span className="inline-flex items-center gap-2 bg-orange/10 border-2 border-orange/30 px-4 py-2 rounded-xl text-xs font-black text-orange shadow-sm">
              <Truck className="w-4 h-4 text-orange" />
              <span>Llevamos la experiencia a tu empresa o jardín</span>
            </span>
          </div>

          {/* Animated Metrics with Live Count-Up, Glow & Indicators */}
          <AnimatedMetrics />

        </div>
      </section>

      {/* 2. UNIVERSO GRUPO ORGÁNICO VIDEO SECTION */}
      <OrganicoUniverseVideo />

      {/* 3. PROPUESTA DE VALOR / VIBE DIVERTIDO */}
      <section className="py-20 sm:py-28 bg-white relative border-t border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-orange text-xs uppercase tracking-widest font-black inline-flex items-center gap-1.5">
              <Zap className="w-4 h-4" />
              <span>La Fórmula OTAM</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-black uppercase tracking-tight mt-2 mb-4">
              ¿Por qué somos la productora favorita de México?
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Porque no te vendemos un coffee break aburrido ni una presentación en PowerPoint. Te llevamos a escenarios de ensueño a vivir cosas que de verdad conectan a las personas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Tarjeta 1 */}
            <div className="bg-[#FFFDF9] border border-zinc-200/90 hover:border-orange p-8 rounded-3xl transition-all duration-300 hover:shadow-fun-hover flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange/10 border border-orange/20 flex items-center justify-center text-orange mb-6 text-2xl shadow-sm">
                  ⚡
                </div>
                <h3 className="text-xl font-display font-black text-black tracking-tight mb-3">
                  Dinámicas que Sí Integran
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Competencias de Iron Chef con chefs reales, casinos de vino a ciegas y circuitos samurai que rompen el hielo en 10 minutos y dejan al equipo hablando de esto todo el año.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-zinc-100 text-xs font-black text-orange flex items-center gap-1">
                <span>Risas & Cooperación Pura</span>
              </div>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-[#FFFDF9] border border-zinc-200/90 hover:border-orange p-8 rounded-3xl transition-all duration-300 hover:shadow-fun-hover flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange/10 border border-orange/20 flex items-center justify-center text-orange mb-6 text-2xl shadow-sm">
                  🌲
                </div>
                <h3 className="text-xl font-display font-black text-black tracking-tight mb-3">
                  Sedes Increíbles en la Naturaleza
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Cabañas alpinas en el Ajusco, bosques templados en Valle de Bravo, la energía de Tepoztlán, un rooftop secreto en Roma Norte o el mar de Veracruz con Grupo Orgánico.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-zinc-100 text-xs font-black text-orange flex items-center gap-1">
                <span>Escenarios Fuera de Serie</span>
              </div>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-[#FFFDF9] border border-zinc-200/90 hover:border-orange p-8 rounded-3xl transition-all duration-300 hover:shadow-fun-hover flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange/10 border border-orange/20 flex items-center justify-center text-orange mb-6 text-2xl shadow-sm">
                  🎯
                </div>
                <h3 className="text-xl font-display font-black text-black tracking-tight mb-3">
                  Tú solo Disfrutas, Nosotros Armamos Todo
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Logística, chefs, facilitadores, transporte, premios, mobiliario y hasta la cámara para capturar los mejores momentos. Producción 100% llave en mano.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-zinc-100 text-xs font-black text-orange flex items-center gap-1">
                <span>Cero Estrés para el Organizador</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. BENEFICIOS CLAVE DE INTEGRACIÓN */}
      <section className="py-20 bg-[#FAF9F6] relative border-t border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="bg-gradient-to-br from-orange/10 via-white to-amber/10 border-2 border-orange/25 rounded-3xl p-8 sm:p-12 md:p-16 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-5">
                <span className="text-orange text-xs uppercase tracking-widest font-black flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Cultura & Conexión</span>
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-black tracking-tight uppercase mt-2 mb-4">
                  Beneficios de las Experiencias de Integración
                </h3>
                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                  Cuando la gente comparte una fogata, cocina junta o supera un reto al aire libre, los resultados de regreso en la oficina son asombrosos:
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  { text: 'Mejora la conexión y comunicación directa entre los equipos', icon: '💬' },
                  { text: 'Fomenta la confianza mutua y el trabajo colaborativo', icon: '🤝' },
                  { text: 'Reduce el estrés y renueva la energía de todo el grupo', icon: '🔋' },
                  { text: 'Alinea a las personas con objetivos comunes', icon: '🎯' },
                  { text: 'Genera recuerdos inolvidables que unen la cultura organizacional', icon: '❤️' },
                  { text: 'Despierta la creatividad y la innovación sin barreras', icon: '💡' },
                ].map((b, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white border border-orange/20 p-4 rounded-2xl shadow-sm hover:border-orange transition-all">
                    <span className="text-lg flex-shrink-0">{b.icon}</span>
                    <span className="text-xs sm:text-sm text-zinc-900 font-bold leading-snug">{b.text}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. EXPERIENCIAS DESTACADAS */}
      <section className="py-20 sm:py-28 bg-[#FFFDF9] relative border-t border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-orange text-xs uppercase tracking-widest font-black flex items-center gap-1.5">
                <Flame className="w-4 h-4" />
                <span>Lo Más Top de OTAM</span>
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-black uppercase tracking-tight mt-1">
                Experiencias Populares
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-xl">
                Nuestras dinámicas más pedidas tanto para empresas como para escapadas románticas o reuniones entre amigos.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/empresariales"
                className="text-xs uppercase tracking-wider font-black text-orange hover:text-orange-hover transition-colors inline-flex items-center gap-1.5"
              >
                <span>Ver todas las empresariales</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredExperiences.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/momentos"
              className="inline-flex items-center gap-3 bg-white hover:bg-orange/5 border-2 border-orange text-orange font-black text-xs uppercase tracking-wider py-4 px-8 rounded-2xl transition-all shadow-md hover:shadow-orange-card"
            >
              <span>EXPLORAR CATÁLOGO COMPLETO DE MOMENTOS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 6. SEDES DEL ECOSISTEMA PREVIEW */}
      <section className="py-20 bg-white border-t border-zinc-200/80 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-orange text-xs uppercase tracking-widest font-black flex items-center justify-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>Sedes Exclusivas</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-black uppercase tracking-tight mt-1 mb-3">
              Hoteles Boutique de Grupo Orgánico
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base">
              Elige tu atmósfera ideal: montaña, bosque, jardines coloniales, rooftop en la Roma o playa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOTEL_LOCATIONS.map((loc) => {
              const whatsappHotelUrl = `https://wa.me/525514615826?text=${encodeURIComponent(
                `Hola OTAM, me interesa cotizar un evento privado / corporativo en ${loc.name}. ¿Me podrían compartir disponibilidad y opciones de salones?`
              )}`;

              return (
                <div
                  key={loc.id}
                  className="group relative bg-white border border-zinc-200/90 hover:border-orange rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange/10 flex flex-col justify-between shadow-sm"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                    <Image
                      src={loc.image}
                      alt={loc.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40" />
                    <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5 items-start">
                      <span className="px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-black bg-white/95 text-orange border border-orange/30 backdrop-blur-md shadow-sm">
                        {loc.environment}
                      </span>
                    </div>
                    {loc.capacityTotal && (
                      <div className="absolute bottom-3.5 left-3.5">
                        <span className="px-2.5 py-1 rounded-md text-[10px] uppercase tracking-wider font-black bg-orange text-white shadow-md">
                          👥 {loc.capacityTotal}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-bold">
                        {loc.region}
                      </span>
                      <h3 className="text-lg font-display font-black text-black tracking-tight mt-1 mb-2 group-hover:text-orange transition-colors">
                        {loc.name}
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed mb-4 line-clamp-2">
                        {loc.description}
                      </p>

                      {/* Espacios más importantes para eventos */}
                      {loc.eventSpaces && loc.eventSpaces.length > 0 && (
                        <div className="mb-5 pt-3 border-t border-zinc-100">
                          <p className="text-[10px] uppercase tracking-wider font-black text-orange mb-2">
                            Espacios Destacados para Eventos:
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {loc.eventSpaces.slice(0, 3).map((space, sIdx) => (
                              <span
                                key={sIdx}
                                className="inline-flex items-center gap-1 text-[11px] bg-zinc-50 border border-zinc-200 px-2 py-0.5 rounded-md text-zinc-800 font-medium"
                              >
                                <span className="font-bold text-orange">{space.name}</span>
                                <span className="text-[10px] text-zinc-500">({space.capacity})</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="pt-3 flex items-center justify-between gap-3 border-t border-zinc-100">
                      <a
                        href={whatsappHotelUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-orange font-black uppercase tracking-wider hover:text-orange-hover transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Cotizar aquí</span>
                      </a>

                      <a
                        href={loc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] text-zinc-600 hover:text-black font-extrabold uppercase tracking-wider transition-colors"
                      >
                        <span>Sitio web</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/sedes"
              className="text-xs uppercase tracking-widest text-orange hover:text-orange-hover font-black transition-colors underline underline-offset-8"
            >
              VER TODAS LAS SEDES Y SUS ESPACIOS →
            </Link>
          </div>

          {/* BANNER DESTACADO: LLEVAMOS CUALQUIER EXPERIENCIA A DONDE EL CLIENTE LO NECESITE */}
          <div className="mt-14 relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange via-orange to-orange-dark text-black border-2 border-orange-dark/30 p-8 sm:p-10 shadow-2xl shadow-orange/30">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-white text-black flex items-center justify-center shrink-0 shadow-lg text-3xl font-black">
                  <Truck className="w-8 h-8 text-black" />
                </div>
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/10 border border-black/15 text-black text-[11px] uppercase tracking-wider font-black">
                    <span>OTAM On Tour · Producción a Domicilio</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-black uppercase tracking-tight">
                    ¿Prefieres que vayamos a tus oficinas o locación privada?
                  </h3>
                  <p className="text-sm sm:text-base text-black/90 max-w-2xl leading-relaxed font-semibold">
                    ¡No estás limitado a nuestros hoteles! <strong className="text-black font-black">Podemos llevar cualquiera de nuestras experiencias a donde tú lo necesites:</strong> tus oficinas corporativas, salón de eventos particular, jardín privado o cualquier estado de la República. Nosotros nos encargamos de todo: chefs, estaciones, facilitadores, dinámicas y montaje llave en mano.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
                <a
                  href={`https://wa.me/525514615826?text=${encodeURIComponent(
                    'Hola OTAM, me gustaría cotizar una experiencia llevada a nuestras oficinas / locación propia. ¿Me podrían dar información de cómo funciona el montaje a domicilio?'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-black hover:bg-zinc-800 text-white font-black text-xs uppercase tracking-wider py-4 px-8 rounded-2xl shadow-xl hover:scale-105 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-orange" />
                  <span>Cotizar a domicilio</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. INSTAGRAM FEED PREVIEW */}
      <InstagramFeed />

      {/* 8. FORMULARIO DE CONTACTO INTEGRADO EN LA HOME */}
      <section id="cotizar" className="py-20 sm:py-28 bg-[#FAF9F6] relative border-t border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <ContactForm
            title="¡ARMEMOS TU EXPERIENCIA OTAM!"
            subtitle="Dinos cuántos son, qué tienen en mente y en cuál sede te gustaría vivirlo. Te respondemos de volada."
          />
        </div>
      </section>

    </div>
  );
}
