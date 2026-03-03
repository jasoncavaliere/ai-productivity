import { describe, expect, it } from 'vitest'
import {
  filterExamples,
  getProviderById,
  getPublishedExamples,
  getResolvedExampleBySlug,
} from './content'

describe('examples content', () => {
  it('returns published examples', () => {
    expect(getPublishedExamples().length).toBeGreaterThan(0)
  })

  it('filters examples by text query', () => {
    const results = filterExamples('email')
    expect(results).toHaveLength(1)
    expect(results[0].slug).toBe('customer-email-rewrite')
  })

  it('resolves enabled providers for an example', () => {
    const example = getResolvedExampleBySlug('meeting-summary')
    expect(example?.supportedProviders.map((provider) => provider.id)).toEqual([
      'chatgpt',
      'gemini',
    ])
  })

  it('returns enabled providers by id', () => {
    expect(getProviderById('chatgpt')?.name).toBe('ChatGPT')
  })
})
