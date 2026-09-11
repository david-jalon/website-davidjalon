import type { Link, Project } from './types'

export const projects: Project[] = [
  {
    name: 'Helpfinder',
    description:
      'Buscador gratuito de subvenciones sobre la BDNS con panel de alertas diario ajustado a tu perfil y recomendación de ayudas.',
    tags: ['Next.js', 'React', 'Supabase', 'Gemini', 'Vercel'],
    demoUrl: 'https://helpfinder-theta.vercel.app',
    repoUrl: 'https://github.com/david-jalon/helpfinder',
    icon: 'helpfinder',
  },
  {
    name: 'Zaiko',
    description:
      'Sistema de inventario para una empresa de impresión 3D: control de filamento, impresoras y órdenes con descuento automático de stock y alertas.',
    tags: ['Django', 'Python', 'Bootstrap', 'SQLite'],
    repoUrl: 'https://github.com/david-jalon/zaiko',
    icon: 'zaiko',
  },
]

export const fxLinks: Link[] = [
  { label: 'Showreel FX', url: 'https://vimeo.com/878328452', icon: 'vimeo' },
  { label: 'Filmografía', url: 'https://www.imdb.com/es-es/name/nm11576765/', icon: 'imdb' },
]