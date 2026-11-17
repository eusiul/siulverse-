# Siulverse — site do estúdio

Site estático (Astro + TailwindCSS) do estúdio criativo **Siulverse** / Luis Lovera.
PT-BR, mobile-first, acessível (WCAG AA), SEO + OpenGraph + `sitemap.xml`.
Build 100% estático em `dist/` para servir com nginx. Sem backend.

## Rodar em local

```bash
npm install
npm run dev       # http://localhost:4321
```

## Buildar para produção

```bash
npm run build     # gera a pasta dist/
npm run preview   # serve o build localmente para conferir
```

Depois é só servir `dist/` com nginx (ou qualquer host estático).

## Onde mexer

| Quero mudar…                     | Arquivo                                   |
| -------------------------------- | ----------------------------------------- |
| **Textos, preços, planos, FAQ**  | `src/data/site.js` ← comece sempre aqui   |
| **WhatsApp / e-mail**            | `src/data/site.js` (`whatsapp`, `email`)  |
| **Showreel (vídeo)**             | `src/data/site.js` → `showreel.embed`     |
| **Imagens**                      | `public/img/` (ver `public/img/README.md`)|
| **Cores e tipografias (tokens)** | `tailwind.config.mjs`                      |
| **Estilos base / foco / botões** | `src/styles/global.css`                    |
| **Animações (GSAP)**             | `src/scripts/motion.js`                    |
| **Domínio (SEO/sitemap)**        | `astro.config.mjs` (`site`)               |
| **Ordem das seções**             | `src/pages/index.astro`                    |

### Placeholders a trocar antes de publicar

Procure por `[PLACEHOLDER]` em `src/data/site.js`: logos de clientes,
depoimentos, números, títulos do journal e as imagens em `public/img/`.
Enquanto a imagem não existe, o site mostra um placeholder automático.

## Identidade

- **Cores:** Onyx `#0A0D0A` · Porcelain `#F5F2EC` · Champagne Bronze `#B58A4E`
  · Ember Coral `#EC6240` · Greige `#A8A095`.
- **Tipos:** Clash Display (títulos), Fraunces (serif editorial), Inter (corpo),
  Geist Mono (índices). Carregadas via Fontshare + Google Fonts.
- **Logo:** monograma “LL” entrelaçado com faísca ember na junção
  (`src/components/LogoLL.astro`).

## Notas de design

O layout segue a direção **“o nome como monumento”**: o wordmark `siulverse`
aparece gigante no hero e no rodapé e escala com o scroll (GSAP ScrollTrigger).
Movimento é discreto e com fallback: sem JS, tudo aparece; com
`prefers-reduced-motion`, o movimento é desligado.

A pedido do briefing, o site usa alguns recursos que uma direção “anti-template”
normalmente evitaria (navegação numerada 01–05, serviços numerados 01–04 e FAQ em
acordeão). São escolhas do briefing, mantidas de propósito.
