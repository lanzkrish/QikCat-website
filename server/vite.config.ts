// vite.config.ts (server section)
server: {
  proxy: { '/api': 'http://localhost:4000' }
}