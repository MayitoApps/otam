'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Momentos', href: '/momentos' },
    { label: 'Empresariales', href: '/empresariales' },
    { label: 'Sedes', href: '/sedes' },
    { label: 'Contacto', href: '/contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0C0D0E]/90 backdrop-blur-xl border-b border-orange/15 py-3 shadow-2xl shadow-black/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        
        {/* LOGO A LA IZQUIERDA */}
        <div className="flex-shrink-0 z-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-28 sm:w-36 h-9 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/otam-blanco.png"
                alt="OTAM - Experiencias"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
            <span className="hidden lg:inline-flex items-center gap-1 text-[10px] font-bold tracking-wider uppercase bg-orange/15 text-orange px-2 py-0.5 rounded-full border border-orange/30">
              <Sparkles className="w-2.5 h-2.5" />
              <span>Experiencias</span>
            </span>
          </Link>
        </div>

        {/* MENÚ LINEAL CENTRADO (DESKTOP) */}
        {/* Sin botón de reserva ni de WhatsApp en el header, tal como se especificó */}
        <nav className="hidden md:flex items-center justify-center flex-1 mx-6">
          <ul className="flex items-center gap-6 lg:gap-8 bg-surface/60 border border-white/10 px-6 py-2 rounded-full backdrop-blur-md shadow-lg">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative text-xs uppercase font-bold tracking-wider transition-all duration-200 py-1 px-2 rounded-lg flex items-center gap-1.5 ${
                      isActive
                        ? 'text-orange font-extrabold'
                        : 'text-ivory/75 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-orange animate-ping" />
                    )}
                    <span>{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Placeholder balanceador para centrar exactamente el menú */}
        <div className="hidden md:block w-28 sm:w-36" aria-hidden="true" />

        {/* BOTÓN HAMBURGUESA (MÓVIL) */}
        <div className="md:hidden flex items-center z-20">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-surface/80 border border-white/10 text-ivory hover:text-orange hover:border-orange/50 transition-colors"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-orange" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL OVERLAY */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[64px] bg-[#0C0D0E]/98 backdrop-blur-2xl border-t border-orange/20 z-40 p-8 flex flex-col justify-between animate-fadeIn">
          <ul className="space-y-4 pt-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-xl font-display font-bold tracking-wide uppercase py-2 px-4 rounded-xl transition-all ${
                      isActive
                        ? 'bg-orange text-white shadow-orange-glow'
                        : 'text-ivory/80 hover:text-orange hover:bg-white/[0.04]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="border-t border-white/10 pt-6 pb-6">
            <p className="text-xs uppercase tracking-widest text-orange font-extrabold mb-1">
              OTAM EXPERIENCIAS
            </p>
            <p className="text-xs text-muted">
              Operadora de Grupo Orgánico Hoteles Boutique
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
