# Spec: AI + Spec-Driven Development Website (v1)

## 1. Purpose
Create a public website that teaches Spec-Driven Development (SDD) with practical examples, templates, and a repeatable workflow that integrates:
- Spec Kit (spec scaffolding + spec workflow)
- Codex (code generation)
- VS Code on Windows/PowerShell (authoring environment)

The site should function as both:
1) A learning resource for SDD and AI-assisted engineering
2) A living example of SDD applied to a real project (this repo)

## 2. Target Audiences

### Primary
1) Software engineers and tech leads (ICs)
- Want a practical workflow, templates, and examples they can copy

2) Engineering managers and directors
- Want an operating model to reduce ambiguity and align teams
- Care about repeatability, quality, and velocity

### Secondary
3) New-to-SDD learners
- Want a clear intro, glossary, and “do this first” path

4) Tool-curious builders
- Want to see how Spec Kit + Codex can work together in a real repo

## 3. Value Proposition
Visitors should leave with:
- A clear mental model of SDD
- A step-by-step workflow they can adopt
- Templates they can copy directly
- Confidence that “AI coding” can be disciplined and high-quality

## 4. Information Architecture (v1)

### Required Top-Level Nav
- Home
- Learn SDD
- Tools
- Templates
- Case Studies
- Blog
- About

### Page Requirements

#### Home
- One-paragraph explanation of SDD
- Clear calls to action:
  - “Start Here: 30 minutes”
  - “Full Workflow”
  - “Templates”
- Brief explanation of how AI fits (Codex as executor, specs as source of truth)

#### Learn SDD (hub page)
- Overview of SDD phases:
  - Constitution
  - Spec
  - Clarify
  - Plan
  - Tasks
  - Implement
- Links to the “30-minute intro” and “full workflow” pages

#### Learn SDD: 30-minute Intro
- High-level explanation
- A minimal example of:
  - A small spec
  - A small tasks list
  - What generated output looks like
- “When to use SDD” and “when not to”

#### Learn SDD: Full Workflow
- Step-by-step workflow that matches this repo
- Shows how Spec Kit artifacts relate:
  - constitution.md
  - spec.md
  - plan.md
  - tasks.md
- Shows how Codex is used to implement tasks
- Includes “common failure modes” and how to avoid them

#### Tools
- Spec Kit (what it does, where it fits)
- Codex (what it does, where it fits)
- VS Code setup (Windows + PowerShell assumptions)
- Optional: recommended extensions/settings (minimal)

#### Templates
Provide copyable templates (markdown) for:
- Constitution
- Feature spec
- Plan
- Tasks
- Definition of Done checklist

#### Case Studies
At least 2 real examples from this repo:
- “How we built the site foundation using SDD”
- “How we added a feature end-to-end using SDD”
Each case study must link to the relevant spec/plan/tasks commits or files.

#### Blog
- Simple list of posts (reverse chronological)
- Each post includes title, date, reading time (if feasible), tags

#### About
- What the site is
- Who it’s for
- How to use the repo as a template
- Contact link or social link

## 5. Core User Journeys (v1)

1) “I want an intro quickly”
- From Home -> 30-minute intro
- Leaves with a lightweight workflow + next steps

2) “I want the full workflow”
- From Home or Learn hub -> Full workflow
- Leaves with templates + a step-by-step path to adopt

3) “I want templates I can copy”
- From nav -> Templates
- Leaves with markdown templates and usage notes

4) “I want proof this works”
- From Home -> Case Studies
- Leaves with confidence from real repo examples

## 6. Non-Functional Requirements

### Performance
- Pages must load quickly (static-first)
- Avoid heavy client-side JS unless necessary

### Accessibility
- Semantic HTML structure
- Keyboard navigable
- Reasonable contrast
- Alt text for images

### SEO
- Unique page titles and meta descriptions
- Social preview metadata (basic)
- Clean URLs

### Publishing / Maintenance
- Content is markdown-based
- Adding a new blog post requires minimal steps
- Low operational overhead (static deploy preferred)

### Reliability
- Build must be deterministic
- Linting/formatting should be consistent

## 7. Out of Scope (v1)
- User accounts or authentication
- Paid products or checkout
- Community features (comments, forums)
- Advanced search (basic site search optional)
- Multi-language support

## 8. Acceptance Criteria (v1)

### Content + Structure
- All required top-level pages exist and are reachable from nav
- “30-minute intro” and “full workflow” pages exist and are linked prominently
- Templates page contains at least 4 copyable templates

### Quality
- Site builds successfully from a clean checkout
- No broken links in primary navigation
- Mobile layout is readable and usable

### Accessibility
- Pages are usable via keyboard navigation
- Images have alt text where applicable

### SEO
- Each page has a distinct title
- Home page has a meta description

### Demonstration of SDD
- Repo contains constitution + v1 spec + plan + tasks committed
- Case studies reference real spec/task artifacts in the repo