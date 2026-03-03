import { Link } from 'react-router-dom'
import type { ExampleEntry } from './types'
import { getExampleDetailPath } from './routes'

interface ExampleCardProps {
  example: ExampleEntry
}

export const ExampleCard = ({ example }: ExampleCardProps) => (
  <article className="example-card">
    <div className="example-card__header">
      <h2>{example.name}</h2>
      <p>{example.shortDescription}</p>
    </div>
    <ul className="example-card__tags" aria-label={`${example.name} tags`}>
      {example.tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
    <Link className="example-card__link" to={getExampleDetailPath(example.slug)}>
      Open example
    </Link>
  </article>
)
