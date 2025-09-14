import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Substitua 'NOME_DO_REPOSITORIO' pelo nome do seu repositório no GitHub.
// Ex: se a URL for github.com/seu-usuario/meu-site, o nome é 'meu-site'.
const REPO_NAME = 'https://github.com/leatherindigiart-bot/LEIDIA.git'; 

export default defineConfig({
  plugins: [react()],
  base: `/${REPO_NAME}/`, // Essencial para o GitHub Pages!
})

