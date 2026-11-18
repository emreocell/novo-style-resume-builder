import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Served from GitHub Pages at https://parvez3019.github.io/novo-style-resume-builder/
export default defineConfig({
  base: '/novo-style-resume-builder/',
  plugins: [react()],
})
