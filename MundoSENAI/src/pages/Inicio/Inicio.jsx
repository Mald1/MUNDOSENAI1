import React from "react";
import './Inicio.css';
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div className="inicio-container">
      <h1>Organização de Eventos - SENAI</h1>
      <p>Bem-vindo ao sistema de organização de eventos do SENAI. Aqui você pode gerenciar alunos, eventos e refeições de forma eficiente.</p>
      <Link to="/logs"><button className="logs-button">Acessar Logs</button></Link>
    </div>
  );
}

export default Inicio;
