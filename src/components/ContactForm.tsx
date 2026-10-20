'use client';

import React, { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  Sparkles,
  Calendar,
  Users,
  MessageSquare,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Flame,
} from 'lucide-react';
import Image from 'next/image';
import { WHATSAPP_PHONE } from '@/data/experiences';

interface ContactFormProps {
  initialMotivo?: string;
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

export default function ContactForm({
  initialMotivo = '',
  title = '¡DISEÑEMOS TU PRÓXIMA EXPERIENCIA!',
  subtitle = 'Dinos qué tienes en mente y nuestro equipo armará una propuesta épica para tu grupo o empresa.',
  compact = false,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    motivo: initialMotivo || 'Eventos Empresariales & Team Building',
    fecha: '',
    asistentes: '',
    mensaje: '',
    website_hp: '', // Honeypot
    acepta_privacidad: true,
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const motivosOptions = [
    'Eventos Empresariales & Team Building',
    'Retos Gastronómicos & Culinarios (Iron Chef / Sushi / Pizza)',
    'Experiencias Enológicas & Sommelière Casino',
    'Dinámicas de Conexión & Tribu de Fuego',
    'Rallys con Causa Social & Sustentabilidad',
    'Momentos Íntimos (Cena Romántica / Propuesta / Fogatada)',
    'Aventura & Naturaleza (Tiro con Arco / Cabalgata / Rápel)',
    'Cenas Maridaje & Banquetería de Autor',
    'Lanzamiento de Marca o Pop-up Exclusivo',
    'Consulta General o Experiencia a la Medida',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.acepta_privacidad) {
      setErrorMessage('Debes aceptar el aviso de privacidad para continuar.');
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Ocurrió un error al enviar el formulario.');
      }

      setStatus('success');
    } catch (err: unknown) {
      console.error('Error submitting form:', err);
      const msg = err instanceof Error ? err.message : 'Error de conexión. Intenta de nuevo.';
      setErrorMessage(msg);
      setStatus('error');
    }
  };

  const handleReset = () => {
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      motivo: 'Eventos Empresariales & Team Building',
      fecha: '',
      asistentes: '',
      mensaje: '',
      website_hp: '',
      acepta_privacidad: true,
    });
    setStatus('idle');
    setErrorMessage('');
  };

  const getWhatsAppFollowUpUrl = () => {
    const msg = `Hola OTAM, acabo de enviar una solicitud para "${formData.motivo}" a nombre de ${formData.nombre || 'un servidor'}. Me gustaría agilizar la cotización por aquí.`;
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Ambient decorative blur glows in corners */}
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-orange/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-amber/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main glassmorphism container */}
      <div className="relative z-10 bg-surface/90 border border-white/10 backdrop-blur-xl shadow-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 overflow-hidden transition-all duration-300">
        
        {/* Top orange gradient bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange via-amber to-orange" />

        {/* Success State */}
        {status === 'success' ? (
          <div className="py-10 px-4 text-center flex flex-col items-center justify-center animate-fadeIn">
            <div className="w-20 h-20 rounded-full bg-orange/15 border-2 border-orange flex items-center justify-center mb-6 text-orange shadow-orange-glow">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight mb-3">
              ¡SOLICITUD ENVIADA CON ÉXITO! 🎉
            </h3>
            
            <p className="text-muted max-w-lg mx-auto text-sm sm:text-base leading-relaxed mb-8">
              ¡Muchas gracias, <span className="text-white font-bold">{formData.nombre}</span>! Ya tenemos todos los datos de tu experiencia. Un productor de OTAM te contactará muy pronto para afinar los detalles.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
              <a
                href={getWhatsAppFollowUpUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs sm:text-sm uppercase tracking-wider py-4 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-900/40"
              >
                <div className="relative w-5 h-5 flex-shrink-0">
                  <Image
                    src="/images/whatsapp-white.png"
                    alt="WhatsApp"
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>
                <span>Seguimiento por WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={handleReset}
                className="w-full inline-flex items-center justify-center gap-2 border border-white/15 hover:border-orange/50 text-white/80 hover:text-white text-xs sm:text-sm uppercase tracking-wider font-semibold py-4 px-6 rounded-xl transition-all duration-300 bg-white/[0.03]"
              >
                <span>Cotizar otra experiencia</span>
              </button>
            </div>
          </div>
        ) : (
          /* Form Content */
          <div>
            {!compact && (
              <div className="text-center mb-10">
                <span className="inline-flex items-center gap-1.5 text-orange text-xs uppercase tracking-widest font-extrabold mb-2.5">
                  <Flame className="w-4 h-4" />
                  <span>Atención Rápida & Personalizada</span>
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight mb-3">
                  {title}
                </h2>
                <p className="text-muted text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                  {subtitle}
                </p>
              </div>
            )}

            {/* Error Banner */}
            {status === 'error' && (
              <div className="mb-6 p-4 rounded-xl bg-red-950/50 border border-red-500/30 flex items-start gap-3 animate-fadeIn">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-red-200">
                  <p className="font-bold mb-0.5">Ocurrió un detalle:</p>
                  <p className="text-red-300/80">{errorMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot for bot protection */}
              <input
                type="text"
                name="website_hp"
                value={formData.website_hp}
                onChange={handleChange}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Grid: Nombre, Email, Teléfono */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Nombre */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted font-bold mb-2">
                    Tu Nombre <span className="text-orange">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted/60" />
                    <input
                      type="text"
                      name="nombre"
                      required
                      placeholder="Ej. Roberto Martínez"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-muted/50 focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted font-bold mb-2">
                    Correo Electrónico <span className="text-orange">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted/60" />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="correo@empresa.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-muted/50 focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-all"
                    />
                  </div>
                </div>

                {/* Teléfono / WhatsApp */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted font-bold mb-2">
                    WhatsApp o Teléfono <span className="text-orange">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted/60" />
                    <input
                      type="tel"
                      name="telefono"
                      required
                      placeholder="+52 55 ..."
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-muted/50 focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Grid: Motivo, Fecha, Participantes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Motivo de Interés */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted font-bold mb-2">
                    ¿Qué Experiencia Buscas? <span className="text-orange">*</span>
                  </label>
                  <div className="relative">
                    <Sparkles className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-orange pointer-events-none" />
                    <select
                      name="motivo"
                      value={formData.motivo}
                      onChange={handleChange}
                      className="w-full bg-surface border border-white/10 rounded-xl pl-10 pr-8 py-3 text-sm text-white focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-all appearance-none cursor-pointer font-medium"
                    >
                      {motivosOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-surface text-white py-2">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Fecha Tentativa */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted font-bold mb-2">
                    Fecha Tentativa (Opcional)
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted/60" />
                    <input
                      type="date"
                      name="fecha"
                      value={formData.fecha}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-all [color-scheme:dark]"
                    />
                  </div>
                </div>

                {/* Nº de Asistentes / Participantes */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted font-bold mb-2">
                    Nº de Personas (Opcional)
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted/60" />
                    <input
                      type="text"
                      name="asistentes"
                      placeholder="Ej. 25 personas / Pareja"
                      value={formData.asistentes}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-muted/50 focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Mensaje o Detalles */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-muted font-bold mb-2">
                  Cuéntanos tu Visión o Necesidad <span className="text-orange">*</span>
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-muted/60" />
                  <textarea
                    name="mensaje"
                    required
                    rows={4}
                    placeholder="¿Cuál es la ocasión? ¿Qué sede de Grupo Orgánico te llama la atención (Ajusco, Valle de Bravo, Tlalpan, Roma Norte, Tepoztlán o Veracruz)? Cuéntanos todo lo que imagines..."
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-muted/50 focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-all resize-none"
                  />
                </div>
              </div>

              {/* Checkbox Privacidad */}
              <div className="flex items-start gap-3 pt-1">
                <input
                  type="checkbox"
                  id="acepta_privacidad"
                  name="acepta_privacidad"
                  checked={formData.acepta_privacidad}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 rounded border-white/20 bg-black/40 text-orange focus:ring-orange/40 focus:ring-offset-0 cursor-pointer accent-orange"
                />
                <label
                  htmlFor="acepta_privacidad"
                  className="text-xs text-muted leading-relaxed cursor-pointer"
                >
                  Acepto el aviso de privacidad y autorizo a OTAM y a las sedes de Grupo Orgánico Hoteles Boutique a comunicarse conmigo para coordinar esta experiencia.
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full group relative overflow-hidden inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange via-orange-light to-amber text-white font-extrabold text-xs sm:text-sm uppercase tracking-widest py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-orange-glow hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-white" />
                      <span>Enviando información...</span>
                    </>
                  ) : (
                    <>
                      <span>¡COTIZAR MI EXPERIENCIA AHORA!</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>

              {/* Privacy badge */}
              <div className="flex items-center justify-center gap-2 text-[11px] text-muted/70 pt-1">
                <ShieldCheck className="w-4 h-4 text-orange" />
                <span>Respuesta rápida garantizada · Trato 100% personalizado</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
