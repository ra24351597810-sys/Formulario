import './index.scss';
import { Link } from 'react-router-dom';

export default function Contato() {

  function Reserva(){
    alert("Você solicitou uma reserva")
  }

  function Novidades(){
    alert("Você quer receber novidades")
  }

  function Digitando(evento){
      let digitado= evento.target.name
      alert(`você alterou ${digitado}`);
    }

  return (
    <div className="Principal">

      <h1>Contato</h1>

      <form className="formulario">

        <div className="campo">
          <label>Nome</label>
          <input type="text" />
        </div>

        <div className="campo">
          <label>Sobrenome</label>
          <input type="text" />
        </div>

        <div className="campo">
          <label>Telefone</label>
          <input type="tel" />
        </div>

        <div className="campo">
          <label>Data e horário</label>

          <div className="data-hora">

            <div className="campo">
              <label>Dia</label>
              <input type="number" />
            </div>

            <div className="campo">
              <label>Mês</label>
              <select>
                <option value=""></option>
                <option >Janeiro</option>
                <option>Fevereiro</option>
                <option>Março</option>
                <option>Abril</option>
                <option>Maio</option>
                <option>Junho</option>
                <option>Julho</option>
                <option>Agosto</option>
                <option>Setembro</option>
                <option>Outubro</option>
                <option>Novembro</option>
                <option>Dezembro</option>
              </select>
            </div>

            <div className="campo">
              <label>Ano</label>
              <input type="number" />
            </div>

            <div className="campo">
              <label>Horário</label>
              <input type="time" />
            </div>

          </div>
        </div>

        <div className="preferencia">
          <label>Preferência de lugar</label>

          <div className="opcao">
            <input onClick={Digitando} type="radio" name="Area interna" />
            <span>Área interna</span>
          </div>

          <div className="opcao">
            <input onClick={Digitando} type="radio" name="Area externa" />
            <span>Área externa</span>
          </div>
        </div>

        <div className="campo">
          <label>Pedidos adicionais</label>
          <textarea></textarea>
        </div>

        <div className="newsletter">
          <input onClick={Novidades} type="checkbox" id="newsletter" />

          <label htmlFor="newsletter">sim, quero receber novidades por e-mail.</label>
        </div>

        <button type="submit" onClick={Reserva} className="botao">Solicitar reserva</button>

      </form>

      <Link className="voltar" to="/">Voltar para o início</Link>
      <Link className="voltar" to="/contador">Contador</Link>

    </div>
  );
}