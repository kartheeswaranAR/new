import { useEffect } from 'react'
import { AppRoutes } from './routes/AppRoutes'
import { useUI } from './hooks/useUI'

function App() {
  const { theme } = useUI()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return <AppRoutes />
}

export default App
