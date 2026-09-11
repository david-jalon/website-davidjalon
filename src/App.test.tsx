import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('muestra el shell con la marca y el nav', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'davidjalon' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Principal' })).toBeInTheDocument()
  })

  it('renderiza el contenido desde los datos', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: 'David Jalón' })).toBeInTheDocument()
    expect(screen.getByText('// sobre-mi')).toBeInTheDocument()
    expect(screen.getByText('Helpfinder')).toBeInTheDocument()
  })
})