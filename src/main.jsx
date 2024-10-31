import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Cabecalho from './assets/components/cabecalho.jsx';
import ImcCalculadora from './assets/components/ImcCalculadora.jsx';
import Rodape from './assets/components/rodape.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cabecalho/>
    <ImcCalculadora/>
    <Rodape/>
  </StrictMode>,
)
