import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  const baseUrl = 'https://traneasy.com'
  const locales = ['zh', 'en', 'es', 'pt', 'id', 'ja', 'ko', 'fr', 'de', 'vi', 'th']
  const routes = ['', 'blog', 'features', 'about', 'pricing', 'privacy', 'terms']
  const blogPosts = [
    'how-ai-translation-improves-work-efficiency',
    'top-5-scenarios-for-realtime-translation',
    'traneasy-vs-traditional-translation-tools',
    'multilingual-meetings-best-practices',
    'getting-started-with-traneasy',
    'windows-real-time-translation-guide',
  ]

  const now = new Date().toISOString().split('T')[0]
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

  for (const locale of locales) {
    for (const route of routes) {
      const path = route ? `/${locale}/${route}` : `/${locale}`
      const priority = route === '' ? '1.0' : route === 'blog' ? '0.8' : '0.7'
      const freq = route === 'blog' ? 'weekly' : 'monthly'
      xml += `  <url><loc>${baseUrl}${path}</loc><lastmod>${now}</lastmod><changefreq>${freq}</changefreq><priority>${priority}</priority></url>\n`
    }
    for (const slug of blogPosts) {
      xml += `  <url><loc>${baseUrl}/${locale}/blog/${slug}</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>\n`
    }
  }

  xml += '</urlset>'

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  })
})
