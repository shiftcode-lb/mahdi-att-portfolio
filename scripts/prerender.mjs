// Injects server-rendered HTML into dist/index.html so crawlers & AI agents that don't run JS still see all content.
import { build } from 'vite'
import { readFile, writeFile, rm } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import path from 'node:path'

const ssrDir = 'dist-ssr'
await build({ build: { ssr: 'src/entry-server.jsx', outDir: ssrDir, emptyOutDir: true, rollupOptions: { output: { entryFileNames: 'entry-server.mjs' } } }, logLevel: 'warn' })
const { render } = await import(pathToFileURL(path.resolve(ssrDir, 'entry-server.mjs')).href)
const html = await readFile('dist/index.html', 'utf8')
await writeFile('dist/index.html', html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`))
await rm(ssrDir, { recursive: true, force: true })
console.log('prerendered dist/index.html')
