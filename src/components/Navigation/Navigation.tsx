import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

interface NavItem {
  label: string
  path: string
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Blog', path: '/blog' },
  { label: 'Examples', path: '/examples' },
  { label: 'Learn', path: '/learn' },
  { label: 'Templates', path: '/templates' },
  { label: 'Case Studies', path: '/case-studies' },
]

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navigation" role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/" className="brand-link">
            AI Productivity
          </Link>
        </div>

        <button
          className="nav-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="nav-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul
          id="nav-menu"
          className={`nav-menu ${isMenuOpen ? 'open' : ''}`}
          role="menubar"
        >
          {navItems.map((item) => (
            <li key={item.path} role="none">
              <Link
                to={item.path}
                className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                onClick={closeMenu}
                role="menuitem"
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
