import { RouterProvider } from 'react-router-dom'
import router from './routes'
// import { AuthProvider } from './hooks/useAuth'

function App() {
  return (
    
    // <AuthProvider> // Uncomment when AuthProvider is ready
    <RouterProvider router={router} />
    
    // </AuthProvider>
  )
}

export default App
