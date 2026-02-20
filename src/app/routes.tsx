import { RouteObject } from 'react-router-dom'
import {
  HomePage,
  BlogPage,
  LearnPage,
  ToolsPage,
  TemplatesPage,
  CaseStudiesPage,
} from '../features/pages'

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
    path: '/templates',
    element: <TemplatesPage />,
  },
  {
    path: '/case-studies',
    element: <CaseStudiesPage />,
  },
]
