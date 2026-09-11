# website-davidjalon

Portfolio personal de David Jalón, desarrollador junior con pasado en VFX.
Web de una sola página (single-page con scroll y navegación por anclas), en español,
con estética de terminal/code editor en tema oscuro y acento ámbar.

## Stack
- Lenguaje: TypeScript estricto
- Framework / runtime: React 19 + Vite (Node 22)
- Estilos: Tailwind CSS v4, tokens con `@theme` en `src/index.css`
- Tests: Vitest + React Testing Library
- Deploy: Vercel

## Comandos
- `npm run dev` — arranca el servidor en local
- `npm run test` — ejecuta los tests (deben pasar antes de cada commit)
- `npm run lint` — revisa el estilo (antes de cada PR)
- `npm run build` — compila para producción
- `npm run preview` — sirve el build de producción en local

## Estructura del proyecto
- `src/components/` — componentes de UI (un componente por archivo, PascalCase)
- `src/data/` — contenido tipado (perfil, experiencia, proyectos, skills, formación)
- `src/index.css` — design tokens (`@theme`) y estilos globales
- `public/` — assets estáticos (avatar, CV, favicon)
- `.agents/CV.md` — fuente de verdad del contenido profesional
- `.agents/DESIGN.md` — sistema de diseño (color, tipografía, fondo, patrones)
- `.agents/PLAN.md` — plan del proyecto (stack, arquitectura, decisiones, riesgos)
- `.agents/FASES.md` — fases de implementación y su estado (desglose con checkboxes)

## Convenciones
- Componentes en PascalCase y una función por archivo (`export default function Hero()`).
- Variables y funciones en camelCase; tipos en PascalCase.
- Cada sección de la página es un componente en `src/components/`.
- El contenido editable vive en `src/data/`, no hardcodeado dentro del JSX.
- Tailwind para el estilo; CSS propio solo para tokens y patrones complejos (link-card, glow, grid, grafo).
- Toda animación respeta `prefers-reduced-motion`.
- Foco de teclado visible siempre (outline ámbar).
- Semántica HTML correcta y atributos ARIA cuando aporten.

## No hagas
- No instalar dependencias sin avisar y justificar por qué.
- No usar `any` en TypeScript sin justificarlo.
- No subir archivos `.env*` ni secretos al repositorio.
- No copiar el diseño de la referencia (`bernardosarich.com`): solo inspirarse en su estructura.
- No salir de la paleta definida en `src/index.css` sin proponerlo antes.
- No añadir comentarios al código salvo que se pidan explícitamente.

## Flujo de trabajo
- Antes de una tarea no trivial, propón un plan y espera mi OK.
- Una tarea a la vez; al terminar, dime qué cambiaste para que lo revise.
- Si no estás seguro al 80%, pregunta. No inventes.

## Documentación
- `.agents/DESIGN.md` — sistema de diseño: color, tipografía, fondo, patrones y elemento firma.
- `.agents/PLAN.md` — plan del proyecto: stack, arquitectura, decisiones y riesgos.
- `.agents/FASES.md` — fases de implementación con desglose y estado.
- `.agents/CV.md` — contenido profesional de referencia.
- `.agents/AGENT_TEMPLATE.md` — plantilla original de este documento.
