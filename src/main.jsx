import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import 'aos/dist/aos.css'
import AOS from 'aos'

AOS.init({
  duration: 1000,
  once: false,
  mirror: true,
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
