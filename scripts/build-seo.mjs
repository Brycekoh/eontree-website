// Post-build: give every route its own static HTML file with correct meta
// tags, and emit a sitemap.
//
// A single-page app serves one index.html for every URL, so without this
// step all eight pages share one <title> and description — which is what
// search results and link previews actually read. Crawlers and social
// scrapers get the right tags here on first byte, without needing to
// execute any JavaScript.

import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { pages, SITE_URL } from '../src/data/seo.js'

const DIST = 'dist'
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;')

const swap = (html, { title, description, url }) =>
  html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`)
    .replace(
      /(<meta\s+name="description"\s+content=")[\s\S]*?(")/,
      `$1${esc(description)}$2`,
    )
    .replace(
      /(<link\s+rel="canonical"\s+href=")[^"]*(")/,
      `$1${esc(url)}$2`,
    )
    .replace(
      /(<meta\s+property="og:title"\s+content=")[\s\S]*?(")/,
      `$1${esc(title)}$2`,
    )
    .replace(
      /(<meta\s+property="og:description"\s+content=")[\s\S]*?(")/,
      `$1${esc(description)}$2`,
    )
    .replace(/(<meta\s+property="og:url"\s+content=")[^"]*(")/, `$1${esc(url)}$2`)

const template = await readFile(join(DIST, 'index.html'), 'utf8')

let written = 0
for (const page of pages) {
  const url = `${SITE_URL}${page.path}`
  const html = swap(template, { ...page, url })

  // Fail loudly rather than shipping eight identical pages.
  for (const [label, needle] of [
    ['<title>', `<title>${esc(page.title)}</title>`],
    ['description', esc(page.description)],
    ['canonical', `href="${url}"`],
  ]) {
    if (!html.includes(needle)) {
      throw new Error(`build-seo: could not set ${label} for ${page.path}`)
    }
  }

  const file = page.path === '/' ? 'index.html' : `${page.path.slice(1)}.html`
  await writeFile(join(DIST, file), html, 'utf8')
  written += 1
}

const today = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) =>
      `  <url>\n    <loc>${SITE_URL}${p.path}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${p.priority}</priority>\n  </url>`,
  )
  .join('\n')}
</urlset>
`
await writeFile(join(DIST, 'sitemap.xml'), sitemap, 'utf8')

console.log(`build-seo: ${written} route pages + sitemap.xml`)
