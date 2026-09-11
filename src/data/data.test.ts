import { describe, expect, it } from 'vitest'
import { profile } from './profile'
import { experience } from './experience'
import { fxLinks, projects } from './projects'
import { skills } from './skills'
import { education } from './education'

describe('datos', () => {
  it('el perfil tiene los campos esenciales', () => {
    expect(profile.name).toBe('David Jalón')
    expect(profile.email).toContain('@')
    expect(profile.cvUrl).toBe('/CV_David-Jalon.pdf')
    expect(profile.bio.length).toBeGreaterThan(0)
  })

  it('la experiencia tiene ramas dev y vfx', () => {
    expect(experience.length).toBeGreaterThan(0)
    expect(experience.some((item) => item.kind === 'dev')).toBe(true)
    expect(experience.some((item) => item.kind === 'vfx')).toBe(true)
  })

  it('los proyectos principales y los FX están definidos', () => {
    expect(projects.map((project) => project.name)).toEqual(['Helpfinder', 'Zaiko'])
    expect(fxLinks.length).toBe(2)
  })

  it('skills y education no están vacíos', () => {
    expect(skills.length).toBeGreaterThan(0)
    expect(education.length).toBeGreaterThan(0)
  })
})