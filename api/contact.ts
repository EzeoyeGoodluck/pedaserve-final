/**
 * Vercel serverless function: receives the contact and newsletter forms and
 * emails them to the company inbox through Resend's HTTP API.
 *
 * Environment variables (set in Vercel > Settings > Environment Variables):
 *   RESEND_API_KEY   from https://resend.com/api-keys
 *   CONTACT_TO       where messages land, default info@pedaserve.com
 *   CONTACT_FROM     the sender, must be on a domain verified in Resend,
 *                    e.g. "Pedaserve website <website@pedaserve.com>".
 *                    Until the domain is verified, "onboarding@resend.dev"
 *                    works for testing but only delivers to the account owner.
 */
import type { VercelRequest, VercelResponse } from '@vercel/node';

const TO = process.env.CONTACT_TO || 'info@pedaserve.com';
const FROM = process.env.CONTACT_FROM || 'Pedaserve website <onboarding@resend.dev>';

const clean = (v: unknown, max: number) =>
  typeof v === 'string' ? v.trim().slice(0, max) : '';

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }
  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ ok: false, error: 'Email is not configured' });
  }

  const body = (typeof req.body === 'string' ? JSON.parse(req.body) : req.body) || {};

  // Honeypot: real visitors never fill this hidden field.
  if (clean(body.website, 100)) return res.status(200).json({ ok: true });

  const kind = body.kind === 'newsletter' ? 'newsletter' : 'contact';
  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const need = clean(body.need, 120);
  const message = clean(body.message, 5000);
  const source = clean(body.source, 60);

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: 'A valid email address is required' });
  }
  if (kind === 'contact' && (!name || !message)) {
    return res.status(400).json({ ok: false, error: 'Name and message are required' });
  }

  const subject = kind === 'contact'
    ? `Website enquiry from ${name}${need ? ` (${need})` : ''}`
    : `New newsletter subscriber: ${email}`;

  const lines = kind === 'contact'
    ? [['Name', name], ['Email', email], ['Needs help with', need], ['Message', message]]
    : [['Email', email], ['Signed up from', source || 'website']];

  const text = lines.map(([k, v]) => `${k}: ${v}`).join('\n\n');
  const html = `<div style="font-family:Inter,Arial,sans-serif;font-size:15px;line-height:1.6;color:#0b1c30">
    ${lines.map(([k, v]) => `<p><strong>${k}</strong><br>${escapeHtml(v).replace(/\n/g, '<br>')}</p>`).join('')}
  </div>`;

  const resend = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: email,
      subject,
      text,
      html,
    }),
  });

  if (!resend.ok) {
    const detail = await resend.text().catch(() => '');
    console.error('[contact] Resend error', resend.status, detail);
    return res.status(502).json({ ok: false, error: 'Could not send email' });
  }

  return res.status(200).json({ ok: true });
}
