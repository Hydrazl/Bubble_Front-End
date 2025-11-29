import './App.css'
import AppRoutes from './routes'
import { ThemeProvider } from './utils/theme/ThemeContext'
import { PostProvider } from './context/PostContext'

function App() {
  return (
    <ThemeProvider>
      <PostProvider>
        <AppRoutes />
      </PostProvider>
    </ThemeProvider>
  )
}

export default App
