import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function normalizeBasePath(basePath: string | undefined) {
  if (!basePath || basePath === '/') {
    return '/'
  }

  const trimmed = basePath.replace(/^\/+|\/+$/g, '')
  return `/${trimmed}/`
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: normalizeBasePath(process.env.BASE_PATH),
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
