import { getProviderById, getResolvedExampleBySlug } from './content'
import type { PromptValues, PromptVariable } from './types'

export const buildInitialPromptValues = (
  variables: PromptVariable[]
): PromptValues =>
  variables.reduce<PromptValues>((values, variable) => {
    values[variable.id] = variable.defaultValue
    return values
  }, {})

export const resolvePrompt = (
  template: string,
  variables: PromptVariable[],
  values: PromptValues
): string =>
  variables.reduce((resolvedPrompt, variable) => {
    const nextValue = values[variable.id]?.trim() || variable.defaultValue
    return resolvedPrompt.replace(
      new RegExp(`\\{\\{${variable.id}\\}\\}`, 'g'),
      nextValue
    )
  }, template)

export const hasUnresolvedTokens = (prompt: string): boolean =>
  /\{\{[^}]+\}\}/.test(prompt)

export const buildLaunchUrl = (
  providerId: string,
  resolvedPrompt: string
): string => {
  const provider = getProviderById(providerId)
  if (!provider) {
    throw new Error(`Unknown provider: ${providerId}`)
  }

  return provider.launchTemplate.replace(
    '{prompt}',
    encodeURIComponent(resolvedPrompt)
  )
}

export const buildLaunchPayload = (
  exampleSlug: string,
  providerId: string,
  values: PromptValues
) => {
  const example = getResolvedExampleBySlug(exampleSlug)
  if (!example) {
    throw new Error(`Unknown example: ${exampleSlug}`)
  }

  if (!example.supportedProviderIds.includes(providerId)) {
    throw new Error(`Provider ${providerId} is not available for ${exampleSlug}`)
  }

  const resolvedPrompt = resolvePrompt(
    example.promptTemplate,
    example.variables,
    values
  )

  if (hasUnresolvedTokens(resolvedPrompt)) {
    throw new Error('Prompt contains unresolved variables')
  }

  return {
    provider: getProviderById(providerId),
    resolvedPrompt,
    launchUrl: buildLaunchUrl(providerId, resolvedPrompt),
  }
}
