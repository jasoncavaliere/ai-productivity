import { RouteObject } from 'react-router-dom'
import {
  HomePage,
  BlogPage,
  LearnPage,
  ToolsPage,
  TemplatesPage,
  CaseStudiesPage,
} from '../features/pages'
import { ExampleDetailPage, ExamplesPage } from '../features/examples'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/blog',
    element: <BlogPage />,
  },
  {
    path: '/learn',
    element: <LearnPage />,
  },
  {
    path: '/tools',
    element: <ToolsPage />,
  },
  {
    path: '/examples',
    element: <ExamplesPage />,
  },
  {
    path: '/examples/:slug',
    element: <ExampleDetailPage />,
  },
  {
    path: '/templates',
    element: <TemplatesPage />,
  },
  {
    path: '/case-studies',
    element: <CaseStudiesPage />,
  },
]
