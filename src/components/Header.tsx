'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Sparkles, ArrowRight, MessageCircle } from 'lucide-react';

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

  // Bloquear el scroll del fondo cuando el menú móvil esté abierto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

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
        isScrolled || mobileMenuOpen
          ? 'bg-white border-b border-zinc-200/90 py-3 shadow-md shadow-black/[0.04]'
          : 'bg-white/90 backdrop-blur-md py-4 border-b border-zinc-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        
        {/* LOGO A LA IZQUIERDA */}
        <div className="flex-shrink-0 z-20">
          <Link href="/" className="flex items-center gap-2 group" onClick={() => setMobileMenuOpen(false)}>
            <div className="relative w-28 sm:w-36 h-9 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/otam-negro.png"
                alt="OTAM - Experiencias"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
            <span className="hidden lg:inline-flex items-center gap-1 text-[10px] font-extrabold tracking-wider uppercase bg-orange/10 text-orange px-2 py-0.5 rounded-full border border-orange/30">
              <Sparkles className="w-2.5 h-2.5 text-orange" />
              <span>Experiencias</span>
            </span>
          </Link>
        </div>

        {/* MENÚ LINEAL CENTRADO (DESKTOP) */}
        <nav className="hidden md:flex items-center justify-center flex-1 mx-6">
          <ul className="flex items-center gap-4 lg:gap-6 bg-white border border-zinc-200/90 px-5 py-1.5 rounded-full shadow-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative text-xs uppercase font-extrabold tracking-wider transition-all duration-200 py-1.5 px-3 rounded-full flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-orange text-white shadow-sm shadow-orange/30'
                        : 'text-zinc-700 hover:text-orange hover:bg-orange/5'
                    }`}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
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
            className="p-2.5 rounded-xl bg-white border border-zinc-200 text-black hover:text-orange hover:border-orange transition-colors shadow-sm cursor-pointer"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-orange" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL OVERLAY CON FONDO 100% BLANCO Y TOTAL CLARIDAD */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bottom-0 bg-white border-t border-zinc-200 z-50 px-6 py-6 flex flex-col justify-between overflow-y-auto shadow-2xl">
          <div className="space-y-2 pt-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block px-2 mb-2">
              Navegación
            </span>
            <ul className="space-y-2.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between text-base font-display font-black tracking-wide uppercase py-3.5 px-4 rounded-xl border transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-orange to-orange-dark text-white border-orange shadow-md shadow-orange/20'
                          : 'bg-zinc-50 border-zinc-200 text-zinc-900 hover:text-orange hover:border-orange hover:bg-orange/5'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-zinc-400'}`} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="pt-6 border-t border-zinc-200 space-y-4">
            <a
              href="https://wa.me/525514615826?text=Hola%20OTAM%2C%20quisiera%20cotizar%20una%20experiencia"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 bg-black hover:bg-zinc-800 text-white font-black text-xs uppercase tracking-wider py-3.5 px-5 rounded-xl shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 text-orange" />
              <span>Cotizar por WhatsApp</span>
            </a>

            <div>
              <p className="text-xs uppercase tracking-widest text-orange font-black mb-0.5">
                OTAM EXPERIENCIAS
              </p>
              <p className="text-xs text-zinc-500 font-medium">
                Operadora de Grupo Orgánico Hoteles Boutique
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
