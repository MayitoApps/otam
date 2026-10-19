# OTAM — Casa Productora de Experiencias

Sitio web oficial de **OTAM**, operadora de experiencias de **Grupo Orgánico Hoteles Boutique**. Diseñado con una arquitectura web moderna, estética editorial de lujo en modo oscuro (*Dark Obsidian & Champagne Gold*), enfoque de alta conversión, carga ultrarrápida, multi-página, optimización SEO para buscadores tradicionales y motores de Inteligencia Artificial (GEO), y sistema dual de cotizaciones por correo y WhatsApp personalizado.

---

## 🏛️ Características Principales

1. **Diseño Editorial & Vibe Empresarial**:
   - Paleta de lujo: Fondo obsidiana (`#0A0D0C`), contenedores (`#121715`), acentos dorados/arena (`#C5B49F`), textos claros (`#F4F5F1`) y tonos secundarios salvia (`#8E9B93`).
   - Tipografía refinada: *Cormorant Garamond* (display/editorial) y *Plus Jakarta Sans* (cuerpo y microcopias).
   - Glassmorphism con desenfoques ambientales decorativos.

2. **Universo Grupo Orgánico Hoteles Boutique**:
   - Sección destacada inmediatamente después del Hero con reproductor cinematográfico en alta calidad para el video oficial: `https://youtu.be/r2tnnrp-G6Y?si=Zn68OM2EAHuK_rXt`.
   - Copia poética oficial que describe la red de destinos: Ajusco, Valle de Bravo, Tlalpan (Quinta Soledad), Roma Norte (Frontera 49), Tepoztlán y Veracruz (Mikipi).
   - Enlace directo al portal oficial `https://www.gohb.com.mx/`.

3. **Arquitectura Multi-Página**:
   - `/` (Inicio): Hero cinematográfico, Video Universo GOHB, Pilares de Valor, Beneficios de Integración, Mosaico de Experiencias y Formulario de Cotización.
   - `/momentos`: Catálogo de vivencias personales (Momentos Íntimos, de Rebeldía/Aventura y para Compartir).
   - `/empresariales`: Experiencias de Team Building, Dinámicas Culinarias (Iron Chef, Sushi, Pizza), Sommelière Casino, Reforestación ESG y Métricas de ROI.
   - `/sedes`: Detalle arquitectónico, atmósfera y capacidades de las 6 sedes del ecosistema de Grupo Orgánico.
   - `/contacto`: Hub de contacto directo, dirección en Calle Moneda 15 Tlalpan, teléfonos y formulario.

4. **Botones de WhatsApp Hiperpersonalizados**:
   - Número centralizado: `+52 55 1461 5826`.
   - Cada tarjeta de experiencia y sección cuenta con un mensaje preconfigurado que especifica el servicio que el cliente desea reservar.
   - Botón flotante persistente con el logo oficial (`whatsapp.png`).
   - El menú principal se mantiene limpio con logo a la izquierda y enlaces lineales centrados, sin botones de reserva para preservar la estética editorial.

5. **Sistema Robusto de Contacto y Envío de Correos (`/api/contacto`)**:
   - Destinatario por defecto: `artes.grupoorganico@gmail.com`.
   - Doble motor de envío:
     - **Motor 1 (Resend)**: Si existe `RESEND_API_KEY`.
     - **Motor 2 (Nodemailer / Gmail App Password)**: Si existen `SMTP_USER` y `SMTP_PASS`.
     - **Motor 3 (Fallback Seguro)**: Modo desarrollo sin credenciales, imprime el lead en consola sin romper la experiencia del usuario.
   - Plantilla HTML para correo adaptada a móviles con diseño de lujo oscuro, tabla con datos sanitizados, mensaje destacado, botón directo de `mailto:` y marca temporal de la CDMX.
   - Protección antispam mediante campo Honeypot invisible (`website_hp`).

6. **SEO, GEO (SEO para IA) & Migración Squarespace**:
   - Rutas dinámicas `sitemap.xml` y `robots.txt` habilitadas para rastreadores estándar y bots de IA (`GPTBot`, `ClaudeBot`, `PerplexityBot`).
   - Metadatos OpenGraph, Twitter Cards y marcado estructurado Schema.org (`Organization`, `WebSite`).
   - Redirecciones 301 permanentes configuradas en `next.config.mjs` para URLs antiguas de Squarespace (evitando pérdida de posicionamiento previo).
   - Vercel Analytics integrado (`@vercel/analytics`).

---

## 🚀 Despliegue en Vercel & Migración de Dominio

### Paso 1: Configurar Variables de Entorno en Vercel
En el dashboard de tu proyecto en Vercel (`Settings` > `Environment Variables`), agrega:
```env
CONTACT_RECEIVER_EMAIL="artes.grupoorganico@gmail.com"
SMTP_USER="artes.grupoorganico@gmail.com"
SMTP_PASS="tu_contraseña_de_aplicacion_de_google_aqui"
# O si usas Resend:
RESEND_API_KEY="re_..."
```

### Paso 2: Conectar el Dominio `somosotam.com` de Squarespace a Vercel
1. En Vercel: Ve a `Project Settings` > `Domains` y escribe `www.somosotam.com` y `somosotam.com`.
2. En Squarespace Domains (o registrador DNS):
   - Registro **A**: Host `@` apuntando a `76.76.21.21`
   - Registro **CNAME**: Host `www` apuntando a `cname.vercel-dns.com`
3. Al propagarse los DNS, Vercel emitirá automáticamente el certificado SSL y el tráfico de Squarespace se transferirá a este nuevo desarrollo sin caída de servicio y preservando el SEO.

---

## 💻 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Generar bundle de producción
npm run build

# Probar bundle de producción localmente
npm run start
```
