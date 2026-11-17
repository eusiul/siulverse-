/** @type {import('tailwindcss').Config} */
// ─────────────────────────────────────────────────────────────────────────────
// DESIGN SYSTEM — Siulverse
// Tokens de marca (colores + tipografías). Todo el sitio referencia SOLO estos
// tokens; no uses hex sueltos en los componentes. Para recolorar la marca,
// cambiá los valores acá y se propaga a todo.
// ─────────────────────────────────────────────────────────────────────────────
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md}'],
  theme: {
    extend: {
      colors: {
        // Paleta exacta del brief
        onyx: '#0A0D0A', // fondo principal
        porcelain: '#F5F2EC', // texto / tinta principal
        bronze: '#FF0000', // acento editorial → ahora ROJO puro (antes dorado/champagne #B58A4E)
        ember: '#FF0000', // CTA / destaque — ROJO puro (igual aos tons da marca)
        greige: '#A8A095', // texto secundario
        // Escalones de superficie derivados del onyx (separan por tono, no por línea)
        surface: '#12150F', // paneles / tarjetas
        'surface-2': '#1A1E17', // hover / nivel superior
        hairline: '#242821', // único borde sutil permitido (se usa con mesura)
      },
      fontFamily: {
        // Clash Display → títulos monumentales
        display: ['"Clash Display"', 'system-ui', 'sans-serif'],
        // Fraunces → acentos editoriales serif
        serif: ['Fraunces', 'Georgia', 'serif'],
        // Inter → cuerpo y labels (sustituto robusto de Geist)
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        // Geist Mono → solo para los índices numéricos (01, 02…)
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      // Escala de tipos: dos extremos hacen el trabajo (monumento + cuerpo),
      // con un escalón medio para headings de sección.
      fontSize: {
        mono: ['0.72rem', { lineHeight: '1', letterSpacing: '0.12em' }],
        label: ['0.8125rem', { lineHeight: '1.3', letterSpacing: '0.02em' }],
        body: ['1.0625rem', { lineHeight: '1.6' }],
        'body-lg': ['1.25rem', { lineHeight: '1.55' }],
        'h-sm': ['clamp(1.5rem, 1rem + 2vw, 2.25rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h-md': ['clamp(2rem, 1rem + 4vw, 3.25rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'h-lg': ['clamp(2.75rem, 1rem + 7vw, 5.5rem)', { lineHeight: '0.98', letterSpacing: '-0.035em' }],
        monument: ['clamp(2rem, 15vw, 15rem)', { lineHeight: '0.82', letterSpacing: '-0.05em' }],
      },
      maxWidth: {
        content: '78rem', // ancho máximo del contenido (frame del sitio)
        prose: '42ch', // medida de lectura corta
      },
      transitionTimingFunction: {
        // Easing propio: salida rápida, entrada suave (natural)
        emph: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
