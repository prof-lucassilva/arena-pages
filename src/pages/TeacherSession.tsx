import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

const BackButton = styled.button`
  background-color: #ff4c4c;
  color: white;
  font-size: 20px;
  padding: 10px 20px;
  margin: 15px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff6666;
  }
`;

const Session: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Button borderColor="#ff4c4c">
        <Link to="/create-session" style={{ color: 'white', textDecoration: 'none' }}>Criar Sessão</Link> {/* Link para criar sessão */}
      </Button>
      <Button borderColor="#ff4c4c">
        <Link to="/join-session" style={{ color: 'white', textDecoration: 'none' }}>Entrar em Sessão</Link> {/* Link para entrar em sessão */}
      </Button>
      <BackButton onClick={() => navigate(-1)}>Voltar</BackButton>
    </Container>
  );
};

export default Session;
