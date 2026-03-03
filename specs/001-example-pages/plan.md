# Implementation Plan: Example Pages

**Branch**: `[001-example-pages]` | **Date**: 2026-03-03 | **Spec**: [spec.md](C:\Users\jason\Documents\GitHub\ai-productivity\specs\001-example-pages\spec.md)
**Input**: Feature specification from `C:\Users\jason\Documents\GitHub\ai-productivity\specs\001-example-pages\spec.md`

## Summary

Add a searchable examples library and example detail experience to the existing web app so visitors can browse AI prompt examples, inspect prompt details, replace wildcard values, choose a target LLM, and launch the resolved prompt in a new window. The implementation should stay within the current single-page React application, use static in-repo content instead of adding a backend, and isolate provider-specific launch-link behavior behind a small content and URL-template boundary.

## Technical Context

**Language/Version**: TypeScript 5.x, React 18  
**Primary Dependencies**: React 18, React Router 6, Vite 5, Vitest, React Testing Library  
**Storage**: Static in-repo content files and local in-memory UI state; no external database  
**Testing**: Vitest + React Testing Library  
**Target Platform**: Modern desktop and mobile web browsers  
**Project Type**: Single web application  
**Performance Goals**: Example list filtering should feel instantaneous for a small curated catalog, and example detail pages should render usable content within the normal page-load expectations of the existing site  
**Constraints**: Preserve the current route-based site structure, avoid introducing a backend service, open outbound provider links in a new window, keep the feature accessible from keyboard navigation, and keep provider-specific launch mechanics isolated so they can be updated without rewriting page content  
**Scale/Scope**: Initial release supports a curated starter library of prompt examples, free-text filtering, example detail pages, wildcard replacement, and outbound launches to ChatGPT and Gemini

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Source of Truth**: Pass. The plan derives from the current `spec.md`, which now defines filterable examples, wildcard replacement, and LLM deep linking.
- **Spec Before Code**: Pass. This work stops at planning artifacts and does not begin implementation tasks.
- **Controlled Code Generation**: Pass. All planned implementation changes can be generated from future tasks; no manual exceptions are required.
- **Simplicity Bias**: Pass. The design keeps the feature in the existing web app, uses static local content, and avoids a backend or external persistence.
- **Definition of Done**: Pass. The plan includes build, rendering, accessibility, documentation, and testing expectations for the eventual implementation.
- **Architectural Stability**: Pass. The design extends existing routes and page modules without cross-cutting refactors outside feature scope.
- **Transparency**: Pass. All artifacts are created under feature `001-example-pages`.
- **Publishing Discipline**: Pass. Examples remain within the site's information architecture under the existing examples area.

**Post-Design Re-Check**: Pass. Phase 1 artifacts keep the same constraints, add no unjustified complexity, and preserve the constitution's static-first bias.

## Project Structure

### Documentation (this feature)

```text
specs/001-example-pages/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── example-pages.openapi.yaml
└── tasks.md
```

### Source Code (repository root)

```text
src/
├── app/
│   ├── App.tsx
│   └── routes.tsx
├── components/
│   └── Navigation/
├── features/
│   └── pages/
│       └── index.tsx
├── layout/
│   └── AppLayout.tsx
└── test/
    └── setup.ts
```

**Structure Decision**: Use the current single web application structure rooted in `src/`. The feature should extend routing in `src/app/routes.tsx`, introduce examples-specific page content under `src/features/`, reuse the existing layout and navigation, and add colocated component/page tests consistent with the current Vitest setup.

## Phase 0: Research Summary

- Use static example content stored in-repo rather than a backend service.
- Represent wildcard prompt replacements as named tokens so example definitions stay readable and testable.
- Keep filtering local to the examples library because the expected catalog size is small.
- Encapsulate outbound LLM launch behavior behind provider definitions so ChatGPT and Gemini link formats can evolve independently from example content.

## Phase 1: Design Summary

- Define a normalized content model for examples, prompt variables, and LLM providers.
- Expose a simple read-oriented contract for listing examples, reading example details, and resolving launchable prompt payloads.
- Keep prompt substitution and provider-link generation deterministic and side-effect free so the UI is easy to test.
- Provide a quickstart that walks through browsing, filtering, substituting prompt variables, selecting a provider, and launching the resolved prompt.

## Complexity Tracking

No constitution violations or complexity exemptions are required for this plan.
