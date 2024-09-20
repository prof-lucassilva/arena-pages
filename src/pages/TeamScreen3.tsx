import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #1a1a1a;
  color: white;
  font-family: 'Arial', sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const TeamInfo = styled.div`
  font-size: 30px;
  line-height: 1.5;
`;

const TeamTitle = styled.div`
  background-color: #8f0f3f;
  padding: 10px 20px;
  font-size: 24px;
  font-weight: bold;
  border-radius: 10px;
`;

const ScoreSection = styled.div`
  margin-top: 20px;
`;

const ScoreItem = styled.p`
  font-size: 20px;
  margin: 5px 0;
`;

const ObjectiveSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;

const Objective = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ObjectiveTitle = styled.div`
  font-size: 18px;
`;

const SendButton = styled.button`
  background-color: #333;
  color: white;
  font-size: 18px;
  padding: 10px 25px;
  border: 2px solid #8f0f3f;
  border-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #444;
    transform: scale(1.05);
  }

  & img {
    margin-left: 10px;
  }
`;

const BackButton = styled.button`
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border: 2px solid #888;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  width: fit-content;
  max-width: 250px;

  &:hover {
    background-color: #444;
    transform: scale(1.05);
  }
`;

const BackButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const TeamScreen: React.FC = () => {
  return (
    <Container>
      <Header>
        <TeamInfo>
          <div>NOME e RM</div>
          <ScoreSection>
            <ScoreItem>Pontos: 100</ScoreItem>
            <ScoreItem>Cards: 02</ScoreItem>
          </ScoreSection>
        </TeamInfo>
        <TeamTitle>EQUIPE - 03</TeamTitle>
      </Header>

      <ObjectiveSection>
        <Objective>
          <ObjectiveTitle>OBJETIVO - 01</ObjectiveTitle>
          <SendButton>
            ENVIAR <img src="./imagens/send.png" alt="enviar" />
          </SendButton>
        </Objective>
        <Objective>
          <ObjectiveTitle>OBJETIVO - 02</ObjectiveTitle>
          <SendButton>
            ENVIAR <img src="./imagens/send.png" alt="enviar" />
          </SendButton>
        </Objective>
        <Objective>
          <ObjectiveTitle>OBJETIVO - 03</ObjectiveTitle>
          <SendButton>
            ENVIAR <img src="./imagens/send.png" alt="enviar" />
          </SendButton>
        </Objective>
      </ObjectiveSection>

      <BackButtonContainer>
        <BackButton>Voltar</BackButton>
      </BackButtonContainer>
    </Container>
  );
};

export default TeamScreen;