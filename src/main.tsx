import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import Login from './Login'
// import { Welcome } from './welcome'
// import Dashboard from './Dashboard'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Login />
    {/* Switch components here: <Welcome /> or <Dashboard /> */}
  </StrictMode>,
)
