'use client';

import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

export default function InstagramFeed() {
  const instagramProfileUrl = 'https://www.instagram.com/otam_experiencias/';

  return (
    <section className="py-10 sm:py-14 bg-white relative border-t border-zinc-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Banner de Instagram */}
        <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#FFFDF9] border-2 border-orange/20 hover:border-orange flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left transition-all duration-300 shadow-sm hover:shadow-md">
          <div className="space-y-1.5 max-w-2xl">
            <h3 className="text-base sm:text-xl font-display font-black text-black tracking-tight">
              ¿Quieres ver cómo luciría tu próximo evento?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Etiquétanos en tu próxima vivencia o envíanos un DM para armar tu propuesta a la medida en cualquiera de nuestras 6 sedes.
            </p>
          </div>

          <a
            href={instagramProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-xs sm:text-sm uppercase tracking-wider font-black text-white bg-black hover:bg-orange px-6 py-3.5 rounded-2xl transition-all duration-300 shadow-md flex-shrink-0 group"
          >
            <Instagram className="w-4 h-4 text-orange group-hover:text-white transition-colors" />
            <span>@OTAM_EXPERIENCIAS</span>
            <ExternalLink className="w-3.5 h-3.5 text-white/80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
