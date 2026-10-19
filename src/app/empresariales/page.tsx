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
    <div className="pt-28 pb-24 bg-[#0C0D0E] min-h-screen">
      
      {/* Energetic Corporate & Fun Hero */}
      <section className="relative py-16 sm:py-24 text-center overflow-hidden fun-grid-bg border-b border-white/[0.06]">
        {/* Glows ambientales de color naranja */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-gradient-to-r from-orange/20 via-amber/15 to-orange/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange/15 border border-orange/40 text-orange text-xs uppercase tracking-wider font-extrabold mb-6 shadow-sm">
            <Zap className="w-4 h-4 text-orange" />
            <span>Team Building & Cultura Viva</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-white uppercase tracking-tight leading-tight mb-5">
            El Team Building que tu equipo{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange via-orange-light to-amber">
              realmente quiere
            </span>
          </h1>

          <p className="text-muted text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Dile adiós a las conferencias tediosas. Pon a tus directores a hacer sushi, a tus equipos a competir en un casino de vino, o a sembrar árboles en el bosque. Cero formalismos acartonados, pura integración de verdad.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-wider font-bold text-white">
            <span className="bg-surface px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-orange" />
              <span>De 10 a 500 personas</span>
            </span>
            <span className="bg-surface px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-orange" />
              <span>Sedes mágicas en Grupo Orgánico</span>
            </span>
            <span className="bg-surface px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2">
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
                    : 'bg-surface text-muted hover:text-white hover:bg-surface-light border border-white/10'
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

      {/* Impact Pillars con Estilo Divertido */}
      <section className="py-20 bg-[#111317] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-orange text-xs uppercase tracking-widest font-extrabold flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Resultados Comprobados</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight mt-1 mb-3">
              ¿Qué se lleva tu empresa de esta jornada?
            </h2>
            <p className="text-muted text-sm sm:text-base">
              La diversión no está peleada con los resultados: nuestros clientes ven un cambio radical en la vibra de su equipo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface p-7 rounded-3xl border border-white/[0.08] hover:border-orange/40 transition-colors">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-display font-extrabold text-white mb-2">Cero Silos</h3>
              <p className="text-xs text-muted leading-relaxed">
                Áreas que antes casi ni se hablaban terminan celebrando juntas como el mejor de los equipos.
              </p>
            </div>

            <div className="bg-surface p-7 rounded-3xl border border-white/[0.08] hover:border-orange/40 transition-colors">
              <div className="text-3xl mb-3">🔋</div>
              <h3 className="text-lg font-display font-extrabold text-white mb-2">Desconexión Total</h3>
              <p className="text-xs text-muted leading-relaxed">
                El contacto con el bosque y las dinámicas lúdicas bajan el estrés y recargan pilas para el trimestre.
              </p>
            </div>

            <div className="bg-surface p-7 rounded-3xl border border-white/[0.08] hover:border-orange/40 transition-colors">
              <div className="text-3xl mb-3">❤️</div>
              <h3 className="text-lg font-display font-extrabold text-white mb-2">Orgullo de Pertenencia</h3>
              <p className="text-xs text-muted leading-relaxed">
                Reforestar o armar despensas crea un lazo emocional único con los valores de la empresa.
              </p>
            </div>

            <div className="bg-surface p-7 rounded-3xl border border-white/[0.08] hover:border-orange/40 transition-colors">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-display font-extrabold text-white mb-2">Motivación al Máximo</h3>
              <p className="text-xs text-muted leading-relaxed">
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
