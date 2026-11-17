// ─────────────────────────────────────────────────────────────────────────────
// TRACKING — Siulverse
// Envío de eventos de conversión, agnóstico de herramienta: empuja a dataLayer y,
// si existen, llama a gtag (GA4) y plausible. Si no hay ninguna, no hace nada
// (no rompe). Los eventos se disparan en el ÉXITO confirmado, no en el intento.
// ─────────────────────────────────────────────────────────────────────────────

export function track(name, params = {}) {
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: name, ...params });
    if (typeof window.gtag === 'function') window.gtag('event', name, params);
    if (typeof window.plausible === 'function') window.plausible(name, { props: params });
    // Meta Pixel: mapear a eventos estándar (si el píxel está cargado tras consentimiento)
    if (typeof window.fbq === 'function') {
      if (name === 'generate_lead') window.fbq('track', 'Lead', params);
      else if (name === 'whatsapp_click') window.fbq('track', 'Contact', params);
    }
  } catch (e) {
    /* nunca romper la página por un error de analítica */
  }
}

export function initTracking() {
  if (window.__siulTrackInit) return;
  window.__siulTrackInit = true;

  // Exponer el helper para que el formulario lo use al enviarse con éxito.
  window.siulTrack = track;

  // Click en cualquier enlace de WhatsApp (conversión principal del sitio).
  // Es "intención" (el chat ocurre fuera del sitio), así que en GA4 conviene
  // marcarlo como evento secundario, no como la conversión que guía el bidding.
  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a[href*="wa.me/"]');
    if (!a) return;
    track('whatsapp_click', { link_text: (a.textContent || '').trim().slice(0, 60) });
  });
}
