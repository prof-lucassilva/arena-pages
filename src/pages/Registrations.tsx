import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2b2b2b;
  font-family: 'Arial', sans-serif;
`;

const Button = styled.button<{ borderColor: string }>`
  background-color: #333;
  color: white;
  font-size: 20px;
  padding: 15px 40px;
  margin: 15px;
  border: 2px solid ${(props) => props.borderColor};
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #444;
    transform: scale(1.05);
  }
`;

const Registrations: React.FC = () => { 
  return (
    <Container>
      <Button borderColor="#ff4c4c">Objetivos</Button>
      <Button borderColor="#ff4c4c">Cards</Button>
      <Button borderColor="#4c9fff">Boosts</Button>
      <Button borderColor="#4c9fff">Lançar Sessão</Button>
      <Button borderColor="#333">Voltar</Button>
    </Container>
  );
};

export default Registrations;