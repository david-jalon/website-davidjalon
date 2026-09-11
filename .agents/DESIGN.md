# DESIGN.md — Sistema de diseño

> Documento de diseño cerrado antes de codificar. Define color, tipografía, fondo y patrones.
> Toda decisión visual del proyecto sale de aquí. Si algo parece raro más adelante, esta es la razón.

## 1. Sujeto y brief

- **Sujeto:** David Jalón.
- **Rol:** `➜ junior developer`
- **Descripción:** Enfocado en backend, con algunos conocimientos de frontend y DevOps.
- **Audiencia:** recruiters y tech leads en España.
- **Trabajo de la página:** transmitir un perfil técnico sólido y facilitar el contacto y la
  descarga del CV en menos de 30 segundos.

## 2. Dirección

Estética de **terminal / editor de código en tema oscuro**. Monocromo con un **único acento ámbar**.
Sobria, precisa y sin adornos: el color y el fondo son fijos, no existe modo claro ni toggle de tema.

## 3. Paleta

| Token | Hex | Uso |
|---|---|---|
| `--color-terminal` | `#0D1117` | Fondo general |
| `--color-surface` | `#161B22` | Tarjetas y paneles (semi-transparente para el efecto glass) |
| `--color-text` | `#C9D1D9` | Texto principal |
| `--color-amber` | `#FFB000` | Acento único: enlaces, iconos, foco, hover, highlights |
| `--color-border` | `#21262D` | Bordes y separadores |

Colores auxiliares, usados **solo** en el motivo de ventana de terminal (los tres puntos):

| Token | Hex | Uso |
|---|---|---|
| `--color-dot-red` | `#ef4444` | Punto de ventana |
| `--color-dot-yellow` | `#eab308` | Punto de ventana |
| `--color-dot-green` | `#22c55e` | Punto de ventana / estado "disponible" |

No se introduce ningún otro color sin proponerlo antes.

## 4. Tipografía

Una **única familia**: **JetBrains Mono**, en pesos 400 / 500 / 700.

| Rol | Tratamiento |
|---|---|
| **Display** | H1/H2 en bold, `tracking-tight`, tamaños 2xl–4xl |
| **Body** | Texto corrido a 14–16px, `leading-relaxed` |
| **Utility** | Labels, fechas, nav, código y metadatos en `text-xs`/`text-sm`, a menudo en minúscula |

La monoespaciada es la identidad, no un recurso puntual: todos los elementos de la interfaz la usan.
Se carga con `font-display: swap`.

## 5. Fondo

- **Rejilla animada:** canvas a pantalla completa con líneas finas ámbar a baja opacidad,
  desplazamiento diagonal lento y sutil. Nunca compite con la lectura del contenido.
- **Viñeta radial:** funde los bordes del lienzo con el color de fondo para centrar la atención.
- El canvas vive en `z-0`, detrás del contenido, y se pausa cuando no es visible.
- Con `prefers-reduced-motion: reduce` se dibuja **estático**, sin animación.

## 6. Superficies y patrones

- **Tarjeta glass:** fondo `surface` semi-transparente + `backdrop-blur`, borde de 1px y radio ~16px.
- **Hover de tarjeta:** elevación de 2px, borde y glow ámbar suave, texto a ámbar. Transición 0.3s.
- **Botones:** primario ámbar sólido con texto oscuro; secundario "fantasma" con borde ámbar.
- **Motivo ventana de terminal:** barra superior con los tres puntos (rojo/amarillo/verde) y el
  nombre del archivo. Se usa en el hero y en tarjetas destacadas.
- **Pills:** etiquetas redondeadas para tecnologías y tags, con borde fino.

## 7. Foco y movimiento

- **Foco de teclado visible siempre:** `outline: 2px solid var(--color-amber); outline-offset: 2px`.
- Transiciones de 0.3s `ease`; ninguna animación decorativa fuera de las definidas.
- Todo movimiento respeta `prefers-reduced-motion`.

## 8. Estructura de página

Single-page con scroll y navegación por anclas.

- **Nav sticky** con fondo difuminado, anclas a cada sección y estado activo en ámbar.
- **Contenedor** centrado, ancho máximo ~1100px.
- **Secciones:** Hero · Sobre mí · Experiencia · Proyectos · Tecnologías · Formación · Contacto · Footer.
- **Timeline de experiencia:** columna izquierda con fechas en mono, derecha con el contenido.
- Cada sección lleva `scroll-margin-top` para no quedar bajo el nav.

## 9. Elemento firma

La sección **Experiencia como grafo de commits**: cada etapa es un nodo, la etapa de VFX es una
rama que hace *merge* en la rama de desarrollo. Codifica algo real del recorrido profesional y
encaja con el lenguaje visual de nodos y terminal. Es el **único gesto audaz**; el resto de la
página se mantiene en calma y disciplinado.

## 10. Copy

- **Hero:** nombre, rol (`➜ junior developer`) y la descripción del punto 1.
- **CTAs:** "Ver proyectos" y "Descargar CV".
- **Voz activa** y concreta; labels en minúscula mono. Nada de relleno ni frases genéricas.

## 11. Accesibilidad (suelo de calidad)

- Semántica HTML correcta y `aria-*` cuando aporten.
- Navegación completa por teclado.
- Contraste suficiente sobre `#0D1117`.
- Responsive de móvil a escritorio, sin scroll horizontal.
