import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
// index.html is pre-rendered at build time (see scripts/prerender.mjs) -> hydrate when content exists
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
