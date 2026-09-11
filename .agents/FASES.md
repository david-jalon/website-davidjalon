# FASES.md — website-davidjalon

> Portfolio single-page (scroll + anclas) en español, tema oscuro con acento ámbar.
> Cada fase lista su desglose de tareas; el estado marca pendiente o completada.

## Fase 0 — Andamiaje del proyecto
**Estado:** ✅ completada

- [x] Scaffold Vite + React 19 + TypeScript estricto
- [x] Tailwind CSS v4 (`@tailwindcss/vite`)
- [x] ESLint (flat config)
- [x] Vitest + React Testing Library + jsdom
- [x] Scripts `dev` / `build` / `lint` / `test` / `preview`
- [x] Estructura de carpetas (`src/components`, `src/data`)
- [x] `.gitignore`
- [x] Verificación: build, lint y test en verde

## Fase 1 — Sistema de diseño y shell
**Estado:** ✅ completada

- [x] Tokens `@theme`: paleta, JetBrains Mono, contenedor 1100px
- [x] Fuente JetBrains Mono (Google Fonts, `display=swap`)
- [x] Estilos base: fondo, foco ámbar, `scroll-margin-top`
- [x] Patrón `.link-card` (surface opaca + glow ámbar en hover)
- [x] `ShapeGridBackground`: rejilla animada, pausa fuera de viewport y `prefers-reduced-motion`
- [x] `Section`: ancla + label `//` como `<h2>`
- [x] `Nav` sticky con blur, cursor parpadeante y enlaces de anclas
- [x] `Footer`
- [x] Shell en `App.tsx`: columna semitransparente con bordes laterales

## Fase 2 — Contenido y secciones
**Estado:** ✅ completada

- [x] Datos tipados en `src/data` (profile, experience, projects, skills, education)
- [x] `Hero`: ventana terminal + avatar responsive (PC grande / tablet dentro / móvil sin)
- [x] `About`: tarjetas `perfil.txt` y `bio.txt` (bio desde `src/data`)
- [x] `Experience`: grafo de commits (rama dev ámbar, rama vfx azul, merge diagonal, cola con degradado)
- [x] `Projects`: grid con Helpfinder y Zaiko + desplegable "Antiguos proyectos FX" (Vimeo, IMDb)
- [x] `Skills`: pills por categoría en tarjetas
- [x] `Education`: tarjeta timeline
- [x] `Contact`: email que copia al portapapeles, enlaces externos en nueva pestaña, botón CV ámbar
- [x] `CardIcon`: iconos SVG
- [x] Ajustes de layout: ritmo vertical, tarjetas opacas, contraste, navbar al ancho del fondo
- [x] Auditoría: h2 por sección, a11y del desplegable (`aria-controls` + `inert`), `DESIGN.md` sincronizado

## Fase 3 — Interacción y accesibilidad
**Estado:** ✅ completada

- [x] Menú hamburguesa en móvil (`aria-expanded`/`aria-controls`, se cierra al navegar y con Escape)
- [x] Nav activo según sección visible (`IntersectionObserver` + `aria-current`)
- [x] Scroll suave respetando `prefers-reduced-motion`
- [x] Revisión de navegación por teclado
- [x] Verificación responsive sin scroll horizontal

## Fase 4 — SEO, rendimiento y deploy
**Estado:** en curso

- [x] Meta description, Open Graph y Twitter card en `index.html`
- [x] Favicon (`public/favicon.svg`) y `og-image.png` (1200×630)
- [x] Optimizar assets: fuentes con `display=swap`; `favicon.svg` y `og-image.png` generados (avatar se mantiene original)
- [x] Deploy en Vercel (lo ejecuta el usuario: ver instrucciones)
- [x] Verificación con Lighthouse sobre la URL desplegada

## Fase 5 — Tests y cierre
**Estado:** ✅ completada

- [x] Tests de componentes clave (Hero, Experience, Projects)
- [x] Test de que los datos se cargan desde `src/data`
- [x] Repasar `AGENTS.md` y actualizar convenciones si hace falta
- [x] `npm run test` (14 tests) y `npm run lint` en verde

## Fuera de alcance (no se implementa)
Multiidioma (ES/EN), blog, modo claro / toggle de tema y backend propio o CMS. Ver `PLAN.md`.