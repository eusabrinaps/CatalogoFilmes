import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './assets/Componentes/Inicio'
import Adicionar from './assets/Componentes/Adicionar'
import Alterar from './assets/Componentes/Alterar'
import Ler from './assets/Componentes/Ler'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/ler/:id' element={<Ler/>} />
        <Route path='/adicionar' element={<Adicionar />} />
        <Route path='/alterar/:id' element={<Alterar/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
