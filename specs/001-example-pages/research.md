# Research: Example Pages

## Decision 1: Store example content locally in the repository

- **Decision**: Keep the examples catalog, prompt text, wildcard metadata, and provider definitions in static in-repo content rather than adding a backend or remote content source.
- **Rationale**: The current site is a small React/Vite application with static routes and no server-side application layer. Local content keeps the feature aligned with the constitution's simplicity bias, reduces moving parts, and makes examples easy to version with the spec and code.
- **Alternatives considered**:
  - Add a backend content API: rejected because it adds infrastructure and operational complexity not required by the current scope.
  - Fetch content from a third-party CMS: rejected because it adds dependency risk and weakens the repo's role as a living SDD example.

## Decision 2: Use named wildcard tokens inside example prompts

- **Decision**: Model prompt replacements as named tokens embedded in prompt text, such as `{{audience}}` or `{{goal}}`, with per-token labels, descriptions, default values, and required flags.
- **Rationale**: Named tokens are easy to read in content files, easy to validate in tests, and map directly to form inputs on the example detail page. They also support the spec requirement that default values remain in place when users do not provide overrides.
- **Alternatives considered**:
  - Positional placeholders like `%s` or `{0}`: rejected because they are harder to understand and maintain in editorial content.
  - Freeform prompt editing only: rejected because it weakens the guided-example value and removes structured wildcard behavior from the spec.

## Decision 3: Filter the examples library client-side

- **Decision**: Perform free-text filtering within the web app against the loaded examples catalog, using title, short description, and tags as searchable fields.
- **Rationale**: The initial scope is a curated starter library, so client-side filtering is simpler, faster to ship, and avoids introducing a query API. This also keeps the UI responsive and easy to test.
- **Alternatives considered**:
  - Server-side search endpoint: rejected because the catalog size does not justify remote search infrastructure.
  - No filtering: rejected because the current spec explicitly requires a searchable and filterable examples list.

## Decision 4: Isolate provider launch behavior behind provider definitions

- **Decision**: Represent each LLM target as a provider definition containing its display name, launch URL template, prompt parameter behavior, and availability status. The UI should build the outbound link from the selected provider and the fully resolved prompt, then open it in a new window.
- **Rationale**: Provider-specific launch formats can change over time. Isolating this behavior prevents the examples content model and page flow from depending on hard-coded launch logic scattered through the UI.
- **Alternatives considered**:
  - Hard-code ChatGPT and Gemini launch URLs directly in page components: rejected because it makes maintenance brittle.
  - Redirect through an internal backend endpoint: rejected because it introduces unnecessary server complexity for a static-first site.

## Decision 5: Treat provider prompt-prefill support as configurable and testable

- **Decision**: The feature should only expose providers whose prompt-launch behavior is currently supported by the maintained provider definition. If a provider's launch behavior is unavailable or no longer valid, the provider should be disabled or hidden until updated.
- **Rationale**: The user experience depends on provider behavior outside the project. Making support explicit avoids broken outbound flows while preserving a clean update path when provider launch behavior changes.
- **Alternatives considered**:
  - Always show all providers regardless of launch viability: rejected because it would create unreliable outbound flows.
  - Copy prompt text only, with no deep link: rejected because the current spec requires direct deep linking to selected LLM sites.
