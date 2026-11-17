# Imágenes del sitio

Colocá acá las imágenes reales (webp/avif/jpg). Mientras no existan, el sitio
muestra placeholders elegantes automáticamente (los `onerror` de cada `<img>`).

Archivos esperados (nombres usados en `src/data/site.js`):

| Archivo              | Dónde aparece              | Proporción sugerida |
| -------------------- | -------------------------- | ------------------- |
| `hero.png`           | Hero (foto de fondo)       | horizontal, cubre   |
| `sobre.jpg`          | Sección Sobre              | 4:3                 |
| `work-1..4.jpg`      | Trabalhos selecionados     | 16:10 y 4:5         |
| `journal-1..4.jpg`   | Journal                    | 4:3                 |
| `logos/*.svg`        | Marquee de clientes        | logo monocromo      |
| `../og-image.jpg`    | Previa en redes (OpenGraph)| 1200×630            |

Recomendado: exportar en `.webp` y actualizar las rutas en `src/data/site.js`,
o dejar `.jpg` y que el navegador use lazy-load (ya configurado).
