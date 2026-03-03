import { fireEvent, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { ExampleDetailPage } from './ExampleDetailPage'
import { renderWithRoute } from './test-utils'

describe('ExampleDetailPage', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('renders prompt content and default wildcard values', () => {
    renderWithRoute(
      <ExampleDetailPage />,
      '/examples/:slug',
      ['/examples/meeting-summary']
    )

    expect(
      screen.getByRole('heading', { name: 'Meeting Summary Generator' })
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Audience')).toHaveValue(
      'the product leadership team'
    )
    expect(screen.getByLabelText('Meeting notes')).toHaveValue(
      'Launch timeline is on track, design sign-off is pending, and analytics gaps need follow-up before rollout.'
    )
  })

  it('updates the resolved prompt when wildcard values change', () => {
    renderWithRoute(
      <ExampleDetailPage />,
      '/examples/:slug',
      ['/examples/meeting-summary']
    )

    fireEvent.change(screen.getByLabelText('Audience'), {
      target: { value: 'the engineering team' },
    })

    expect(
      (screen.getByLabelText('Resolved prompt') as HTMLTextAreaElement).value
    ).toContain('the engineering team')
  })

  it('switches provider targets and launches in a new window', () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null)
    renderWithRoute(
      <ExampleDetailPage />,
      '/examples/:slug',
      ['/examples/customer-email-rewrite']
    )

    fireEvent.click(screen.getByRole('radio', { name: 'ChatGPT' }))

    expect(screen.getByText(/The current target is/i)).toHaveTextContent(
      'The current target is ChatGPT.'
    )

    fireEvent.click(screen.getByRole('button', { name: 'Go' }))

    expect(openSpy).toHaveBeenCalledWith(
      expect.stringContaining('https://chatgpt.com/?q='),
      '_blank',
      'noopener,noreferrer'
    )
  })
})
