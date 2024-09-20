import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* importar no index.html <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;700&display=swap" rel="stylesheet">*/

  body {
    font-family: 'Chakra Petch', sans-serif;
    background-color: #000;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

const Container = styled.div`
  background-color: #000;
  color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  background: rgb(5,11,45);
  background: radial-gradient(circle, rgba(5,11,45,1) 0%, rgba(124,99,129,1) 20%, rgba(144,76,53,1) 42%, rgba(68,37,59,1) 72%, rgba(0,32,70,1) 100%);
`;

const Time = styled.div`
  font-size: 36px;
  color: #02f2f2;
  text-shadow: 0 0 10px #02f2f2;
`;

const TimeValue = styled.div`
  font-size: 74px;
  font-weight: bold;
  color: white;
  text-shadow: 0 0 15px #ff4b5c, 0 0 25px #ff4b5c;
  margin-bottom: 10px;
`;

const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 30px;
`;

const TeamCard = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  border: 2px solid #02f2f2;
  border-radius: 10px;
  padding: 10px;
  width: 30%;
  text-align: center;
  box-shadow: 0 0 15px #02f2f2;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 25px #02f2f2, 0 0 35px #02f2f2;
  }

  & h2 {
    font-size: 36px;
    margin-bottom: 10px;
    color: #fff;
    text-shadow: 0 0 8px #fff;
  }

  & p {
    font-size: 60px;
    margin: 0;
    color: #ffde59;
    text-shadow: 0 0 10px #ffde59, 0 0 20px #ffde59;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
`;

const DetailCard = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  border: 2px solid #ff4b5c;
  border-radius: 10px;
  padding: 15px;
  width: 30%;
  text-align: center;
  box-shadow: 0 0 15px #ff4b5c;

  & p {
    font-size: 24px;
    margin: 0;
    color: #fff;
    text-shadow: 0 0 10px #fff;
  }

  & span {
    display: block;
    font-size: 20px;
    margin-top: 10px;
    color: #ffde59;
    text-shadow: 0 0 8px #ffde59;
  }
`;

const BackButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: transparent;
  color: #fff;
  padding: 10px 20px;
  border: 2px solid #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

const QuestionContainer = styled.div`
  width: 80%; 
  padding: 10px;
  border: 2px solid #ff4b5c;
  border-radius: 10px;
  margin-top: 10px;
  opacity: 0; 
  transform: translateY(-20px);
  animation: fadeInUp 0.5s forwards;
  color: #ffde59;
  text-align: center;

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  & p {
    font-size: 28px;
    text-shadow: 0 0 10px #ffde59;
  }
`;

const ScoreBoard: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <GlobalStyle />
      <Container>
        <Time>TEMPO</Time>
        <TimeValue>20:00</TimeValue>

        <ScoreContainer>
          <TeamCard>
            <h2>EQUIPE 01</h2>
            <p>150</p>
          </TeamCard>
          <TeamCard>
            <h2>EQUIPE 02</h2>
            <p>300</p>
          </TeamCard>
          <TeamCard>
            <h2>EQUIPE 03</h2>
            <p>260</p>
          </TeamCard>
        </ScoreContainer>

        <DetailsContainer>
          <DetailCard>
            <p>OBJETIVO: 01</p>
            <span>CARDS: 01</span>
          </DetailCard>
          <DetailCard>
            <p>OBJETIVO: 01</p>
            <span>CARDS: 01</span>
          </DetailCard>
          <DetailCard>
            <p>OBJETIVO: 02</p>
            <span>CARDS: 01</span>
          </DetailCard>
        </DetailsContainer>

        <QuestionContainer>
          {/* Implementar lógica para exibir a pergunta */}
          <p>Pergunta Boost: Qual é o próximo passo?</p>
        </QuestionContainer>

        <BackButton onClick={() => navigate(-1)}>Voltar</BackButton>
      </Container>
    </>
  );
};

export default ScoreBoard;