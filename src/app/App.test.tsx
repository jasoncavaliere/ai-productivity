import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    window.history.pushState({}, '', '/')
  })

  it('renders successfully', () => {
    const { container } = render(<App />)
    expect(container).toBeTruthy()
  })

  it('renders the examples list route', () => {
    window.history.pushState({}, '', '/examples')
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Examples' })).toBeInTheDocument()
    expect(
      screen.getByText('Browse prompt patterns you can inspect, adapt, and launch in your preferred LLM.')
    ).toBeInTheDocument()
  })

  it('renders a not-found state for an unknown example slug', () => {
    window.history.pushState({}, '', '/examples/missing-example')
    render(<App />)

    expect(
      screen.getByRole('heading', { name: 'Example not found' })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Back to examples' })).toHaveAttribute(
      'href',
      '/examples'
    )
  })
})
