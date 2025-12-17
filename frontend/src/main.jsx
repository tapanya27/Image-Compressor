import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import App from './App.jsx'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

import SignInPage from './pages/Login.jsx'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}


createRoot(document.getElementById('root')).render(
  
     <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>
      <Routes>
    <Route path="/" element={<App />} />
        <Route path="/sign-in" element={<SignInPage />} />
    </Routes>
    </BrowserRouter>
    </ClerkProvider>
  
)
