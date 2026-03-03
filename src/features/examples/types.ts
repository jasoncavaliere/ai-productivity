export interface PromptVariable {
  id: string
  label: string
  description: string
  defaultValue: string
  required: boolean
  exampleValue?: string
}

export interface LlmProvider {
  id: string
  name: string
  baseUrl: string
  launchTemplate: string
  supportsPromptPrefill: boolean
  availabilityStatus: 'enabled' | 'disabled'
  notes?: string
}

export interface ExampleEntry {
  slug: string
  name: string
  shortDescription: string
  longDescription: string
  promptTemplate: string
  tags: string[]
  supportedProviderIds: string[]
  defaultProviderId: string
  variables: PromptVariable[]
  status: 'draft' | 'published'
}

export interface ResolvedExample extends ExampleEntry {
  supportedProviders: LlmProvider[]
}

export type PromptValues = Record<string, string>
