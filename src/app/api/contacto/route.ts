import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Resend } from 'resend';

// Default configuration
const DEFAULT_RECEIVER = 'artes.grupoorganico@gmail.com';

function sanitize(input: unknown): string {
  if (typeof input !== 'string') return '';
  return input.trim().replace(/[<>]/g, '');
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function getMexicoCityTimestamp(): string {
  return new Intl.DateTimeFormat('es-MX', {
    dateStyle: 'full',
    timeStyle: 'medium',
    timeZone: 'America/Mexico_City',
  }).format(new Date());
}

function generateEmailHtml(data: {
  nombre: string;
  email: string;
  telefono: string;
  motivo: string;
  fecha?: string;
  asistentes?: string;
  mensaje: string;
  timestamp: string;
}): string {
  const { nombre, email, telefono, motivo, fecha, asistentes, mensaje, timestamp } = data;

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nueva Cotización de Experiencia - OTAM</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0C0D0E; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F8FAFC; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #0C0D0E; padding: 30px 10px;">
    <tr>
      <td align="center">
        <!-- Main Container -->
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 620px; background-color: #141619; border: 1px solid rgba(255, 94, 20, 0.3); border-radius: 12px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.85);">
          
          <!-- Top Orange Bar -->
          <tr>
            <td height="5" style="background: linear-gradient(90deg, #E04800 0%, #FF5E14 50%, #FFAA00 100%);"></td>
          </tr>

          <!-- Header -->
          <tr>
            <td align="center" style="padding: 35px 30px 20px 30px; border-bottom: 1px solid rgba(255,255,255,0.06);">
              <h1 style="margin: 0; font-size: 32px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 800; color: #FFFFFF;">
                OTAM
              </h1>
              <p style="margin: 6px 0 0 0; font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase; color: #FF5E14; font-weight: 700;">
                Casa Productora de Experiencias
              </p>
            </td>
          </tr>

          <!-- Notification Badge -->
          <tr>
            <td style="padding: 24px 30px 10px 30px;">
              <div style="background-color: rgba(255, 94, 20, 0.12); border-left: 4px solid #FF5E14; padding: 12px 18px; border-radius: 0 6px 6px 0;">
                <p style="margin: 0; font-size: 13px; color: #FF7533; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 700;">
                  ⚡ Nueva Solicitud de Experiencia Web
                </p>
              </div>
            </td>
          </tr>

          <!-- Lead Details Table -->
          <tr>
            <td style="padding: 15px 30px 25px 30px;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="font-size: 14px; line-height: 22px;">
                <tr>
                  <td width="35%" style="padding: 10px 0; color: #94A3B8; border-bottom: 1px solid rgba(255,255,255,0.06); font-weight: 600;">Nombre:</td>
                  <td width="65%" style="padding: 10px 0; color: #FFFFFF; border-bottom: 1px solid rgba(255,255,255,0.06); font-weight: 700;">${nombre}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #94A3B8; border-bottom: 1px solid rgba(255,255,255,0.06); font-weight: 600;">Correo Electrónico:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06);">
                    <a href="mailto:${email}" style="color: #FF7533; text-decoration: none; font-weight: 600;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #94A3B8; border-bottom: 1px solid rgba(255,255,255,0.06); font-weight: 600;">Teléfono / WhatsApp:</td>
                  <td style="padding: 10px 0; color: #FFFFFF; border-bottom: 1px solid rgba(255,255,255,0.06);">
                    ${telefono ? `<a href="https://wa.me/${telefono.replace(/[^0-9]/g, '')}" style="color: #FFFFFF; text-decoration: underline;">${telefono}</a>` : '<span style="color: #64748B;">No especificado</span>'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #94A3B8; border-bottom: 1px solid rgba(255,255,255,0.06); font-weight: 600;">Motivo de Interés:</td>
                  <td style="padding: 10px 0; color: #FF7533; border-bottom: 1px solid rgba(255,255,255,0.06); font-weight: 700;">${motivo}</td>
                </tr>
                ${fecha ? `
                <tr>
                  <td style="padding: 10px 0; color: #94A3B8; border-bottom: 1px solid rgba(255,255,255,0.06); font-weight: 600;">Fecha Estimada:</td>
                  <td style="padding: 10px 0; color: #FFFFFF; border-bottom: 1px solid rgba(255,255,255,0.06);">${fecha}</td>
                </tr>` : ''}
                ${asistentes ? `
                <tr>
                  <td style="padding: 10px 0; color: #94A3B8; border-bottom: 1px solid rgba(255,255,255,0.06); font-weight: 600;">Nº de Personas:</td>
                  <td style="padding: 10px 0; color: #FFFFFF; border-bottom: 1px solid rgba(255,255,255,0.06);">${asistentes}</td>
                </tr>` : ''}
              </table>
            </td>
          </tr>

          <!-- Message Card -->
          <tr>
            <td style="padding: 0 30px 25px 30px;">
              <div style="background-color: #0C0D0E; border: 1px solid rgba(255, 94, 20, 0.25); border-radius: 8px; padding: 20px;">
                <p style="margin: 0 0 10px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: #FF7533; font-weight: 700;">
                  Detalles del Proyecto
                </p>
                <p style="margin: 0; font-size: 14px; line-height: 24px; color: #F8FAFC; white-space: pre-wrap;">
                  ${mensaje}
                </p>
              </div>
            </td>
          </tr>

          <!-- CTA Button -->
          <tr>
            <td align="center" style="padding: 0 30px 30px 30px;">
              <a href="mailto:${email}?subject=RE:%20Cotizaci%C3%B3n%20OTAM%20-%20${encodeURIComponent(motivo)}" 
                 style="display: inline-block; background-color: #FF5E14; color: #FFFFFF; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.12em; padding: 14px 30px; border-radius: 6px; text-decoration: none; box-shadow: 0 4px 15px rgba(255, 94, 20, 0.4);">
                Responder a ${nombre}
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #0C0D0E; padding: 22px 30px; border-top: 1px solid rgba(255,255,255,0.06); text-align: center;">
              <p style="margin: 0 0 6px 0; font-size: 11px; color: #94A3B8;">
                Generado desde <strong style="color: #FF5E14;">somosotam.com</strong> · Operadora de Grupo Orgánico Hoteles Boutique
              </p>
              <p style="margin: 0; font-size: 10px; color: #64748B;">
                Hora en Ciudad de México: ${timestamp}
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Honeypot check (Antispam)
    if (body.website_hp && body.website_hp.trim().length > 0) {
      console.warn('[Contacto] Spam interceptado por honeypot:', body.website_hp);
      return NextResponse.json({ success: true, message: 'Mensaje recibido' });
    }

    // 2. Sanitization
    const nombre = sanitize(body.nombre);
    const email = sanitize(body.email).toLowerCase();
    const telefono = sanitize(body.telefono);
    const motivo = sanitize(body.motivo) || 'Consulta General o Especial';
    const fecha = sanitize(body.fecha);
    const asistentes = sanitize(body.asistentes);
    const mensaje = sanitize(body.mensaje);

    // 3. Backend Validations
    if (!nombre || nombre.length < 2) {
      return NextResponse.json(
        { success: false, error: 'Por favor, ingresa tu nombre completo (mínimo 2 caracteres).' },
        { status: 400 }
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'Por favor, proporciona un correo electrónico válido.' },
        { status: 400 }
      );
    }

    if (!mensaje || mensaje.length < 5) {
      return NextResponse.json(
        { success: false, error: 'El mensaje debe contener al menos 5 caracteres con los detalles de tu experiencia.' },
        { status: 400 }
      );
    }

    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || DEFAULT_RECEIVER;
    const subject = `[Web OTAM] ${motivo} - ${nombre}`;
    const timestamp = getMexicoCityTimestamp();

    const htmlContent = generateEmailHtml({
      nombre,
      email,
      telefono,
      motivo,
      fecha,
      asistentes,
      mensaje,
      timestamp,
    });

    const resendApiKey = process.env.RESEND_API_KEY;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    // MOTOR 1: Resend
    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);
        const fromAddress = process.env.RESEND_FROM_EMAIL || 'OTAM Experiencias <onboarding@resend.dev>';
        
        const resendResponse = await resend.emails.send({
          from: fromAddress,
          to: receiverEmail,
          replyTo: email,
          subject: subject,
          html: htmlContent,
        });

        console.log('[Contacto] Correo enviado vía Resend exitosamente:', resendResponse);
        return NextResponse.json({
          success: true,
          message: 'Tu solicitud ha sido enviada con éxito. Un productor de experiencias de OTAM te contactará a la brevedad.',
        });
      } catch (resendError) {
        console.error('[Contacto] Error al enviar vía Resend, intentando fallback...', resendError);
      }
    }

    // MOTOR 2: Nodemailer (SMTP / Gmail App Password)
    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: `"OTAM Experiencias" <${smtpUser}>`,
          to: receiverEmail,
          replyTo: email,
          subject: subject,
          html: htmlContent,
        });

        console.log('[Contacto] Correo enviado vía Nodemailer (SMTP) exitosamente a:', receiverEmail);
        return NextResponse.json({
          success: true,
          message: 'Tu solicitud ha sido enviada con éxito. Un productor de experiencias de OTAM te contactará a la brevedad.',
        });
      } catch (smtpError) {
        console.error('[Contacto] Error al enviar vía Nodemailer:', smtpError);
        return NextResponse.json(
          { success: false, error: 'Hubo un error al procesar el envío de correo. Por favor contáctanos por WhatsApp.' },
          { status: 500 }
        );
      }
    }

    // MOTOR 3: Fallback modo desarrollo / sin credenciales
    console.log('====================================================');
    console.log('[Contacto - FALLBACK MODO DESARROLLO / SIN CREDENCIALES]');
    console.log('Destinatario:', receiverEmail);
    console.log('Asunto:', subject);
    console.log('Remitente:', `${nombre} <${email}>`);
    console.log('Teléfono:', telefono || 'N/A');
    console.log('Motivo:', motivo);
    console.log('Fecha:', fecha || 'N/A');
    console.log('Asistentes:', asistentes || 'N/A');
    console.log('Mensaje:', mensaje);
    console.log('Fecha y Hora CDMX:', timestamp);
    console.log('====================================================');

    return NextResponse.json({
      success: true,
      message: 'Tu solicitud ha sido registrada exitosamente (Modo seguro/desarrollo). En breve nos pondremos en contacto.',
    });
  } catch (error) {
    console.error('[Contacto] Error no controlado en la API:', error);
    return NextResponse.json(
      { success: false, error: 'Ocurrió un error inesperado en el servidor. Por favor intenta nuevamente.' },
      { status: 500 }
    );
  }
}
