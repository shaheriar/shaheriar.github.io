import { useEffect } from 'react'
import { metadata } from '../config/metadata'

const MetaTags = () => {
  useEffect(() => {
    // Update Open Graph image
    const updateMetaTag = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`)
      if (meta) {
        meta.setAttribute('content', content)
      } else {
        meta = document.createElement('meta')
        meta.setAttribute('property', property)
        meta.setAttribute('content', content)
        document.head.appendChild(meta)
      }
    }

    // Update Twitter image
    const updateTwitterMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`)
      if (meta) {
        meta.setAttribute('content', content)
      } else {
        meta = document.createElement('meta')
        meta.setAttribute('name', name)
        meta.setAttribute('content', content)
        document.head.appendChild(meta)
      }
    }

    // Update structured data
    const updateStructuredData = () => {
      const script = document.querySelector('script[type="application/ld+json"]')
      if (script) {
        const data = JSON.parse(script.textContent)
        data.image = metadata.image
        script.textContent = JSON.stringify(data)
      }
    }

    // Update all meta tags with the correct image URL
    updateMetaTag('og:image', metadata.image)
    updateMetaTag('og:image:alt', 'Shaheriar Malik Portfolio Website')
    updateTwitterMeta('twitter:image', metadata.image)
    updateTwitterMeta('twitter:image:alt', 'Shaheriar Malik Portfolio Website')
    updateStructuredData()
  }, [])

  return null // This component doesn't render anything
}

export default MetaTags
