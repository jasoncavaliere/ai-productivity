import { fireEvent, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ExamplesPage } from './ExamplesPage'
import { renderWithRouter } from './test-utils'

describe('ExamplesPage', () => {
  it('renders the examples list', () => {
    renderWithRouter(<ExamplesPage />)

    expect(screen.getByRole('heading', { name: 'Examples' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Open example' })).toHaveLength(2)
    expect(screen.getByText('Meeting Summary Generator')).toBeInTheDocument()
    expect(screen.getByText('Customer Email Rewrite')).toBeInTheDocument()
  })

  it('filters examples with free text', () => {
    renderWithRouter(<ExamplesPage />)

    fireEvent.change(screen.getByLabelText('Search examples'), {
      target: { value: 'email' },
    })

    expect(screen.getByText('Customer Email Rewrite')).toBeInTheDocument()
    expect(
      screen.queryByText('Meeting Summary Generator')
    ).not.toBeInTheDocument()
  })

  it('shows an empty state when no examples match', () => {
    renderWithRouter(<ExamplesPage />)

    fireEvent.change(screen.getByLabelText('Search examples'), {
      target: { value: 'not-a-match' },
    })

    expect(
      screen.getByRole('heading', { name: 'No examples matched that search' })
    ).toBeInTheDocument()
  })
})
