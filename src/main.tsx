import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './provider/theme-provider.tsx'
import { RouterProvider } from 'react-router-dom'
import { rootRouter } from './routes/routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={rootRouter} />
    </ThemeProvider>
  </StrictMode>
  ,
)
