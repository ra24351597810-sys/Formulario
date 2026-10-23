import { useState } from "react";
import './calcu.scss';

export default function Calcullatoos(){
    const IngressoPreco = 30;

    const [QTD, setQTD] = useState(1);
    const [Total, setTotal] = useState('');
    const [Meia, setMeia] = useState(false);
    const [Cupom, setCupom] = useState("");

    let Preco = IngressoPreco * QTD;

    function Calculattus(){
        if(Meia===true){
            Preco= Preco * 0.5;
        }
        if(Cupom==="QUERO10"){
            Preco = Preco - 10;
        }
        if(Cupom==="QUERO5"){
            Preco= Preco - 5;
        }

        setTotal(Preco)
    }


    return(
        <div className="PR">
            
            <div className="quadrada">
                <header>
                    <h1>Calculadora de Ingressos</h1>
                </header>
                <input type="text" value={QTD} placeholder="Quantidade de Ingressos" onChange={(e)=> setQTD(e.target.value)} />
                
                
                <div className="PPQ"><input type="checkbox" onChange={(e)=> setMeia(e.target.checked)} /> <p>Meia entrada</p></div>
                <input type="text" value={Cupom} placeholder="Cupom" onChange={(e)=> setCupom(e.target.value)} />
                <button onClick={Calculattus}>Calculo</button>
                <h3>Total é: {Total}</h3>
            </div>
        </div>
    )
}

