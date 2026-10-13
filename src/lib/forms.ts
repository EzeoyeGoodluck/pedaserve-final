/**
 * Sends a form to the site's own /api/contact function, which emails it to
 * the company inbox via Resend. VITE_CONTACT_ENDPOINT / VITE_NEWSLETTER_ENDPOINT
 * can override the destination (for example a Formspree URL). If the request
 * fails for any reason, the visitor's email app is opened with the message
 * pre-written so nothing is lost.
 */
import { COMPANY } from '../data/company';

export type SendResult = 'sent' | 'mailto' | 'failed';

export async function submitForm(
  kind: 'contact' | 'newsletter',
  data: Record<string, string>
): Promise<SendResult> {
  const override = kind === 'contact'
    ? import.meta.env.VITE_CONTACT_ENDPOINT
    : import.meta.env.VITE_NEWSLETTER_ENDPOINT;
  const endpoint = override || '/api/contact';

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ kind, ...data }),
    });
    if (res.ok) return 'sent';
    console.error('[forms] endpoint returned', res.status);
  } catch (err) {
    console.error('[forms] submission failed', err);
  }

  // Fallback: hand off to the visitor's email client.
  const subject = kind === 'contact'
    ? `Enquiry from ${data.name || 'the website'}`
    : 'Please add me to the Pedaserve mailing list';
  const body = Object.entries(data)
    .filter(([k, v]) => v && k !== 'website')
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n');
  window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return 'mailto';
}
