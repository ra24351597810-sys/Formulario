import { useState } from "react";
import Menu from '../../components/menu/index.jsx';

import './index.scss';

export default function TESTARCOMPO(){
    const [Numer1, setNumer1] = useState('');
    const [Numer2, setNumer2] = useState('');
    const [Resp, setResp] = useState('');

    function somar(){
        setResp(Number(Numer1) + Number(Numer2));
    }

    return(
        
        <div className="principal">
            <Menu />
            <h1>{Resp}</h1>
            <input type="number" onChange={(e) => setNumer1(e.target.value)} />
            <input type="number" onChange={(e) => setNumer2(e.target.value)} />

            <button onClick={somar}>Somar</button>
        </div>
    )
}