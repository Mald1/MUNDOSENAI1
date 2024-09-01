import React, { useState } from "react";
import './AlunoSelectorModal.css';

const alunosMockData = [
  { id: 1, nome: "João Silva", atribuido: "Evento A" },
  { id: 2, nome: "Maria Oliveira", atribuido: "Evento B" },
  { id: 3, nome: "Carlos Pereira", atribuido: "Nenhum" },
  { id: 3, nome: "Carlos Pereira", atribuido: "Nenhum" },
  { id: 3, nome: "Carlos Pereira", atribuido: "Nenhum" },
  { id: 3, nome: "Carlos Pereira", atribuido: "Nenhum" },
  { id: 3, nome: "Carlos Pereira", atribuido: "Nenhum" },
  { id: 3, nome: "Carlos Pereira", atribuido: "Nenhum" },
  { id: 3, nome: "Carlos Pereira", atribuido: "Nenhum" },
  { id: 3, nome: "Carlos Pereira", atribuido: "Nenhum" },
  { id: 3, nome: "Carlos Pereira", atribuido: "Nenhum" },
  // Adicione mais alunos conforme necessário
];

function AlunoSelectorModal({ alunosIniciais = [], saveAlunos, closeModal }) {
  const [selectedAlunos, setSelectedAlunos] = useState(alunosIniciais);

  const handleAlunoClick = (alunoId) => {
    setSelectedAlunos((prevSelected) =>
      prevSelected.includes(alunoId)
        ? prevSelected.filter((id) => id !== alunoId)
        : [...prevSelected, alunoId]
    );
  };

  const handleSave = () => {
    saveAlunos(selectedAlunos);
    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content aluno-selector-modal">
        <h2>Selecione os Alunos</h2>
        <div className="aluno-list">
          {alunosMockData.map((aluno) => (
            <div
              key={aluno.id}
              className={`aluno-item ${selectedAlunos.includes(aluno.id) ? "selected" : ""}`}
              onClick={() => handleAlunoClick(aluno.id)}
            >
              <p><strong>Nome:</strong> {aluno.nome}</p>
              <p><strong>Atribuído:</strong> {aluno.atribuido}</p>
            </div>
          ))}
        </div>
        <div className="modal-actions">
          <button className="save-button" onClick={handleSave}>Salvar</button>
          <button className="cancel-button" onClick={closeModal}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default AlunoSelectorModal;
