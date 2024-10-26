import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ProviderAuth } from './contexto/authContext.tsx'
import { ProveiderModalContext } from './contexto/modalContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProveiderModalContext>
    <ProviderAuth>
    <App />
    </ProviderAuth>
    </ProveiderModalContext>
  </StrictMode>,
)
