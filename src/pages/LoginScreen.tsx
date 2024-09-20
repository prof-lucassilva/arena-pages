import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a;
  color: white;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 40px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Input = styled.input`
  width: 300px;
  padding: 10px;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  background-color: #333;
  color: white;
  outline: none;
  text-align: center;
  &::placeholder {
    color: #888;
  }
`;

const Button = styled.button<{ primary?: boolean }>`
  width: ${(props) => (props.primary ? '200px' : '120px')};
  padding: 12px;
  font-size: 18px;
  background-color: ${(props) => (props.primary ? '#8f0f3f' : '#444')};
  border: 2px solid ${(props) => (props.primary ? '#8f0f3f' : '#888')};
  color: white;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  
  &:hover {
    background-color: ${(props) => (props.primary ? '#a8184d' : '#555')};
    transform: scale(1.05);
  }
`;

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [rm, setRM] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Nome:", name, "RM:", rm);
    // Adicione aqui a lógica de navegação ou verificação
  };

  return (
    <Container>
      {/* Título */}
      <Title>DIGITAR NOME e RM</Title>

      {/* Formulário */}
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Seu Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="0000000"
          value={rm}
          onChange={(e) => setRM(e.target.value)}
        />
        <Button primary type="submit">Start</Button>
      </Form>

      {/* Botão de Voltar */}
      <Button style={{ marginTop: '20px' }} onClick={() => navigate(-1)}>Voltar</Button>
    </Container>
  );
};

export default LoginScreen;