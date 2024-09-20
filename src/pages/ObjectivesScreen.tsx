import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px;
  background-color: #1a1a1a;
  color: white;
  font-family: 'Arial', sans-serif;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  background-color: #8f0f3f;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 26px;
`;

const ObjectiveList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ObjectiveItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ObjectiveTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const TeamButton = styled.button`
  background-color: #333;
  color: white;
  font-size: 18px;
  padding: 10px 25px;
  border: 2px solid #2177c0;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #444;
    transform: scale(1.05);
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 200px;
  margin-bottom: 100px;
`;

const ActionButton = styled.button`
  background-color: #333;
  color: white;
  font-size: 18px;
  padding: 10px 25px;
  border: 2px solid #888;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #444;
    transform: scale(1.05);
  }
`;

const ObjectivesScreen: React.FC = () => {
  return (
    <Container>
      {/* Título dos Objetivos */}
      <Header>
        <Title>OBJETIVOS</Title>
      </Header>

      {/* Lista de Objetivos */}
      <ObjectiveList>
        <ObjectiveItem>
          <ObjectiveTitle>OBJETIVO - 01</ObjectiveTitle>
          <TeamButton>EQUIPE - 01</TeamButton>
        </ObjectiveItem>
        <ObjectiveItem>
          <ObjectiveTitle>OBJETIVO - 02</ObjectiveTitle>
          <TeamButton>EQUIPE - 02</TeamButton>
        </ObjectiveItem>
        <ObjectiveItem>
          <ObjectiveTitle>OBJETIVO - 03</ObjectiveTitle>
          <TeamButton>EQUIPE - 03</TeamButton>
        </ObjectiveItem>
      </ObjectiveList>

      {/* Botões de Ações no Footer */}
      <Footer>
        <ActionButton>Editar Cadastro</ActionButton>
        <ActionButton>Voltar</ActionButton>
      </Footer>
    </Container>
  );
};

export default ObjectivesScreen;