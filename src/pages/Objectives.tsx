import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #2b2b2b;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  margin: 20px auto;
`;

const Title = styled.h1`
  color: #fff;
  text-align: center;
`;

const ObjectiveContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 45%;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
`;

const InputTime = styled(Input)`
  width: 30%; // Ajuste para um tamanho menor
`;

interface Objective {
  description: string;
  time: string;
}

const Objectives = () => {
  const [objectives, setObjectives] = useState<Objective[]>([
    { description: '', time: '' },
    { description: '', time: '' },
    { description: '', time: '' }
  ]);

  const handleInputChange = (index: number, field: keyof Objective, value: string) => {
    const updatedObjectives = objectives.map((objective, idx) => {
      if (idx === index) {
        return { ...objective, [field]: value };
      }
      return objective;
    });
    setObjectives(updatedObjectives);
  };
  const handleSubmitObjectives = () => {
    // Lógica para enviar os objetivos
    console.log(objectives);
  };

  return (
    <Container>
      <Title>Objetivos</Title>
      {objectives.map((objective, index) => (
        <ObjectiveContainer key={index}>
          <Input
            type="text"
            placeholder="Descrição do Objetivo"
            value={objective.description}
            onChange={(e) => handleInputChange(index, 'description', e.target.value)}
          />
          <InputTime
            type="number"
            placeholder="Minutos"
            value={objective.time}
            onChange={(e) => handleInputChange(index, 'time', e.target.value)}
            min="0"
          />
        </ObjectiveContainer>
      ))}
      <div style={{ display: 'flex', justifyContent: 'space-evenly', margin: '10px 0' }}>
      <Button onClick={() => setObjectives([...objectives, { description: '', time: '' }])}>Adicionar Objetivo</Button>
      <Button onClick={() => setObjectives(objectives.slice(0, -1))}>Remover Objetivo</Button>
      <Button onClick={handleSubmitObjectives}>Enviar Objetivos</Button>
      <Button>Voltar</Button>
      </div>
    </Container>
  );
};

export default Objectives;