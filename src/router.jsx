import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './pages/app/App.jsx';
import Contato from './pages/contato/index.jsx';
import Contator from './pages/contadorNovo/index.jsx';
import Mudartitle from './pages/change-titulo/index.jsx';
import Mudartitulo2 from './pages/mudar-titulo-botao/index.jsx';
import Calculadora from './pages/calculadora/index.jsx';
import PagGina from './pages/po/index.jsx';
import TESTARCOMPO from './pages/testcompo/index.jsx';
import CEPZIO from './pages/cep/index.jsx';

export default function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Contador" element={<Contator />} />
            <Route path="/contatos" element={<Contato />} />
            <Route path="/titulo" element={<Mudartitle />} />
            <Route path="/titulo2" element={<Mudartitulo2 />} />
            <Route path="/calculadora" element={<Calculadora />} />
            <Route path="/Test" element={<PagGina />} /> 
            <Route path="/compo" element={<TESTARCOMPO />} />
            <Route path="/cep" element={<CEPZIO />} />
        </Routes>
        </BrowserRouter>
      )
}