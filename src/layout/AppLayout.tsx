import { ReactNode } from 'react'
import { Navigation } from '../components/Navigation'
import './AppLayout.css'

interface AppLayoutProps {
  children?: ReactNode
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="app-layout">
      <Navigation />
      <main className="app-main">
        <div className="app-content">
          {children}
        </div>
      </main>
      <footer className="app-footer">
        <p>&copy; 2026 AI Productivity. All rights reserved.</p>
      </footer>
    </div>
  )
}
