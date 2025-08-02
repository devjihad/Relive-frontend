import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Privider from './Provider/Privider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Privider>
      <App />
    </Privider>
  </StrictMode>,
)
