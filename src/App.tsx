import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TeacherSession from './pages/TeacherSession';
import LoginScreen from './pages/LoginScreen'; 
import Scoreboard from './pages/Scoreboard';
import styled from 'styled-components';
import logo from './imagens/logo.svg';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2b2b2b;
  font-family: 'Arial', sans-serif;
`;

const Logo = styled.img`
  width: 150px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button<{ borderColor: string }>`
  background-color: #333;
  color: white;
  font-size: 20px;
  padding: 15px 40px;
  border: 2px solid ${(props) => props.borderColor};
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #444;
    transform: scale(1.05);
  }
`;

const SelectionScreen: React.FC = () => {
  return (
    <Container>
      <Logo src={logo} alt="Logo" />
      <ButtonContainer>
        <Link to="/professor"><Button borderColor="#ff4c4c">Professor</Button></Link> 
        <Link to="/aluno"><Button borderColor="#ff4c4c">Aluno</Button></Link> 
        <Link to="/painel"><Button borderColor="#4c9fff">Painel</Button></Link> 
      </ButtonContainer>
    </Container>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={SelectionScreen}/>
        <Route path="/professor" Component={TeacherSession} /> 
        <Route path="/aluno" Component={LoginScreen} /> 
        <Route path="/painel" Component={Scoreboard} /> 
      </Routes>
    </Router>
  );
};

export default App;