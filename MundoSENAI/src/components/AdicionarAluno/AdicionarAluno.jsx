import React, { useState } from "react";
import './AdicionarAluno.css';

function AdicionarAluno({ mode, closeModal }) {
  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("");
  const [curso, setCurso] = useState("");

  const cursosDisponiveis = ["Engenharia", "Informática", "Mecânica", "Administração"];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para adicionar ou editar o aluno
    console.log("Aluno Adicionado:", { nome, matricula, curso });
    closeModal();
  };

  return (
    <div className="adicionar-aluno-container">
      <h2>{mode === "adicionar" ? "Adicionar Aluno" : "Editar Aluno"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome do Aluno:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Matrícula:</label>
          <input
            type="text"
            value={matricula}
            onChange={(e) => setMatricula(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Curso:</label>
          <select value={curso} onChange={(e) => setCurso(e.target.value)} required>
            <option value="" disabled>Selecione um curso</option>
            {cursosDisponiveis.map((curso, index) => (
              <option key={index} value={curso}>
                {curso}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Salvar</button>
        <button type="button" onClick={closeModal}>Cancelar</button>
      </form>
    </div>
  );
}

export default AdicionarAluno;
