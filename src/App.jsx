import './App.css'
import AppRoutes from './routes'
import { ThemeProvider } from './utils/theme/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
