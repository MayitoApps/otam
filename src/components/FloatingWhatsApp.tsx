'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { WHATSAPP_PHONE } from '@/data/experiences';
import { X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = 'Hola OTAM, deseo información y asesoría personalizada para diseñar una experiencia inolvidable.';
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 pointer-events-none">
      
      {/* Tooltip informativo inicial */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#121715]/95 border border-orange/30 text-ivory text-xs py-2.5 px-4 rounded-xl shadow-2xl backdrop-blur-md pointer-events-auto animate-fadeIn max-w-xs">
          <span>¿Deseas cotizar una experiencia personalizada? Chatea con nosotros.</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-muted hover:text-white ml-1 p-0.5"
            aria-label="Cerrar notificación"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Botón flotante de WhatsApp con logo personalizado */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a OTAM por WhatsApp"
        className="pointer-events-auto group relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center p-3 shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(37,211,102,0.6)]"
      >
        {/* Pulsating glow ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping -z-10 pointer-events-none" />

        <div className="relative w-8 h-8 sm:w-9 sm:h-9">
          <Image
            src="/images/whatsapp-white.png"
            alt="WhatsApp"
            fill
            priority
            className="object-contain drop-shadow brightness-0 invert"
          />
        </div>
      </a>
    </div>
  );
}
