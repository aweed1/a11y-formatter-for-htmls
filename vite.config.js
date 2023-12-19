import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/a11y-formatter-for-htmls/",
  plugins: [react()]
})
