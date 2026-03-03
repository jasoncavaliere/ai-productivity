import { useState } from 'react'
import { ExampleCard } from './ExampleCard'
import { filterExamples } from './content'
import './examples.css'

export const ExamplesPage = () => {
  const [query, setQuery] = useState('')
  const examples = filterExamples(query)

  return (
    <section className="examples-page">
      <header className="examples-page__hero">
        <p className="examples-page__eyebrow">AI prompt examples</p>
        <h1>Examples</h1>
        <p className="examples-page__intro">
          Browse prompt patterns you can inspect, adapt, and launch in your
          preferred LLM.
        </p>
      </header>

      <label className="examples-page__search" htmlFor="examples-search">
        Search examples
        <input
          id="examples-search"
          name="examples-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by title, description, or tag"
        />
      </label>

      {examples.length > 0 ? (
        <div className="examples-page__grid">
          {examples.map((example) => (
            <ExampleCard key={example.slug} example={example} />
          ))}
        </div>
      ) : (
        <div className="examples-page__empty" role="status">
          <h2>No examples matched that search</h2>
          <p>Try a broader term or clear the filter to browse the full library.</p>
        </div>
      )}
    </section>
  )
}
