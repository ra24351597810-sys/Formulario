import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export default function Contador() {
  const [contador, setContador] = useState(0);


  function Mais() {
    if(contador < 100){
        setContador(contador + 1);
  }
}

  function Menos() {
    if(contador > 0){
        setContador (contador - 1);
    }
  }

  return (
    <div className="Contador">
      <section className='sectionzita'>
        <p>Contador</p>
        <div className='Containerzin'>
          <button onClick={Mais}>+</button>
          <h2>{contador}</h2>
          <button onClick={Menos}>-</button>
        </div>
      </section>
      <Link to='/'>Pagina inicial</Link>
      <Link to='/contatos'>Contatos</Link>
    </div>
  );
}
