import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
)
