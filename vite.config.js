import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'metadata-plugin',
      writeBundle(options, bundle) {
        // This runs after the bundle is written
        const htmlFile = path.join(options.dir, 'index.html')
        const assetsDir = path.join(options.dir, 'assets')
        
        if (fs.existsSync(htmlFile) && fs.existsSync(assetsDir)) {
          // Find the website-view image file
          const files = fs.readdirSync(assetsDir)
          const websiteViewFile = files.find(file => file.startsWith('website-view-'))
          
          if (websiteViewFile) {
            // Read the HTML file
            let htmlContent = fs.readFileSync(htmlFile, 'utf8')
            
            // Replace all occurrences of the original path with the hashed path
            htmlContent = htmlContent.replace(
              /\/src\/assets\/website-view\.png/g,
              `/assets/${websiteViewFile}`
            )
            
            // Write the updated HTML back
            fs.writeFileSync(htmlFile, htmlContent)
            console.log(`Updated HTML with hashed image: ${websiteViewFile}`)
          }
        }
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true,
  },
})
