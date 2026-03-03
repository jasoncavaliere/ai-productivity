import type { LlmProvider } from './types'

interface ProviderSelectorProps {
  providers: LlmProvider[]
  selectedProviderId: string
  onChange: (providerId: string) => void
}

export const ProviderSelector = ({
  providers,
  selectedProviderId,
  onChange,
}: ProviderSelectorProps) => (
  <fieldset className="provider-selector">
    <legend>Choose an LLM</legend>
    <div className="provider-selector__options">
      {providers.map((provider) => (
        <label key={provider.id} className="provider-selector__option">
          <input
            checked={provider.id === selectedProviderId}
            name="provider"
            type="radio"
            value={provider.id}
            onChange={() => onChange(provider.id)}
          />
          <span>{provider.name}</span>
        </label>
      ))}
    </div>
  </fieldset>
)
