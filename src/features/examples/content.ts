import { exampleCatalog, llmProviders } from './data/catalog'
import type { ExampleEntry, LlmProvider, ResolvedExample } from './types'

export const getPublishedExamples = (): ExampleEntry[] =>
  exampleCatalog.filter((example) => example.status === 'published')

export const getProviderById = (providerId: string): LlmProvider | undefined =>
  llmProviders.find(
    (provider) =>
      provider.id === providerId && provider.availabilityStatus === 'enabled'
  )

export const getExampleBySlug = (slug: string): ExampleEntry | undefined =>
  getPublishedExamples().find((example) => example.slug === slug)

export const getResolvedExampleBySlug = (
  slug: string
): ResolvedExample | undefined => {
  const example = getExampleBySlug(slug)
  if (!example) {
    return undefined
  }

  return {
    ...example,
    supportedProviders: example.supportedProviderIds
      .map((providerId) => getProviderById(providerId))
      .filter((provider): provider is LlmProvider => Boolean(provider)),
  }
}

export const filterExamples = (query: string): ExampleEntry[] => {
  const normalizedQuery = query.trim().toLowerCase()
  const examples = getPublishedExamples()

  if (!normalizedQuery) {
    return examples
  }

  return examples.filter((example) => {
    const haystack = [
      example.name,
      example.shortDescription,
      example.longDescription,
      ...example.tags,
    ]
      .join(' ')
      .toLowerCase()

    return haystack.includes(normalizedQuery)
  })
}
