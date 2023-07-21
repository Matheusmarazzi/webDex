import React from "react";
import { Link } from "react-router-dom";
import './Erro.css';


function Erro(){
    return(
        <div className="erroContainer">
            <h1>404</h1>
            <h3>Pagina não encontrada</h3>
            <Link to="/">Voltar para a pagina inicial</Link>
        </div>
    )
}
export default Erro;