# Data Model: Example Pages

## Example

- **Purpose**: Represents one browseable prompt example in the library and its detail page.
- **Fields**:
  - `slug`: Stable route-safe identifier for deep linking.
  - `name`: Human-readable example title.
  - `shortDescription`: Summary shown in the examples list.
  - `longDescription`: Detail-page explanation of the example's purpose.
  - `promptTemplate`: Prompt text containing zero or more named wildcard tokens.
  - `tags`: Searchable labels used to improve filtering.
  - `supportedProviderIds`: The provider options that may be used with this example.
  - `defaultProviderId`: The provider preselected when the detail page loads.
  - `variables`: Ordered collection of wildcard definitions used to replace prompt tokens.
  - `status`: Publication state for the example.
- **Validation Rules**:
  - `slug` must be unique across all examples.
  - `name`, `shortDescription`, and `promptTemplate` are required.
  - Every token referenced in `promptTemplate` must have exactly one matching variable definition.
  - `defaultProviderId` must exist in `supportedProviderIds`.
  - Draft examples must not appear in the public examples list.
- **Relationships**:
  - One `Example` has many `PromptVariable` records.
  - One `Example` references one or more `LLMProvider` records.

## PromptVariable

- **Purpose**: Defines a single user-editable wildcard inside an example prompt.
- **Fields**:
  - `id`: Stable identifier used to map the variable to a prompt token.
  - `label`: User-facing field label.
  - `description`: Guidance explaining what should be entered.
  - `defaultValue`: The value used when the visitor leaves the field unchanged.
  - `required`: Whether the visitor must provide a value beyond the default.
  - `exampleValue`: Optional sample text used for authoring or preview.
- **Validation Rules**:
  - `id` must be unique within an example.
  - `label` must be present.
  - If `required` is `true`, either `defaultValue` must be meaningful or the UI must block launch until the user enters a value.
  - Tokens not present in `promptTemplate` are invalid.
- **State Transitions**:
  - `defaulted`: Initial state using `defaultValue`.
  - `overridden`: Visitor has entered replacement text.
  - `reset`: Visitor clears the override and the system falls back to `defaultValue`.

## LLMProvider

- **Purpose**: Represents an outbound AI tool target such as ChatGPT or Gemini.
- **Fields**:
  - `id`: Stable provider identifier.
  - `name`: Display name shown in provider selection.
  - `baseUrl`: Provider entry point.
  - `launchTemplate`: Template used to embed the resolved prompt into the outbound URL.
  - `supportsPromptPrefill`: Whether prompt text can be passed directly in the launch link.
  - `availabilityStatus`: Whether the provider is enabled for selection.
  - `notes`: Optional guidance about provider behavior or limitations.
- **Validation Rules**:
  - `id` must be unique.
  - Enabled providers must define a valid launch behavior.
  - Providers marked unavailable must not be selectable on the example page.
- **Relationships**:
  - One `LLMProvider` can be referenced by many `Example` records.

## LaunchRequest

- **Purpose**: Represents a resolved outbound launch attempt from an example detail page.
- **Fields**:
  - `exampleSlug`: The example being launched.
  - `providerId`: The selected target provider.
  - `resolvedPrompt`: Final prompt text after wildcard substitution.
  - `variableValues`: Key-value pairs used to build the prompt.
  - `launchUrl`: Final outbound URL to open in a new window.
  - `openedAt`: Client-side timestamp of the launch action.
- **Validation Rules**:
  - `exampleSlug` must reference a published example.
  - `providerId` must be supported by the example.
  - `resolvedPrompt` must not contain unresolved wildcard tokens.
  - `launchUrl` must be derived from an enabled provider definition.
