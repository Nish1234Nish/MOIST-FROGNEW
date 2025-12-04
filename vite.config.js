export default {
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html'
    }
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: []
  },
  optimizeDeps: {
    esbuild: {
      loader: {
        '.js': 'jsx',
        '.jsx': 'jsx'
      }
    }
  }
}
