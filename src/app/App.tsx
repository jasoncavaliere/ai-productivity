import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import { AppLayout } from '../layout/AppLayout'
import { routes } from './routes'

function AppRoutes() {
  const routeElements = useRoutes(routes)
  return (
    <AppLayout>
      {routeElements}
    </AppLayout>
  )
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App
