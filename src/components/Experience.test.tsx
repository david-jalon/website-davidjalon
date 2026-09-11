import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Experience from './Experience'
import { experience } from '../data/experience'

describe('Experience', () => {
  it('renderiza todas las empresas desde los datos', () => {
    render(<Experience />)
    for (const item of experience) {
      expect(screen.getByText(item.company)).toBeInTheDocument()
    }
  })

  it('marca la entrada dev con el badge de merge', () => {
    render(<Experience />)
    expect(screen.getByText('⟳ merge')).toBeInTheDocument()
  })

  it('muestra la leyenda de ramas', () => {
    render(<Experience />)
    expect(screen.getByText('rama dev')).toBeInTheDocument()
    expect(screen.getByText('rama vfx')).toBeInTheDocument()
    expect(screen.getByText('merge')).toBeInTheDocument()
  })
})