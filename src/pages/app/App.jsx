import './App.scss';
import { Link } from 'react-router-dom';


export default function App() {

    function Passando(){
      alert("passou o mouse");
    }

    function Digitando(evento){
      let digitado= evento.target.value
      alert(`você alterou ${digitado}`);
    }

  return (
    <div className="App">
        <h1>Olá faça sua inscrição</h1>

        <div className='Formulario'>
          <div className='Eveling'>

            <select name="" id="">
              <option value=""></option>
              <option value="">1- Um</option>
              <option value="">2- Dois</option>
              <option value="">3- Três</option>
              <option value="">4- Quatro</option>
            </select>

            <input onChange={Digitando} type="text" name="" className='Input' />

            <button onMouseMove={Passando}> Clique aqui </button>

          </div>

        </div>
        <Link to='/contatos'>Contato</Link>
    </div>
  );
}
