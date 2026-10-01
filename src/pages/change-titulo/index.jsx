import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Mudartitle() {
    const [Titulin, SetTitulin] = useState('Escreva um titulo');
    const [Cor, SetCor] = useState('');

    function mudartitulo(e){
        let titulo = e.target.value;
        SetTitulin(titulo);
    }

    function backgroundizito(e){
        let cor= e.target.value;
        SetCor(cor)
    };
    

    return(
        <div className='principal' style={{background:Cor}}>
            <h1 className='Apresentacao'>Vamos Criar um Titulo?</h1>

            <div className='div-separa'>
                <h1>{Titulin}</h1>

                <input type="text" placeholder='mude o titulo' onChange={mudartitulo} />

            </div>

            <div>
                <h1>Sua cor é: {Cor}</h1>
                <input type="color" onChange={backgroundizito}  />
            </div>
        </div>
    )
}