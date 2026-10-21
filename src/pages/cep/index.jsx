import { use, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './index.scss';

export default function CEPZIO(){
    const [cep, setcep] = useState( );
    const [cepser, setcepser] = useState('');

    async function BuscarCep(){
        let url= `https://viacep.com.br/ws/${cepser}/json/`;
        let resp= await axios.get(url);

        let dados = resp.data;
        let msg= `CEP: ${dados.cep}, Bairro: ${dados.bairro}, Nome:${dados.logradouro}`;
        setcep(msg);
    }

    return(
        <div className='principal'>
            <div className='separ'>
                <h1>SUA RUA: {cep}</h1>
                <input type="text" value={cepser} placeholder='coloque seu cep aqui' onChange={(e) => setcepser(e.target.value)} />
                <button onClick={BuscarCep}>Procurar CEP</button>
            </div>
        </div>
    )
}