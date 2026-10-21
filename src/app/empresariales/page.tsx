'use client';

import React, { useState } from 'react';
import { Target, Zap, Users, TrendingUp, Sparkles, CheckCircle2, Flame, UtensilsCrossed, Trees, Compass } from 'lucide-react';
import ExperienceCard from '@/components/ExperienceCard';
import ContactForm from '@/components/ContactForm';
import { EXPERIENCES } from '@/data/experiences';

export default function EmpresarialesPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'gastronomicas' | 'estrategia' | 'esg'>('all');
  const [selectedExperience, setSelectedExperience] = useState<string>('');

  const corporateExperiences = EXPERIENCES.filter((e) => e.category === 'empresariales');

  const filtered = corporateExperiences.filter((e) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'gastronomicas') {
      return ['sommeliere-casino', 'iron-chef', 'taller-de-sushi', 'taller-de-pizza', 'taller-mixologia-empresarial'].includes(e.id);
    }
    if (activeTab === 'estrategia') {
      return ['circuito-samurai', 'tribu-de-fuego', 'rally-mundialista', 'taller-pinta-prendas'].includes(e.id);
    }
    if (activeTab === 'esg') {
      return ['programa-reforestacion', 'rally-de-despensas'].includes(e.id);
    }
    return true;
  });

  const handleSelectForQuote = (title: string) => {
    setSelectedExperience(title);
    const formElement = document.getElementById('cotizador-empresarial');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-28 pb-24 bg-[#FAF9F6] min-h-screen text-[#0C0D0E]">
      
      {/* Energetic Corporate & Fun Hero */}
      <section className="relative py-16 sm:py-24 text-center overflow-hidden fun-grid-bg border-b border-zinc-200/80 bg-gradient-to-b from-[#FFFDF9] via-white to-[#FAF9F6]">
        {/* Glows ambientales de color naranja para máxima luminosidad */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-gradient-to-r from-orange/20 via-amber/15 to-orange/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange/10 border border-orange/30 text-orange text-xs uppercase tracking-wider font-extrabold mb-6 shadow-sm">
            <Zap className="w-4 h-4 text-orange" />
            <span>Team Building & Cultura Viva</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-black uppercase tracking-tight leading-tight mb-5">
            El Team Building que tu equipo{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange via-orange-hover to-orange-dark">
              realmente quiere
            </span>
          </h1>

          <p className="text-zinc-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-8 font-medium">
            Dile adiós a las conferencias tediosas. Pon a tus directores a hacer sushi, a tus equipos a competir en un casino de vino, o a sembrar árboles en el bosque. Cero formalismos acartonados, pura integración de verdad.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-wider font-bold text-zinc-900">
            <span className="bg-white px-4 py-2 rounded-xl border border-zinc-200/90 shadow-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-orange" />
              <span>De 10 a 500 personas</span>
            </span>
            <span className="bg-white px-4 py-2 rounded-xl border border-zinc-200/90 shadow-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-orange" />
              <span>Sedes mágicas en Grupo Orgánico</span>
            </span>
            <span className="bg-white px-4 py-2 rounded-xl border border-zinc-200/90 shadow-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-orange" />
              <span>Facilitadores que animan al 100%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Corporate Filter Bar con Pestañas Naranjas */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-10">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {[
            { id: 'all', label: 'Todas las Dinámicas', emoji: '⚡' },
            { id: 'gastronomicas', label: 'Retos Gastronómicos & Catas', emoji: '🍳' },
            { id: 'estrategia', label: 'Estrategia & Desafío Físico', emoji: '🎯' },
            { id: 'esg', label: 'Sustentabilidad & Causa Social (ESG)', emoji: '🌲' },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-xs uppercase tracking-wider font-extrabold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-orange to-orange-dark text-white shadow-orange-glow scale-105'
                    : 'bg-white text-zinc-700 hover:text-black hover:border-orange hover:bg-orange/5 border border-zinc-200/90 shadow-sm'
                }`}
              >
                <span>{tab.emoji}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Grid of Corporate Experiences */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-20">
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

      {/* Impact Pillars con Estilo Luminoso */}
      <section className="py-20 bg-white border-y border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-orange text-xs uppercase tracking-widest font-extrabold flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Resultados Comprobados</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-black uppercase tracking-tight mt-1 mb-3">
              ¿Qué se lleva tu empresa de esta jornada?
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base font-medium">
              La diversión no está peleada con los resultados: nuestros clientes ven un cambio radical en la vibra de su equipo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FAF9F6] p-7 rounded-3xl border border-zinc-200/80 hover:border-orange hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-orange/10 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">🎯</div>
              <h3 className="text-lg font-display font-extrabold text-black mb-2">Cero Silos</h3>
              <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                Áreas que antes casi ni se hablaban terminan celebrando juntas como el mejor de los equipos.
              </p>
            </div>

            <div className="bg-[#FAF9F6] p-7 rounded-3xl border border-zinc-200/80 hover:border-orange hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-orange/10 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">🔋</div>
              <h3 className="text-lg font-display font-extrabold text-black mb-2">Desconexión Total</h3>
              <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                El contacto con el bosque y las dinámicas lúdicas bajan el estrés y recargan pilas para el trimestre.
              </p>
            </div>

            <div className="bg-[#FAF9F6] p-7 rounded-3xl border border-zinc-200/80 hover:border-orange hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-orange/10 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">❤️</div>
              <h3 className="text-lg font-display font-extrabold text-black mb-2">Orgullo de Pertenencia</h3>
              <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                Reforestar o armar despensas crea un lazo emocional único con los valores de la empresa.
              </p>
            </div>

            <div className="bg-[#FAF9F6] p-7 rounded-3xl border border-zinc-200/80 hover:border-orange hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-orange/10 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
              <h3 className="text-lg font-display font-extrabold text-black mb-2">Motivación al Máximo</h3>
              <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                Un equipo que se divierte rinde el doble y permanece en la empresa con entusiasmo renovado.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Formulario Corporativo */}
      <section id="cotizador-empresarial" className="max-w-7xl mx-auto px-6 sm:px-8 pt-24">
        <ContactForm
          initialMotivo={selectedExperience ? `Experiencia: ${selectedExperience}` : 'Eventos Empresariales & Team Building'}
          title="¡VAMOS A ARMAR TU EVENTO DE EQUIPO!"
          subtitle={selectedExperience ? `Cotizando: "${selectedExperience}". Compártenos los datos y te enviamos la propuesta ejecutiva.` : 'Dinos fecha estimada, número de participantes y lo que buscas. Te enviamos una cotización a la medida.'}
        />
      </section>

    </div>
  );
}
