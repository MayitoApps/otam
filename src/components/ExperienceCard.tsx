'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Clock, Users, MapPin, Check, ChevronDown, ChevronUp, ArrowUpRight, Sparkles } from 'lucide-react';
import { Experience } from '@/types';
import { getExperienceWhatsAppUrl } from '@/data/experiences';

interface ExperienceCardProps {
  experience: Experience;
  onSelectForQuote?: (title: string) => void;
}

export default function ExperienceCard({ experience, onSelectForQuote }: ExperienceCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  const whatsappUrl = getExperienceWhatsAppUrl(experience.title, experience.category);

  // Emojis divertidos según categoría
  const getCategoryEmoji = (category: string) => {
    switch (category) {
      case 'empresariales':
        return '⚡';
      case 'intimos':
        return '🥂';
      case 'rebeldia':
        return '🏹';
      case 'compartir':
        return '🔥';
      default:
        return '✨';
    }
  };

  return (
    <div className="group relative bg-[#141619] border border-white/[0.08] hover:border-orange/50 rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-orange/10 flex flex-col justify-between">
      
      {/* Glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div>
        {/* Card Header & Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/50">
          <Image
            src={experience.image}
            alt={experience.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105 brightness-[0.85] group-hover:brightness-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141619] via-transparent to-black/30" />

          {/* Fun Category Badge */}
          <div className="absolute top-3.5 left-3.5 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-extrabold bg-[#0C0D0E]/85 backdrop-blur-md border border-orange/40 text-orange shadow-lg">
              <span>{getCategoryEmoji(experience.category)}</span>
              <span>{experience.categoryLabel}</span>
            </span>
          </div>

          {/* Participants & Duration Pills */}
          <div className="absolute bottom-3 left-3.5 right-3.5 z-10 flex items-center justify-between text-xs text-white">
            <div className="flex items-center gap-1.5 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 font-medium">
              <Users className="w-3.5 h-3.5 text-orange" />
              <span>{experience.participants}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 font-medium">
              <Clock className="w-3.5 h-3.5 text-orange" />
              <span>{experience.duration}</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6">
          <h3 className="text-xl font-display font-extrabold text-white tracking-tight mb-1 group-hover:text-orange transition-colors">
            {experience.title}
          </h3>

          {experience.subtitle && (
            <p className="text-xs font-semibold text-orange-light mb-3">
              {experience.subtitle}
            </p>
          )}

          <p className="text-xs sm:text-sm text-muted leading-relaxed mb-5 line-clamp-3">
            {experience.objective || experience.description}
          </p>

          {/* Sedes disponibles */}
          <div className="pt-3 pb-3 border-t border-white/[0.08]">
            <div className="flex items-center gap-1.5 text-xs text-white/90 font-semibold mb-2">
              <MapPin className="w-3.5 h-3.5 text-orange flex-shrink-0" />
              <span>Sedes donde vivirlo:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {experience.locations.map((loc, idx) => (
                <span
                  key={idx}
                  className="inline-block text-[11px] bg-white/[0.04] border border-white/10 text-muted px-2.5 py-0.5 rounded-lg font-medium"
                >
                  {loc}
                </span>
              ))}
            </div>
          </div>

          {/* What's included (Collapsible) */}
          {experience.included && experience.included.length > 0 && (
            <div className="border-t border-white/[0.08] pt-2.5">
              <button
                type="button"
                onClick={() => setShowDetails(!showDetails)}
                className="w-full flex items-center justify-between text-xs text-orange font-bold py-1 hover:text-orange-light transition-colors"
              >
                <span>{showDetails ? 'Ocultar detalles incluidos' : 'Ver todo lo que incluye'}</span>
                {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {showDetails && (
                <ul className="mt-2.5 space-y-1.5 text-xs text-muted bg-black/40 p-3 rounded-xl border border-white/5 animate-fadeIn">
                  {experience.included.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-orange flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Card Actions (WhatsApp Personalizado + Cotizar) */}
      <div className="p-5 pt-0 sm:p-6 sm:pt-0 mt-auto flex flex-col gap-2.5">
        {/* BOTÓN WHATSAPP PERSONALIZADO CON LOGO OFICIAL */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-emerald-900/40"
        >
          <div className="relative w-4 h-4 flex-shrink-0">
            <Image
              src="/images/whatsapp.png"
              alt="WhatsApp"
              fill
              className="object-contain"
            />
          </div>
          <span>Reservar por WhatsApp</span>
        </a>

        {/* Botón de Cotización Formal */}
        {onSelectForQuote ? (
          <button
            type="button"
            onClick={() => onSelectForQuote(experience.title)}
            className="w-full inline-flex items-center justify-center gap-1.5 text-xs uppercase tracking-wider font-bold text-muted hover:text-orange py-1.5 transition-colors"
          >
            <span>Pedir cotización con concierge</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-orange" />
          </button>
        ) : (
          <a
            href={`/contacto?experiencia=${encodeURIComponent(experience.title)}`}
            className="w-full inline-flex items-center justify-center gap-1.5 text-xs uppercase tracking-wider font-bold text-muted hover:text-orange py-1.5 transition-colors"
          >
            <span>Pedir cotización con concierge</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-orange" />
          </a>
        )}
      </div>

    </div>
  );
}
