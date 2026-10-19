'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Smile, Building2, Sparkles, ShieldCheck } from 'lucide-react';

interface MetricItem {
  id: string;
  prefix?: string;
  target: number;
  suffix?: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  duration?: number;
}

export default function AnimatedMetrics() {
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    sonrisas: 0,
    sedes: 0,
    produccion: 0,
    aburrimiento: 100,
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const metrics: MetricItem[] = [
    {
      id: 'sonrisas',
      prefix: '+',
      target: 15000,
      suffix: '',
      label: '+15,000',
      sublabel: 'Sonrisas & Conexiones Reales',
      icon: <Smile className="w-5 h-5 text-orange" />,
      duration: 2200,
    },
    {
      id: 'sedes',
      prefix: '',
      target: 6,
      suffix: ' Sedes',
      label: '6 Sedes',
      sublabel: 'Hoteles Boutique Exclusivos',
      icon: <Building2 className="w-5 h-5 text-orange" />,
      duration: 1600,
    },
    {
      id: 'produccion',
      prefix: '',
      target: 100,
      suffix: '%',
      label: '100%',
      sublabel: 'Producción Llave en Mano',
      icon: <Sparkles className="w-5 h-5 text-orange" />,
      duration: 1800,
    },
    {
      id: 'aburrimiento',
      prefix: '',
      target: 0,
      suffix: '%',
      label: '0%',
      sublabel: 'Aburrimiento Garantizado',
      icon: <ShieldCheck className="w-5 h-5 text-orange" />,
      duration: 2000,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;

      const newCounts = {
        sonrisas: 0,
        sedes: 0,
        produccion: 0,
        aburrimiento: 0,
      };

      // 1. Sonrisas: 0 -> 15000
      const progressSonrisas = Math.min(1, elapsed / 2200);
      const easeSonrisas = 1 - Math.pow(1 - progressSonrisas, 3);
      newCounts.sonrisas = Math.floor(easeSonrisas * 15000);

      // 2. Sedes: 0 -> 6
      const progressSedes = Math.min(1, elapsed / 1600);
      const easeSedes = 1 - Math.pow(1 - progressSedes, 3);
      newCounts.sedes = Math.floor(easeSedes * 6);

      // 3. Producción: 0 -> 100
      const progressProd = Math.min(1, elapsed / 1800);
      const easeProd = 1 - Math.pow(1 - progressProd, 3);
      newCounts.produccion = Math.floor(easeProd * 100);

      // 4. Aburrimiento: 100 -> 0 (Cuenta regresiva llamativa)
      const progressAburr = Math.min(1, elapsed / 2000);
      const easeAburr = 1 - Math.pow(1 - progressAburr, 3);
      newCounts.aburrimiento = Math.max(0, Math.floor(100 - easeAburr * 100));

      setCounts(newCounts);

      if (elapsed < 2400) {
        requestAnimationFrame(animate);
      } else {
        setCounts({
          sonrisas: 15000,
          sedes: 6,
          produccion: 100,
          aburrimiento: 0,
        });
      }
    };

    requestAnimationFrame(animate);
  }, [hasAnimated]);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-12 border-t border-white/[0.08] mt-14 w-full max-w-5xl"
    >
      {/* 1. SONRISAS */}
      <div className="relative group p-4 sm:p-5 rounded-2xl bg-surface/70 border border-white/5 hover:border-orange/40 transition-all duration-300 hover:shadow-orange-card">
        <div className="flex items-center justify-between mb-2">
          <div className="p-2 rounded-xl bg-orange/15 border border-orange/30 group-hover:scale-110 transition-transform">
            <Smile className="w-4 h-4 sm:w-5 sm:h-5 text-orange" />
          </div>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange" />
          </span>
        </div>
        <p className="text-2xl sm:text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-orange via-orange-light to-amber tracking-tight">
          +{counts.sonrisas.toLocaleString('es-MX')}
        </p>
        <p className="text-[11px] sm:text-xs uppercase tracking-wider text-muted mt-1.5 font-bold leading-snug">
          Sonrisas & Conexiones
        </p>
        <div className="w-full bg-white/5 h-1 rounded-full mt-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-orange to-amber h-full transition-all duration-300"
            style={{ width: `${Math.min(100, (counts.sonrisas / 15000) * 100)}%` }}
          />
        </div>
      </div>

      {/* 2. SEDES */}
      <div className="relative group p-4 sm:p-5 rounded-2xl bg-surface/70 border border-white/5 hover:border-orange/40 transition-all duration-300 hover:shadow-orange-card">
        <div className="flex items-center justify-between mb-2">
          <div className="p-2 rounded-xl bg-orange/15 border border-orange/30 group-hover:scale-110 transition-transform">
            <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-orange" />
          </div>
          <span className="text-[10px] uppercase font-bold text-orange px-2 py-0.5 rounded-md bg-orange/10 border border-orange/20">
            GOHB
          </span>
        </div>
        <p className="text-2xl sm:text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-orange via-orange-light to-amber tracking-tight">
          {counts.sedes} Sedes
        </p>
        <p className="text-[11px] sm:text-xs uppercase tracking-wider text-muted mt-1.5 font-bold leading-snug">
          Hoteles Boutique Mágicos
        </p>
        <div className="w-full bg-white/5 h-1 rounded-full mt-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-orange to-amber h-full transition-all duration-300"
            style={{ width: `${(counts.sedes / 6) * 100}%` }}
          />
        </div>
      </div>

      {/* 3. PRODUCCIÓN LLAVE EN MANO */}
      <div className="relative group p-4 sm:p-5 rounded-2xl bg-surface/70 border border-white/5 hover:border-orange/40 transition-all duration-300 hover:shadow-orange-card">
        <div className="flex items-center justify-between mb-2">
          <div className="p-2 rounded-xl bg-orange/15 border border-orange/30 group-hover:scale-110 transition-transform">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-orange" />
          </div>
          <span className="text-[10px] uppercase font-bold text-emerald-400 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20">
            Total
          </span>
        </div>
        <p className="text-2xl sm:text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-orange via-orange-light to-amber tracking-tight">
          {counts.produccion}%
        </p>
        <p className="text-[11px] sm:text-xs uppercase tracking-wider text-muted mt-1.5 font-bold leading-snug">
          Producción Llave en Mano
        </p>
        <div className="w-full bg-white/5 h-1 rounded-full mt-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-orange to-amber h-full transition-all duration-300"
            style={{ width: `${counts.produccion}%` }}
          />
        </div>
      </div>

      {/* 4. CERO ABURRIMIENTO */}
      <div className="relative group p-4 sm:p-5 rounded-2xl bg-surface/70 border border-white/5 hover:border-orange/40 transition-all duration-300 hover:shadow-orange-card">
        <div className="flex items-center justify-between mb-2">
          <div className="p-2 rounded-xl bg-orange/15 border border-orange/30 group-hover:scale-110 transition-transform">
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-orange" />
          </div>
          <span className="text-[10px] uppercase font-bold text-amber px-2 py-0.5 rounded-md bg-amber/10 border border-amber/20">
            Garantía
          </span>
        </div>
        <p className="text-2xl sm:text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-orange via-orange-light to-amber tracking-tight">
          {counts.aburrimiento}%
        </p>
        <p className="text-[11px] sm:text-xs uppercase tracking-wider text-muted mt-1.5 font-bold leading-snug">
          Aburrimiento Garantizado
        </p>
        <div className="w-full bg-white/5 h-1 rounded-full mt-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-amber to-orange h-full transition-all duration-300"
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
}
