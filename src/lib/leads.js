// Delivers Founding Client popup submissions via Web3Forms — the same mechanism every
// other lead form on the site already uses (see src/pages/Contact.jsx). Swap this out for
// the HubSpot Forms API (portal ID + form GUID) once that's available; until then this is
// the real delivery path, not a placeholder — callers rely on it throwing on failure so a
// visitor is never marked "claimed" for a submission that didn't actually go through.
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

export async function submitLead(email) {
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: WEB3FORMS_KEY,
      subject: `New Founding Client Program lead — ${email}`,
      from_name: 'Founding Client Popup',
      email,
    }),
  });
  const result = await res.json();
  if (!result.success) {
    throw new Error(result.message || 'Web3Forms submission failed');
  }
  return result;
}
