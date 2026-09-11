import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Projects from './Projects'
import { fxLinks } from '../data/projects'

describe('Projects', () => {
  it('renderiza los proyectos principales', () => {
    render(<Projects />)
    expect(screen.getByText('Helpfinder')).toBeInTheDocument()
    expect(screen.getByText('Zaiko')).toBeInTheDocument()
  })

  it('oculta los enlaces FX hasta abrir el desplegable', () => {
    const { container } = render(<Projects />)
    const button = screen.getByRole('button', { name: /Antiguos proyectos FX/ })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(container.querySelector('#fx-links')).toHaveAttribute('inert')
  })

  it('abre el desplegable y muestra los enlaces FX', async () => {
    const user = userEvent.setup()
    render(<Projects />)
    await user.click(screen.getByRole('button', { name: /Antiguos proyectos FX/ }))
    expect(screen.getByRole('button', { name: /Antiguos proyectos FX/ })).toHaveAttribute(
      'aria-expanded',
      'true'
    )
    for (const link of fxLinks) {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
    }
  })
})