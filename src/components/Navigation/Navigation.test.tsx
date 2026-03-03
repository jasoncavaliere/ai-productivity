import { describe, it, expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Navigation } from './Navigation'

describe('Navigation Component', () => {
  const renderNavigation = () => {
   render(
    <MemoryRouter initialEntries={['/']}>
      <Navigation />
    </MemoryRouter>
  )
  }

  it('should render navigation with all links', () => {
    renderNavigation()
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Examples')).toBeInTheDocument()
    expect(screen.getByText('Learn')).toBeInTheDocument()
    expect(screen.getByText('Templates')).toBeInTheDocument()
    expect(screen.getByText('Case Studies')).toBeInTheDocument()
  })

  it('should render brand link', () => {
    renderNavigation()
    
    const brandLink = screen.getByText('AI Productivity')
    expect(brandLink).toBeInTheDocument()
    expect(brandLink).toHaveAttribute('href', '/')
  })

  it('should have correct href for Blog link', () => {
    renderNavigation()
    
    const blogLink = screen.getByText('Blog')
    expect(blogLink).toHaveAttribute('href', '/blog')
  })

  it('should have correct href for Examples link', () => {
    renderNavigation()
    
    const examplesLink = screen.getByText('Examples')
    expect(examplesLink).toHaveAttribute('href', '/examples')
  })

  it('should have navigation toggle button on mobile', () => {
    renderNavigation()
    
    const toggleButton = screen.getByLabelText('Toggle navigation menu')
    expect(toggleButton).toBeInTheDocument()
  })

  it('should have proper accessibility attributes', () => {
    renderNavigation()
    
    const nav = screen.getByRole('navigation')
    expect(nav).toHaveAttribute('aria-label', 'Main navigation')
  })

  it('should toggle menu when clicking toggle button', async () => {
    renderNavigation()
    
    const toggleButton = screen.getByLabelText('Toggle navigation menu')
    const navMenu = screen.getByRole('menubar')
    
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')
    
    fireEvent.click(toggleButton)
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true')
    expect(navMenu).toHaveClass('open')
    
    fireEvent.click(toggleButton)
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('should close menu when clicking a link', async () => {
    renderNavigation()
    
    const toggleButton = screen.getByLabelText('Toggle navigation menu')
    fireEvent.click(toggleButton)
    
    const blogLink = screen.getByText('Blog')
    fireEvent.click(blogLink)
    
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('should mark current route as active', () => {
    // This would require testing with different route contexts
    // For now, we test that the Home link has the active class when on "/"
    renderNavigation()
    
    const homeLink = screen.getByText('Home')
    expect(homeLink).toHaveAttribute('aria-current', 'page')
  })
})
