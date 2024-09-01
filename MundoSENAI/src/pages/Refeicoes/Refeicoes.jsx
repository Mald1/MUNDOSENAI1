import React, { useState } from "react";
import './Refeicoes.css';

function Refeicoes({ eventos }) {
  const [selectedEvento, setSelectedEvento] = useState("");

  const handleEventoChange = (e) => {
    setSelectedEvento(e.target.value);
  };

  const handleGerarLogClick = () => {
    if (selectedEvento) {
      // Implementar a lógica para gerar o log das refeições
      alert(`Gerando LOG das refeições para o evento: ${selectedEvento}`);
    } else {
      alert("Por favor, selecione um evento.");
    }
  };

  return (
    <div className="refeicoes-container">
      <h1>Refeições</h1>
      <div className="evento-select-container">
        <label htmlFor="eventoSelect">Selecione o Evento:</label>
        <select
          id="eventoSelect"
          value={selectedEvento}
          onChange={handleEventoChange}
        >
          <option value="">-- Selecione um evento --</option>
          {eventos.map((evento, index) => (
            <option key={index} value={evento.rangeData}>
              {evento.rangeData}
            </option>
          ))}
        </select>
      </div>
      {selectedEvento && (
        <button className="gerar-log-button" onClick={handleGerarLogClick}>
          Gerar LOG das Refeições
        </button>
      )}
    </div>
  );
}

export default Refeicoes;
