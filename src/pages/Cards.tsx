import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #2b2b2b;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  margin: 20px auto;
`;

const TextInput = styled.input`
  background: transparent;
  border: 2px solid #fff;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  margin: 10px 0;
  border-radius: 4px;
  width: calc(100% - 48px);

  &:focus {
    outline: none;
    background: #333;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  font-size: 16px;
  cursor: pointer;
  background: #4c4c4c;
  color: white;
  border: none;
  border-radius: 4px;

  &:hover {
    background: #666;
  }
`;

const Cards = () => {
  const [inputs, setInputs] = useState<string[]>(['']);

  const handleAddInput = () => {
    setInputs([...inputs, '']);
  };

  const handleRemoveInput = (index: number) => {
    if (inputs.length > 1) {
      const newInputs = inputs.filter((_, idx) => idx !== index);
      setInputs(newInputs);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const newInputs = [...inputs];
    newInputs[index] = e.currentTarget.value;
    setInputs(newInputs);
  };
  const handleSubmit = () => {
    // Lógica para enviar as perguntas
    console.log(inputs);
  };

  return (
    <Container>
      {inputs.map((input, index) => (
        <div key={index}>
          <TextInput
            type="text"
            placeholder={`Descrição do Card ${index + 1}`}
            value={input}
            onChange={(e) => handleChange(e, index)}
          />
          <Button onClick={() => handleRemoveInput(index)}>Remover</Button>
        </div>
      ))}
      <Button onClick={handleAddInput}>Adicionar mais</Button>
      {/* Botão de enviar */}
      <Button onClick={handleSubmit}>Enviar Perguntas</Button>
    </Container>
  );
};

export default Cards;