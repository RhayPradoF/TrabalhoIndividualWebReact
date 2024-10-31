import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Rodape from './assets/components/rodape.jsx'
import Cabecalho from './assets/components/cabecalho.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cabecalho/>
    <App />
    <Rodape/>
  </StrictMode>,
)
