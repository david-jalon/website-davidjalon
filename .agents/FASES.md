# FASES.md — website-davidjalon

> Portfolio single-page (scroll + anclas) en español, tema oscuro con acento ámbar.
> Modo de trabajo: **una fase a la vez**, con propuesta de plan y OK antes de cada tarea no trivial.
> El diseño visual está cerrado en `DESIGN.md`; el plan general, en `PLAN.md`.

## Cómo leer este archivo

Cada fase tiene el mismo esquema:

- **Objetivo** — qué logramos al terminar la fase.
- **Qué aprenderás** — conceptos nuevos, en lenguaje simple.
- **Qué construimos** — archivos que creamos.
- **Entregable** — cómo se comprueba que la fase funciona.
- **Estado** — pendiente / en curso / ✅ completada.

## Las 6 fases

### Fase 0 — Andamiaje del proyecto
- **Objetivo**: tener el proyecto arrancable y limpio.
- **Qué aprenderás**: `package.json`, scripts (`dev`, `build`, `lint`, `test`, `preview`),
  configuración de Vite, `tsconfig` estricto y Tailwind CSS v4 con `@tailwindcss/vite`.
- **Qué construimos**: scaffold Vite + React 19 + TypeScript, Tailwind v4, ESLint, Vitest +
  React Testing Library + jsdom, estructura de carpetas y `.gitignore`.
- **Entregable**: `npm run dev`, `npm run build` y `npm run lint` funcionan sin errores.
- **Estado**: ✅ completada

### Fase 1 — Sistema de diseño y shell
- **Objetivo**: aplicar los tokens de `DESIGN.md` y montar el esqueleto de la página.
- **Qué aprenderás**: la directiva `@theme` de Tailwind v4, variables CSS de diseño, efecto
  glass con `backdrop-filter`, canvas 2D para el fondo animado y foco accesible.
- **Qué construimos**: `src/index.css` (tokens + patrones), fuente JetBrains Mono, componentes
  `ShapeGridBackground`, `Section`, `Nav` (sticky con blur) y `Footer`.
- **Entregable**: shell navegable con nav funcional, fondo animado, foco ámbar visible y
  `prefers-reduced-motion` respetado.
- **Estado**: pendiente

### Fase 2 — Contenido y secciones
- **Objetivo**: renderizar todo el contenido del CV en las secciones de la página.
- **Qué aprenderás**: separar contenido de presentación con datos tipados, tipar props,
  renderizar listas con `key` y componer secciones.
- **Qué construimos**: `src/data/*` (profile, experience, projects, skills, education) y los
  componentes `Hero`, `About`, `Experience` (timeline/grafo de commits), `Projects`, `Skills`,
  `Education` y `Contact`.
- **Entregable**: todas las secciones renderizan desde `src/data/`, sin texto hardcodeado en el JSX.
- **Estado**: pendiente

### Fase 3 — Interacción y accesibilidad
- **Objetivo**: que la página se sienta viva y sea usable con teclado y en móvil.
- **Qué aprenderás**: `IntersectionObserver` para el estado activo del nav, scroll suave,
  portapapeles (`navigator.clipboard`), atributos ARIA y responsive.
- **Qué construimos**: hover en tarjetas, nav activo según sección visible, copiar email con
  feedback, navegación por teclado y ajustes responsive.
- **Entregable**: navegable solo con teclado, sin scroll horizontal en móvil.
- **Estado**: pendiente

### Fase 4 — SEO, rendimiento y deploy
- **Objetivo**: publicar la web accesible desde una URL real.
- **Qué aprenderás**: metaetiquetas y Open Graph, favicon, optimización de assets y despliegue
  en Vercel.
- **Qué construimos**: `<title>`, meta description, OG/Twitter card, favicon, `og-image`,
  `public/CV_David-Jalon.pdf` y la configuración de Vercel.
- **Entregable**: build desplegado en Vercel y verificable con Lighthouse.
- **Estado**: pendiente

### Fase 5 — Tests y cierre
- **Objetivo**: dejar el proyecto con red de seguridad y documentación al día.
- **Qué aprenderás**: tests de render con React Testing Library y `expect` de Vitest.
- **Qué construimos**: tests de los componentes clave (Hero, Experience, Projects) y comprobación
  de que los datos se cargan desde `src/data/`.
- **Entregable**: `npm run test` y `npm run lint` en verde; `AGENTS.md` revisado.
- **Estado**: pendiente

## Fuera de alcance (no se implementa)
Multiidioma (ES/EN), blog, modo claro/toggle de tema y backend propio o CMS. Ver `PLAN.md` sección 8.
