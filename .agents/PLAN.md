# website-davidjalon — Plan del proyecto

> **Estado:** plan aprobado, pendiente de ejecución.
> **Fecha:** 2026-09-11

## 1. Qué es

Portfolio personal de **David Jalón**, desarrollador junior full-stack con pasado en VFX.
Web de **una sola página** (scroll y navegación por anclas), en español, con estética de
terminal / editor de código en tema oscuro y acento ámbar. El contenido profesional sale de `.agents/CV.md`.

## 2. Objetivo y audiencia

- **Audiencia:** recruiters y tech leads en España.
- **Trabajo de la página:** transmitir un perfil técnico sólido y facilitar el contacto y la
  descarga del CV en menos de 30 segundos.
- **Perfil a comunicar:** David Jalón · `➜ junior developer` · "Enfocado en backend, con algunos
  conocimientos de frontend y DevOps."

## 3. Stack

| Capa | Elección |
|---|---|
| Lenguaje | TypeScript estricto |
| Framework / runtime | React 19 + Vite (Node 22) |
| Estilos | Tailwind CSS v4, tokens con `@theme` en `src/index.css` |
| Tests | Vitest + React Testing Library |
| Lint | ESLint |
| Deploy | Vercel |

## 4. Decisiones de producto (confirmadas)

- **Single-page** con scroll y nav de anclas (no multipágina).
- **Solo español** (sin i18n).
- **Tema ámbar fijo**, sin modo claro ni toggle.
- **Diseño de color, tipografía y fondo** definido en `.agents/DESIGN.md`; JetBrains Mono como única familia.
- **Contenido desacoplado** en `src/data/`, nunca hardcodeado en el JSX.
- **Accesibilidad** como suelo de calidad: teclado, foco visible, `prefers-reduced-motion`.

## 5. Estructura de archivos prevista

```
website-davidjalon/
├─ .agents/                     (documentación del agente y del proyecto)
│  ├─ AGENTS.md
│  ├─ AGENT_TEMPLATE.md
│  ├─ CV.md
│  ├─ DESIGN.md
│  ├─ FASES.md
│  └─ PLAN.md
├─ public/                      (favicon, og-image, CV_David-Jalon.pdf)
├─ src/
│  ├─ main.tsx
│  ├─ App.tsx
│  ├─ index.css                 (@theme + estilos globales)
│  ├─ components/               (un componente por archivo, PascalCase)
│  │  ├─ Nav.tsx
│  │  ├─ Hero.tsx
│  │  ├─ About.tsx
│  │  ├─ Experience.tsx
│  │  ├─ Projects.tsx
│  │  ├─ Skills.tsx
│  │  ├─ Education.tsx
│  │  ├─ Contact.tsx
│  │  ├─ Footer.tsx
│  │  ├─ Section.tsx            (wrapper con ancho máx. y ancla)
│  │  ├─ ShapeGridBackground.tsx (canvas del fondo animado)
│  │  └─ CardIcon.tsx           (iconos SVG)
│  └─ data/
│     ├─ profile.ts
│     ├─ experience.ts
│     ├─ projects.ts
│     ├─ skills.ts
│     └─ education.ts
```

## 6. Modelo de datos (tipos TypeScript)

```ts
type Profile = {
  name: string
  role: string
  tagline: string
  location: string
  available: boolean
  email: string
  phone: string
  linkedin: string
  github: string
  cvUrl: string
}

type Experience = {
  role: string
  company: string
  start: string
  end: string
  bullets: string[]
  kind: 'dev' | 'vfx'   // distingue la rama dev de la rama VFX en el grafo de commits
}

type Project = {
  name: string
  description: string
  tags: string[]
  demoUrl?: string
  repoUrl?: string
  icon: string
}

type SkillGroup = {
  category: string
  items: string[]
}

type Education = {
  start: string
  end: string
  title: string
  school: string
}
```

## 7. Fases de implementación

El detalle por fase (objetivo, qué se construye, entregable y estado) está en `.agents/FASES.md`.

1. Andamiaje del proyecto. ✅
2. Sistema de diseño y shell. ✅
3. Contenido y secciones. — pendiente
4. Interacción y accesibilidad. — pendiente
5. SEO, rendimiento y deploy. — pendiente
6. Tests y cierre. — pendiente

## 8. Fuera de alcance

- Multiidioma (ES/EN).
- Blog o sección de artículos.
- Modo claro / toggle de tema.
- Backend propio o CMS (el contenido es estático en `src/data/`).

## 9. Riesgos y mitigaciones

| Riesgo | Mitigación |
|---|---|
| La monoespaciada cansa en textos largos | Mantener el copy corto; usar 14–16px con `leading-relaxed` |
| El fondo animado distrae o baja rendimiento | Baja opacidad, `z-0`, pausa fuera de viewport y `prefers-reduced-motion` |
| Diseño "terminal" que parece genérico | Elemento firma propio (grafo de commits) y disciplina en el resto |
| Contenido duplicado entre CV y web | `.agents/CV.md` como fuente de verdad; los datos tipados lo reflejan |