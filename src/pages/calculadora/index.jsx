import { use, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export default function Calculadora() {

    const [valor1, setValor1] = useState("");
    const [valor2, setValor2] = useState("");
    const [resp, setresp] = useState("");
    const [resptitu, setresptitu] = useState(false);

    function somar() {
        const resultado = Number(valor1) + Number(valor2);
        setresp(resultado);
    }

    function mudarTitulo(e) {
        let mudado = e.target.checked;
        setresptitu(mudado);
    }

return(
    <div className='Principa'>
        <h1>Calculadora de Somar</h1>

        <div className='div-calculatos'>

            <input type="number" placeholder="Digite o primeiro valor" value={valor1} onChange={(e) => setValor1(e.target.value)} />

            <input type="number" placeholder="Digite o segundo valor" value={valor2} onChange={(e) => setValor2(e.target.value)} />

                <div>resultado: {resp}</div>

            <button onClick={somar}>Somar</button>
        </div>

        <div className='RDJM'>
            <h1>Você gosta de Azeitona? {resptitu ? "Sim" : "Não"}</h1>
            <input className='InputCheck' type="checkbox" value={resptitu} onChange={mudarTitulo} />
        </div>

    </div>
)
}