import React, { useState } from "react";
import AdicionarAluno from '../../components/AdicionarAluno/AdicionarAluno.jsx';
import './Alunos.css';

function Alunos() {
  const [showModal, setShowModal] = useState(false);
  const [formMode, setFormMode] = useState(null);

  const handleAddClick = () => {
    setShowModal(true);
  };

  const handleFormMode = (mode) => {
    setFormMode(mode);
  };

  const closeModal = () => {
    setShowModal(false);
    setFormMode(null);
  };

  return (
    <div className="alunos-container">
      <h1>Gerenciamento de Alunos</h1>
      <button className="add-aluno-button" onClick={handleAddClick}>
        Adicionar Aluno
      </button>

      {showModal && (
        <div className="modal">
          {!formMode ? (
            <div className="modal-content">
              <h2>O que você quer fazer?</h2>
              <button onClick={() => handleFormMode("adicionar")}>Adicionar</button>
              <button onClick={() => handleFormMode("editar")}>Editar</button>
            </div>
          ) : (
            <AdicionarAluno mode={formMode} closeModal={closeModal} />
          )}
        </div>
      )}
    </div>
  );
}

export default Alunos;
