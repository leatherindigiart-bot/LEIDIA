import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// !!! IMPORTANT !!!
// Replace 'NOME_DO_SEU_REPOSITORIO' with the exact name of your GitHub repository.
// For example, if your repo URL is 'https://github.com/user/my-cool-site',
// the REPO_NAME should be 'my-cool-site'.
const REPO_NAME = 'LEIDIA';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/${REPO_NAME}/`,
})
