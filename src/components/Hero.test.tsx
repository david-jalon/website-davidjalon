import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from './Hero'
import { profile } from '../data/profile'

describe('Hero', () => {
  it('muestra el nombre, rol y tagline del perfil', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: profile.name })).toBeInTheDocument()
    expect(screen.getByText(profile.role)).toBeInTheDocument()
    expect(screen.getByText(profile.tagline)).toBeInTheDocument()
  })

  it('tiene los CTAs de proyectos y CV apuntando bien', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Ver proyectos' })).toHaveAttribute('href', '#proyectos')
    expect(screen.getByRole('link', { name: 'Descargar CV' })).toHaveAttribute('href', profile.cvUrl)
  })
})