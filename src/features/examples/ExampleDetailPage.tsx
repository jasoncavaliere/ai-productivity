import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getResolvedExampleBySlug } from './content'
import { EXAMPLES_PATH } from './routes'
import {
  buildInitialPromptValues,
  buildLaunchPayload,
  resolvePrompt,
} from './prompting'
import { PromptLaunchPanel } from './PromptLaunchPanel'
import { PromptVariableFields } from './PromptVariableFields'
import { ProviderSelector } from './ProviderSelector'
import type { PromptValues } from './types'
import './examples.css'

export const ExampleDetailPage = () => {
  const { slug = '' } = useParams()
  const example = getResolvedExampleBySlug(slug)

  const [values, setValues] = useState<PromptValues>(() =>
    buildInitialPromptValues(example?.variables ?? [])
  )
  const [selectedProviderId, setSelectedProviderId] = useState(
    example?.defaultProviderId ?? ''
  )

  const payload = useMemo(() => {
    if (!example || !selectedProviderId) {
      return null
    }

    return buildLaunchPayload(example.slug, selectedProviderId, values)
  }, [example, selectedProviderId, values])

  if (!example) {
    return (
      <section className="examples-page">
        <h1>Example not found</h1>
        <p>
          That example is not available. Return to the examples library to choose
          another prompt.
        </p>
        <Link to={EXAMPLES_PATH}>Back to examples</Link>
      </section>
    )
  }

  const resolvedPrompt = resolvePrompt(example.promptTemplate, example.variables, values)

  const handleValueChange = (id: string, nextValue: string) => {
    setValues((current) => ({
      ...current,
      [id]: nextValue,
    }))
  }

  const handleLaunch = () => {
    if (!payload) {
      return
    }

    window.open(payload.launchUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="example-detail">
      <Link className="example-detail__back" to={EXAMPLES_PATH}>
        Back to examples
      </Link>

      <header className="example-detail__header">
        <p className="examples-page__eyebrow">Example detail</p>
        <h1>{example.name}</h1>
        <p>{example.longDescription}</p>
      </header>

      <div className="example-detail__layout">
        <div className="example-detail__content">
          <section className="example-detail__prompt">
            <h2>Prompt template</h2>
            <p>{example.shortDescription}</p>
            <textarea readOnly value={example.promptTemplate} rows={8} />
          </section>

          <PromptVariableFields
            onChange={handleValueChange}
            values={values}
            variables={example.variables}
          />
        </div>

        <aside className="example-detail__sidebar">
          <ProviderSelector
            onChange={setSelectedProviderId}
            providers={example.supportedProviders}
            selectedProviderId={selectedProviderId}
          />
          {payload ? (
            <PromptLaunchPanel
              launchUrl={payload.launchUrl}
              onLaunch={handleLaunch}
              providerName={payload.provider?.name ?? 'Selected provider'}
              resolvedPrompt={resolvedPrompt}
            />
          ) : null}
        </aside>
      </div>
    </section>
  )
}
