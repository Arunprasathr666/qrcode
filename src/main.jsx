import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './QrCode.css'
import App from './App.jsx'
import { QrCode } from './qrcode.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QrCode/>
    <App />
  </StrictMode>,
)
