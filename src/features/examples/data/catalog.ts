import type { ExampleEntry, LlmProvider } from '../types'

export const llmProviders: LlmProvider[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    baseUrl: 'https://chatgpt.com/',
    launchTemplate: 'https://chatgpt.com/?q={prompt}',
    supportsPromptPrefill: true,
    availabilityStatus: 'enabled',
    notes: 'Opens the prompt in a new tab using the current query-based launch format.',
  },
  {
    id: 'gemini',
    name: 'Gemini',
    baseUrl: 'https://gemini.google.com/',
    launchTemplate: 'https://gemini.google.com/app?prompt={prompt}',
    supportsPromptPrefill: true,
    availabilityStatus: 'enabled',
    notes: 'Uses the current Gemini web prompt query format.',
  },
]

export const exampleCatalog: ExampleEntry[] = [
  {
    slug: 'meeting-summary',
    name: 'Meeting Summary Generator',
    shortDescription: 'Turn raw meeting notes into a concise summary with actions and risks.',
    longDescription:
      'This example shows how to structure a reusable summarization prompt for team meetings. It includes variables for the audience, the meeting notes, and the format expected by the reader.',
    promptTemplate:
      'You are preparing a summary for {{audience}}. Review these meeting notes: {{notes}}. Return a concise summary, three action items, and any delivery risks.',
    tags: ['summary', 'meetings', 'productivity'],
    supportedProviderIds: ['chatgpt', 'gemini'],
    defaultProviderId: 'chatgpt',
    status: 'published',
    variables: [
      {
        id: 'audience',
        label: 'Audience',
        description: 'Who will read the meeting summary.',
        defaultValue: 'the product leadership team',
        required: true,
        exampleValue: 'the engineering leadership team',
      },
      {
        id: 'notes',
        label: 'Meeting notes',
        description: 'Paste or summarize the source notes from the meeting.',
        defaultValue:
          'Launch timeline is on track, design sign-off is pending, and analytics gaps need follow-up before rollout.',
        required: true,
      },
    ],
  },
  {
    slug: 'customer-email-rewrite',
    name: 'Customer Email Rewrite',
    shortDescription: 'Rewrite a draft customer email for clarity, empathy, and next-step ownership.',
    longDescription:
      'This example demonstrates how to clean up a rough support or account email while keeping the tone professional and action oriented.',
    promptTemplate:
      'Rewrite the following customer email for {{tone}} while keeping the main request intact: {{draft}}. End with a clear next step for {{recipient}}.',
    tags: ['email', 'customer', 'communication'],
    supportedProviderIds: ['chatgpt', 'gemini'],
    defaultProviderId: 'gemini',
    status: 'published',
    variables: [
      {
        id: 'tone',
        label: 'Tone',
        description: 'The communication style the rewritten email should use.',
        defaultValue: 'a warm and confident tone',
        required: true,
      },
      {
        id: 'draft',
        label: 'Email draft',
        description: 'The draft email that needs improvement.',
        defaultValue:
          'We had delays on the request and are still waiting on one last approval before we can deliver the update.',
        required: true,
      },
      {
        id: 'recipient',
        label: 'Recipient',
        description: 'Who should own the next step in the email.',
        defaultValue: 'the customer success manager',
        required: true,
      },
    ],
  },
]
