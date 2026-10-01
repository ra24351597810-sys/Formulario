import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Mudartitulo2() {
    const [Titulin, SetTitulin] = useState('');
    const [Titulinoo, SetTitulinoo] = useState('Escreva um titulo');
    
    function mudartitulo(e){
        SetTitulin(e.target.value);
    }


    function aplicar (){
        SetTitulinoo(Titulin);
    }

    

    return(
        <div className='principal'>
            <h1 className='Apresentacao'>Vamos Criar um Titulo?</h1>

            <div className='div-separa'>
                <h1>{Titulinoo}</h1>

                <input type="text" placeholder='mude o titulo' value={Titulin} onChange={mudartitulo} />
                <button onClick={aplicar}>Aplique seu Titulo</button>
            </div>

            
        </div>
    )
}