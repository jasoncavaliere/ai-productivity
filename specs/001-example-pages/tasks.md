# Tasks: Example Pages

**Input**: Design documents from `C:\Users\jason\Documents\GitHub\ai-productivity\specs\001-example-pages\`
**Prerequisites**: `C:\Users\jason\Documents\GitHub\ai-productivity\specs\001-example-pages\plan.md`, `C:\Users\jason\Documents\GitHub\ai-productivity\specs\001-example-pages\spec.md`, `C:\Users\jason\Documents\GitHub\ai-productivity\specs\001-example-pages\research.md`, `C:\Users\jason\Documents\GitHub\ai-productivity\specs\001-example-pages\data-model.md`, `C:\Users\jason\Documents\GitHub\ai-productivity\specs\001-example-pages\contracts\example-pages.openapi.yaml`

**Tests**: Include route, content, filtering, prompt substitution, and launch-link tests because the plan, quickstart, and constitution require verifiable behavior.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (`[US1]`, `[US2]`)
- Every task includes an exact file path

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Establish the feature file layout and shared test scaffolding

- [X] T001 Create the example feature directory structure in `C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\`
- [X] T002 [P] Add a content scaffold for examples and providers in `C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\data\catalog.ts`
- [X] T003 [P] Add shared feature type definitions in `C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\types.ts`
- [X] T004 [P] Add shared examples test helpers and fixtures in `C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\test-utils.tsx`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Build the shared content, routing, and utility layer that all stories depend on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T005 Populate starter examples, wildcard definitions, and provider definitions in `C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\data\catalog.ts`
- [X] T006 [P] Implement content selectors for published examples and provider lookups in `C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\content.ts`
- [X] T007 [P] Implement prompt token substitution and launch-link builder utilities in `C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\prompting.ts`
- [X] T008 [P] Add route path helpers for the examples list and detail pages in `C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\routes.ts`
- [X] T009 Wire the examples list route and example detail route in `C:\Users\jason\Documents\GitHub\ai-productivity\src\app\routes.tsx`
- [X] T010 Update the main navigation to point the Examples label at the new examples route in `C:\Users\jason\Documents\GitHub\ai-productivity\src\components\Navigation\Navigation.tsx`
- [X] T011 Add foundational tests for catalog selection, prompt substitution, and route wiring in `C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\content.test.ts`, `C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\prompting.test.ts`, and `C:\Users\jason\Documents\GitHub\ai-productivity\src\app\App.test.tsx`

**Checkpoint**: Foundation ready; user stories can be implemented independently

---

## Phase 3: User Story 1 - User Examples Pages (Priority: P1) 🎯 MVP

**Goal**: Let visitors browse a searchable, filterable list of AI prompt examples and open a specific example detail page.

**Independent Test**: From the site navigation, a visitor can open the examples page, view example names and short descriptions, filter the list with free text, and select an example to navigate to its detail page.

### Tests for User Story 1

- [X] T012 [P] [US1] Add examples list page tests for rendering, filtering, and empty results in `C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\ExamplesPage.test.tsx`
- [X] T013 [P] [US1] Add navigation coverage for the Examples destination in `C:\Users\jason\Documents\GitHub\ai-productivity\src\components\Navigation\Navigation.test.tsx`

### Implementation for User Story 1

- [X] T014 [P] [US1] Create the examples list page component in `C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\ExamplesPage.tsx`
- [X] T015 [P] [US1] Create reusable example list item presentation in `C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\ExampleCard.tsx`
- [X] T016 [US1] Implement free-text filtering behavior for title, description, and tags in `C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\ExamplesPage.tsx`
- [X] T017 [US1] Export the examples list page and integrate it into the feature entry point in `C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\index.ts`
- [X] T018 [US1] Update `ToolsPage` replacement content to hand off to the new examples list experience in `C:\Users\jason\Documents\GitHub\ai-productivity\src\features\pages\index.tsx`

**Checkpoint**: User Story 1 is independently functional and can be validated as the MVP

---

## Phase 4: User Story 2 - User Example Details (Priority: P2)

**Goal**: Let visitors read an example prompt, edit wildcard values, choose ChatGPT or Gemini, and launch the resolved prompt in a new window.

**Independent Test**: Visiting an example detail URL shows the prompt content and wildcard inputs, preserves default values when unchanged, updates the target launch link when the provider changes, and opens the selected provider in a new window with the resolved prompt.

### Tests for User Story 2

- [X] T019 [P] [US2] Add example detail page tests for prompt content, wildcard defaults, and provider switching in `C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\ExampleDetailPage.test.tsx`
- [X] T020 [P] [US2] Add launch-link utility tests for resolved prompts and outbound URLs in `C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\prompting.test.ts`
- [X] T021 [P] [US2] Add not-found route coverage for invalid example slugs in `C:\Users\jason\Documents\GitHub\ai-productivity\src\app\App.test.tsx`

### Implementation for User Story 2

- [X] T022 [P] [US2] Create wildcard input controls for prompt variables in `C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\PromptVariableFields.tsx`
- [X] T023 [P] [US2] Create provider selector controls in `C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\ProviderSelector.tsx`
- [X] T024 [P] [US2] Create resolved prompt preview and launch action UI in `C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\PromptLaunchPanel.tsx`
- [X] T025 [US2] Create the example detail route component with slug lookup and not-found handling in `C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\ExampleDetailPage.tsx`
- [X] T026 [US2] Implement wildcard state management, default fallback behavior, and resolved prompt generation in `C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\ExampleDetailPage.tsx`
- [X] T027 [US2] Implement provider selection and outbound new-window launch behavior in `C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\ExampleDetailPage.tsx`
- [X] T028 [US2] Export the example detail page and shared feature components in `C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\index.ts`

**Checkpoint**: User Story 2 works independently on top of the shared foundation and does not require additional features to demonstrate value

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Complete documentation, accessibility, and final verification across stories

- [X] T029 [P] Add feature styling for the examples list and detail flows in `C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\examples.css`
- [X] T030 Update page copy and accessibility labels across the examples feature in `C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\ExamplesPage.tsx`, `C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\ExampleDetailPage.tsx`, and `C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\PromptLaunchPanel.tsx`
- [X] T031 [P] Run and fix full feature verification in `C:\Users\jason\Documents\GitHub\ai-productivity\specs\001-example-pages\quickstart.md`
- [X] T032 [P] Run and fix automated test and build verification for the feature using `C:\Users\jason\Documents\GitHub\ai-productivity\package.json`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1: Setup** has no dependencies and starts immediately.
- **Phase 2: Foundational** depends on Phase 1 and blocks all user story work.
- **Phase 3: User Story 1** depends on Phase 2 and is the recommended MVP.
- **Phase 4: User Story 2** depends on Phase 2 and on the shared examples content/routes, but it can begin after User Story 1 if working sequentially.
- **Phase 5: Polish** depends on the user stories you intend to ship.

### User Story Dependencies

- **US1** depends only on the foundational phase.
- **US2** depends on the foundational phase and benefits from the examples catalog created for US1, but its acceptance test remains independent once the shared foundation exists.

### Within Each User Story

- Test tasks should be written before implementation tasks in the same story.
- Shared UI building blocks marked `[P]` can be created in parallel.
- Route integration and final story wiring happen after the story's components and utilities exist.

### Parallel Opportunities

- `T002`, `T003`, and `T004` can run in parallel.
- `T006`, `T007`, and `T008` can run in parallel after `T005`.
- `T012` and `T013` can run in parallel for US1.
- `T014` and `T015` can run in parallel for US1.
- `T019`, `T020`, and `T021` can run in parallel for US2.
- `T022`, `T023`, and `T024` can run in parallel for US2.
- `T029`, `T031`, and `T032` can run in parallel during polish.

---

## Parallel Example: User Story 1

```text
Task: "T012 [US1] Add examples list page tests in C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\ExamplesPage.test.tsx"
Task: "T013 [US1] Add navigation coverage in C:\Users\jason\Documents\GitHub\ai-productivity\src\components\Navigation\Navigation.test.tsx"
Task: "T014 [US1] Create the examples list page component in C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\ExamplesPage.tsx"
Task: "T015 [US1] Create reusable example list item presentation in C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\ExampleCard.tsx"
```

## Parallel Example: User Story 2

```text
Task: "T019 [US2] Add example detail page tests in C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\ExampleDetailPage.test.tsx"
Task: "T020 [US2] Add launch-link utility tests in C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\prompting.test.ts"
Task: "T022 [US2] Create wildcard input controls in C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\PromptVariableFields.tsx"
Task: "T023 [US2] Create provider selector controls in C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\ProviderSelector.tsx"
Task: "T024 [US2] Create resolved prompt preview and launch action UI in C:\Users\jason\Documents\GitHub\ai-productivity\src\features\examples\PromptLaunchPanel.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1 and Phase 2.
2. Complete Phase 3 for the examples list flow.
3. Validate filtering, navigation, and example selection before moving on.

### Incremental Delivery

1. Deliver the searchable examples list as the MVP.
2. Add the example detail, wildcard substitution, and provider launch flow.
3. Finish with styling, accessibility, and full verification.

### Parallel Team Strategy

1. One developer can own shared catalog, routing, and prompt utilities in Phase 2.
2. After foundation is ready, one developer can complete the examples list while another prepares detail-page tests and UI building blocks.
3. Polish tasks can be split between UI refinement and verification.

---

## Notes

- All tasks follow the required checklist format.
- `[P]` tasks are limited to work that can proceed without file conflicts on incomplete dependencies.
- User-story tasks include `[US1]` or `[US2]` labels for traceability.
- The suggested MVP scope is Phase 3 only.
