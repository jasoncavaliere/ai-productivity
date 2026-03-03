# Quickstart: Example Pages

## Goal

Validate the planned user flow for the examples library, example detail page, wildcard replacement, provider selection, and outbound launch behavior.

## Prerequisites

- Repository dependencies installed
- Local development server available through the existing Vite workflow
- Current branch checked out: `001-example-pages`

## Planned Verification Flow

1. Start the app and open the main site navigation.
2. Navigate to the Examples route and confirm the page shows a searchable list of prompt examples.
3. Enter free-text search terms and confirm the list narrows to matching examples by title, description, or tags.
4. Open a specific example detail page and confirm the page shows:
   - Example name
   - Description
   - Prompt text
   - Wildcard inputs based on the example definition
   - Provider selector for supported LLMs
   - A launch action
5. Leave wildcard inputs unchanged and confirm the resolved prompt keeps the example's default values.
6. Override one or more wildcard inputs and confirm the resolved prompt updates accordingly.
7. Switch between ChatGPT and Gemini and confirm the launch action updates to match the selected provider.
8. Activate the launch action and confirm the provider opens in a new window using the resolved prompt payload.
9. Navigate directly to an example detail URL and confirm the page remains understandable without visiting the list first.
10. Request a non-existent example URL and confirm the feature presents a recoverable not-found experience.

## Test Focus

- Route coverage for the examples list and example detail pages
- Filtering behavior and empty-state handling
- Prompt substitution correctness for defaults and overrides
- Provider selection and launch-link generation
- Accessibility basics for labels, keyboard interaction, and outbound-link context

## Expected Implementation Commands

```text
npm test
npm run build
```
