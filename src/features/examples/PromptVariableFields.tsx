import type { PromptValues, PromptVariable } from './types'

interface PromptVariableFieldsProps {
  variables: PromptVariable[]
  values: PromptValues
  onChange: (id: string, value: string) => void
}

export const PromptVariableFields = ({
  variables,
  values,
  onChange,
}: PromptVariableFieldsProps) => (
  <div className="prompt-fields">
    <h2>Customize the prompt</h2>
    {variables.map((variable) => (
      <label key={variable.id} className="prompt-fields__field">
        <span>{variable.label}</span>
        <textarea
          aria-label={variable.label}
          value={values[variable.id] ?? variable.defaultValue}
          onChange={(event) => onChange(variable.id, event.target.value)}
          rows={variable.id === 'notes' || variable.id === 'draft' ? 5 : 2}
        />
        <small>{variable.description}</small>
      </label>
    ))}
  </div>
)
