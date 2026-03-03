import { describe, expect, it } from 'vitest'
import { getResolvedExampleBySlug } from './content'
import {
  buildInitialPromptValues,
  buildLaunchPayload,
  buildLaunchUrl,
  hasUnresolvedTokens,
  resolvePrompt,
} from './prompting'

describe('prompting helpers', () => {
  it('builds initial values from variable defaults', () => {
    const example = getResolvedExampleBySlug('meeting-summary')
    expect(buildInitialPromptValues(example?.variables ?? [])).toEqual({
      audience: 'the product leadership team',
      notes:
        'Launch timeline is on track, design sign-off is pending, and analytics gaps need follow-up before rollout.',
    })
  })

  it('resolves prompt variables with overrides', () => {
    const example = getResolvedExampleBySlug('meeting-summary')
    const resolved = resolvePrompt(
      example?.promptTemplate ?? '',
      example?.variables ?? [],
      {
        audience: 'the engineering team',
        notes: 'The migration shipped yesterday.',
      }
    )

    expect(resolved).toContain('the engineering team')
    expect(resolved).toContain('The migration shipped yesterday.')
  })

  it('detects unresolved tokens', () => {
    expect(hasUnresolvedTokens('Hello {{name}}')).toBe(true)
    expect(hasUnresolvedTokens('Hello world')).toBe(false)
  })

  it('builds provider launch urls', () => {
    expect(buildLaunchUrl('chatgpt', 'Summarize this')).toContain(
      'https://chatgpt.com/?q=Summarize%20this'
    )
  })

  it('builds a launch payload from example data', () => {
    const payload = buildLaunchPayload('customer-email-rewrite', 'gemini', {
      tone: 'an empathetic tone',
      draft: 'We are still awaiting the approval.',
      recipient: 'the account owner',
    })

    expect(payload.provider?.id).toBe('gemini')
    expect(payload.resolvedPrompt).toContain('an empathetic tone')
    expect(payload.launchUrl).toContain('gemini.google.com')
  })
})
