# Feature Specification: [FEATURE NAME]

**Feature Branch**: `[003-example-pages]`  
**Created**: 3-2-2026  
**Status**: Draft  
**Input**: User description: "$ARGUMENTS"

## User Scenarios & Testing *(mandatory)*



### User Story 1 - User Exmaples pages (Priority: P1)

Users brows the exmaples page to see various AI prompting examples

**Why this priority**: This is a primary feature of the site - to inform and inspire AI usage

**Independent Test**: Exmaples are displayed in a row that is filterable and searchable

**Acceptance Scenarios**:

1. **Given** a site user, **When** coming to the examples page, **Then** The suer should be presented with a filterable list of examples
2. **Given** a site user, **When** selecting an LLM exmaple, **Then** You shoudl be taken to the exmaple details page. 
2. **Given** a site user, **When** Viewing the list of LLM examples, **Then** You shoudl be able to filter with a wildcard text
2. **Given** a site user, **When** Viewing the list of LLM examples, **Then** You shoudl see the name and short description of hte example

---

### User Story 2 - User Example Details (Priority: P2)

A user should see the exmaple details.

**Why this priority**: This is the second step on the customer journey. 

**Independent Test**: Exmaples should deep link, and they should provide a link to the LLM with preserved text form the example

**Acceptance Scenarios**:

1. **Given** a user, **When** viewing an LLM example prompt, **Then** the user should see a name, description, and prompt text
1. **Given** a user, **When** viewing an LLM example prompt, **Then** the user should have inputs representing wildcards in the prompt
1. **Given** a user, **When** viewing an LLM example prompt, **Then** the user should be able to select a prompt from ChatGPT, Gemini as targets for the deep link.  
1. **Given** a user, **When** selecting an LLM , **Then** the deep link target shoudl change to the selected LLM
1. **Given** a user, **When** clicking the "Go" button , **Then** the deep link target shoudl redirect in a new window
1. **Given** a user, **When** clicking the "Go" button , **Then** the deep link target shoudl redirect to the selected LLM
1. **Given** a user, **When** clicking the "Go" button , **Then** the deep link target shoudl prepopulate with the example prompt
1. **Given** a user, **When** clicking the "Go" button , **Then** the deep link target shoudl prepopulate with the user replacement text in the prompt

---

## Edge Cases
 - when a user is viewing the details, if no override text was provided, leave the default value in place. 

## Requirements *(mandatory)*

<!--
  ACTION REQUIRED: The content in this section represents placeholders.
  Fill them out with the right functional requirements.
-->

### Functional Requirements

- **FR-001**: System MUST deep link to selected LLM websites
- **FR-002**: System MUST allow users to select an LLM for testing
- **FR-003**: Users MUST be able to replace text in a prompt example 
- **FR-004**: System MUST open dexternal deep links in a new window


### Key Entities *(include if feature involves data)*

- **[Entity 1]**: Example (  name,description, promptText) 

## Success Criteria *(mandatory)*

<!--
  ACTION REQUIRED: Define measurable success criteria.
  These must be technology-agnostic and measurable.
-->

### Measurable Outcomes

- **SC-001**: Users can view a list of AI examples
- **SC-002**: Users can select an AI example
