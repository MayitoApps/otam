'use client';

import React, { useState } from 'react';
import { Sparkles, Heart, Compass, Flame, Users, ArrowRight } from 'lucide-react';
import ExperienceCard from '@/components/ExperienceCard';
import ContactForm from '@/components/ContactForm';
import { EXPERIENCES } from '@/data/experiences';

export default function MomentosPage() {
  const [filter, setFilter] = useState<'all' | 'intimos' | 'rebeldia' | 'compartir'>('all');
  const [selectedExperience, setSelectedExperience] = useState<string>('');

  const momentosExperiences = EXPERIENCES.filter(
    (e) => e.category === 'intimos' || e.category === 'rebeldia' || e.category === 'compartir'
  );

  const filtered = filter === 'all'
    ? momentosExperiences
    : momentosExperiences.filter((e) => e.category === filter);

  const categories = [
    { id: 'all', label: 'Todos los Momentos', emoji: '✨' },
    { id: 'intimos', label: 'Momentos Íntimos & Parejas', emoji: '🥂' },
    { id: 'rebeldia', label: 'Rebeldía & Aventura al Límite', emoji: '🏹' },
    { id: 'compartir', label: 'Para Compartir & Amigos', emoji: '🔥' },
  ];

  const handleSelectForQuote = (title: string) => {
    setSelectedExperience(title);
    const formElement = document.getElementById('formulario-cotizacion');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-28 pb-24 bg-[#FAF9F6] min-h-screen text-[#0C0D0E]">
      
      {/* Header Dinámico y Divertido */}
      <section className="relative py-14 sm:py-20 text-center overflow-hidden fun-grid-bg border-b border-zinc-200/80 bg-gradient-to-b from-[#FFFDF9] via-white to-[#FAF9F6]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-orange/15 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange/10 border border-orange/30 text-orange text-xs uppercase tracking-wider font-extrabold mb-5 shadow-sm">
            <span>✨</span>
            <span>Experiencias Sociales, Románticas & Aventura</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-black uppercase tracking-tight mb-4">
            Momentos Que Te Vuelan la Cabeza
          </h1>

          <p className="text-zinc-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Una cena romántica secreta con mayordomo, fogatadas con bombones bajo las estrellas, tiro con arco o una parrillada épica con amigos. Tú pones la fecha, nosotros la magia.
          </p>
        </div>
      </section>

      {/* Filter Tabs con botones redondeados y divertidos */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-10">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => {
            const isActive = filter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id as any)}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-xs uppercase tracking-wider font-extrabold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-orange to-orange-dark text-white shadow-orange-glow scale-105'
                    : 'bg-white text-zinc-700 hover:text-black hover:border-orange hover:bg-orange/5 border border-zinc-200/90 shadow-sm'
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((exp) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              onSelectForQuote={handleSelectForQuote}
            />
          ))}
        </div>
      </section>

      {/* Formulario integrado para cotizar */}
      <section id="formulario-cotizacion" className="max-w-7xl mx-auto px-6 sm:px-8 pt-24">
        <ContactForm
          initialMotivo={selectedExperience ? `Experiencia: ${selectedExperience}` : 'Experiencias Sociales & Momentos Especiales'}
          title="¡VAMOS A PLANEAR TU MOMENTO!"
          subtitle={selectedExperience ? `Cotizando: "${selectedExperience}". Envíanos tus fechas o escríbenos por WhatsApp.` : 'Selecciona tu experiencia favorita y te preparamos una propuesta a la medida.'}
        />
      </section>

    </div>
  );
}
