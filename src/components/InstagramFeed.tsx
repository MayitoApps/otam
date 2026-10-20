'use client';

import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

export default function InstagramFeed() {
  const instagramProfileUrl = 'https://www.instagram.com/otam_experiencias/';

  return (
    <section className="py-8 sm:py-12 bg-[#0C0D0E] relative border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Banner exclusivo de Instagram tal como se solicitó */}
        <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#13151A] border border-white/[0.08] hover:border-orange/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left transition-all duration-300 shadow-xl">
          <div className="space-y-1.5 max-w-2xl">
            <h3 className="text-base sm:text-xl font-display font-extrabold text-white tracking-tight">
              ¿Quieres ver cómo luciría tu próximo evento?
            </h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              Etiquétanos en tu próxima vivencia o envíanos un DM para armar tu propuesta a la medida en cualquiera de nuestras 6 sedes.
            </p>
          </div>

          <a
            href={instagramProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-xs sm:text-sm uppercase tracking-wider font-extrabold text-orange hover:text-white transition-all duration-300 bg-black/40 hover:bg-black/70 px-6 py-3.5 rounded-2xl border border-white/10 hover:border-orange/60 shadow-sm hover:shadow-orange-glow flex-shrink-0 group"
          >
            <Instagram className="w-4 h-4 text-orange group-hover:scale-110 transition-transform" />
            <span>@OTAM_EXPERIENCIAS</span>
            <ExternalLink className="w-3.5 h-3.5 text-orange transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
