import { ReactElement } from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { render } from '@testing-library/react'

export const renderWithRouter = (
  ui: ReactElement,
  initialEntries: string[] = ['/examples']
) => render(<MemoryRouter initialEntries={initialEntries}>{ui}</MemoryRouter>)

export const renderWithRoute = (
  ui: ReactElement,
  path: string,
  initialEntries: string[]
) =>
  render(
    <MemoryRouter initialEntries={initialEntries}>
      <Routes>
        <Route element={ui} path={path} />
      </Routes>
    </MemoryRouter>
  )
