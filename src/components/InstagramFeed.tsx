'use client';

import React from 'react';
import Image from 'next/image';
import { Instagram, Heart, MessageCircle, ExternalLink, Sparkles, MapPin, ArrowRight } from 'lucide-react';

interface InstagramPost {
  id: string;
  image: string;
  location: string;
  likes: number;
  comments: number;
  caption: string;
  tag: string;
  url: string;
}

const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'post-1',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    location: 'Valle de Bravo, Edo. Méx.',
    likes: 342,
    comments: 29,
    caption: '¡La cocina no miente! Cuando un equipo amasa, hornea y compite con tiempo límite en el reto Iron Chef, la complicidad se nota en cada rebanada. 🍕🔥 #IronChef #OTAMExperiencias',
    tag: 'Iron Chef Pizza',
    url: 'https://www.instagram.com/otam_experiencias/',
  },
  {
    id: 'post-2',
    image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80',
    location: 'Orgánico Ajusco, CDMX',
    likes: 418,
    comments: 43,
    caption: 'Noche de fogata a 3,000 metros de altura en el bosque del Ajusco. Bombones asados, cobijas térmicas y conversaciones que unen para siempre. ✨🌲 #FogatadaMistica #Ajusco',
    tag: 'Fogatada Mística',
    url: 'https://www.instagram.com/otam_experiencias/',
  },
  {
    id: 'post-3',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    location: 'Quinta Soledad, Tlalpan',
    likes: 276,
    comments: 18,
    caption: 'Casino Sommelière en los claustros virreinales de 1870. Catas a ciegas, fichas de apuesta y maridaje de autor sin pretensiones. 🍷✨ #CasinoDeVino #QuintaSoledad',
    tag: 'Casino Sommelière',
    url: 'https://www.instagram.com/otam_experiencias/',
  },
  {
    id: 'post-4',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80',
    location: 'Bosque Valle de Bravo',
    likes: 389,
    comments: 34,
    caption: 'Superando retos en equipo: tirolesas, tiro con arco y dinámicas de confianza extrema en más de 6 hectáreas de bosque privado. 🏹🌲 #TeamBuilding #Liderazgo',
    tag: 'Rally & Aventura',
    url: 'https://www.instagram.com/otam_experiencias/',
  },
  {
    id: 'post-5',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    location: 'Frontera 49, Roma Norte',
    likes: 512,
    comments: 47,
    caption: 'Atardeceres dorados en nuestro rooftop en la Roma Norte. Coctelería botánica, sonido envolvente y networking de alta energía. 🍸🌆 #RooftopRoma #SunsetSessions',
    tag: 'Rooftop Sessions',
    url: 'https://www.instagram.com/otam_experiencias/',
  },
  {
    id: 'post-6',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    location: 'Mikipi, Costa Esmeralda',
    likes: 465,
    comments: 31,
    caption: 'Parrillada de mariscos en la arena bajo las constelaciones del Golfo de México. Desconexión total y calidez frente al mar. 🌊🦐 #PlayaPrivada #MikipiVeracruz',
    tag: 'Playas Privadas',
    url: 'https://www.instagram.com/otam_experiencias/',
  },
];

export default function InstagramFeed() {
  const instagramProfileUrl = 'https://www.instagram.com/otam_experiencias/';

  return (
    <section className="py-20 sm:py-28 bg-[#0C0D0E] relative border-t border-white/[0.06] overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-orange/10 via-amber/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-orange/15 to-pink-500/10 border border-orange/30 text-orange text-xs uppercase tracking-wider font-extrabold mb-3 shadow-sm">
              <Instagram className="w-3.5 h-3.5 text-orange" />
              <span>@otam_experiencias en Instagram</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight mt-1">
              SÍGUENOS Y VIVE EL{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange via-orange-light to-amber">
                DETRÁS DE CÁMARAS
              </span>
            </h2>

            <p className="text-muted text-sm sm:text-base mt-2.5 leading-relaxed">
              Descubre momentos reales de nuestras producciones: competencias culinarias, retiros de alta montaña, catas a ciegas y experiencias que marcan la diferencia.
            </p>
          </div>

          {/* Follow Button */}
          <div className="flex-shrink-0">
            <a
              href={instagramProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-orange via-orange-light to-amber hover:from-orange-hover hover:to-orange text-white font-black text-xs sm:text-sm uppercase tracking-wider py-3.5 px-6 rounded-2xl shadow-orange-glow transition-all duration-300 hover:scale-105 group"
            >
              <Instagram className="w-4 h-4" />
              <span>SEGUIR EN INSTAGRAM</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Instagram Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-surface border border-white/10 hover:border-orange/60 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-orange/20 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                <Image
                  src={post.image}
                  alt={post.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.88] group-hover:brightness-95"
                />
                
                {/* Top Location Pill */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-extrabold bg-black/80 text-white/95 border border-white/15 backdrop-blur-md">
                    <MapPin className="w-3 h-3 text-orange" />
                    <span>{post.location}</span>
                  </span>

                  <span className="w-7 h-7 rounded-full bg-black/70 border border-white/15 flex items-center justify-center text-white/90 backdrop-blur-md group-hover:bg-orange group-hover:border-orange transition-colors">
                    <Instagram className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Dark Hover Reveal Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center z-10">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-3">
                    <div className="flex items-center justify-center gap-5 text-white font-extrabold text-sm">
                      <span className="inline-flex items-center gap-1.5">
                        <Heart className="w-4 h-4 fill-orange text-orange" />
                        <span>{post.likes}</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MessageCircle className="w-4 h-4 fill-white text-white" />
                        <span>{post.comments}</span>
                      </span>
                    </div>

                    <p className="text-xs text-white/90 line-clamp-3 leading-relaxed font-medium">
                      "{post.caption}"
                    </p>

                    <div className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider font-black text-orange">
                      <span>Ver post en Instagram</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>
                </div>

                {/* Bottom subtle shadow gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Card Footer Info */}
              <div className="p-5 flex flex-col flex-1 justify-between bg-surface">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-black uppercase tracking-wider text-orange">
                      #{post.tag}
                    </span>
                    <div className="flex items-center gap-3 text-[11px] text-muted font-semibold">
                      <span className="flex items-center gap-1">
                        <Heart className="w-3 h-3 text-orange/80" />
                        <span>{post.likes}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3 text-muted" />
                        <span>{post.comments}</span>
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-muted leading-relaxed line-clamp-2">
                    {post.caption}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-muted group-hover:text-orange font-bold uppercase tracking-wider transition-colors">
                  <span>Abrir publicación</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-surface via-surface-light to-surface border border-orange/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <p className="text-sm sm:text-base font-display font-extrabold text-white">
              ¿Quieres ver cómo luciría tu próximo evento?
            </p>
            <p className="text-xs sm:text-sm text-muted">
              Etiquétanos en tu próxima vivencia o envíanos un DM para armar tu propuesta a la medida en cualquiera de nuestras 6 sedes.
            </p>
          </div>

          <a
            href={instagramProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-extrabold text-orange hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-5 py-3 rounded-xl border border-white/10 flex-shrink-0"
          >
            <Instagram className="w-4 h-4 text-orange" />
            <span>@otam_experiencias</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
