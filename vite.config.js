import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'Root/LeaderSearch/',
  plugins: [react()],
})
// export default defineConfig({
// plugins: [react()],
// })