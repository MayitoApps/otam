import React from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, Instagram, Clock, Sparkles, MessageCircle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { WHATSAPP_DISPLAY, WHATSAPP_PHONE, getGeneralWhatsAppUrl } from '@/data/experiences';

export default function ContactoPage() {
  const whatsappUrl = getGeneralWhatsAppUrl();

  return (
    <div className="pt-28 pb-24 bg-[#0C0D0E] min-h-screen">
      
      {/* Header */}
      <section className="relative py-14 sm:py-20 text-center overflow-hidden fun-grid-bg border-b border-white/[0.06]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-orange/15 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange/15 border border-orange/40 text-orange text-xs uppercase tracking-wider font-extrabold mb-5">
            <Sparkles className="w-4 h-4 text-orange" />
            <span>Estamos Listos Para Ayudarte</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-white uppercase tracking-tight mb-4">
            ¡Hablemos de Tu Próxima Experiencia!
          </h1>

          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Escríbenos, llámanos o mándanos un WhatsApp. Te asignamos un productor dedicado que te acompañará de principio a fin.
          </p>
        </div>
      </section>

      {/* Main Content: Info & Form */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Columna Izquierda: Coordenadas y Atención Directa */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-surface border border-white/[0.08] p-7 rounded-3xl shadow-xl">
              <h2 className="text-xs uppercase tracking-wider font-extrabold text-orange mb-6 flex items-center gap-2">
                <span>📍</span>
                <span>Coordenadas de Contacto</span>
              </h2>

              <ul className="space-y-5 text-sm">
                
                {/* Teléfono & WhatsApp */}
                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-orange/15 border border-orange/30 flex items-center justify-center text-orange flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted font-bold">WhatsApp Directo</p>
                    <a
                      href={`tel:${WHATSAPP_PHONE}`}
                      className="text-white font-bold hover:text-orange transition-colors block mt-0.5 text-base"
                    >
                      {WHATSAPP_DISPLAY}
                    </a>
                  </div>
                </li>

                {/* Email */}
                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-orange/15 border border-orange/30 flex items-center justify-center text-orange flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted font-bold">Correos Oficiales</p>
                    <a
                      href="mailto:artes.grupoorganico@gmail.com"
                      className="text-white font-semibold hover:text-orange transition-colors block mt-0.5 break-all text-xs sm:text-sm"
                    >
                      artes.grupoorganico@gmail.com
                    </a>
                    <a
                      href="mailto:otamexperiencias1@gmail.com"
                      className="text-muted text-xs hover:text-orange transition-colors block mt-1 break-all"
                    >
                      otamexperiencias1@gmail.com
                    </a>
                  </div>
                </li>

                {/* Dirección */}
                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-orange/15 border border-orange/30 flex items-center justify-center text-orange flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted font-bold">Oficinas Centrales</p>
                    <p className="text-white/90 leading-relaxed mt-0.5 text-xs sm:text-sm font-medium">
                      Calle Moneda 15, Tlalpan Centro I, Tlalpan, C.P. 14000 Ciudad de México, CDMX.
                    </p>
                  </div>
                </li>

                {/* Horario */}
                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-orange/15 border border-orange/30 flex items-center justify-center text-orange flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted font-bold">Horario Concierge</p>
                    <p className="text-white/90 leading-relaxed mt-0.5 text-xs font-medium">
                      Lunes a Sábado: 09:00 - 19:00 hrs (CDMX)
                    </p>
                  </div>
                </li>

                {/* Instagram */}
                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-orange/15 border border-orange/30 flex items-center justify-center text-orange flex-shrink-0 mt-0.5">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted font-bold">Instagram</p>
                    <a
                      href="https://www.instagram.com/otam_experiencias/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange font-bold hover:underline block mt-0.5"
                    >
                      @otam_experiencias
                    </a>
                  </div>
                </li>

              </ul>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="bg-gradient-to-br from-surface to-[#16251E] border border-emerald-500/30 p-7 rounded-3xl text-center shadow-lg">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border-2 border-emerald-500/50 flex items-center justify-center mx-auto mb-3 p-3">
                <div className="relative w-8 h-8">
                  <Image
                    src="/images/whatsapp.png"
                    alt="WhatsApp"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-lg font-display font-extrabold text-white tracking-tight mb-1">
                ¿Prefieres resolverlo por WhatsApp?
              </h3>
              <p className="text-xs text-muted leading-relaxed mb-5">
                Chatea en vivo con nosotros para checar fechas disponibles y resolver cualquier duda.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all shadow-md hover:scale-105"
              >
                <span>¡ABRIR WHATSAPP AHORA!</span>
              </a>
            </div>

          </div>

          {/* Columna Derecha: Formulario Completo de Lujo */}
          <div className="lg:col-span-8">
            <ContactForm
              title="ENVÍANOS UN MENSAJE"
              subtitle="Cuéntanos fecha tentativa, número de personas y qué les gustaría hacer. Te armamos una propuesta rápida."
            />
          </div>

        </div>
      </section>

    </div>
  );
}
