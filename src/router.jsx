import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './pages/app/App.jsx';
import './pages/app/App.scss';
import Contato from './pages/contato/index.jsx';
import './pages/contato/index.scss';
import Contator from './pages/contadorNovo/index.jsx';
import './pages/contadorNovo/index.scss';

export default function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Contador" element={<Contator />} />
            <Route path="/contatos" element={<Contato />} />
        </Routes>
        </BrowserRouter>
      )
}